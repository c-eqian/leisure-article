<script setup lang="ts">
import { MdPreview, MdCatalog, config } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import { useFormatDate } from '@eqian/utils-vue';
import { isArray } from '@vue/shared';
import { useGlobalStore } from '~/store';
import { useTargetBlankExtension } from '~/composables/md-it';
import type { INoteItem } from '~/api/notes/type';
import { getNote } from '~/api/notes';
definePageMeta({
  scrollToTop: true
});
const systemStorage = useGlobalStore();
const themeMode = computed(() => systemStorage.theme);
const isCategory = ref(true);
const { id } = useRoute().params;
const noteData = ref<INoteItem>({} as INoteItem);
const scrollElement = import.meta.browser ? document.documentElement : 'body';

config({
  markdownItConfig (md) {
    return useTargetBlankExtension(md);
  }
});
/**
 * SEO
 */
const metaDescription = computed(() => noteData.value?.content?.substring(0, 500)
  .replace(/\r?\n/g, '').replace(/#/g, '') + '...');
const metaKeywords = computed(() => noteData.value?.title?.length > 0 ? noteData.value.title : '');
const useHeadOption = computed(() => {
  return {
    title: `${noteData.value?.title || '笔记详情'}`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `${noteData.value?.title || ''} - ${metaDescription.value}`
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
useHead(useHeadOption);
const getNoteDetail = () => {
  if (!id) { return; }
  useAsyncData('note-detail', () => getNote(id as string)).then((res) => {
    noteData.value = res.data.value || {} as INoteItem;
  });
};

getNoteDetail();
const handleTags = (tags: string[] | string |undefined) => {
  if (isArray(tags)) {
    return tags.join('、');
  }
  return tags ?? '';
};
</script>

<template>
  <div class="cz-mt-12">
    <div class="cz-max-w-7xl  cz-p-2 cz-flex cz-mx-auto cz-my-0">
      <article class="max-md:cz-w-full cz-w-4/5  cz-pb-10 cz-rounded-2xl">
        <div class="cz-w-full cz-px-10 cz-text-gray-500">
          <h1>{{ noteData?.title }}</h1>
          <div class="cz-py-1 md:cz-flex cz-items-center cz-text-xs cz-space-x-5 max-md: cz-hidden">
            <div class="cz-space-x-1.5">
              <CzIcon name="person" />
              <span>{{ noteData?.user_info?.username }}</span>
            </div>
            <div class="cz-space-x-1.5">
              <CzIcon name="bookmark" />
              <span>{{ handleTags(noteData?.tags) }}</span>
            </div>
            <div class="cz-space-x-1.5">
              <CzIcon name="calendar-date" />
              <span>{{ useFormatDate(noteData?.create_date|| '', 'YYYY-MM-dd HH:mm') }}</span>
            </div>
            <client-only>
              <div v-if="noteData.province" class="cz-space-x-1.5">
                <CzIcon name="geo-alt" />
                <span>{{ handleAddress(noteData?.province, noteData?.city) }}</span>
              </div>
            </client-only>
          </div>
        </div>
        <hr class="max-md:cz-hidden">
        <md-preview
          id="md-preview-note"
          :code-foldable="false"
          code-theme="stackoverflow"
          :theme="themeMode"
          editor-id="md-preview-note"
          :model-value="noteData?.content"
        />
        <div class="update-time cz-px-4 cz-float-right cz-text-[#a0a0a0] cz-py-5 cz-text-xs">
          <span>最近更新：</span>
          <time>{{ useFormatDate(noteData?.update_date|| '', 'yyyy-MM-dd HH:mm') }}</time>
        </div>
        <hr class="cz-divider cz-clear-right">
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
