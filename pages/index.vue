<script setup lang="ts">
import { useGlobalStore } from '~/store';
import CzBanner from '~/components/CzBanner.vue';

const userStore = useGlobalStore();
const handleChange = () => {
  userStore.setUserInfo(Math.random());
};
const user = computed(() => userStore.userInfo);
/**
 * SEO
 */
const useHeadOption = computed(() => {
  return {
    title: 'Eqian主页',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Eqian主页'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Eqian主页'
      }
    ]
  };
});
useHead(useHeadOption);
</script>

<template>
  <div class="cz-w-full cz-h-full cz-flex cz-flex-col">
    <cz-banner />
    <div class="cz-max-w-7xl cz-p-2 cz-w-full cz-relative cz-flex cz-mx-auto cz-my-0 cz-flex-1">
      <div class="cz-bg-amber-200 cz-h-full max-md:cz-w-full cz-w-2/3">
        <div v-for="item in 50" :key="item">
          <div class="cz-h-52 cz-p-2">
            {{ item }}
          </div>
        </div>
      </div>
      <div class=" cz-sticky cz-top-0  cz-bg-blue-400  cz-h-96 max-md:cz-hidden cz-w-1/3  ">
        <div class=" cz-h-full  " />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: $secondary;
}
</style>
