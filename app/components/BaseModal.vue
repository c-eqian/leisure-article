<script setup lang="ts">
import { useTheme } from "~/composables/useTheme";

const props = defineProps<{
  visible: boolean;
  title?: string;
  closable?: boolean;
}>();
const visibleRef = defineModel("visible", {
  default: true,
});
const emit = defineEmits<{
  (e: "close"): void;
}>();

const { isDark } = useTheme();

const handleClose = () => {
  emit("close");
  visibleRef.value = false;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") handleClose();
};

const handleOverlayClick = () => {
  handleClose();
};
const setVisible = (visible: boolean) => {
  visibleRef.value = visible;
};
defineExpose({
  setVisible,
});
</script>

<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div
        v-if="visibleRef"
        class="modal-overlay"
        tabindex="-1"
        @keydown="handleKeydown"
        @click="handleOverlayClick"
      >
        <transition name="modal-scale">
          <div
            v-if="props.visible"
            class="modal-container"
            :class="{ dark: isDark }"
            @click.stop
          >
            <button
              v-if="props.closable"
              class="close-btn"
              title="关闭"
              @click="handleClose"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
              </svg>
            </button>

            <div v-if="props.title" class="modal-header">
              <h2>{{ props.title }}</h2>
            </div>

            <div class="modal-content">
              <slot />
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  cursor: default;
}

.modal-container {
  background: var(--bg-primary);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  border: 1px solid var(--border-color);

  &.dark {
    background: var(--bg-primary);
    border-color: var(--border-color);
  }
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-secondary);
  transition: all 0.2s ease;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    color: var(--text-primary);
    transform: scale(1.1);
  }
}

.modal-header {
  padding: 24px 32px 16px;
  border-bottom: 1px solid var(--border-color);

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: var(--text-primary);
  }
}

.modal-content {
  padding: 24px 32px 32px;
  overflow-y: auto;
  max-height: calc(90vh - 120px);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-scale-enter-active,
.modal-scale-leave-active {
  transition: all 0.3s ease;
}
.modal-scale-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(-20px);
}
.modal-scale-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

@media (max-width: 480px) {
  .modal-container {
    width: 95%;
    margin: 20px;
  }

  .modal-header {
    padding: 20px 24px 12px;
  }

  .modal-content {
    padding: 20px 24px 24px;
  }

  .modal-header h2 {
    font-size: 18px;
  }
}
</style>
