<script setup lang="ts">
import { isEmpty, useFormatDate } from "@eqian/utils-vue";
import { getNotesList } from "~~/api/notes";
import { ref } from "vue";
import { useTheme } from "@/composables/useTheme";
import { useCategoryTags } from "~/composables/useCategoryTags";
import { usePagination } from "~/composables/usePaganition";
import type { INoteItem, INoteRes } from "~~/api/notes/type";

/**
 * 笔记页面组件
 * 显示技术笔记文章列表，支持按标签筛选
 */

// 主题状态
const { isDark } = useTheme();
const params = ref({
  page_size: 20,
  page_num: 1,
});

// 标签数据
const { tagList } = useCategoryTags();
// 文章数据
const {
  data: articles,
  isLoading,
  isFirstLoaded,
  isHasMore,
  request,
} = usePagination<typeof getNotesList, INoteRes>(getNotesList);
request(params.value);
// 当前选中的标签
const activeTag = ref(0);
const useTags = (data: INoteItem) => {
  if (isEmpty(data.category_tags)) {
    return "-";
  }
  return data.category_tags?.map((item) => item.tag_name)?.join("、");
};
/**
 * 切换标签
 * @param tagId - 标签ID
 */
const selectTag = (tagId: number) => {
  activeTag.value = tagId;
};

/**
 * 阅读文章
 * @param articleId - 文章ID
 */
const readArticle = (articleId: number) => {
  // TODO: 这里可以添加路由跳转或其他逻辑
  console.info("阅读文章:", articleId);
};
</script>

<template>
  <div class="notes-container" :class="{ dark: isDark }">
    <!-- 标签云区域 -->
    <div class="tags-section">
      <div class="tags-cloud">
        <button
          v-for="tag in tagList"
          :key="tag.id"
          :class="['tag-item', { active: tag.id === activeTag }]"
          @click="selectTag(tag.id)"
        >
          {{ tag.tag_name }}
        </button>
      </div>
    </div>

    <!-- 文章列表区域 -->
    <div class="articles-section">
      <div class="articles-list">
        <article
          v-for="article in articles.list"
          :key="article.uid"
          class="article-card"
          @click="readArticle(article.uid)"
        >
          <!-- 日期区域 -->
          <div class="article-date">
            <div class="date-number">
              {{ useFormatDate(article.create_date || "", "dd") }}
            </div>
            <div class="date-month">
              {{ useFormatDate(article.create_date || "", "yyyy/MM") }}
            </div>
          </div>

          <!-- 文章内容区域 -->
          <div class="article-content">
            <h2 class="article-title">{{ article.title }}</h2>

            <!-- 文章元数据 -->
            <div class="article-meta">
              <span class="read-count"
                >阅读次数: {{ article.view_number }}</span
              >
              <span class="category">{{ useTags(article) }}</span>
              <span class="location">{{ article.province }}</span>
            </div>

            <!-- 文章描述 -->
            <p class="article-description">{{ article.description }}</p>

            <!-- 阅读链接 -->
            <div class="read-more">
              <span>阅读全文</span>
              <span class="arrow">→</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.notes-container {
  padding: 20px;
  background: var(--bg-content);
  min-height: 100vh;
  transition: all var(--transition-normal);

  &.dark {
    background: var(--bg-primary);
  }

  // 标签云区域
  .tags-section {
    margin-bottom: 30px;

    .tags-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: flex-start;
      padding: 20px 0;
      border-bottom: 1px solid var(--border-color);
      margin-bottom: 20px;

      .tag-item {
        padding: 8px 16px;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 20px;
        color: var(--text-secondary);
        font-size: 14px;
        cursor: pointer;
        transition: all var(--transition-fast);
        white-space: nowrap;

        &:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-2px);
          box-shadow: var(--shadow-light);
        }

        &.active {
          background: var(--primary-color);
          color: white;
          box-shadow: var(--shadow-light);
        }
      }
    }
  }

  // 文章列表区域
  .articles-section {
    .articles-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 800px;
      margin: 0 auto;
      padding-left: 40px; // 为突出的日期区域留出空间

      .article-card {
        display: flex;
        background: var(--bg-card);
        border-radius: var(--border-radius-large);
        padding: 20px;
        padding-left: 100px; // 为突出的日期区域留出空间
        box-shadow: var(--shadow-light);
        cursor: pointer;
        transition: all var(--transition-normal);
        border: 1px solid var(--border-color);
        position: relative;

        &:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-medium);
          border-color: var(--primary-color);
        }

        // 日期区域 - 突出到卡片外部
        .article-date {
          position: absolute;
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 80px;
          height: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ff6b6b, #ffa500);
          color: white;
          border-radius: var(--border-radius);
          padding: 12px 8px;
          box-shadow: var(--shadow-medium);
          z-index: 2;
          transition: all var(--transition-normal);

          .date-number {
            font-size: 24px;
            font-weight: bold;
            line-height: 1;
            transition: all var(--transition-fast);
          }

          .date-month {
            font-size: 12px;
            opacity: 0.9;
            margin-top: 4px;
            transition: all var(--transition-fast);
          }
        }

        &:hover .article-date {
          transform: translateY(-50%) scale(1.05);
          box-shadow: var(--shadow-heavy);

          .date-number {
            transform: scale(1.1);
          }
        }

        // 文章内容区域
        .article-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;

          .article-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--text-primary);
            margin: 0;
            line-height: 1.4;
          }

          .article-meta {
            display: flex;
            gap: 16px;
            font-size: 14px;
            color: var(--text-muted);

            .read-count {
              color: var(--text-secondary);
            }

            .category {
              color: var(--primary-color);
              font-weight: 500;
            }

            .location {
              color: var(--text-muted);
            }
          }

          .article-description {
            color: var(--text-secondary);
            line-height: 1.6;
            margin: 8px 0;
            font-size: 14px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .read-more {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--primary-color);
            font-size: 14px;
            font-weight: 500;
            margin-top: auto;
            transition: all var(--transition-fast);

            .arrow {
              transition: transform var(--transition-fast);
            }

            &:hover .arrow {
              transform: translateX(4px);
            }
          }
        }
      }
    }
  }
}

