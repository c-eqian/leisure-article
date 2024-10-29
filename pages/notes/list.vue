<script setup lang="ts">
import { EpTextFold, EpLine, EpPagination } from 'e-plus-ui';
import { useFormatDate } from '@eqian/utils-vue';
import { getNotesList } from '~/api/notes';
import type { INoteRes } from '~/api/notes/type';
import { ROUTER_PREFIX } from '~/constant';
import { useTags } from '~/composables/tags';
const noteData = ref<INoteRes>({
  total: 0,
  list: [],
  is_more: 1
});
const params = ref({
  page_size: 20,
  page_num: 1
});
const getList = async () => {
  const { data } = await useAsyncData('note-list', () => getNotesList(params.value));
  if (data.value) {
    noteData.value = data.value;
  }
};

const getDay = (date: Date | string) => {
  const format = useFormatDate(date, 'dd');
  return format || '-';
};
await getList();
const handlePagination = async ({ page, limit }) => {
  params.value.page_num = page;
  params.value.page_size = limit;
  await getList();
};
</script>

<template>
  <div class="cz-my-0 cz-mx-auto cz-max-w-3xl">
    <div class="cz-mt-20 cz-shadow-lg">
      <cz-empty v-if="noteData.list?.length===0" />
      <template v-else>
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
              <span class="cz-inline-block cz-text-xs cz-text-sub cz-py-3"><cz-icon name="bookmark" />{{ useTags(item) }}</span>
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
        <div class="cz-py-20">
          <EpPagination
            v-model:page="params.page_num"
            v-model:limit="params.page_size"
            :total="noteData?.total"
            layout="prev, pager, next, jumper, ->"
            @pagination="handlePagination"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
