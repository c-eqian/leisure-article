<script lang="ts" setup>
import { useFormatDate } from '@eqian/utils-vue';

import { getWallpaperBing, getWallpaperList, getWallpaperTypes } from '~/api/wallpaper';
import type { IWallpaperData, IWallpaperReq, IWallpaperRes, IWallpaperTypes } from '~/api/wallpaper/type';
import { WALLPAPER_ENUM } from '~/constant';

definePageMeta({
  layout: 'detail'
});
const wallpaperListInfo = ref<IWallpaperRes>({
  list: [],
  total: 0,
  is_more: 0
});
const wallpaperBing = ref<IWallpaperData>({} as IWallpaperData);
const wallpaperTypes = ref<IWallpaperTypes[]>([]);
const isLoading = ref(false);
const queryParams = reactive<IWallpaperReq>({
  source: '',
  page_size: 20,
  page_num: 1
});
const wallpaperCover = ref('url(https://s3.bmp.ovh/imgs/2022/11/27/44ecddb9454b34ae.jpg)');
const getList = () => {
  isLoading.value = true;
  getWallpaperList(queryParams).then((res) => {
    const { list = [], total, is_more } = res;
    const originKey = wallpaperListInfo.value.list.map(l => l.id);
    const loadingList = list.filter(l => !originKey.includes(l.id));
    wallpaperListInfo.value.total = total;
    wallpaperListInfo.value.list.push(...loadingList);
    wallpaperListInfo.value.is_more = is_more;
  }).finally(() => {
    isLoading.value = false;
  });
};
const getWallpaper = () => {
  getWallpaperBing().then((res) => {
    wallpaperCover.value = res.url as string;
    wallpaperBing.value = res;
  });
  getWallpaperTypes().then((res) => {
    wallpaperTypes.value = res;
  });
  getList();
};
const handleSelectType = (type: any) => {
  queryParams.source = type;
  queryParams.page_num = 1;
  getWallpaperList(queryParams).then((res) => {
    const { list = [], is_more } = res;
    wallpaperListInfo.value.list = list;
    wallpaperListInfo.value.is_more = is_more;
  });
};
const handleLoadingMore = () => {
  if (isLoading.value) { return; }
  queryParams.page_num! += 1;
  getWallpaperList(queryParams).then((res) => {
    const { list = [], is_more } = res;
    const originKey = wallpaperListInfo.value.list.map(l => l.id);
    const loadingList = list.filter(l => !originKey.includes(l.id));
    wallpaperListInfo.value.list.push(...loadingList);
    wallpaperListInfo.value.is_more = is_more;
  }).finally(() => {
    isLoading.value = false;
  });
};
const handlePreviewImage = (item: any) => {
  // const data = encodeURIComponent(item.url);
  window.open(item.url, 'imagePreview');
};
getWallpaper();
</script>

<template>
  <div class="wallpaper-container">
    <CzBanner :banner-url="wallpaperCover">
      <div class="content">
        <div class="md:cz-w-2xl cz-select-none cz-text-[#fff]">
          <div class="cz-tracking-widest cz-flex cz-text-center cz-items-center cz-justify-center">
            <div class="cz-pr-2.5 cz-pl-2.5">
              {{ wallpaperBing.title || '-' }}
            </div>
            <div class="cz-pr-2.5 cz-pl-2.5">
              发布时间：{{ useFormatDate(wallpaperBing.date_time || '-', 'yyyy-MM-dd') }}
            </div>
          </div>
          <div class="cz-text-center cz-items-center">
            <div class="cz-pr-2.5 cz-pl-2.5">
              {{ wallpaperBing.copyright || '-' }}
            </div>
          </div>
        </div>
      </div>
    </CzBanner>
    <div class="cz-w-full ">
      <div class="lg:cz-max-w-6xl cz-my-0 cz-mx-auto md:cz-max-w-6xl">
        <div
          class="cz-w-full cz-pt-4 cz-pb-7"
        >
          <q-tabs
            v-model="queryParams.source"
            inline-label
            class="bg-primary text-white shadow-2"
            @update:model-value="(v)=> handleSelectType(v)"
          >
            <q-tab
              name=""
              icon="bi-aspect-ratio"
              label="全部"
            />
            <q-tab
              v-for="item in wallpaperTypes"
              :key="item.name"
              :name="item.type"
              icon="bi-image"
              :label="`${item.name}（${ item.count }）`"
            />
          </q-tabs>
        </div>
        <div class="wallpaper-list cz-flex cz-flex-wrap cz-w-full">
          <div
            v-for="(item, index) in wallpaperListInfo.list"
            :key="item.id"
            :class="[index % 2===0?'animate__zoomIn':'animate__zoomIn']"
            class="
                 w-100%
                 animate__fadeInTopRight
                 wallpaper-list--item
                 md:cz-w-[33.3%]
                 md:cz-max-h-[162px]
                 sm:cz-w-[50%]
                 sm:cz-h-[200px]
                 lg:cz-w-[20%]
                 lg:cz-h-[200px]
                 cz-text-[13px]
                 cz-p-0.5"
          >
            <CzImageCover
              :url="item.url!"
              @click="handlePreviewImage(item)"
            >
              <div
                class="cz-absolute cz-w-full
                cz-bottom-0 cz-left-0 cz-right-0 cz-flex cz-p-1.5 cz-justify-between cz-bg-[rgba(0,0,0,.5)]
              cz-text-[#eee]"
              >
                <div class="publish-time">
                  {{
                    useFormatDate(item.type === WALLPAPER_ENUM.BING
                      ? item.date_time|| ''
                      : item.create_date || '', 'yyyy-MM-dd')
                  }}
                </div>
                <div class="publish-title">
                  {{ item.title || item.user_info?.username }}
                </div>
              </div>
            </CzImageCover>
          </div>
        </div>
      </div>
    </div>
    <div class="cz-w-full cz-flex cz-py-5 cz-justify-center">
      <div
        v-if="wallpaperListInfo.is_more===1"
        class="cz-text-[var(--cz-primary)] cz-cursor-pointer"
        @click="handleLoadingMore"
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
    <hr>
    <div
      class="cz-text-center cz-w-full cz-h-20 cz-my-12"
    >
      提示：图片均来源于网络，如有侵权，请联系删除！
    </div>
  </div>
</template>

<style lang="scss" scoped>

.wallpaper-container {
  animation: change 10s infinite;
  transition: transform 0.25s ease-in-out 0.08s,
  opacity 0.25s ease-in-out 0.08s;
  margin: 0 auto;
  padding: 0;
  @keyframes change {
    0% {
      color: #5cb85c;
    }

    25% {
      color: #556bd8;
    }
    50% {
      color: #e40707;
    }
    75% {
      color: #66e616;
    }
    100% {
      color: #67bd31;
    }
  }
}
</style>
