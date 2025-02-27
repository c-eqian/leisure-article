<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  isLeftCard: {
    type: Boolean,
    default: true
  },
  isTransition: {
    type: Boolean,
    default: true
  }
})

const computeLeftTrsCls = computed(() => {
  return {
    'cz-fade-in': props.isTransition
  }
})
const computeLeftCardCls = computed(() => {
  return {
    'cz-bg-white': props.isLeftCard,
    ...computeLeftTrsCls.value
  }
})
</script>

<template>
  <div class="cz-bg-slate-100 cz-w-full cz-h-full">
    <div class="cz-my-0 cz-mx-auto cz-max-w-7xl cz-flex cz-space-x-5">
      <div class="max-md:cz-hidden cz-aside-left cz-overflow-auto cz-w-56 cz-relative">
        <div class="cz-fixed cz-top-5 cz-w-56">
          <div v-if="$slots['left-top']" :class="computeLeftTrsCls" class="slide-top cz-h-full cz-bg-white cz-mb-6 cz-rounded-2xl cz-p-2">
            <slot name="left-top" />
          </div>
          <div v-if="$slots['left-bottom']" :class="computeLeftTrsCls" class="slide-top  cz-h-full cz-bg-white cz-mb-6 cz-rounded-2xl cz-p-2">
            <slot name="left-bottom" />
          </div>
          <div v-if="$slots.left" class="slide-top cz-h-full  cz-mb-6 cz-rounded-2xl cz-p-2" :class="computeLeftCardCls">
            <slot name="left" />
          </div>
        </div>
      </div>
      <div class="cz-flex-1 max-md:cz-w-full cz-bg-white cz-min-h-[800px]">
        <slot />
      </div>
      <div class="max-md:cz-hidden cz-aside-right cz-w-80 cz-relative">
        <div class="cz-fixed cz-top-5 cz-w-80 cz-overflow-auto cz-h-screen">
          <div v-if="$slots['right-top']" :class="computeLeftTrsCls" class="slide-top  cz-max-h-96 cz-bg-white cz-mb-6 cz-rounded-2xl cz-p-2">
            <slot name="right-top" />
          </div>
          <div v-if="$slots['right-bottom']" :class="computeLeftTrsCls" class="slide-top  cz-bg-white cz-mb-6 cz-rounded-2xl cz-p-2">
            <slot name="right-bottom" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cz-fade-in {
  transition: .2s;
  animation: scale-in 0.5s forwards ease-in-out;
}
@keyframes scale-in {
  from {
    opacity: 0;
    transform: translateY(2.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
