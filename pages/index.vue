<script setup lang="ts">
import Typed from 'typed.js';
import { usePriceToThousand } from 'co-utils-vue';
import CzBanner from '~/components/CzBanner.vue';

import { getArticleList } from '~/api/article';
import type { IArticleRes } from '~/api/article/type';
import { getCatalogueList } from '@/api/catalogue';
import type { CatalogueList } from '~/api/catalogue/type';
import { getSystemSentence, getSystemVisitor } from '~/api/system';
import type { ISystemSentence, ISystemVisitor, IWebsite } from '~/api/system/type';
import { useRandomColor } from '~/composables';
import { useGlobalStore } from '~/store';
import CzIcp from '~/components/CzIcp.vue';

const articleList = ref<IArticleRes>({} as IArticleRes);
const typed = ref<Typed>();
const website = ref<IWebsite.Data>({} as IWebsite.Data);
const systemStore = useGlobalStore();
const catalogueList = ref<CatalogueList[]>([]);
const typedRef = ref<HTMLDivElement>();
const sentenceList = ref<ISystemSentence.Datum[]>([]);
const query = ref({
  page_size: 20,
  category_id: '',
  page_num: 1
});
definePageMeta({
  keepalive: true
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
const websiteInfo = () => {
  systemStore.getWebsite().then((res) => {
    website.value = res;
  });
};
getList();
getSentence();
catalogueData();
getVisitorInfo();
websiteInfo();
/**
 * SEO
 */
const useHeadOption = computed(() => {
  return {
    title: 'Eqian主页，感受生活的酸甜苦辣，让每一个故事都成为你心灵的寄托，用情感的笔触，书写属于我们的故事',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Eqian主页，感受生活的酸甜苦辣，让每一个故事都成为你心灵的寄托，用情感的笔触，书写属于我们的故事'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '情感流淌的角落，文字是我们的灵魂之窗，每一篇文章都是一次心灵的交流。' +
            '用心写就，用情阅读，每一个故事都是一个心灵的追寻，每一句话都是一次心灵的对话。或许你正在经历着人生的起起落落，' +
            '或许你正在寻找一丝温暖和慰藉，' +
            'Eqian会陪伴你，为你送上一份心灵的慰籍，为你的心灵搭起一座桥梁，让你找到心灵的归属'
      }
    ]
  };
});
useHead(useHeadOption);
if (process.client) {
  console.log(`%c欢迎使用 ${location.host}!`, 'color: #1E80FF; font-size: x-large;padding: 10px;text-decoration: none;');
}
</script>

