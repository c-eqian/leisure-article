<script setup lang="ts">
import Typed from 'typed.js';
import CzBanner from '~/components/CzBanner.vue';

import { getArticleList } from '~/api/article';
import type { IArticleRes } from '~/api/article/type';
import { getCatalogueList } from '@/api/catalogue';
import type { CatalogueList } from '~/api/catalogue/type';
import { getSystemSentence, getSystemVisitor } from '~/api/system';
import type { ISystemSentence, ISystemVisitor, IWebsite } from '~/api/system/type';

const articleList = ref<IArticleRes>({} as IArticleRes);
const typed = ref<Typed>();
const catalogueList = ref<CatalogueList[]>([]);
const typedRef = ref<HTMLDivElement>();
const sentenceList = ref<ISystemSentence.Datum[]>([]);
const query = ref({
  page_size: 10,
  category_id: '',
  page_num: 1
});
const isLoading = ref(false);
const visitorInfo = ref<ISystemVisitor.IRes['data']>();
const loadingStatus = ref<'loading' | 'error' | 'success'>('loading');
const getList = () => {
  if (isLoading.value) { return; }
  if (query.value.page_num > 1) { isLoading.value = true; }
  getArticleList(query.value).then((res) => {
    if (query.value.page_num > 1) {
      articleList.value.list.push(...res.list);
      articleList.value.is_more = res.is_more;
    } else {
      articleList.value = res;
    }
    loadingStatus.value = articleList.value.list.length > 0 ? 'success' : 'error';
  }).finally(() => {
    isLoading.value = false;
  }).catch(() => {
    if (query.value.page_num === 1) {
      loadingStatus.value = 'error';
    }
  });
};
const handleLoadingMore = () => {
  if (articleList.value.is_more === 1) {
    query.value.page_num += 1;
  }
  getList();
};

const getSentence = () => {
  getSystemSentence().then((systemSentence) => {
    sentenceList.value = systemSentence;
    nextTick(() => {
      typed.value = new Typed(typedRef.value, {
        strings: sentenceList.value.map(item => item.text),
        typeSpeed: 100,
        loop: true,
        /**
         * @property {boolean} fadeOut 是否用淡出替代空格
         * @property {string} fadeOutClass 用于淡入淡出动画的css类
         * @property {boolean} fadeOutDelay 以毫秒为单位淡出延迟
         */
        fadeOut: false,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
        backDelay: 5000,
        backSpeed: 100
      });
    });
  });
};
const catalogueData = () => {
  getCatalogueList().then((res) => {
    catalogueList.value = res.list;
  });
};
const changeCategory = (category_id = '') => {
  query.value.page_num = 1;
  query.value.category_id = category_id;
  getList();
};
const getVisitorInfo = () => {
  getSystemVisitor().then((res) => {
    visitorInfo.value = res;
  });
};
getList();
onMounted(() => {
  getSentence();
  catalogueData();
  getVisitorInfo();
});
/**
 * SEO
 */
const useHeadOption = computed(() => {
  return {
    title: 'Eqian主页',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Eqian主页'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Eqian主页'
      }
    ]
  };
});
useHead(useHeadOption);
</script>

<template>
  <div class="cz-w-full cz-h-full cz-flex cz-flex-col">
    <cz-banner />
    <div class="cz-max-w-7xl cz-p-2 cz-w-full cz-relative cz-flex cz-mx-auto cz-my-0 cz-flex-1">
      <div class="cz-h-full max-md:cz-w-full cz-w-2/3">
        <div
          class="cz-left-list cz-bg-[#fff]
      cz-min-h-[500px] cz-items-start cz-py-0
      md:cz-px-5"
        >
          <div
            v-show="loadingStatus==='success'"
            class="cz-w-full cz-h-full cz-py-1"
          >
            <template
              v-for="(item, index) in articleList.list"
              :key="item.uid"
            >
              <ListItem
                :field-view="index"
                :position="index"
                :row="item"
                class="cz-my-5 animate__backInDown"
              />
            </template>
            <div
              v-show="articleList.list"
              class="cz-w-full cz-flex cz-py-5 cz-justify-center"
            >
              <div
                v-if="articleList.is_more===1"
                class="cz-text-[var(--cz-primary)] cz-cursor-pointer"
                @click="handleLoadingMore"
              >
                <div v-show="!isLoading">
                  加载更多
                  <CzSvg name="loading-more" />
                </div>
                <cz-loading
                  v-show="isLoading"
                  :is-loading="isLoading"
                />
              </div>
              <div v-else>
                没有数据啦~
              </div>
            </div>
          </div>
          <div
            v-if="loadingStatus==='error'"
            class="cz-flex cz-justify-center cz-items-center"
          >
            <img
              src="@/assets/svg/no-article.svg"
              alt=""
              loading="lazy"
              width="300"
              height="300"
            >
          </div>
          <div
            v-if="loadingStatus==='loading'"
            class="cz-flex cz-h-full cz-justify-center cz-items-center"
          />
        </div>
      </div>
      <div class=" cz-sticky cz-top-8  cz-bg-blue-400  cz-h-96 max-md:cz-hidden cz-w-1/3  ">
        <div class=" cz-h-full  " />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: $secondary;
}
</style>
