<script setup lang="ts">
import CzIcon from '~/components/CzIcon.vue'

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
  <section>
    <nav>
      <ul class="cz-flex cz-px-8 max-md:cz-hidden">
        <li v-for="item in menuList" :key="item.name" class="nav-item cz-mx-2 cz-cursor-pointer cz-flex cz-items-center">
          <CzIcon :name="item.icon" />
          <span class="cz-px-2">{{ item.name }}</span>
        </li>
      </ul>
    </nav>
    <main class="cz-h-screen cz-w-full !cz-pt-0">
      <slot />
    </main>
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
