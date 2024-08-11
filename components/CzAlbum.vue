<script setup lang="ts">
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
        v-for="(image, index) in imageList"
        :key="image + index"
        class="cz-h-full cz-w-full"
      >
        <img :src="image" alt="" class="cz-h-full cz-image cz-w-full cz-object-cover cz-rounded-md">
      </div>
    </div>
  </client-only>
</template>

<style scoped lang="scss">
.cz-image {
  cursor: pointer;
}

</style>