// 暗黑模式适配
.dark {
  .notes-container {
    .tags-section {
      .tags-cloud {
        border-bottom-color: var(--border-color-dark);

        .tag-item {
          background: var(--bg-card);
          border-color: var(--border-color-dark);
          color: var(--text-secondary);

          &:hover {
            background: var(--primary-color);
            color: white;
          }

          &.active {
            background: var(--primary-color);
            color: white;
          }
        }
      }
    }

    .articles-section {
      .articles-list {
        .article-card {
          background: var(--bg-card);
          border-color: var(--border-color-dark);

          &:hover {
            border-color: var(--primary-color);
          }

          .article-content {
            .article-title {
              color: var(--text-primary);
            }

            .article-meta {
              .read-count {
                color: var(--text-secondary);
              }

              .category {
                color: var(--primary-color);
              }

              .location {
                color: var(--text-muted);
              }
            }

            .article-description {
              color: var(--text-secondary);
            }

            .read-more {
              color: var(--primary-color);
            }
          }
        }
      }
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .notes-container {
    padding: 15px;

    .tags-section {
      .tags-cloud {
        gap: 8px;
        padding: 15px 0;

        .tag-item {
          padding: 6px 12px;
          font-size: 13px;
        }
      }
    }

    .articles-section {
      .articles-list {
        padding-left: 0; // 移动端不需要额外的左边距

        .article-card {
          flex-direction: column;
          padding: 15px;

          .article-date {
            position: static;
            transform: none;
            flex-direction: row;
            justify-content: center;
            margin-right: 0;
            margin-bottom: 15px;
            min-height: 60px;
            width: 120px;
            align-self: center;
            left: auto;
            top: auto;

            .date-number {
              font-size: 20px;
              margin-right: 8px;
            }

            .date-month {
              font-size: 11px;
              margin-top: 0;
            }
          }

          .article-content {
            .article-title {
              font-size: 18px;
            }

            .article-meta {
              flex-wrap: wrap;
              gap: 12px;
              font-size: 13px;
            }

            .article-description {
              font-size: 13px;
              -webkit-line-clamp: 2;
              line-clamp: 2;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .notes-container {
    padding: 10px;

    .tags-section {
      .tags-cloud {
        .tag-item {
          padding: 5px 10px;
          font-size: 12px;
        }
      }
    }

    .articles-section {
      .articles-list {
        .article-card {
          padding: 12px;

          .article-date {
            width: 100px;
            min-height: 50px;

            .date-number {
              font-size: 18px;
            }

            .date-month {
              font-size: 10px;
            }
          }

          .article-content {
            .article-title {
              font-size: 16px;
            }

            .article-meta {
              font-size: 12px;
            }

            .article-description {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
