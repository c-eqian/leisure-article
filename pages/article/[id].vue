<script setup lang="ts">
import { MdPreview, MdCatalog, config } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import { useFormatDate } from '@eqian/utils-vue';
import { useQuasar } from 'quasar';
import type { IArticleItem } from '~/api/article/type';
import { useCountTransform, useIsEmptyObject } from '~/composables';
import { ROUTER_PREFIX } from '~/constant';
import CzComment from '~/components/CzComment.vue';
import { useGlobalStore } from '~/store';
import CzArticleComment from '~/components/CzArticleComment.vue';
import { postArticleComment } from '~/api/comment';
import { useTargetBlankExtension } from '~/composables/md-it';
import { articleLike, getArticleItemDetailById } from '~/api/article';
import { useLogin } from '~/composables/use-login';
import CzCommentV2 from '~/components/CzCommentV2.vue';
definePageMeta({
  scrollToTop: true,
  layout: 'header'
});
const systemStorage = useGlobalStore();
const themeMode = computed(() => systemStorage.theme);
const isCategory = ref(true);
const { id } = useRoute().params;
const $q = useQuasar();
const article = ref<IArticleItem>({} as IArticleItem);
const scrollElement = import.meta.browser ? document.documentElement : 'body';
const commentFieldRef = ref<HTMLDivElement | null>(null);
const czArticleCommentRef = ref<InstanceType<typeof CzArticleComment>>();
/**
 * 作者近期文章
 */
