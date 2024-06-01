<script lang="ts" setup>
defineOptions({
  name: 'CzBanner'
})
const bannerRef = ref<HTMLDivElement>()
const props = defineProps({
  scrollY: {
    type: Number,
    default: 0
  },
  isFull: {
    type: Boolean,
    default: false
  },
  height: {
    type: String,
    default: '450px'
  },
  fixed: {
    type: Boolean,
    default: true
  },
  bannerUrl: {
    type: String,
    default: ''
  }
})
const bannerUrlComputed = computed(() => props.bannerUrl)

// 解决水合问题
watchEffect(() => {
  if (process.client) {
    bannerRef.value?.style.setProperty('--banner-cover', `url(${bannerUrlComputed.value})`)
  }
})
</script>

<template>
  <div ref="bannerRef">
    <div
      :style="{height}"
      class="repo md:cz-h-[450px] cz-h-52 cz-bg-fixed"
    >
      <div style="margin: 0 auto;max-width: 620px; z-index: 10">
        <slot />
      </div>
      <slot name="layout" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.repo {
  text-align: center;
  overflow: hidden;
  background-color: #49b1f5 !important;
  background: var(--banner-cover);
  //height: v-bind("scrollY < 100 && isFull ? '100vh': '450px'");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: all .3s linear;
  background-attachment: fixed;
  transform-style: preserve-3d;
  position: relative;
  box-sizing: border-box;
  //transition: height 1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: -1;
    background-color: rgba(0, 0, 0, .4);
  }

  .arrow-animation {
    bottom: 30px;
    width: 20px;
    height: 20px;
    border-bottom: 3px solid #e0e0e0;
    border-right: 3px solid #e0e0e0;
    cursor: pointer;
    animation: AMove 5s ease-out infinite;
  }

  @keyframes AMove {
    0% {
      transform: translateY(0) rotate(45deg)
    }

    50% {
      transform: translateY(30px) rotate(45deg);
    }

    to {
      transform: translateY(0) rotate(45deg);
    }
  }
}
</style>
