<script setup lang="ts">
import { EpImage } from 'e-plus-ui'
const imageList = defineModel('imageList', {
  type: Array<string>,
  default: () => []
})
const computedCls = computed(() => {
  return {
    'cz-grid-cols-3 cz-grid-rows-1': imageList.value.length < 4,
    'cz-grid-cols-3 cz-grid-rows-2': imageList.value.length < 7 && imageList.value.length > 3,
    'cz-grid-cols-3 cz-grid-rows-3': imageList.value.length < 10 && imageList.value.length > 6
  }
})
</script>

<template>
  <client-only>
    <div class="cz-grid cz-gap-2 cz-h-full cz-w-full" :class="computedCls">
      <div
        v-for="image in imageList"
        :key="image"
        class="cz-h-full cz-w-full"
      >
        <EpImage border-radius="6px" scale :url="image" class="cz-h-full cz-image cz-w-full" />
      </div>
    </div>
  </client-only>
</template>

<style scoped lang="scss">
.cz-image {
  cursor: pointer;
}

</style>
