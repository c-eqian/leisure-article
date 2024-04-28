<script setup lang="ts">
const name = defineModel('name', {
  type: String,
  default: ''
})
</script>

<template>
  <i class="bi" :class="`bi-${name}`" />
</template>

<style scoped>

</style>
