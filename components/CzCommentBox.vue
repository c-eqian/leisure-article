<script setup lang="ts">
const datetime = defineModel('datetime', {
  type: String,
  default: ''
})
const className = defineModel('className', {
  type: String,
  default: ''
})
</script>

<template>
  <div class="cz-flex cz-h-full cz-w-full cz-py-2">
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
      <div class="cz-px-2 cz-py-4" :class="className">
        <div class="cz-w-full">
          <slot v-if="$slots.content" name="content" />
        </div>
        <div class="cz-pt-2 cz-w-full">
          <slot v-if="$slots.action" name="action" />
          <div v-else class="cz-flex cz-space-x-10 cz-text-sm">
            <div>点赞</div>
            <div>回复</div>
          </div>
          <div v-if="$slots.reply">
            <slot name="reply" />
          </div>
        </div>
      </div>
      <!--          二级评论-->
      <div v-if="$slots.sub" class="cz-p-4 cz-rounded dark:cz-bg-zinc-800 cz-bg-[#f8f9fa]">
        <slot name="sub" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
