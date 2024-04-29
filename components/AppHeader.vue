<script setup lang="ts">
import CzIcon from "~/components/CzIcon.vue";

const drawer = ref(false)
const menuList = ref([
  {
    name: '测试1',
    path: 'test1',
    icon: 'house'
  },
  {
    name: '测试2',
    path: 'test2',
    icon: 'image'
  },
  {
    name: '测试3',
    path: 'test3',
    icon: 'person-circle'
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

      <v-spacer />

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
    <v-app-bar theme="dark" scroll-behavior="hide" class="!cz-bg-transparent cz-px-2 cz-fixed cz-top-0" flat>
      <v-app-bar-title>logo</v-app-bar-title>
      <v-spacer />
      <ul class="cz-flex cz-px-8 max-md:cz-hidden">
        <li v-for="item in menuList" :key="item.name" class="nav-item cz-mx-2 cz-cursor-pointer cz-flex cz-items-center">
          <CzIcon :name="item.icon" />
          <span class="cz-px-2">{{ item.name }}</span>
        </li>
      </ul>
      <v-btn icon class="md:!cz-hidden" @click.stop="drawer = !drawer">
        <v-app-bar-nav-icon />
      </v-btn>
    </v-app-bar>
    <v-main class="cz-h-screen cz-w-full !cz-pt-0">
        <slot />
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
.nav-item {
  position: relative;

  > a.active {
    --bs-navbar-active-color: #3eaf7c;
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #80c8f8;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition: .3s ease-in-out;
  }

  &:hover:after {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}
</style>
