<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ElInput } from 'element-plus'
const visible = ref(false)
const props = defineProps({
  value: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['update:value', 'search'])
const searchText = computed({
  get () {
    return props.value
  },
  set (value) {
    emits('update:value', value)
  }
})
</script>

<template>
  <div :class="[visible ? 'cz-w-96' : 'cz-w-20']">
    <div>
      <el-input
        v-model="searchText"
        placeholder="搜索"
        :suffix-icon="Search"
        class="cz-w-full"
        clearable
        @keydown.enter="emits('search')"
        @clear="emits('search')"
        @focus="visible=true"
        @blur="visible=false"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-input__wrapper){
  border-radius: 20px;
}
</style>
