<script lang="ts" setup>
const props = defineProps({
  url: {
    type: String,
    default: ''
  }
})
const imageUrl = computed(() => props.url)
</script>

<template>
  <div class="cz-relative cz-w-full cz-box-border cz-overflow-hidden cz-h-full">
    <img
      :src="imageUrl"
      alt="图片"
      class="cz-cursor-pointer cz-w-full cz-h-full cz-bg-cover cz-bg-center cz-bg-no-repeat hover:cz-scale-150"
      style="transition: all .5s ease .1s"
      v-bind="$attrs"
    >
    <slot />
  </div>
</template>

<style lang="scss" scoped>

</style>
