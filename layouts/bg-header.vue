<script setup lang="ts">
// import { useGlobalStore } from '~/store';
import type { IWebsite } from '~/api/system/type';
import { useAsyncRequest } from '~/api/server';
// const website = ref<IWebsite.Data>({} as IWebsite.Data);
// const systemStore = useGlobalStore();

const { data: website = {} as IWebsite.Data } = await useAsyncRequest<IWebsite.Data>('WEBSITE-CONFIG', 'system/website');
const computedStyle = computed(() => {
  return {
    background: `url(${unref(website)?.website_cover})  no-repeat fixed`
  };
});
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
