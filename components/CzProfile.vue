<script setup lang="ts">
// import { useUserStore } from '@/hooks/store'
// import { isMobile } from '@/hooks/use-utils/helper'
// import Base from '@/modules/profile/Base.vue'
// import ProfileDynamic from '@/modules/profile/ProfileDynamic.vue'
// import PwdUpdate from '@/modules/profile/PwdUpdate.vue'
// import TabsBase from '@/modules/profile/tabsBase.vue'

// const userStore = useUserStore()

// import { isMobile } from '@/composables'

// const _userInfo = computed(() => userStore.userInfo)
// provide('USER-INFO', _userInfo)
</script>

<template>
  <div class="cz-h-[100vh] cz-flex cz-justify-center cz-p-4 cz-profile">
    <div class="cz-min-h-72 cz-p-2 max-md:cz-w-full cz-w-1/2">
      <Base />
      <div class="cz-py-4 cz-flex">
        <div class="cz-flex-1 card-bg cz-rounded-[8px] cz-min-h-96" />
      </div>
    </div>
  </div>
<!--  <div-->
<!--    v-if="!isMobile"-->
<!--    class="wallpaper"-->
<!--  >-->
<!--    <video-->
<!--      ref="videoRef"-->
<!--      muted-->
<!--      autoplay-->
<!--      loop-->
<!--    >-->
<!--      <source-->
<!--        src="@/assets/video.mp4"-->
<!--        type="video/mp4"-->
<!--      >-->
<!--    </video>-->
<!--  </div>-->
</template>

<style scoped lang="scss">
.wallpaper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* 确保视频在其他内容之后显示 */
}
</style>
