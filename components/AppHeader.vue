<script setup lang="ts">
const drawer = ref(false)
const menuList = ref([
  {
    name: '测试1',
    path: 'test1'
  },
  {
    name: '测试2',
    path: 'test2'
  },
  {
    name: '测试3',
    path: 'test3'
  }
])
</script>

<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      scrim
      temporary
    >
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="Eqian"
      />

      <v-divider />

      <v-list density="compact" nav>
        <v-list-item
          v-for="item in menuList"
          :key="item.name"
          prepend-icon="mdi-view-dashboard"
          :title="item.name"
          :value="item.path"
        />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar scroll-behavior="hide" class="cz-bg-transparent cz-px-2" flat absolute>
      <v-app-bar-title>logo</v-app-bar-title>
      <v-spacer />
      <ul class="cz-flex cz-px-8 max-md:cz-hidden">
        <li v-for="item in menuList" :key="item.name">
          {{ item.name }}
        </li>
      </ul>
      <v-btn icon class="md:!cz-hidden" @click.stop="drawer = !drawer">
        <v-app-bar-nav-icon />
      </v-btn>
    </v-app-bar>
    <v-main class="cz-h-screen">
      <div>
        <slot />
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
