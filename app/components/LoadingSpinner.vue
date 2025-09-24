<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: number;
    color?: string;
    thickness?: number;
    ariaLabel?: string;
  }>(),
  {
    size: 16,
    color: "currentColor",
    thickness: 2,
    ariaLabel: "加载中",
  },
);
</script>

<template>
  <span
    class="loading-spinner"
    role="status"
    aria-live="polite"
    :aria-label="props.ariaLabel"
    :style="{
      width: props.size + 'px',
      height: props.size + 'px',
      borderWidth: props.thickness + 'px',
      borderTopColor: props.color,
      color: props.color,
    }"
  />
</template>

<style scoped>
.loading-spinner {
  display: inline-block;
  border-style: solid;
  border-color: transparent;
  border-radius: 50%;
  animation: spinner-rotate 1s linear infinite;
}

@keyframes spinner-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
