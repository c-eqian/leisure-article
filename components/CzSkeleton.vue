<script setup lang="ts">

</script>

<template>
  <div class="cz-w-full cz-h-full">
    <q-item v-for="i in 10" :key="i">
      <q-item-section avatar>
        <q-skeleton type="QAvatar" />
      </q-item-section>

      <q-item-section>
        <q-item-label>
          <q-skeleton type="text" />
        </q-item-label>
        <q-item-label caption>
          <q-skeleton type="text" width="65%" />
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<style scoped lang="scss">

</style>
