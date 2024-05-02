<script setup lang="ts">

</script>

<template>
    <div class="cz-flex cz-h-full cz-w-full">
      <div>
        <img src="https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg" alt=""
             class="cz-rounded-full cz-object-cover" width="36" height="36">
      </div>
      <div class="cz-flex-1 cz-text-sm">
        <div class="cz-flex cz-text-[#945c5f] cz-text-sm">
          <div class="cz-flex-1 cz-px-2 cz-text-sm">
            <slot v-if="$slots.left" name="left"></slot>
            <div v-else class="cz-text-[#945c5f]">
              <span>昵称</span>
            </div>
          </div>
          <div>右侧</div>
        </div>
        <div class="cz-px-2 cz-py-4">
          <div class="cz-w-full">
            <slot v-if="$slots.content" name="content"></slot>
            <div v-else class="cz-py-2">
              正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容
            </div>
          </div>
          <div class="cz-pt-2 cz-w-full">
            <slot v-if="$slots.action" name="action"></slot>
            <div v-else class="cz-flex cz-space-x-10 cz-text-sm">
              <div>点赞</div>
              <div>回复</div>
            </div>
          </div>
        </div>
        <!--          二级评论-->
        <div v-if="$slots.sub" class="cz-bg-[#f8f9fa] cz-p-4 cz-rounded">
          <slot  name="sub"></slot>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>
