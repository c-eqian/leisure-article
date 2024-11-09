<script setup lang="ts">
import { EpTextFold, EpLine } from 'e-plus-ui';
import { useFormatDate, useOmit } from '@eqian/utils-vue';
import { getNotesList } from '~/api/notes';
import type { INoteRes } from '~/api/notes/type';
import { ROUTER_PREFIX } from '~/constant';
import { useTags } from '~/composables/tags';
const loadingStatus = ref<'loading' | 'error' | 'success'>('loading');
const router = useRouter();
const route = useRoute();
const isLoading = ref(false);
const noteData = ref<INoteRes>({
  total: 0,
  list: [],
  is_more: 1
});
const params = ref({
  page_size: 20,
  page_num: 1,
  category_tags: +(route.query?.tag || 0)
});
const getList = () => {
  if (params.value.page_num === 1) {
    loadingStatus.value = 'loading';
  }
  const _params = +(params.value.category_tags) === 0 ? useOmit(params.value, ['category_tags']) : params.value;
  if (params.value.page_num > 1) { isLoading.value = true; }
  getNotesList(_params).then((res) => {
    if (params.value.page_num > 1) {
      noteData.value.list.push(...res.list);
      noteData.value.is_more = res.is_more;
    } else {
      noteData.value = res;
    }
    loadingStatus.value = 'success';
  }).catch(() => {
    if (params.value.page_num === 1) {
      loadingStatus.value = 'error';
    }
  }).finally(() => {
    isLoading.value = false;
  });
};

const getDay = (date: Date | string) => {
  const format = useFormatDate(date, 'dd');
  return format || '-';
};
getList();
const handleClickTag = (id:number) => {
  router.push({
    path: '/notes/list',
    query: {
      tag: id
    }
  });
};
watch(() => params.value.category_tags, () => {
  getList();
});
const handleLoadingMore = () => {
  params.value.page_num++;
  getList();
};
</script>

<template>
  <div class="cz-my-0 cz-mx-auto cz-max-w-3xl">
    <div class="cz-mt-20 cz-min-h-[800px] cz-rounded-2xl cz-bg-gray-50 dark:cz-bg-slate-800">
      <CzTagCard v-model:value="params.category_tags" @click-tag="handleClickTag" />
      <CzSkeleton v-if="loadingStatus==='loading'" class="cz-h-screen" />
      <template v-else-if="loadingStatus==='success' && noteData.list?.length">
        <div v-for="item in noteData?.list" :key="item.id" class="cz-flex cz-space-y-10">
          <div class="left-time cz-relative cz-w-12 cz-flex cz-items-center">
            <div class="cz-absolute cz-rounded cz-border-amber-400 -cz-left-0 cz-z-10 cz-top-[28%] cz-border cz-w-16 cz-h-16" />
            <div class="cz-absolute cz-rounded cz-bg-sky-600 cz-text-white cz-shadow-lg cz-shadow-lime-50 -cz-left-2 cz-z-20 cz-top-1/3 cz-border cz-w-16 cz-h-16">
              <span class="cz-inline-block cz-text-center cz-w-full cz-text-3xl cz-font-bold">{{ getDay(item.create_date ?? '') }}</span>
              <time class="cz-text-xs cz-inline-block  cz-text-center cz-w-full cz-font-bold">{{ useFormatDate(item.create_date ?? '', 'yyyy/MM') }}</time>
            </div>
          </div>
          <div class="cz-flex-1 cz-px-8">
            <h3 class="top-title cz-py-4">
              {{ item.title }}
            </h3>
            <div class="cz-flex  cz-space-x-10">
              <span class="cz-inline-block cz-text-xs cz-text-sub cz-py-3"><cz-icon name="eye" /> 阅读次数： {{ item.view_number ?? '-' }}</span>
              <span class="cz-inline-block cz-text-xs cz-text-sub cz-py-3"><cz-icon name="tag" />{{ useTags(item) }}</span>
              <span v-if="item.city" class="cz-inline-block cz-text-xs cz-text-sub cz-py-3"><cz-icon name="geo" />   {{ item.city }}</span>
            </div>
            <article class="cz-note-content">
              <ep-text-fold :line="3">
                <p>
                  {{ item.description }}
                </p>
              </ep-text-fold>
            </article>
            <div class="cz-flex cz-justify-end cz-px-6 cz-py-4">
              <NuxtLink
                :to="`${ROUTER_PREFIX}/notes/${item.uid}`"
                class="cz-p-1 cz-text-orange-500"
              >
                阅读全文
                <cz-icon name="arrow-return-right" />
              </NuxtLink>
            </div>
            <ep-line />
          </div>
        </div>
      </template>
      <cz-empty v-else />
      <div
        v-show="noteData.list?.length && loadingStatus==='success'"
        class="cz-w-full cz-flex cz-py-5 cz-justify-center"
      >
        <div
          v-if="noteData.is_more===1"
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
        <div v-else class="cz-my-10">
          没有数据啦~
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
