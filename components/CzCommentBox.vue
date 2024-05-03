<script setup lang="ts">
const datetime = defineModel('datetime', {
  type: String,
  default: ''
})
</script>

<template>
  <div class="cz-flex cz-h-full cz-w-full ">
    <div>
      <slot name="avatar" />
    </div>
    <div class="cz-flex-1 cz-text-sm">
      <div class="cz-flex  cz-text-sm">
        <div class="cz-flex-1 cz-px-2 cz-text-sm">
          <slot v-if="$slots.left" name="left" />
        </div>
        <div>
          <slot v-if="$slots.right" name="right" />
          <div>
            <time>{{ datetime }}</time>
          </div>
        </div>
      </div>
      <div class="cz-px-2 cz-py-4">
        <div class="cz-w-full">
          <slot v-if="$slots.content" name="content" />
          <div v-else class="cz-py-2">
            正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容
          </div>
        </div>
        <div class="cz-pt-2 cz-w-full">
          <slot v-if="$slots.action" name="action" />
          <div v-else class="cz-flex cz-space-x-10 cz-text-sm">
            <div>点赞</div>
            <div>回复</div>
          </div>
        </div>
      </div>
      <!--          二级评论-->
      <div v-if="$slots.sub" class="cz-p-4 cz-rounded dark:cz-bg-slate-800 cz-bg-gray-100">
        <slot name="sub" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
