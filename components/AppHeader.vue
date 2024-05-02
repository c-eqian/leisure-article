<script setup lang="ts">
import CzIcon from '~/components/CzIcon.vue'

const drawer = ref(false)
const menuList = ref([
  {
    name: '首页',
    path: '/',
    icon: 'house'
  },
  {
    name: '壁纸',
    path: '/wallpaper/list',
    icon: 'image'
  },
  {
    name: '登录',
    path: '/login',
    icon: 'person-circle'
  }
])
</script>

<template>
  <section>
    <q-layout view="hHh lpR fFf">
      <q-drawer v-model="drawer" behavior="mobile" overlay side="right">
        <ul class="cz-flex cz-px-8">
          <li v-for="item in menuList" :key="item.name" class="nav-item cz-mx-2 cz-cursor-pointer cz-flex cz-items-center">
            <NuxtLink :to="item.path" target="_blank" class="cz-px-2">
              <CzIcon :name="item.icon" />
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </q-drawer>
      <q-header reveal class="cz-fixed cz-bg-transparent cz-top-0 cz-text-white">
        <q-toolbar class="cz-text-inherit">
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            Eqian
          </q-toolbar-title>
          <ul class="cz-flex cz-px-8 max-md:cz-hidden">
            <li v-for="item in menuList" :key="item.name" class="nav-item cz-mx-2 cz-cursor-pointer cz-flex cz-items-center">
              <NuxtLink :to="item.path" target="_blank" class="cz-px-2">
                <CzIcon :name="item.icon" />
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
          <q-btn
            class="md:cz-hidden"
            dense
            flat
            round
            icon="menu"
            @click="drawer=!drawer"
          />
        </q-toolbar>
      </q-header>
      <main class="cz-h-screen cz-w-full !cz-pt-0">
        <slot />
      </main>
    </q-layout>
  </section>
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
