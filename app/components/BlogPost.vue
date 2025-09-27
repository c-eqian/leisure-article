<script setup lang="ts">
import { useBeforeDate } from "@eqian/utils-vue";
import { computed, type PropType } from "vue";
import { useRouter } from "vue-router";
import type { IArticleItem } from "~~/api/article/type";
/**
 * 博客文章卡片组件
 * 显示文章的基本信息，包括标题、作者、发布时间等
 */

// 路由实例
const router = useRouter();

// 组件属性
const props = defineProps({
  item: {
    type: Object as PropType<IArticleItem>,
    default: () => ({}) as unknown as IArticleItem,
  },
});
const article = computed(() => props.item);
// 默认头像占位
const defaultAvatar = "https://avatars.githubusercontent.com/u/9919?s=200&v=4";

const onAuthorAvatarError = (e: Event) => {
  (e.target as HTMLImageElement).src = defaultAvatar;
};

const onCoverError = (e: Event) => {
  // 封面图加载失败时隐藏封面图容器
  const coverContainer = (e.target as HTMLImageElement).parentElement;
  if (coverContainer) {
    coverContainer.style.display = "none";
  }
};

const getAuthorInitial = (name: string) => {
  if (!name) return "?";
  return name.trim().charAt(0);
};
</script>

<template>
  <article class="blog-post">
    <div class="post-header">
      <div class="author-info">
        <div class="author-avatar">
          <img
            v-if="article.user_info?.avatar"
            :src="article.user_info?.avatar || defaultAvatar"
            :alt="article.user_info?.username"
            @error="onAuthorAvatarError"
          />
          <span v-else>{{
            getAuthorInitial(article.user_info?.username || "")
          }}</span>
        </div>
        <div class="author-details">
          <span class="author-name">{{ article.user_info?.username }}</span
          ><span class="publish-time">{{
            useBeforeDate(article.create_date)
          }}</span>
        </div>
      </div>
    </div>
    <h1 class="post-title">
      <nuxt-link :to="`/post/${article.uid}`" class="title-text">{{
        article.title
      }}</nuxt-link>
    </h1>
    <p class="post-description">{{ article.describe }}</p>
    <div v-if="article.cover" class="post-cover">
      <img
        :src="article.cover"
        :alt="article.title"
        class="cover-image"
        @error="onCoverError"
      />
    </div>
    <div class="post-footer">
      <div class="post-meta">
        <span class="location">◎ {{ article.province }}</span>
        <span class="category">🏷 {{ article.category?.category_name }}</span>
        <span class="views">{{ article.view_number }}浏览</span>
      </div>
    </div>
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
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
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
    content: "";
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
    content: "";
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-cover {
  margin-bottom: 30px;
  border-radius: var(--border-radius);
  overflow: hidden;
  //box-shadow: var(--shadow-light);
  transition: transform var(--transition-normal);

  &:hover {
    transform: translateY(-2px);
  }
}

.cover-image {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  display: block;
  transition: transform var(--transition-normal);

  &:hover {
    transform: scale(1.02);
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
  .blog-post {
    padding: 20px;
  }
  .post-title {
    font-size: 24px;
  }
  .post-cover {
    margin-bottom: 20px;
  }
  .cover-image {
    max-height: 200px;
  }
  .post-footer {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
  .post-meta {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
