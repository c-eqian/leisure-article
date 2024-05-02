<script setup lang="ts">
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import { useFormatDate } from 'co-utils-vue';
import type { IArticleItem } from '~/api/article/type';
import { getArticleItemDetailById, getArticleRecentByUid } from '~/api/article';
import { useCalculateReadability, useCountTransform, useIsEmptyObject } from '~/composables';
import { ROUTER_PREFIX } from '~/constant';
import CzComment from '~/components/CzComment.vue';
import { useGlobalStore } from '~/store';
definePageMeta({
  layout: 'detail'
});
const systemStorage = useGlobalStore();
const themeMode = computed(() => systemStorage.theme);
const isCategory = ref(true);
const { id } = useRoute().params;
const article = ref<IArticleItem>({} as IArticleItem);
const scrollElement = process.browser ? document.documentElement : 'body';
const commentFieldRef = ref<HTMLDivElement | null>(null);
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
const handleToComment = () => {
  commentFieldRef.value?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'
  });
};
getArticle();
</script>

<template>
  <div>
    <cz-banner :banner-url="article.cover!">
      <div>
        <cz-typing
          :text="article.title"
          class="description cz-text-2xl"
        />
      </div>
      <div class="cz-text-white">
        <div class="md:cz-w-[672px]">
          <div class="cz-tracking-widest cz-flex cz-text-center cz-items-center cz-justify-center">
            <div class="cz-pr-[10px] cz-pl-[10px]">
              <CzIcon name="box" />
              字数：{{ countInfo.wordCount }}
            </div>
            <div class="cz-pr-[10px] cz-pl-[10px]">
              <CzIcon name="hourglass-bottom" />
              预计阅读时长：{{ countInfo.readingTime }}
            </div>
          </div>
          <div class="cz-flex cz-text-center cz-py-4 cz-items-center cz-justify-center">
            <div class="cz-pr-[10px] cz-pl-[10px]">
              <CzIcon name="calendar2-check" />
              发布时间：{{ useFormatDate(article.create_date|| '-', 'yyyy-MM-dd HH:mm') }}
            </div>
          </div>
        </div>
      </div>
    </cz-banner>
    <div class="cz-max-w-7xl cz-p-2 cz-flex cz-mx-auto cz-my-0">
      <aside
        class="article-panel dark:cz-text-white cz-h-[500px] cz-fixed cz-top-[460px] cz-ml-[-7rem] cz-z-[2] cz-w-[100px]"
      >
        <div
          :badge="useCountTransform(article?.comment_count || 0)"
          class="cz-relative   cz-panel-btn cz-mb-1.5 cz-w-12 cz-h-12 cz-flex cz-items-center cz-justify-center"
          @click="handleToComment"
        >
          <CzIcon name="chat-left-dots" />
        </div>
        <div
          :badge="useCountTransform(article?.like_number || 0)"
          class="cz-relative cz-panel-btn cz-mb-1.5 cz-w-12 cz-h-12 cz-flex cz-items-center cz-justify-center"
        >
          <CzIcon name="hand-thumbs-up" />
        </div>
        <div
          :badge="useCountTransform(article?.view_number || 0)"
          class="cz-relative cz-panel-btn cz-mb-1.5 cz-w-12 cz-h-12 cz-flex cz-items-center cz-justify-center"
        >
          <CzIcon name="eye" />
        </div>
      </aside>
      <article class="max-md:cz-w-full cz-w-4/5 cz-bg-gray-50 dark:cz-bg-[--card-bg]  cz-pb-10 cz-rounded-2xl">
        <md-preview id="md-preview-id" :theme="themeMode" editor-id="md-preview-id" :model-value="article.content" />
        <div class="update-time cz-px-4 cz-float-right cz-text-[#a0a0a0] cz-py-5 cz-text-xs">
          <span>最近更新：</span>
          <time>{{ useFormatDate(article.update_date|| '', 'yyyy-MM-dd HH:mm') }}</time>
        </div>
        <hr class="cz-divider cz-clear-right">
        <div
          :style="{
            'justify-content':handleLayoutMethod(article)}"
          class="cz-flex"
        >
          <div
            v-if="!useIsEmptyObject(article?.previous_article)"
            class="cz-p-5"
          >
            <span>上一篇：</span>
            <NuxtLink
              :to="`${ROUTER_PREFIX}/article/${article?.previous_article?.uid}`"
              target="_blank"
              class="cz-text-blue-600"
            >
              {{ article?.previous_article?.title }}
            </NuxtLink>
          </div>
          <div
            v-if="!useIsEmptyObject(article?.next_article)"
            class="cz-p-5"
          >
            <span>下一篇：</span>
            <NuxtLink
              :to="`${ROUTER_PREFIX}/article/${article?.next_article?.uid}`"
              target="_blank"
              class="cz-text-blue-600"
            >
              {{ article?.next_article?.title }}
            </NuxtLink>
          </div>
        </div>
        <div class="cz-px-2">
          <CzComment>
            <div ref="commentFieldRef">
              评论（{{ article.comment_count || 0 }}）
            </div>
          </CzComment>
        </div>
      </article>
      <div
        class="cz-sticky cz-top-8  cz-h-1/2 max-md:cz-hidden cz-px-4 cz-w-1/5"
      >
        <q-toggle v-model="isCategory" label="目录" />
        <div
          class="cz-bg-gray-50 dark:cz-bg-slate-800 dark:cz-text-gray-50 cz-min-h-72"
          :style="{
            display: isCategory? 'block': 'none'
          }"
        >
          <div class="cz-overflow-auto">
            <div
              id="cz-toc"
              class="navigation-content"
            >
              <div class="cz-w-full cz-text-center cz-text-[1.25rem]">
                <cz-svg name="catalogue" />
                目录
              </div>
              <md-catalog
                :theme="themeMode"
                :scroll-element="scrollElement"
                editor-id="md-preview-id"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.md-editor){
  background: var(--card-bg);
}
.cz-panel-btn {
  background-position: 50%;
  background-color: var(--card-bg);
  background-repeat: no-repeat;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(50, 50, 50, .04);
  cursor: pointer;
  text-align: center;
  font-size: 1.67rem;

  &:after {
    content: attr(badge);
    position: absolute;
    top: 0;
    left: 75%;
    height: 17px;
    line-height: 17px;
    padding: 0 5px;
    border-radius: 9px;
    font-size: 11px;
    text-align: center;
    white-space: nowrap;
    background-color: #c2c8d1;
    color: #fff;
  }
}
:deep(.md-editor-catalog-active) {
   > span {
     padding: 0 5px;
    position: relative;
     &::before{
       position: absolute;
       content: '';
       height: 90%;
       left: 2px;
       background: #23a6d5;
       width: 2px;
     }
  }
}
</style>
