<script setup lang="ts">
import { useFormatDate } from "@eqian/utils-vue";
import { useAsyncRequest } from "~~/api/server";
import { computed } from "vue";
import MarkdownRender from "@/components/MarkdownRender.vue";
import { useWebSize } from "@/composables/useWebSize";
import { countWords } from "~/utils/wordCount";
import type { IArticleItem } from "~~/api/article/type";
import type { IWebsite } from "~~/api/system/type";
const { id } = useRoute().params;
const { data: articleDetail = {} as IArticleItem } =
  await useAsyncRequest<IWebsite.Data>(
    `article/detail/${id}`,
    `article/detail`,
    {
      params: {
        article_id: id,
      },
    },
  );
/**
 * 文章详情页面组件
 * 显示文章的详细内容，包括元数据和标签
 */

// 设备类型检测
const { isMobile } = useWebSize();
// 响应式样式
const styles = computed(() => {
  if (isMobile.value) {
    return {};
  }
  return { padding: "20px" };
});
const readTime = computed(() => {
  return countWords(articleDetail.content || "").readingTime;
});
</script>

<template>
  <div :style="styles">
    <div class="article-header">
      <div class="article-meta">
        <span class="author">{{ articleDetail.user_info?.username }}</span>
        <span class="date">{{ useFormatDate(articleDetail.create_date) }}</span>
        <div class="stats">
          <span class="view-count"
            ><svg class="icon" viewBox="0 0 24 24" width="16" height="16">
              <path
                fill="currentColor"
                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
              /></svg
            >{{ articleDetail.view_number }}</span
          >
          <span class="read-time"
            ><svg class="icon" viewBox="0 0 24 24" width="16" height="16">
              <path
                fill="currentColor"
                d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"
              />
            </svg>
            {{ readTime }}
          </span>
        </div>
      </div>
    </div>
    <MarkdownRender :content="articleDetail.content" />
    <div class="article-tags">
      <span class="tags-label">标签:</span>
      <div class="tags-container">
        <span v-for="tag in articleDetail.tags" :key="tag" class="tag">{{
          tag
        }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article-header {
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--border-color);
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-family);
  font-size: 14px;
  line-height: 1.5;
}

.author {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 14px;
}
.date {
  color: var(--text-muted);
  font-size: 14px;
}

.stats {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
}

.view-count,
.read-time {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--text-muted);
  font-size: 14px;
}

.icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .article-meta {
    flex-wrap: wrap;
    gap: 8px;
  }
  .stats {
    margin-left: 0;
    width: 100%;
    justify-content: flex-start;
  }
  .author,
  .date,
  .view-count,
  .read-time {
    font-size: 13px;
  }
}

.article-tags {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-family);
}

.tags-label {
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 500;
  flex-shrink: 0;
}
.tags-container {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  padding: 4px 12px;
  background-color: var(--bg-card);
  color: var(--text-primary);
  font-size: 13px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  transition: var(--transition-fast);
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: var(--bg-card-hover);
    border-color: var(--border-color-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-light);
  }
}

@media (max-width: 768px) {
  .article-tags {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .tags-container {
    width: 100%;
  }
  .tag {
    font-size: 12px;
    padding: 3px 10px;
  }
}
</style>
