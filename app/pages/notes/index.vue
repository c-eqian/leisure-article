<script setup lang="ts">
import { computed, ref } from "vue";
import { useTheme } from "@/composables/useTheme";

/**
 * 笔记页面组件
 * 显示技术笔记文章列表，支持按标签筛选
 */

// 主题状态
const { isDark } = useTheme();

/**
 * 标签接口
 */
interface Tag {
  id: string;
  name: string;
  active: boolean;
}

/**
 * 文章接口
 */
interface Article {
  id: number;
  date: string;
  month: string;
  title: string;
  description: string;
  readCount: number;
  category: string;
  location: string;
  tags: string[];
}

// 标签数据
const tags = ref<Tag[]>([
  { id: "all", name: "全部", active: true },
  { id: "interview", name: "面经", active: false },
  { id: "eslint", name: "ESLint", active: false },
  { id: "bubble-sort", name: "冒泡排序", active: false },
  { id: "element-plus", name: "element-plus", active: false },
  { id: "nuxt", name: "nuxt", active: false },
  { id: "css", name: "CSS", active: false },
  { id: "http", name: "HTTP", active: false },
  { id: "eslint-plugin", name: "ESLint插件", active: false },
  { id: "leetcode", name: "leecode", active: false },
  { id: "django", name: "Django", active: false },
  { id: "eight-legged", name: "八股文", active: false },
  { id: "insertion-sort", name: "插入排序", active: false },
  { id: "quick-sort", name: "快速排序", active: false },
  { id: "python", name: "Python", active: false },
  { id: "java", name: "Java", active: false },
  { id: "javascript", name: "JavaScript", active: false },
  { id: "axios", name: "axios", active: false },
  { id: "websocket", name: "websocket", active: false },
  { id: "webpack", name: "Webpack", active: false },
  { id: "html", name: "HTML", active: false },
  { id: "mysql", name: "MySQL", active: false },
  { id: "git", name: "git命令", active: false },
  { id: "typescript", name: "Typescript", active: false },
  { id: "react", name: "React", active: false },
  { id: "data-structure", name: "数据结构", active: false },
  { id: "vite", name: "Vite", active: false },
  { id: "component-lib", name: "组件库", active: false },
  { id: "selection-sort", name: "选择排序", active: false },
  { id: "vue", name: "Vue", active: false },
]);

// 文章数据
const articles = ref<Article[]>([
  {
    id: 1,
    date: "10",
    month: "2025/01",
    title: "类型体操-升级版",
    description: "类型体操",
    readCount: 16,
    category: "Typescript",
    location: "深圳市",
    tags: ["typescript"],
  },
  {
    id: 2,
    date: "08",
    month: "2025/01",
    title: "typescript类型体操-基础版",
    description:
      "本上下文专注于TypeScript类型体操，探索使用高级类型技术如条件类型、映射类型和递归类型来实现复杂的类型构造和转换。通过具体案例研究，分析类型推断过程，提升开发者对TypeScript类型系统的深度理解和实践能力。",
    readCount: 15,
    category: "Typescript",
    location: "深圳市",
    tags: ["typescript"],
  },
  {
    id: 3,
    date: "05",
    month: "2025/01",
    title: "Vue 3 Composition API 深度解析",
    description:
      "深入探讨Vue 3的Composition API，包括setup函数、响应式API、生命周期钩子等核心概念。通过实际案例展示如何更好地组织组件逻辑，提高代码的可维护性和复用性。",
    readCount: 23,
    category: "Vue",
    location: "深圳市",
    tags: ["vue", "javascript"],
  },
  {
    id: 4,
    date: "03",
    month: "2025/01",
    title: "React Hooks 最佳实践指南",
    description:
      "全面介绍React Hooks的使用方法和最佳实践，包括useState、useEffect、useContext等常用Hooks，以及如何自定义Hooks来解决复杂的状态管理问题。",
    readCount: 18,
    category: "React",
    location: "深圳市",
    tags: ["react", "javascript"],
  },
  {
    id: 5,
    date: "01",
    month: "2025/01",
    title: "CSS Grid 布局完全指南",
    description:
      "详细介绍CSS Grid布局系统的各种属性和用法，包括网格容器、网格项、网格线等概念。通过实例演示如何创建复杂的响应式布局。",
    readCount: 21,
    category: "CSS",
    location: "深圳市",
    tags: ["css", "html"],
  },
  {
    id: 6,
    date: "28",
    month: "2024/12",
    title: "JavaScript 异步编程进阶",
    description:
      "深入理解JavaScript异步编程模型，包括Promise、async/await、Generator等概念。通过实际案例展示如何处理复杂的异步操作和错误处理。",
    readCount: 19,
    category: "JavaScript",
    location: "深圳市",
    tags: ["javascript", "es6"],
  },
  {
    id: 7,
    date: "25",
    month: "2024/12",
    title: "Webpack 5 配置优化实战",
    description:
      "全面介绍Webpack 5的新特性和配置优化技巧，包括模块联邦、持久化缓存、Tree Shaking等。通过实际项目案例展示如何提升构建性能。",
    readCount: 14,
    category: "Webpack",
    location: "深圳市",
    tags: ["webpack", "javascript"],
  },
  {
    id: 8,
    date: "22",
    month: "2024/12",
    title: "HTTP/2 协议详解",
    description:
      "深入解析HTTP/2协议的核心特性和优势，包括多路复用、服务器推送、头部压缩等。通过对比HTTP/1.1展示性能提升效果。",
    readCount: 12,
    category: "HTTP",
    location: "深圳市",
    tags: ["http", "network"],
  },
]);

// 当前选中的标签
const activeTag = ref("all");

// 筛选后的文章
const filteredArticles = computed(() => {
  if (activeTag.value === "all") {
    return articles.value;
  }
  return articles.value.filter((article) =>
    article.tags.includes(activeTag.value),
  );
});

/**
 * 切换标签
 * @param tagId - 标签ID
 */
const selectTag = (tagId: string) => {
  activeTag.value = tagId;
  tags.value.forEach((tag) => {
    tag.active = tag.id === tagId;
  });
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
          v-for="tag in tags"
          :key="tag.id"
          :class="['tag-item', { active: tag.active }]"
          @click="selectTag(tag.id)"
        >
          {{ tag.name }}
        </button>
      </div>
    </div>

    <!-- 文章列表区域 -->
    <div class="articles-section">
      <div class="articles-list">
        <article
          v-for="article in filteredArticles"
          :key="article.id"
          class="article-card"
          @click="readArticle(article.id)"
        >
          <!-- 日期区域 -->
          <div class="article-date">
            <div class="date-number">{{ article.date }}</div>
            <div class="date-month">{{ article.month }}</div>
          </div>

          <!-- 文章内容区域 -->
          <div class="article-content">
            <h2 class="article-title">{{ article.title }}</h2>

            <!-- 文章元数据 -->
            <div class="article-meta">
              <span class="read-count">阅读次数: {{ article.readCount }}</span>
              <span class="category">{{ article.category }}</span>
              <span class="location">{{ article.location }}</span>
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
