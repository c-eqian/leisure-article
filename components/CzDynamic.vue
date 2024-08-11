<script setup lang="ts">
import { EpCommentLayout, EpImage } from 'e-plus-ui'
import { useBeforeDate } from '@eqian/utils-vue'
import CzAlbum from '~/components/CzAlbum.vue'
import { getDailyList } from '~/api/daily'
import type { Data } from '~/api/daily/type'
// const imageList = ref([
//   'https://s3.bmp.ovh/imgs/2024/04/14/917bdc752d327c1a.jpg',
//   'https://s3.bmp.ovh/imgs/2023/11/11/80e40a4432624333.jpg',
//   'https://s3.bmp.ovh/imgs/2023/09/04/dc27244e6096e1f5.jpg',
//   'https://s3.bmp.ovh/imgs/2023/09/04/f081116e993842d5.jpg',
//   'https://s3.bmp.ovh/imgs/2023/11/11/80e40a4432624333.jpg',
//   'https://s3.bmp.ovh/imgs/2023/09/04/dc27244e6096e1f5.jpg'
// ])
const transformImage = (image:string) => {
  return image.split(',').map(item => item.startsWith('https')
    ? item.replace('oss.cz-leisure.com', 'oss.eqian.site')
    : `https://${item.replace('oss.cz-leisure.com', 'oss.eqian.site')}`).filter(item => item !== 'https://')
}
const dailyData = ref<Data>({} as Data)
getDailyList().then((res) => {
  dailyData.value = res
})
</script>

<template>
  <div>
    <div v-for="item in dailyData.list" :key="item.id" class="cz-rounded-2xl cz-shadow cz-p-4 cz-my-4">
      <EpCommentLayout>
        <template #avatar>
          <div class="cz-h-9 cz-w-9">
            <EpImage scale round :src="item.user_info.avatar" />
          </div>
        </template>
        <template #left>
          <div class="cz-flex cz-space-x-2 cz-items-center">
            <div class="cz-text-[16px]">
              {{ item.user_info.username }}
            </div>
            <div v-if="item.province" class="cz-text-xs">
              发布于·{{ item.province }}
            </div>
          </div>
          <div class="cz-text-xs">
            {{ useBeforeDate(item.create_date) }}
          </div>
        </template>
        <template #content>
          <div class=" max-md:cz-w-full cz-w-1/2">
            <div class="cz-py-2">
              {{ item.daily_content }}
            </div>
            <div class="cz-py-1">
              <CzAlbum :image-list="transformImage(item.images ?? '')" />
            </div>
          </div>
        </template>
      </EpCommentLayout>
    </div>

    <CzEmpty v-if="false" />
  </div>
</template>

<style scoped lang="scss">

</style>
