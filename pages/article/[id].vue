<script setup lang="ts">
definePageMeta({
  layout: 'detail'
});
const { id } = useRoute().params;
</script>

<template>
  <div>
    <cz-banner />
    测试{{ id }}
    <el-button type="primary" icon="Edit">
      测试
    </el-button>
  </div>
</template>

<style scoped>

</style>
