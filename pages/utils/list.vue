<script setup lang="ts">
import { EpCard } from 'e-plus-ui';
import { getSystemGithub } from '~/api/system';
import type { Github } from '~/api/system/type';
const github = ref<Github[]>([]);
getSystemGithub().then((res) => {
  github.value = res;
});
</script>

<template>
  <div class="cz-max-w-5xl dark:cz-text-white cz-p-2 cz-w-full cz-relative cz-mx-auto cz-my-0">
    <ep-card
      title="仓库项目"
      class="
      cz-min-h-[300px] cz-items-start cz-py-0 cz-my-16 cz-flex-1
      md:cz-px-5"
    >
      <cz-empty v-if="github.length===0" />
      <div v-else class="cz-flex cz-flex-wrap cz-justify-start cz-space-x-2">
        <ep-card
          v-for="item in github"
          :key="item.repo_name"
          :avatar="item.avatar_url"
          shadow="always"
          :title="item.repo_name"
          class="cz-min-h-48 cz-min-w-64 cz-flex-1"
        >
          <template #extra>
            <a :href="item.html_url" target="_blank" class="flex items-center cz-space-5">
              <cz-icon name="share" />
              <span class="cz-inline-block">详情</span>
            </a>
          </template>
          {{ item.description }}
        </ep-card>
      </div>
    </ep-card>
  </div>
</template>

<style scoped lang="scss">

</style>
