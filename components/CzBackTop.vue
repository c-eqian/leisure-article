<script lang="ts" setup>
import { useDark, useToggle, useWindowScroll } from '@vueuse/core'
import { useQuasar } from 'quasar'
import { useGlobalStore } from '~/store'
let isDarkEl: any
let toggleDark:any
if (process.browser) {
  isDarkEl = useDark()
  toggleDark = useToggle(isDarkEl)
}

const $q = useQuasar()
const systemStorage = useGlobalStore()
const settingTheme = () => {
  toggleDark && toggleDark()
  $q.dark.set(isDarkEl.value)
  systemStorage.settingTheme(isDarkEl.value ? 'dark' : 'light')
}
const { y } = useWindowScroll()
const toScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <teleport to="body">
    <div
      class="right-setting d-md-none d-xl-block cz-z-10 cz-fixed max-md:cz-right-[10px] cz-right-[30px] cz-top-3/4"
      @click="settingTheme"
    >
      <div
        class="setting-container
        cz-flex cz-justify-center
        cz-items-center
        cz-text-[#fff]
        cz-text-center
        cz-text-[16px]
        cz-leading-[30px]
        cz-cursor-pointer
        cz-w-[30px]
        cz-rounded-2xl
        cz-h-[30px]
        cz-bg-[#49b1f5]"
      >
        <i
          class="bi cz-block bi-gear setting"
        />
      </div>
    </div>
    <div
      class="right-setting d-md-none d-xl-block cz-z-10 cz-fixed max-md:cz-right-[10px] cz-right-[30px] cz-top-[80%]"
      @click="toScrollTop"
    >
      <div
        v-show="y > 200"
        class="
        cz-flex cz-justify-center
        cz-items-center
        cz-text-[#fff]
        cz-text-center
        cz-text-[16px]
        cz-leading-[30px]
        cz-cursor-pointer
        cz-w-[30px]
        cz-h-[30px]
        cz-rounded-2xl
        cz-bg-[#49b1f5]"
      >
        <CzIcon name="arrow-up-circle" />
      </div>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
.right-setting {
  transition: all .5s;

  &-in {
    transform: translate(0) !important;
    animation: right-setting-in .3s;
  }

  &-hide {
    transform: translate(35px);
  }

  .setting-container {
    i {
      animation: turn-around 2s linear infinite;

      &:after, &:before {
        text-decoration: inherit;
        vertical-align: inherit;
      }

      *, &:after, &:before {
        background-repeat: no-repeat;
        box-sizing: inherit;
      }
    }
  }

  @keyframes turn-around {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(1turn);
    }
  }
  @keyframes right-setting-in {
    0% {
      transform: translate(30px);
    }

    100% {
      transform: translate(0);
    }
  }
}
</style>
