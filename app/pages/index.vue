<script setup lang="ts">
import { onMounted, ref } from "vue";
import BlogPost from "@/components/BlogPost.vue";
import BlogPostSkeleton from "@/components/BlogPostSkeleton.vue";
import CategoryTabs from "@/components/CategoryTabs.vue";
import HeaderBanner from "@/components/HeaderBanner.vue";
definePageMeta({
  keepalive: true,
  // layout: 'header'
});
/**
 * 首页组件
 * 显示网站首页内容，包括横幅、分类标签和文章列表
 */

// 注入的加载状态和方法
const isLoading = ref(false);
const loadingMessage = ref("加载中...");

// 示例博客文章数据
const blogPost = {
  title: "Typecho边栏主题Hank",
  author: "片刻",
  publishTime: "2个月前",
  location: "浙江省·杭州市",
  views: 399,
  description:
    "今天给大家带来的一款Typecho主题Hank,是一款典型的边栏主题。左侧固定的边栏简单的提供了一些个人avavtar(或者logo)、站点统计、菜单等信息,右侧是内容主体部分。这种风格的网站布局简洁明了，用户体验良好。",
  previewUrl: "https://www.luxtheme.com",
};

/**
 * 模拟网络请求
 * 展示加载状态和骨架屏效果
 */
const simulateNetworkRequest = async () => {
  isLoading.value = true;
  loadingMessage.value = "正在加载文章...";
  await new Promise((resolve) => setTimeout(resolve, 2000));
  isLoading.value = false;
};

// 组件挂载时添加滚动监听和模拟请求
onMounted(() => {
  simulateNetworkRequest();
});
</script>

<template>
  <div>
    <client-only>
      <HeaderBanner />
    </client-only>

    <CategoryTabs />
    <div v-if="isLoading" class="loading-container">
      <div class="loading-message">{{ loadingMessage }}</div>
      <BlogPostSkeleton :count="6" />
    </div>
    <div v-else class="content-container">
      <BlogPost v-bind="blogPost" />
      <BlogPost v-bind="blogPost" />
      <BlogPost v-bind="blogPost" />
      <BlogPost v-bind="blogPost" />
      <BlogPost v-bind="blogPost" />
      <BlogPost v-bind="blogPost" />
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

@media (max-width: 768px) {
  .loading-message {
    margin: 0 10px 10px 10px;
    padding: 16px;
    font-size: 14px;
  }
}
</style>
