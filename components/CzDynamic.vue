<script setup lang="ts">
import { EpCommentLayout, EpImage } from 'e-plus-ui'
import { useBeforeDate } from '@eqian/utils-vue'
import CzAlbum from '~/components/CzAlbum.vue'
import { getDailyList } from '~/api/daily'
import type { Data } from '~/api/daily/type'
const loadingStatus = ref<'loading' | 'error' | 'success'>('loading')
const transformImage = (image:string) => {
  return image.split(',').map(item => item.startsWith('https')
    ? item.replace('oss.cz-leisure.com', 'oss.eqian.site')
    : `https://${item.replace('oss.cz-leisure.com', 'oss.eqian.site')}`).filter(item => item !== 'https://')
}
const dailyData = ref<Data>({} as Data)
const query = ref({
  page_size: 20,
  page_num: 1
})
const getList = (done?:any) => {
  getDailyList(query.value).then((res) => {
    dailyData.value = res
    loadingStatus.value = res.list.length > 0 ? 'success' : 'error'
  }).catch(() => {
    if (query.value.page_num === 1) {
      loadingStatus.value = 'error'
    }
  })
    .finally(() => {
      if (done) {
        done()
      }
    })
}
const onLoad = (_index:number, done:any) => {
  if (dailyData.value.is_more === 1) {
    query.value.page_num += 1
    getList(done)
  } else {
    done()
  }
}
getList()
</script>

<template>
  <div>
    <CzSkeleton v-if="loadingStatus==='loading' && !dailyData.list" class="cz-h-full" />
    <div v-else-if="loadingStatus==='success'">
      <q-infinite-scroll :offset="250" @load="onLoad">
        <div v-for="item in dailyData.list" :key="item.id" class="cz-rounded-2xl cz-shadow cz-p-4 cz-my-4">
          <EpCommentLayout>
            <template #avatar>
              <div class="cz-h-9 cz-w-9">
                <EpImage scale round :url="item.user_info.avatar" />
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
        <template #loading>
          <div class="cz-flex cz-justify-center cz-my-2">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </div>
    <CzEmpty v-if="loadingStatus==='error'" />
  </div>
</template>

<style scoped lang="scss">

</style>
