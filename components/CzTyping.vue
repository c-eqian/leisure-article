<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  customStyle: {
    type: Object,
    default: () => {
    }
  }
})
const customStyleComputed = computed(() => props.customStyle)
const currentText = ref('')
let _id:any
onMounted(() => {
  let index = 0
  _id && clearInterval(_id)
  _id = setInterval(() => {
    if (index < props.text.length) {
      currentText.value += props.text.charAt(index)
      index += 1
    }
  }, 100)
})

</script>

<template>
  <div class="typing-effect">
    <span
      v-for="(char, index) in currentText"
      :key="index"
      :class="`char-${index}`"
      :style="customStyleComputed"
    >{{ char }}</span>
  </div>
</template>

<style scoped lang="scss">
.char-0 {
  opacity: 0;
  animation: typing 1s ease-in-out forwards;
}
@keyframes typing {
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
