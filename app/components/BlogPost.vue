<!--
 * @Author: eqian 2429120006@qq.com
 * @Date: 2025-09-23 14:24:33
 * @LastEditors: eqian 2429120006@qq.com
 * @LastEditTime: 2025-09-23 14:56:50
 * @FilePath: \websiteg:\self\eqian-article\components\BlogPost.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
type BlogPostProps = { title: string; author: string; publishTime: string; location: string; views: number; description: string; previewUrl: string }
const props = defineProps<BlogPostProps>()
const handleTitleClick = () => {
  const mainContent = document.querySelector('.main-content') as HTMLElement | null
  if (mainContent) mainContent.scrollTop = 0
  router.push({ path: `/post/11111` })
}
</script>

<template>
  <article class="blog-post">
    <div class="post-header">
      <div class="author-info">
        <div class="author-avatar">片</div>
        <div class="author-details"><span class="author-name">{{ props.author }}</span><span class="publish-time">{{ props.publishTime }}</span></div>
      </div>
    </div>
    <h1 class="post-title" @click="handleTitleClick"><span class="title-text">{{ props.title }}</span></h1>
    <p class="post-description">{{ props.description }}</p>
    <div class="website-preview">
      <div class="preview-header"><div class="preview-controls"><div class="control-dot red" /><div class="control-dot yellow" /><div class="control-dot green" /></div><div class="preview-url">{{ props.previewUrl }}</div></div>
      <div class="preview-content"><div class="preview-placeholder"><div class="preview-item" /><div class="preview-item" /><div class="preview-item" /><div class="preview-item" /></div></div>
    </div>
    <div class="post-footer"><div class="post-meta"><span class="location">◎ {{ props.location }}</span><span class="views">◎主题 {{ props.views }}浏览评论</span></div><button class="read-button">Read</button></div>
  </article>
</template>

<style scoped lang="scss">
.blog-post {
  padding: 30px;
  background: var(--bg-content);
  transition: background-color var(--transition-normal);
}

.post-header {
  margin-bottom: 20px;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
}

.author-details {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.author-name {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 14px;
}

.publish-time {
  color: var(--text-muted);
  font-size: 12px;
}

.post-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 20px 0;
  line-height: 1.3;
  transition: all var(--transition-normal);
  cursor: pointer;
  position: relative;
  display: inline-block;

  .title-text {
    position: relative;
    z-index: 2;
    transition: all var(--transition-normal);
  }

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -12px;
    right: -12px;
    bottom: -8px;
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c);
    border-radius: 12px;
    opacity: 0;
    z-index: 1;
    transition: opacity var(--transition-normal);
  }

  &::after {
    content: '';
    position: absolute;
    top: -6px;
    left: -10px;
    right: -10px;
    bottom: -6px;
    background: var(--bg-content);
    border-radius: 10px;
    z-index: 1;
    transition: all var(--transition-normal);
  }

  &:hover {
    transform: translateY(-2px);

    &::before {
      opacity: 1;
    }

    .title-text {
      color: var(--primary-color);
    }
  }
}

.post-description {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 30px;
  transition: color var(--transition-normal);
}

.website-preview {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: var(--shadow-light);
}

.preview-header {
  background: var(--bg-card-hover);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--border-color);
}

.preview-controls {
  display: flex;
  gap: 6px;
}

.control-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  &.red { background: #ff5f57; }
  &.yellow { background: #ffbd2e; }
  &.green { background: #28ca42; }
}

.preview-url {
  font-size: 12px;
  color: var(--text-muted);
  font-family: monospace;
}

.preview-content {
  padding: 20px;
  min-height: 200px;
}

.preview-placeholder {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.preview-item {
  height: 80px;
  background: var(--bg-content);
  border-radius: var(--border-radius-small);
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    height: 8px;
    background: var(--bg-card-hover);
    border-radius: 4px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 28px;
    left: 12px;
    right: 12px;
    height: 6px;
    background: var(--bg-card-hover);
    border-radius: 3px;
  }
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.post-meta {
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: var(--text-muted);
}

.read-button {
  background: var(--success-color);
  color: var(--text-white);
  border: none;
  padding: 8px 20px;
  border-radius: var(--border-radius-small);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all var(--transition-normal);

  &:hover {
    background: var(--success-hover);
    transform: translateY(-1px);
  }
}

@media (max-width: 768px) {
  .blog-post { padding: 20px; }
  .post-title { font-size: 24px; }
  .website-preview { margin-bottom: 20px; }
  .preview-content { padding: 15px; }
  .preview-placeholder { grid-template-columns: 1fr; gap: 12px; }
  .post-footer { flex-direction: column; gap: 15px; align-items: flex-start; }
  .post-meta { flex-direction: column; gap: 8px; }
}
</style>


