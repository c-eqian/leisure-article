<script setup lang="ts">

import { useGlobalStore } from '~/store'

const userStore = useGlobalStore()
const userInfo = computed(() => userStore.userInfo)
</script>

<template>
  <div
    class="cz-min-h-24 card-bg cz-rounded-[8px] cz-w-full
      max-md:cz-flex-col cz-p-2 cz-flex cz-justify-between"
  >
    <div class="cz-flex cz-flex-1">
      <img
        :src="userInfo.avatar"
        alt="头像"
        style="object-fit: cover"
        class="cz-h-20 cz-w-20 cz-rounded-[8px]"
      >
      <div class="cz-px-2 cz-flex-1">
        <div class="cz-font-bold cz-text-sm">
          {{ userInfo.username }}
        </div>
        <div class="cz-text-xs cz-py-2 cz-text-[#a0a0a0]">
          <p class="cz-tracking-tight">
            {{ userInfo.motto || '-' }}
          </p>
        </div>
      </div>
    </div>
    <div class="max-md:cz-block md:cz-border-dashed max-md:cz-border-t-[1px] cz-py-1" />
    <div class=" cz-flex cz-text-sm md:cz-px-4 cz-items-center">
      <div>
        <div class="right-line cz-px-4 cz-flex cz-flex-col cz-justify-center cz-items-center">
          <span class="cz-font-medium">3</span>
          <span class="cz-text-[#a0a0a0]">文 章</span>
        </div>
      </div>
      <div>
        <div class="right-line cz-px-4 cz-flex cz-flex-col cz-justify-center cz-items-center ">
          <span class="cz-font-medium">999+</span>
          <span class="cz-text-[#a0a0a0]">获 赞</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
