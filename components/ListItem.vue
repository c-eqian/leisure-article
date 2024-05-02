<script lang="ts" setup>
import { useBeforeDate } from 'co-utils-vue'
import type { PropType } from 'vue'

import type { IArticleItem } from '~/api/article/type'
import { ROUTER_PREFIX } from '@/constant'

defineProps({
  position: {
    type: Number,
    default: 0
  },
  row: {
    type: Object as PropType<IArticleItem>,
    default: () => {
    }
  }
})
</script>

<template>
  <div
    class="
    cz-rounded-lg
    cz-relative cz-shadow-[2px_2px_5px_1px_rgba(229,231,235,1)]
   "
  >
    <div class="-cz-top-1 cz-z-50 -cz-left-1.5 cz-absolute">
      <img
        v-if="row.is_top==1"
        alt=""
        src="@/assets/svg/top.svg"
        class="cz-w-10 cz-h-10"
      >
    </div>
    <div class="list-item-card cz-p-1 cz-flex">
      <div
        v-if="position % 2 === 0"
        class="item-left-image"
      >
        <CzImageCover
          v-if="row.cover"
          :url="row.cover || ''"
          class="img-fluid max-md:cz-w-[80px] md:cz-max-w-[150px] cz-max-h-[150px]
          max-md:cz-h-[80px] cz-w-full cz-h-full"
        />
      </div>
      <div class="item-right-wrapper cz-flex-1 max-md:cz-h-[100px]">
        <div class="cz-p-2">
          <div class="article-content md:cz-mb-6 max-md: cz-mb-1">
            <div class="article-title cz-text-lg cz-ellipsis">
              <NuxtLink
                :to="`${ROUTER_PREFIX}/article/${row.uid}`"
                class="cz-p-1"
                target="_blank"
              >
                {{ row.title }}
              </NuxtLink>
            </div>
            <hr class="cz-divider">
            <div class="article-des cz-p-0.5 max-md:cz-text-xs cz-ellipsis-2 cz-text-[#a0a0a0]">
              {{ row.describe }}
            </div>
          </div>
          <div class="article-info cz-p-0.5 cz-flex cz-justify-start cz-text-xs cz-text-[#a0a0a0]">
            <div class="cz-pr-3">
              <CzIcon name="person" class="cz-text-xs" />
              <a
                class="cz-px-0.5"
                href="#"
              >{{ row?.user_info?.username }}</a>
            </div>
            <div class="cz-px-3 md:cz-block cz-hidden">
              <CzIcon name="book" class="cz-text-xs" />
              <a
                class="cz-px-0.5"
                href="#"
              >{{ row.category?.category_name }}</a>
            </div>
            <div class="cz-px-3">
              <CzIcon name="clock " class="cz-text-xs" />
              <a
                class="cz-px-0.5"
                href="#"
              >{{ useBeforeDate(row.create_date) }}</a>
            </div>
            <div class="cz-px-3 md:cz-block cz-hidden">
              <CzIcon name="chat-square-dots " class="cz-text-xs" />
              <a
                class="cz-px-0.5"
                href="#"
              >{{ row.comment_count ? (row.comment_count+ '条评论') : '暂无评论' }}</a>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="position % 2 === 1"
        class="item-left-image"
      >
        <CzImageCover
          v-if="row.cover"
          :url="row.cover"
          class="img-fluid max-md:cz-w-[80px] md:cz-max-w-[150px] cz-max-h-[150px]
          max-md:cz-h-[80px] cz-w-full cz-h-full"
          style="object-fit: cover"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-item-card{

}
</style>
