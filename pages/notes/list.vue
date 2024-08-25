<script setup lang="ts">
import { EpTextFold, EpLine } from 'e-plus-ui';
</script>

<template>
  <div class="cz-my-0 cz-mx-auto cz-max-w-3xl">
    <div class="cz-mt-20 cz-shadow-lg">
      <div v-for="i in 10" :key="i" class="cz-flex cz-space-y-10">
        <div class="left-time cz-relative cz-flex cz-items-center">
          <div class="cz-absolute cz-rounded -cz-left-0 cz-z-10 cz-top-[48%] cz-border cz-w-16 cz-h-16" />
          <div class="cz-absolute cz-rounded cz-bg-amber-200 cz-shadow-lg cz-shadow-lime-50 -cz-left-2 cz-z-20 cz-top-1/2 cz-border cz-w-16 cz-h-16">
            <span class="cz-inline-block cz-text-3xl cz-font-bold">15</span>
            <time class="cz-text-xs cz-inline-block cz-font-bold">2024-08</time>
          </div>
        </div>
        <div class="cz-flex-1 cz-px-8">
          <div class="top-title cz-py-4">
            标题
          </div>
          <div class="cz-flex cz-space-x-10">
            <span class="cz-inline-block cz-text-xs cz-text-sub cz-py-3">阅读次数 9999</span>
            <span class="cz-inline-block cz-text-xs cz-text-sub cz-py-3">标签 9999</span>
          </div>
          <article class="cz-note-content">
            <ep-text-fold :line="3">
              正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容
              正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容
              正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容
              正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容
              正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容
              正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容
            </ep-text-fold>
          </article>
          <div class="cz-flex cz-justify-end cz-px-6 cz-py-8">
            <div class="cz-text-orange-300">
              全文
            </div>
          </div>
          <ep-line />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
