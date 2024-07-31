<script setup lang="ts">

import CzAlbum from '~/components/CzAlbum.vue'
const imageList = ref([
  'https://s3.bmp.ovh/imgs/2024/04/14/917bdc752d327c1a.jpg',
  'https://s3.bmp.ovh/imgs/2023/11/11/80e40a4432624333.jpg',
  'https://s3.bmp.ovh/imgs/2023/09/04/dc27244e6096e1f5.jpg',
  'https://s3.bmp.ovh/imgs/2023/09/04/f081116e993842d5.jpg',
  'https://s3.bmp.ovh/imgs/2023/11/11/80e40a4432624333.jpg',
  'https://s3.bmp.ovh/imgs/2023/09/04/dc27244e6096e1f5.jpg'
])
</script>

<template>
  <div>
    <div v-for="i in [1,2,3]" :key="i" class="cz-rounded-2xl cz-shadow cz-p-4 cz-my-4">
      <CzCommentBox>
        <template #avatar>
          <div class="cz-h-9 cz-w-9">
            <cz-img round img-src="https://s3.bmp.ovh/imgs/2024/04/14/917bdc752d327c1a.jpg" />
          </div>
        </template>
        <template #left>
          <div>
            Eqian
          </div>
        </template>
        <template #content>
          <div class=" max-md:cz-w-full cz-w-1/2">
            <div class="cz-py-2">
              内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容
              容内容内容内容内容内容内容内容内容内容内容
            </div>
            <div class="cz-py-1">
              <CzAlbum :image-list="imageList" />
            </div>
          </div>
        </template>
      </CzCommentBox>
    </div>

    <CzEmpty v-if="false" />
  </div>
</template>

<style scoped lang="scss">

</style>
