<script setup lang="ts">
import { EpCard } from 'e-plus-ui';
import { getSystemGithub } from '~/api/system';
import type { Github } from '~/api/system/type';
definePageMeta({
  layout: 'bg-header'
});
const isLoading = ref(true);
const github = ref<Github[]>([]);
getSystemGithub().then((res) => {
  github.value = res;
}).finally(() => {
  isLoading.value = false;
});
</script>

<template>
  <div class="cz-max-w-5xl dark:cz-text-white cz-p-2 cz-w-full cz-relative cz-mx-auto cz-my-0">
    <main
      class="
      cz-min-h-[300px] cz-items-start cz-py-0 cz-my-16 !cz-bg-gray-50/80 cz-flex-1
      md:cz-px-5 cz-overflow-auto cz-h-[calc(100vh-100px)]"
    >
      <template v-if="isLoading">
        <div class="cz-flex cz-h-full cz-justify-center cz-items-center">
          <CzLoading v-if="isLoading" />
        </div>
      </template>
      <template v-else>
        <cz-empty v-if="github.length===0 && !isLoading" />
        <div v-else class="cz-grid cz-grid-cols-3 cz-grid-rows-3 cz-gap-2 cz-py-10">
          <ep-card
            v-for="item in github"
            :key="item.repo_name"
            :avatar="item.avatar_url"
            shadow="hover"
            :title="item.repo_name"
            class="cz-min-h-48 cz-min-w-64 cz-flex-1 !cz-bg-gray-50/80"
          >
            <template #extra>
              <a :href="item.html_url" target="_blank" class="flex items-center cz-space-5">
                <cz-icon name="share" />
                <span class="cz-inline-block cz-px-2">详情</span>
              </a>
            </template>
            {{ item.description }}
          </ep-card>
        </div>
      </template>
    </main>
  </div>
</template>

<style scoped lang="scss">
.cz-card-body{
  overflow: hidden;
}
</style>