const getArticle = () => {
  if (!id) { return; }
  useAsyncData('article-detail', () => getArticleItemDetailById((id as string))).then((res) => {
    article.value = res.data.value || {} as IArticleItem;
  });
  // const res = await useFetch(`/article/detail/${id}`, {
  //   method: 'GET'
  // });
  // console.log('请求数据', res.data.value);
  // article.value = res.data.value;
  // getArticleRecentByUid(id as string).then((res) => {
  //   authorSRecentArticles.value = res;
  // });
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
const handleSubMit = async (v: string) => {
  if (!v) {
    return;
  }
  try {
    await postArticleComment({
      article_id: article.value.id,
      content: v
    });
    czArticleCommentRef.value?.handleGetCommentList();
    article.value.comment_count += 1;
    $q.notify({
      type: 'positive',
      position: 'top',
      timeout: 3000,
      message: '评论成功'
    });
  } catch (e) {
    $q.notify({
      type: 'positive',
      position: 'top',
      timeout: 3000,
      message: e.msg || '操作失败'
    });
  }
};
config({
  markdownItConfig (md) {
    return useTargetBlankExtension(md);
  }
});
/**
 * SEO
 */
const metaDescription = computed(() => article.value?.describe?.substring(0, 200)
  .replace(/\r?\n/g, '').replace(/#/g, '') + '...');
const metaKeywords = computed(() => article.value?.title?.length > 0 ? article.value.title : '');
const useHeadOption = computed(() => {
  return {
    title: `${article.value?.title || '文章详情'}`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `${article.value?.title || ''} - ${metaDescription.value}`
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: metaKeywords.value
      }
    ]
  };
});
const handleAddress = (province:string, city:string) => {
  if (province) { return [province, city].join('·'); }
  return '';
};
const userInfoComputed = computed(() => systemStorage.userInfo);
useHead(useHeadOption);
getArticle();
const handleArticleLike = async () => {
  if (!systemStorage?.userInfo?.isLogin) {
    useLogin();
    return;
  }
  await articleLike(article.value.id);
  article.value.is_like = article.value.is_like === 1 ? 0 : 1;
  const { like_number = 0 } = article.value;
  article.value.like_number = article.value.is_like === 1 ? like_number + 1 : like_number - 1;
};
</script>

<template>
  <div>
    <cz-banner :banner-url="article?.cover!">
      <client-only>
        <div>
          <cz-typing
            :text="article?.title"
            class="description cz-text-2xl"
          />
        </div>
        <div class="cz-text-white">
          <div class="md:cz-w-[672px]">
            <div class="cz-tracking-widest cz-flex cz-text-center cz-items-center cz-justify-center">
              <div class="cz-pr-[10px] cz-pl-[10px]">
                <CzIcon name="box" />
                字数：{{ useCountTransform(article?.word_count || 0) }}
              </div>
              <div class="cz-pr-[10px] cz-pl-[10px]">
                <CzIcon name="hourglass-bottom" />
                预计阅读时长：{{ (article?.expect_reading_time) + '分钟' }}
              </div>
            </div>
            <div class="cz-flex cz-text-center cz-py-4 cz-items-center cz-justify-center">
              <div class="cz-pr-[10px] cz-pl-[10px]">
                <CzIcon name="calendar2-check" />
                发布时间：{{ useFormatDate(article?.create_date || '', 'yyyy-MM-dd HH:mm') }}
              </div>
            </div>
          </div>
        </div>
      </client-only>
    </cz-banner>
    <div class="cz-max-w-7xl  cz-p-2 cz-flex cz-mx-auto cz-my-0">
      <aside
        class="article-panel dark:cz-text-white cz-h-[500px] cz-fixed cz-top-[460px] -cz-ml-24 cz-z-[2] cz-w-[100px]"
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
          @click="handleArticleLike"
        >
          <CzIcon
            name="hand-thumbs-up"
            :class="{
              'is-like': article.is_like==1
            }"
          />
        </div>
        <div
          :badge="useCountTransform(article?.view_number || 0)"
          class="cz-relative cz-panel-btn cz-mb-1.5 cz-w-12 cz-h-12 cz-flex cz-items-center cz-justify-center"
        >
          <CzIcon name="eye" />
        </div>
      </aside>
      <!--      <CzSkeleton v-if="useIsEmptyObject(article)" class="cz-h-screen" />-->
      <article class="max-md:cz-w-full cz-w-4/5 cz-bg-[--card-bg]  cz-pb-10 cz-rounded-2xl">
        <div class="cz-w-full cz-px-10 cz-text-gray-500">
          <h1>{{ article?.title }}</h1>
          <div class="cz-py-1 md:cz-flex cz-items-center cz-text-xs cz-space-x-5 max-md: cz-hidden">
            <div class="cz-space-x-1.5">
              <CzIcon name="person" />
              <span>{{ article?.user_info?.username }}</span>
            </div>
            <div class="cz-space-x-1.5">
              <CzIcon name="bookmark" />
              <span>{{ article?.category?.category_name }}</span>
            </div>
            <div class="cz-space-x-1.5">
              <CzIcon name="calendar-date" />
              <span>{{ useFormatDate(article?.create_date|| '', 'YYYY-MM-dd HH:mm') }}</span>
            </div>
            <client-only>
              <div v-if="article.province" class="cz-space-x-1.5">
                <CzIcon name="geo-alt" />
                <span>发布于： {{ handleAddress(article?.province, article?.city) }}</span>
              </div>
            </client-only>
          </div>
        </div>
        <hr class="max-md:cz-hidden">
        <md-preview
          id="md-preview-id"
          code-theme="stackoverflow"
          :code-foldable="false"
          :theme="themeMode"
          editor-id="md-preview-id"
          :model-value="article?.content"
        />
        <div class="update-time cz-px-4 cz-float-right cz-text-[#a0a0a0] cz-py-5 cz-text-xs">
          <span>最近更新：</span>
          <time>{{ useFormatDate(article?.update_date|| '', 'yyyy-MM-dd HH:mm') }}</time>
        </div>
        <hr class="cz-divider cz-clear-right">
        <client-only>
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
                class="cz-text-blue-600"
              >
                {{ article?.next_article?.title }}
              </NuxtLink>
            </div>
          </div>
          <div class="cz-px-2">
            <CzComment :is-login="userInfoComputed.isLogin" @on-sub-mit="handleSubMit">
              <div ref="commentFieldRef">
                评论（{{ article?.comment_count || 0 }}）
              </div>
            </CzComment>
            <CzCommentV2 ref="czArticleCommentRef" :article-id="article.id" :is-login="userInfoComputed.isLogin" />
          </div>
        </client-only>
      </article>
      <div
        class="cz-sticky cz-top-8  cz-h-1/2 max-md:cz-hidden cz-px-4 cz-w-1/5"
      >
        <q-toggle v-model="isCategory" label="目录" />
        <div
          class="cz-bg-[--card-bg] cz-overflow-auto dark:cz-text-gray-50 cz-min-h-72 cz-h-[580px]"
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
.is-like{
  @apply cz-text-orange-400
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
:deep(.md-editor-preview-wrapper) {
  ol li {
    list-style: decimal !important;
  }
  ul li {
    list-style: disc !important;
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
