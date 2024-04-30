<script setup lang="ts">
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
definePageMeta({
  layout: 'detail'
});
const isCategory = ref(true);
const { id } = useRoute().params;
console.log(id);
const text = '```bash\n' +
    '# npm\n' +
    'npm install\n' +
    '\n' +
    '# pnpm\n' +
    'pnpm install\n' +
    '\n' +
    '# yarn\n' +
    'yarn install\n' +
    '\n' +
    '# bun\n' +
    'bun install\n' +
    '```';
</script>

<template>
  <div>
    <cz-banner />
    <div class="cz-max-w-7xl cz-p-2 cz-flex cz-mx-auto cz-my-0">
      <div class="max-md:cz-w-full cz-w-4/5">
        <MdPreview id="preview-only" :model-value="text" />
      </div>
      <div
        class=" max-md:cz-hidden cz-sticky cz-top-8 cz-px-4 cz-w-1/5"
      >
        <v-switch v-model="isCategory" hide-details density="compact" label="目录" />
        <div
          class="cz-bg-gray-50 cz-min-h-72"
          :style="{
            display: isCategory? 'block': 'none'
          }"
        >
          1111
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
