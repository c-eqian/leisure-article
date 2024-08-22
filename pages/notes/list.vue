<script setup lang="ts">
import { EpTextFold, EpLine } from 'e-plus-ui';
</script>

<template>
  <div class="cz-my-0 cz-mx-auto cz-max-w-3xl">
    <div class="cz-mt-20 cz-shadow-lg">
      <div v-for="i in 10" :key="i" class="cz-flex cz-space-y-10">
        <div class="left-time cz-flex cz-items-center">
          左侧时间栏
        </div>
        <div class="cz-flex-1 cz-px-8">
          <div class="top-title cz-py-4">
            标题
          </div>
          <span class="cz-inline-block cz-text-xs cz-text-sub cz-py-3">阅读次数 9999</span>
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
