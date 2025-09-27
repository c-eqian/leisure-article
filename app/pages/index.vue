<script setup lang="ts">
import { getArticleList } from "~~/api/article";
import { ref } from "vue";
import BlogPost from "@/components/BlogPost.vue";
import BlogPostSkeleton from "@/components/BlogPostSkeleton.vue";
import CategoryTabs from "@/components/CategoryTabs.vue";
import HeaderBanner from "@/components/HeaderBanner.vue";
import LoadMoreButton from "@/components/LoadMoreButton.vue";
import BackToTop from "~/components/BackToTop.vue";
import { usePagination } from "~/composables/usePaganition";
definePageMeta({
  keepalive: true,
  // layout: 'header'
});
/**
 * 首页组件
 * 显示网站首页内容，包括横幅、分类标签和文章列表
 */
const loadingMessage = ref("正在加载文章...");

const params = ref({
  page_size: 20,
  page_num: 1,
});
const {
  data: articleList,
  isLoading,
  isFirstLoaded,
  isHasMore,
  request,
} = usePagination(getArticleList);
request(params.value);
const loadMore = () => {
  params.value.page_num += 1;
  request(params.value);
};
</script>

<template>
  <div>
    <client-only>
      <HeaderBanner />
      <BackToTop />
    </client-only>

    <CategoryTabs />
    <div v-if="isLoading && isFirstLoaded" class="loading-container">
      <div class="loading-message">{{ loadingMessage }}</div>
      <BlogPostSkeleton :count="6" />
    </div>
    <div v-else class="content-container">
      <BlogPost v-for="item in articleList.list" :key="item.uid" :item="item" />
      <LoadMoreButton
        v-if="!isFirstLoaded && isHasMore"
        :loading="isLoading"
        :disabled="isLoading"
        @click="loadMore"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.loading-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.loading-message {
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: var(--text-secondary);
  background: var(--bg-card);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-light);
  margin-bottom: 10px;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .loading-message {
    margin: 0 10px 10px 10px;
    padding: 16px;
    font-size: 14px;
  }
}
</style>
