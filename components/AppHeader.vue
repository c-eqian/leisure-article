<script setup lang="ts">
import { useQuasar } from 'quasar'
import { isEmpty } from '@eqian/utils-vue'
import CzIcon from '~/components/CzIcon.vue'
import { useGlobalStore } from '~/store'
import CzAuthDialog from '~/components/CzAuthDialog.vue'
import type { IWebsite } from '~/api/system/type'
import { useAsyncRequest } from '~/api/server'
const drawer = ref(false)
const systemStore = useGlobalStore()
const $q = useQuasar()
const userInfoComputed = computed(() => systemStore.userInfo)
const props = defineProps({
  bgInherit: {
    type: Boolean,
    default: false
  }
})
const cookie = useCookie('__TOKEN_KEY__')
const isLogin = computed(() => {
  return cookie.value && !isEmpty(systemStore.userInfo)
})
const { data: website = {} as IWebsite.Data } = await useAsyncRequest<IWebsite.Data>('WEBSITE-CONFIG', 'system/website')
const menuList = ref([
  {
    name: '文章',
    path: '/',
    isReplace: false,
    icon: 'book'
  },
  {
    name: '笔记',
    isReplace: false,
    path: '/notes/list',
    icon: 'pencil-square'
  },
  {
    name: '留言',
    isReplace: false,
    path: '/message/list',
    icon: 'chat-dots'
  },
  {
    name: '宝箱',
    isReplace: false,
    path: '/utils/list',
    icon: 'github'
  },
  {
    name: '图片',
    isReplace: false,
    path: '/wallpaper/list',
    icon: 'image',
    _blank: '_blank'
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
  // dialogVisible.value = true
  $q.dialog({
    component: CzAuthDialog

  }).onOk(() => {
    console.log('OK')
  }).onCancel(() => {
    console.log('Cancel')
  }).onDismiss(() => {
    console.log('Called on OK or Cancel')
  })
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
    <q-layout view="hHh lpR fFf" style="min-height: 0">
      <q-drawer v-model="drawer" behavior="mobile" overlay side="right">
        <ul class="cz-flex cz-px-8">
          <li v-for="item in menuList" :key="item.name" class="nav-item cz-mx-2 cz-cursor-pointer cz-flex cz-items-center">
            <a v-if="!item.isReplace" :href="item.path" target="_blank" class="cz-px-2">
              <CzIcon :name="item.icon" />
              {{ item.name }}
            </a>
            <div v-else class="cz-px-2 cz-cursor-pointer" @click="handleToRouter">
              <CzIcon :name="item.icon" />
              {{ item.name }}
            </div>
          </li>
        </ul>
      </q-drawer>
      <q-header
        reveal
        class="cz-fixed cz-top-0"
        :class="{
          'cz-bg-inherit':props.bgInherit,
          'dark:cz-bg-[#181818]':!props.bgInherit
        }"
      >
        <q-toolbar class="cz-text-inherit">
          <q-toolbar-title>
            <span class="cz-select-none">{{ website?.website_title || '小白菜leisure' }}</span>
          </q-toolbar-title>
          <ul class="cz-flex cz-px-8 max-md:cz-hidden">
            <li v-for="item in menuList" :key="item.name" class="nav-item cz-mx-2 cz-cursor-pointer cz-flex cz-items-center">
              <a v-if="!item.isReplace" :href="item.path" :target="item._blank" class="cz-px-2">
                <CzIcon :name="item.icon" />
                {{ item.name }}
              </a>
            </li>
            <client-only>
              <li>
                <div v-if="isLogin" class="cz-px-2 cz-cursor-pointer nav-item">
                  <q-btn-dropdown unelevated>
                    <q-list>
                      <q-item v-close-popup clickable>
                        <q-item-section>
                          <q-item-label>
                            <nuxt-link :to="`/profile/${systemStore.userInfo.id}`">
                              个人中心
                            </nuxt-link>
                          </q-item-label>
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
                          <CzImg :img-src="userInfoComputed.avatar" />
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
            </client-only>
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
      <main class="cz-w-full !cz-pt-0">
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
