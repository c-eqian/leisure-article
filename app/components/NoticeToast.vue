<script setup lang="ts">
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "✅",
  },
});
const showToast = defineModel("visible", {
  type: Boolean,
  default: false,
});
defineExpose({
  visibleSwitch: (v: boolean) => {
    showToast.value = v;
  },
});
</script>

<template>
  <div v-if="showToast" class="notice-toast" :class="{ show: showToast }">
    <div class="toast-content">
      <span class="toast-icon">{{ props.icon }}</span>
      <span class="toast-message">{{ props.message }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
//提示
.notice-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
  opacity: 0;
  transition: all 0.3s ease;

  &.show {
    opacity: 1;
    animation: toastSlideIn 0.3s ease-out;
  }
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.5rem;
  background: var(--bg-secondary);
  color: var(--text-primary);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-heavy);
  border: 1px solid var(--border-color);
  font-size: 1rem;
  font-weight: 500;
}

.toast-icon {
  font-size: 1.2rem;
}

.toast-message {
  font-size: 0.95rem;
}

@keyframes toastSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
