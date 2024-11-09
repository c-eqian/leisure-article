<script setup lang="ts">
const name = defineModel('name', {
  type: String,
  default: ''
})
</script>

<template>
  <i class="bi cz-px-1" :class="`bi-${name}`" />
</template>

<style scoped>

</style>
