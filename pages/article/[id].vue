<script setup lang="ts">
const { id } = useRoute().params;
</script>

<template>
  <div>
    测试{{ id }}
    <el-button type="primary" icon="Edit">
      测试
    </el-button>
  </div>
</template>

<style scoped>

</style>
