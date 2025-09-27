<script setup lang="ts">
interface Props {
  loading?: boolean;
  disabled?: boolean;
  loadingText?: string;
  normalText?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  disabled: false,
  loadingText: '加载中...',
  normalText: '加载更多',
  size: 'medium',
  variant: 'primary'
});

const emit = defineEmits<{
  click: [];
}>();

const handleClick = () => {
  if (!props.loading && !props.disabled) {
    emit('click');
  }
};
</script>

<template>
  <div class="load-more-container">
    <button
      class="load-more-btn"
      :class="[
        `size-${size}`,
        `variant-${variant}`,
        { loading, disabled }
      ]"
      :disabled="disabled || loading"
      @click="handleClick"
    >
      <div class="btn-content">
        <div v-if="loading" class="loading-spinner" />
        <span class="btn-text">
          {{ loading ? loadingText : normalText }}
        </span>
      </div>
      <div class="btn-ripple" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.load-more-container {
  display: flex;
  justify-content: center;
  margin: 60px 0 40px 0;
  padding: 0 20px;
}

.load-more-btn {
  position: relative;
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  // 尺寸变体
  &.size-small {
    padding: 12px 28px;
    font-size: 0.9rem;
    min-width: 120px;
    height: 48px;
  }

  &.size-medium {
    padding: 16px 40px;
    font-size: 1rem;
    min-width: 160px;
    height: 56px;
  }

  &.size-large {
    padding: 20px 48px;
    font-size: 1.1rem;
    min-width: 180px;
    height: 64px;
  }

  // 颜色变体
  &.variant-primary {
    background: linear-gradient(135deg, var(--primary-color), #764ba2);
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #667eea, #764ba2);
    }
  }

  &.variant-secondary {
    background: linear-gradient(135deg, var(--text-secondary), var(--text-muted));
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
    }
  }

  &.variant-outline {
    background: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    
    &:hover:not(:disabled) {
      background: var(--primary-color);
      color: white;
    }
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
    transform: none;
  }

  &.loading {
    background: linear-gradient(135deg, #a8a8a8, #888888);
    animation: pulse 2s infinite;
  }
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 2;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.btn-text {
  font-weight: 600;
  letter-spacing: 0.5px;
}

.btn-ripple {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.1);
  transform: scale(0);
  transition: transform 0.6s ease;
  z-index: 1;
}

.load-more-btn:hover .btn-ripple {
  transform: scale(1);
}

// 动画定义
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

// 响应式设计
@media (max-width: 768px) {
  .load-more-container {
    margin: 40px 0 30px 0;
    padding: 0 15px;
  }

  .load-more-btn {
    &.size-small {
      padding: 10px 24px;
      font-size: 0.85rem;
      min-width: 100px;
      height: 44px;
    }

    &.size-medium {
      padding: 14px 32px;
      font-size: 0.95rem;
      min-width: 140px;
      height: 52px;
    }

    &.size-large {
      padding: 16px 36px;
      font-size: 1rem;
      min-width: 160px;
      height: 56px;
    }
  }

  .btn-content {
    gap: 10px;
  }

  .loading-spinner {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 480px) {
  .load-more-container {
    margin: 30px 0 20px 0;
    padding: 0 10px;
  }

  .load-more-btn {
    &.size-small {
      padding: 8px 20px;
      font-size: 0.8rem;
      min-width: 90px;
      height: 40px;
    }

    &.size-medium {
      padding: 12px 28px;
      font-size: 0.9rem;
      min-width: 120px;
      height: 48px;
    }

    &.size-large {
      padding: 14px 32px;
      font-size: 0.95rem;
      min-width: 140px;
      height: 52px;
    }
  }

  .btn-content {
    gap: 8px;
  }

  .loading-spinner {
    width: 16px;
    height: 16px;
  }
}

// 暗黑模式适配
[data-theme="dark"] .load-more-btn {
  &.variant-outline {
    border-color: var(--primary-color);
    color: var(--primary-color);
    
    &:hover:not(:disabled) {
      background: var(--primary-color);
      color: white;
    }
  }
}
</style>
