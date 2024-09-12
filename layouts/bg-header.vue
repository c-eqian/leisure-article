<script setup lang="ts">
import { useGlobalStore } from '~/store';
import type { IWebsite } from '~/api/system/type';
const website = ref<IWebsite.Data>({} as IWebsite.Data);
const systemStore = useGlobalStore();
const websiteInfo = () => {
  systemStore.getWebsite().then((res) => {
    website.value = res;
  });
};
const computedStyle = computed(() => {
  return {
    background: `url(${website.value.website_cover})  no-repeat fixed`
  };
});
websiteInfo();
</script>

<template>
  <div class="with-bg" :style="computedStyle">
    <AppHeader bg-inherit>
      <slot />
    </AppHeader>
    <cz-back-top />
  </div>
</template>

<style scoped lang="scss">
.with-bg{
  width: 100%;
  height: 100vh;
  position: fixed;
  background: url(https://www.bing.com/th?id=OHR.TeideNational_ZH-CN1367200520_1920x1080.jpg) no-repeat fixed;
  background-size: cover;
}
</style>
