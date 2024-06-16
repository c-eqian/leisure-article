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

</style>
