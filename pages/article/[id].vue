<script setup lang="ts">
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import { useFormatDate } from 'co-utils-vue';
import type { IArticleItem } from '~/api/article/type';
import { getArticleItemDetailById, getArticleRecentByUid } from '~/api/article';
import { useCalculateReadability, useIsEmptyObject } from '~/composables';
import { ROUTER_PREFIX } from '~/constant';
definePageMeta({
  layout: 'detail'
});
const isCategory = ref(true);
const { id } = useRoute().params;
const article = ref<IArticleItem>({} as IArticleItem);
/**
 * 作者近期文章
 */
const authorSRecentArticles = ref<IArticleItem[]>([]);
const countInfo = ref({
  wordCount: '',
  readingTime: ''
});
const getArticle = () => {
  if (!id) { return; }
  getArticleItemDetailById(id as string).then((res) => {
    article.value = res;
    console.log(article.value?.next_article?.title);
    countInfo.value = useCalculateReadability(res.content || '');
  });
  getArticleRecentByUid(id as string).then((res) => {
    authorSRecentArticles.value = res;
  });
};
/**
 * 处理上一章-下一章的布局方式
 */
const handleLayoutMethod = (rowItem: any) => {
//   cz-justify-between cz-justify-end cz-justify-start
  if (useIsEmptyObject(rowItem?.next_article) && !useIsEmptyObject(rowItem?.previous_article)) {
    return 'flex-start';
  }
  if (!useIsEmptyObject(rowItem?.next_article) && useIsEmptyObject(rowItem?.previous_article)) {
    return 'flex-end';
  }
  return 'space-between';
};
getArticle();
</script>

<template>
  <div>
    <cz-banner />
    <div class="cz-max-w-7xl cz-p-2 cz-flex cz-mx-auto cz-my-0">
      <div class="max-md:cz-w-full cz-w-4/5 cz-bg-gray-50">
        <MdPreview :model-value="article.content" />
        <div class="update-time cz-px-4 cz-float-right cz-text-[#a0a0a0] cz-py-5 cz-text-xs">
          <span>最近更新：</span>
          <time>{{ useFormatDate(new Date(), 'yyyy-MM-dd HH:mm') }}</time>
        </div>
        <hr class="cz-divider cz-clear-right">
        <div
          :style="{
            'justify-content':handleLayoutMethod(article)}"
          class="cz-flex"
        >
          <div
            v-show="!useIsEmptyObject(article?.previous_article)"
            class="cz-p-5"
          >
            <span>上一篇：</span>
            <NuxtLink
              :href="`${ROUTER_PREFIX}/article/${article?.previous_article?.uid}`"
              target="_blank"
              style="color: inherit"
            >
              {{ article?.previous_article?.title }}
            </NuxtLink>
          </div>
          <div
            v-show="!useIsEmptyObject(article?.next_article)"
            class="cz-p-5"
          >
            <span>下一篇：</span>
            <NuxtLink
              :href="`${ROUTER_PREFIX}/article/${article?.next_article?.uid}`"
              target="_blank"
              style="color: inherit"
            >
              {{ article?.next_article?.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div
        class=" max-md:cz-hidden cz-sticky cz-top-8 cz-px-4 cz-w-1/5"
      >
        <v-switch v-model="isCategory" hide-details density="compact" label="目录" />
        <div
          class="cz-bg-gray-50 cz-min-h-72"
          :style="{
            display: isCategory? 'block': 'none'
          }"
        >
          1111
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.md-editor){
  background: var(--md-bk-color);
}
</style>
