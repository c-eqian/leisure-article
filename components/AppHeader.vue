<script setup lang="ts">
import { useQuasar } from 'quasar'
import CzIcon from '~/components/CzIcon.vue'
import { useGlobalStore } from '~/store'
const drawer = ref(false)
const dialogVisible = ref(false)
const systemStore = useGlobalStore()
const $q = useQuasar()
const userInfoComputed = computed(() => systemStore.userInfo)
const menuList = ref([
  {
    name: '首页',
    path: '/',
    isReplace: false,
    icon: 'house'
  },
  {
    name: '壁纸',
    isReplace: false,
    path: '/wallpaper/list',
    icon: 'image'
  },
  {
    name: '登录',
    path: '/login',
    isReplace: true,
    icon: 'person-circle'
  }
])
// const router = useRouter()
const handleToRouter = () => {
  // router.replace('/login')
  dialogVisible.value = true
}
const handleLogoutItemClick = () => {
  $q.dialog({
    title: '提示',
    message: '确定退出登录吗?',
    cancel: '取消',
    ok: '确定',
    persistent: true
  }).onOk(async () => {
    await systemStore.logout()
  })
}
</script>

<template>
  <section>
    <q-layout view="hHh lpR fFf">
      <q-drawer v-model="drawer" behavior="mobile" overlay side="right">
        <ul class="cz-flex cz-px-8">
          <li v-for="item in menuList" :key="item.name" class="nav-item cz-mx-2 cz-cursor-pointer cz-flex cz-items-center">
            <NuxtLink v-if="!item.isReplace" :to="item.path" target="_blank" class="cz-px-2">
              <CzIcon :name="item.icon" />
              {{ item.name }}
            </NuxtLink>
            <div v-else class="cz-px-2 cz-cursor-pointer" @click="handleToRouter">
              <CzIcon :name="item.icon" />
              {{ item.name }}
            </div>
          </li>
        </ul>
      </q-drawer>
      <q-header reveal class="cz-fixed cz-bg-transparent cz-top-0 cz-text-white">
        <q-toolbar class="cz-text-inherit">
          <q-toolbar-title>
            <span class="cz-select-none">{{ systemStore.website.website_title || 'Eqian' }}</span>
          </q-toolbar-title>
          <ul class="cz-flex cz-px-8 max-md:cz-hidden">
            <li v-for="item in menuList" :key="item.name" class="nav-item cz-mx-2 cz-cursor-pointer cz-flex cz-items-center">
              <NuxtLink v-if="!item.isReplace" :to="item.path" target="_blank" class="cz-px-2">
                <CzIcon :name="item.icon" />
                {{ item.name }}
              </NuxtLink>
            </li>
            <li>
              <div v-if="userInfoComputed.isLogin" class="cz-px-2 cz-cursor-pointer nav-item">
                <q-btn-dropdown unelevated>
                  <q-list>
                    <q-item v-close-popup clickable>
                      <q-item-section>
                        <q-item-label>个人中心</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item v-close-popup clickable @click="handleLogoutItemClick">
                      <q-item-section>
                        <q-item-label>退出登录</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                  <template #label>
                    <q-chip>
                      <q-avatar>
                        <img v-img-lazy="[userInfoComputed.avatar, 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg']" alt="">
                      </q-avatar>
                      <span> {{ userInfoComputed.username }}</span>
                    </q-chip>
                  </template>
                </q-btn-dropdown>
              </div>
              <div v-else class="cz-px-2 nav-item cz-cursor-pointer" @click="handleToRouter">
                <CzIcon name="person-circle" />
                登录
              </div>
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
    <cz-auth-diaog v-model:value="dialogVisible" />
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
