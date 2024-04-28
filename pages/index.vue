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
  <div>
    <cz-banner />
    <div v-for="i in 20" :key="i">
      <h1>首页 {{ user }}</h1>
      <el-button @click="handleChange">
        修改用户
      </el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: $secondary;
}
</style>
