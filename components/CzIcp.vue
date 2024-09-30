<script lang="ts" setup>
import type { IWebsite } from '@/api/system/type'
// import { useGlobalStore } from '~/store'
import { useAsyncRequest } from '~/api/server'

// const systemStore = useGlobalStore()
// const website = ref<IWebsite.Data>({} as IWebsite.Data)

// const websiteInfo = () => {
//   systemStore.getWebsite().then((res) => {
//     website.value = res
//   })
// }
// websiteInfo()
const { data: website = {} as IWebsite.Data } = await useAsyncRequest<IWebsite.Data>('WEBSITE-CONFIG', 'system/website')
</script>

<template>
  <footer>
    <div class="w-100% p-t-25px p-b-25px text-center cz-icp">
      <div>
        <i class="bi bi-envelope" />
        2429120006@qq.com
      </div>
      <div>
        <a
          href="https://beian.miit.gov.cn"
          target="_blank"
        >{{ website?.website_icp?.split('//')[0] }}</a>
        &nbsp; {{ website?.website_icp?.split('//')[1] || '' }}
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.cz-icp {
  width: 100%;
  line-height: 2;
  position: relative;
  color: #eee;
  font-size: 14px;
  text-align: center;
  background: linear-gradient(-45deg, #ee7752, #ce3e75, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: Gradient 10s ease infinite;
  @keyframes Gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
}
</style>
