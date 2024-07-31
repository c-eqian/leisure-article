<script setup lang="ts">
const imgSrc = defineModel('imgSrc', {
  type: String,
  default: ''
})
const isDefaultImg = defineModel('isDefaultImg', {
  type: Boolean,
  default: true
})
const isRound = defineModel('round', {
  type: [Boolean, String],
  default: false
})
const imgRef = ref<HTMLImageElement>()
const isFirst = ref(true)
const defaultImg = 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg'
const handleError = () => {
  if (isDefaultImg.value && imgRef.value && isFirst.value) {
    imgRef.value.src = defaultImg
    isFirst.value = false
  }
}
const style = computed(() => {
  if (typeof isRound.value === 'boolean' && isRound.value) {
    return {
      borderRadius: '50%'
    }
  } else if (typeof isRound.value === 'string') {
    return {
      borderRadius: isRound.value
    }
  }
  return {
  }
})
</script>

<template>
  <img
    v-if="isDefaultImg || imgSrc"
    ref="imgRef"
    :src="imgSrc || defaultImg"
    alt=""
    :style="style"
    class="cz-w-full cz-h cz-object-cover cz-h-full "
    @error="handleError"
  >
</template>

<style scoped lang="scss">
.is-skeleton {
  background: linear-gradient(90deg, #f0f2f5 25%, #e6e8eb 37%, #f0f2f5 63%);
  background-size: 400% 100%;
  animation: ep-skeleton-loading 1.4s ease infinite;
}
@keyframes ep-skeleton-loading{
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

</style>
