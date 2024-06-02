<script setup lang="ts">
import { useFormatDate } from 'co-utils-vue'
import type { IArticleRes } from '~/api/article/type'
import { getArticleTimeline } from '~/api/article'
import { useGlobalStore } from '~/store'
import { ROUTER_PREFIX } from '~/constant'
const systemStore = useGlobalStore()
const articleTimeline = ref<IArticleRes>({} as IArticleRes)
const isLoading = ref(false)
const query = ref({
  page_size: 20,
  user_id: systemStore.userInfo.id,
  page_num: 1
})
const loadingStatus = ref<'loading' | 'error' | 'success'>('loading')
const getList = () => {
  if (isLoading.value) { return }
  if (query.value.page_num > 1) { isLoading.value = true }
  getArticleTimeline(query.value).then((res) => {
    if (query.value.page_num > 1) {
      articleTimeline.value.list.push(...res.list)
      articleTimeline.value.is_more = res.is_more
    } else {
      articleTimeline.value = res
    }
    loadingStatus.value = articleTimeline.value.list.length > 0 ? 'success' : 'error'
  }).finally(() => {
    isLoading.value = false
  }).catch(() => {
    if (query.value.page_num === 1) {
      loadingStatus.value = 'error'
    }
  })
}
getList()
</script>

<template>
  <div>
    <CzSkeleton v-if="loadingStatus==='loading' && !articleTimeline.list" class="cz-h-full" />

    <q-timeline v-else>
      <q-timeline-entry
        v-for="article in articleTimeline.list"
        :key="article.uid || article.id"
        :title="article.title"
        :subtitle="useFormatDate(article.create_date, 'yyyy-MM-dd HH:mm')"
      >
        <div class="cz-text-sub">
          {{ article.describe }}
        </div>
        <template #title>
          <div class="c-py-2 cz-text-lg">
            <NuxtLink
              :to="`${ROUTER_PREFIX}/article/${article.uid}`"
            >
              {{ article.title }}
            </NuxtLink>
          </div>
        </template>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<style scoped lang="scss">

</style>
