<script setup lang="ts">
import { ref } from 'vue'
import { useGlobalStore } from '~/store'
import type { ICategoryTags } from '~/api/category/type'
const props = defineProps({
  value: {
    type: Number,
    default: 0
  }
})
const tags = ref<ICategoryTags[]>([])
const emits = defineEmits(['click-tag', 'update:value'])
const handleClickTag = (id:number) => {
  currentTag.value = id
  emits('click-tag', id)
}
const store = useGlobalStore()
store.getCategoryTags().then((res) => {
  tags.value = res
})
const tagsList = computed(() => {
  return tags.value.map((item) => {
    return item.tags
  }).flat(1).sort(() => Math.random() - 0.5)
})
const currentTag = computed({
  get () {
    return props.value
  },
  set (value) {
    emits('update:value', value)
  }
})
</script>

<template>
  <div class="cz-min-h-10 cz-flex cz-p-2 cz-flex-wrap cz-rounded-2xl cz-w-full cz-bg-gradient-to-br cz-from-[#fdcbf1] / 8 cz-from-0%  cz-via-[#fdcbf1] / 8 cz-via-10% cz-to-[#cbf1f5] / 8 cz-to-100%">
    <div
      class="cz-m-1 cz-space-x-4 cz-bg-[#cbf1f5] / 8 cz-rounded-2xl"
      :class="{
        selected: currentTag==0
      }"
    >
      <a class="cz-p-2 cz-cursor-pointer" @click="() => handleClickTag(0)">全部</a>
    </div>
    <div
      v-for="item in tagsList"
      :key="item.tag_name + item.id"
      class="cz-m-1 cz-space-x-4 cz-bg-[#cbf1f5] / 8 cz-rounded-2xl"
      :class="{
        selected: currentTag === item.id
      }"
    >
      <a class="cz-p-2 cz-cursor-pointer" @click="() => handleClickTag(item.id)">{{ item.tag_name }}</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.selected {
  background: #f9f7f7;
  border-radius: 6px;
  color: #3f72af;
  transition: .25s;
  animation: fadein .25s forwards ease-in-out;
  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(2.5rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
