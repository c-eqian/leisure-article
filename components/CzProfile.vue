<script setup lang="ts">
import CzDynamic from '~/components/CzDynamic.vue'
import CzEmpty from '~/components/CzEmpty.vue'
const tabsName = ref('dynamic')
</script>

<template>
  <div class="cz-flex cz-justify-center cz-p-4 cz-profile">
    <div class="cz-min-h-screen cz-p-2 max-md:cz-w-full cz-w-1/2  cz-bg-white/[.8]">
      <ClientOnly>
        <div>
          <CzProfileBase />
          <hr>
        </div>
        <q-tabs
          v-model="tabsName"
          dense
          align="left"
          class="bg-grey-2 text-teal"
        >
          <q-tab name="dynamic" label="动态" />
          <q-tab name="article" label="文章" />
          <q-tab name="other" label="收藏" />
        </q-tabs>
        <q-tab-panels
          v-model="tabsName"
          animated
          transition-prev="scale"
          transition-next="scale"
        >
          <q-tab-panel name="dynamic">
            <div class="cz-py-4 cz-flex">
              <div class="cz-flex-1 card-bg cz-rounded-[8px] cz-min-h-96">
                <CzDynamic />
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="article">
            <div class="cz-py-4 cz-flex">
              <div class="cz-flex-1 card-bg cz-rounded-[8px] cz-min-h-96">
                <CzProfileArticle />
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="other">
            <div class="cz-py-4 cz-flex">
              <div class="cz-flex-1 card-bg cz-rounded-[8px] cz-min-h-96">
                <CzEmpty />
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </ClientOnly>
    </div>
  </div>
  <div
    v-if="false"
    class="wallpaper"
  >
    <video
      ref="videoRef"
      muted
      autoplay
      loop
    >
      <source
        src="https://www.eqian.site/video.mp4"
        type="video/mp4"
      >
    </video>
  </div>
</template>

<style scoped lang="scss">
.wallpaper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* 确保视频在其他内容之后显示 */
}
</style>
