<script setup lang="ts">

</script>

<template>
  <div>
    <v-app-bar :elevation="2">
      <template #prepend>
        <v-app-bar-nav-icon />
      </template>
    </v-app-bar>
    <div style="margin-top: 70px">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
