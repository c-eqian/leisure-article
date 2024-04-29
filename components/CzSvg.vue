<template>
  <i>
    <svg
      :height="height"
      :width="width"
      aria-hidden="true"
      class="svg-icon"
    >
      <use
        :fill="color"
        :xlink:href="symbolId"
      />
    </svg>
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  },
  width: {
    type: String,
    default: '1rem'
  },
  height: {
    type: String,
    default: '1rem'
  }
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: center;
  fill: currentColor;
  overflow: hidden;
}
</style>