<template>
  <div class="cz-w-full cz-h-full cz-flex cz-flex-col">
    <cz-banner :banner-url="website.website_cover">
      <h1 class="cz-text-gray-200 cz-text-4xl max-md:cz-text-xs">
        Eqian
      </h1>
      <p class="description max-md:cz-hidden max-md:cz-text-sm">
        在黑暗中看到了微光，朝着光明去前行
      </p>
      <span
        ref="typedRef"
        class="max-md:cz-text-xs vertical-text word description"
      />
    </cz-banner>
    <div class="cz-max-w-7xl dark:cz-text-white cz-p-2 cz-w-full cz-relative cz-flex cz-mx-auto cz-my-0 cz-flex-1">
      <div class="cz-h-full max-md:cz-w-full cz-w-2/3">
        <CzSkeleton v-if="loadingStatus==='loading' && !articleList.list" class="cz-h-screen" />
        <div
          v-else
          class="cz-left-list cz-bg-gray-50 dark:cz-bg-slate-800
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
                @click.stop="handleLoadingMore"
              >
                <div v-show="!isLoading">
                  <CzIcon name="arrow-down-short" />
                  加载更多
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
      <div class="cz-sticky cz-top-8 cz-mt-8 cz-h-96 max-md:cz-hidden cz-w-1/3  ">
        <div class="right-card cz-relative  cz-bottom-1.5 cz-py-2 cz-px-8">
          <div
            class="item-card  cz-px-4 min-h-200px cz-mt-3 cz-box-border cz-bg-gray-50 dark:cz-bg-slate-800"
          >
            <div class="cz-absolute -cz-top-5 cz-left-1/2 -cz-translate-x-1/2">
              <img
                src="@/assets/default-avatar.jpg"
                alt=""
                class="cz-w-20 cz-h-20 cz-rounded-full cz-transition-all hover:cz-scale-125"
              >
            </div>
            <div class="cz-pt-10 cz-border-b cz-border-dashed">
              <div class="cz-text-center">
                <cz-typing
                  class="cz-text-xs cz-py-4 cz-text-[#a0a0a0]"
                  text="大丈夫生于天地之间,怎能郁郁久居人下"
                />
              </div>
              <hr class="cz-divider">
              <div v-if="!!visitorInfo">
                <cz-typing
                  v-if="false"
                  class="cz-text-lg"
                  :text="`欢迎来自 ${[visitorInfo?.province, visitorInfo?.request_city || visitorInfo?.city].join('·')}
                的朋友
                `"
                />
                <div class="cz-flex cz-justify-between cz-py-2">
                  <div>
                    <i class="bi bi-geo-alt cz-pr-1 cz-animate-bounce" />
                    <span>{{ [visitorInfo.province, visitorInfo.request_city || visitorInfo?.city].join('·') }}</span>
                  </div>
                  <div>
                    <i class="bi bi-cloud cz-px-1" />
                    <span>{{ visitorInfo.temperature }} ℃ · {{ visitorInfo.weather }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="cz-py-2">
              本站稳定运行：{{ website.website_run_days || '-' }} 天
            </div>
            <div class="cz-py-2">
              本站访问量：{{ usePriceToThousand(website.website_request_count, 0) || '-' }} 次
            </div>
            <div class="cz-py-2">
              本站文章数量：{{ website.article_count || '-' }} 篇
            </div>
          </div>
          <div
            class="item-card cz-px-4 cz-bg-gray-50
          dark:cz-bg-slate-800 cz-overflow-y-auto
          cz-min-h-[300px] cz-max-h-[600px] cz-mt-5 article"
          >
            <div
              class="cz-flex  cz-py-1 cz-justify-center cz-items-center cz-cursor-pointer"
              @click.stop="changeCategory('')"
            >
              <i class="bi bi-bookmark cz-pr-0.5" />
              <span>目录类别</span>
            </div>
            <div class="cz-border cz-border-dashed cz-my-2" />
            <ul class="cz-leading-8">
              <li
                v-for="catalogue in catalogueList"
                :key="catalogue.category_id"
                class="cz-flex cz-justify-between
            cz-items-center cz-mb-2 cz-p-1
              cz-rounded cz-transition-all
              cz-cursor-pointer
             cz-shadow-md hover:cz-shadow-[0_0_60px_0_#eee]
              hover:cz-bg-cyan-200 dark:hover:cz-bg-cyan-800 "
                @click.stop="changeCategory(catalogue.category_id + '')"
              >
                <div class="cz-font-bold">
                  {{ catalogue.category_name }}
                </div>
                <div
                  class=" cz-rounded
                cz-text-white
              cz-px-2
              cz-shadow-lg"
                  :style="{
                    background: useRandomColor()
                  }"
                >
                  <span>{{ catalogue.article_count }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <CzIcp />
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 500;
  display: block !important;
  margin: 0 auto 1.8rem !important;
  transition: transform 0.25s ease-in-out 0.04s,
  opacity 0.25s ease-in-out 0.04s;
  transform: translateY(0px);
  opacity: 1;
}
.word {
  font-family: "ff-tisa-web-pro-1", "ff-tisa-web-pro-2", "Lucida Grande",
  "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  font-weight: lighter;
  letter-spacing: 3px;
  color: #ccc;
  -webkit-font-smoothing: antialiased;
}
.typed-cursor {
  color: inherit;
}
</style>
