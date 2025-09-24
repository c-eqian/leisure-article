<script setup lang="ts">
import MarkdownRender from '@/components/MarkdownRender.vue'
import { computed } from 'vue'
import { useWebSize } from '@/composables/useWebSize'
import { text } from './test'

/**
 * 文章详情页面组件
 * 显示文章的详细内容，包括元数据和标签
 */

// 设备类型检测
const { isMobile } = useWebSize()

/**
 * 文章元数据接口
 */
interface ArticleMeta {
  author: string
  publishDate: string
  viewCount: string
  readTime: string
}

// 文章元数据
const articleMeta: ArticleMeta = {
  author: '程序员凌览',
  publishDate: '2025-06-12',
  viewCount: '12,376',
  readTime: '阅读3分钟'
}

// 文章标签
const articleTags = ['前端', '后端', 'JavaScript']

// 响应式样式
const styles = computed(() => {
  if (isMobile.value) {
    return {}
  }
  return { padding: '20px' }
})
</script>

<template>
  <div :style="styles">
    <div class="article-header">
      <div class="article-meta">
        <span class="author">{{ articleMeta.author }}</span>
        <span class="date">{{ articleMeta.publishDate }}</span>
        <div class="stats">
          <span class="view-count"><svg class="icon" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>{{ articleMeta.viewCount }}</span>
          <span class="read-time"><svg class="icon" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/></svg>{{ articleMeta.readTime }}</span>
        </div>
      </div>
    </div>
    <MarkdownRender :content="text" />
    <div class="article-tags">
      <span class="tags-label">标签:</span>
      <div class="tags-container">
        <span v-for="tag in articleTags" :key="tag" class="tag">{{ tag }}</span>
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

.author { font-weight: 600; color: var(--text-primary); font-size: 14px; }
.date { color: var(--text-muted); font-size: 14px; }

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

.icon { width: 16px; height: 16px; fill: currentColor; opacity: 0.7; }

@media (max-width: 768px) {
  .article-meta { flex-wrap: wrap; gap: 8px; }
  .stats { margin-left: 0; width: 100%; justify-content: flex-start; }
  .author, .date, .view-count, .read-time { font-size: 13px; }
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

.tags-label { color: var(--text-primary); font-size: 14px; font-weight: 500; flex-shrink: 0; }
.tags-container { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }

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
  .article-tags { flex-direction: column; align-items: flex-start; gap: 8px; }
  .tags-container { width: 100%; }
  .tag { font-size: 12px; padding: 3px 10px; }
}
</style>


