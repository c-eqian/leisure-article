<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

interface Props {
  /** 显示按钮的滚动距离阈值（像素） */
  threshold?: number;
  /** 滚动到顶部的动画持续时间（毫秒） */
  duration?: number;
  /** 按钮位置 */
  position?: "bottom-right" | "bottom-left" | "bottom-center";
  /** 按钮大小 */
  size?: "small" | "medium" | "large";
  /** 是否显示文字提示 */
  showTooltip?: boolean;
  /** 自定义文字提示内容 */
  tooltipText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  threshold: 300,
  duration: 800,
  position: "bottom-right",
  size: "medium",
  showTooltip: true,
  tooltipText: "回顶",
});

const isVisible = ref(false);
const isScrolling = ref(false);
const buttonStyle = ref({});

// 更新按钮位置
const updateButtonPosition = () => {
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    const rect = mainContent.getBoundingClientRect();
    const isMobile = window.innerWidth <= 768;
    const isSmallScreen = window.innerWidth <= 480;

    // 根据屏幕尺寸调整偏移量
    const offset = isSmallScreen ? 15 : isMobile ? 20 : 30;

    switch (props.position) {
      case "bottom-right":
        buttonStyle.value = {
          bottom: `${offset}px`,
          left: `${rect.right - 50 - offset}px`, // 确保按钮在主内容区域内
          width: "auto",
          maxWidth: "200px",
        };
        break;
      case "bottom-left":
        buttonStyle.value = {
          bottom: `${offset}px`,
          left: `${rect.left + offset}px`,
          width: "auto",
          maxWidth: "200px",
        };
        break;
      case "bottom-center":
        buttonStyle.value = {
          bottom: `${offset}px`,
          left: `${rect.left + rect.width / 2}px`,
          transform: "translateX(-50%)",
          width: "auto",
          maxWidth: "200px",
        };
        break;
    }
  }
};

// 滚动事件处理
const handleScroll = () => {
  // 检测主内容区域的滚动
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    const scrollTop = mainContent.scrollTop;
    isVisible.value = scrollTop > props.threshold;
  } else {
    // 回退到页面滚动检测
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    isVisible.value = scrollTop > props.threshold;
  }
};

// 平滑滚动到顶部
const scrollToTop = () => {
  if (isScrolling.value) return;

  isScrolling.value = true;

  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    // 滚动主内容区域
    const startPosition = mainContent.scrollTop;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / props.duration, 1);

      // 使用缓动函数（ease-out）
      const easeOut = 1 - (1 - progress) ** 3;
      const currentPosition = startPosition * (1 - easeOut);

      mainContent.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        isScrolling.value = false;
      }
    };

    requestAnimationFrame(animateScroll);
  } else {
    // 回退到页面滚动
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / props.duration, 1);

      // 使用缓动函数（ease-out）
      const easeOut = 1 - (1 - progress) ** 3;
      const currentPosition = startPosition * (1 - easeOut);

      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        isScrolling.value = false;
      }
    };

    requestAnimationFrame(animateScroll);
  }
};

// 键盘事件处理
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Home" && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    scrollToTop();
  }
};

onMounted(() => {
  // 初始化按钮位置
  updateButtonPosition();

  // 监听主内容区域的滚动事件
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    mainContent.addEventListener("scroll", handleScroll, { passive: true });
  } else {
    // 回退到页面滚动监听
    window.addEventListener("scroll", handleScroll, { passive: true });
  }

  // 监听窗口大小变化，更新按钮位置
  window.addEventListener("resize", updateButtonPosition);
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  // 清理主内容区域的滚动事件
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    mainContent.removeEventListener("scroll", handleScroll);
  } else {
    // 清理页面滚动事件
    window.removeEventListener("scroll", handleScroll);
  }

  // 清理窗口大小变化监听
  window.removeEventListener("resize", updateButtonPosition);
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <Transition
    name="back-to-top"
    enter-active-class="back-to-top-enter-active"
    leave-active-class="back-to-top-leave-active"
    enter-from-class="back-to-top-enter-from"
    leave-to-class="back-to-top-leave-to"
  >
    <div
      v-if="isVisible"
      class="back-to-top"
      :class="[`size-${size}`, { scrolling: isScrolling }]"
      :style="buttonStyle"
      :title="showTooltip ? tooltipText : undefined"
      @click="scrollToTop"
    >
      <div class="back-to-top-button">
        <svg
          class="back-to-top-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 4L4 12H8V20H16V12H20L12 4Z" fill="currentColor" />
        </svg>
      </div>

      <!-- 涟漪效果 -->
      <div class="back-to-top-ripple" />

      <!-- 文字提示 -->
      <div v-if="showTooltip" class="back-to-top-tooltip">
        {{ tooltipText }}
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.back-to-top {
  position: fixed;
  z-index: 99999;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  // 位置由JavaScript动态计算

  // 尺寸变体
  &.size-small {
    .back-to-top-button {
      width: 48px;
      height: 48px;
    }

    .back-to-top-icon {
      width: 20px;
      height: 20px;
    }

    .back-to-top-tooltip {
      font-size: 12px;
      padding: 4px 8px;
      margin-right: 8px;
    }
  }

  &.size-medium {
    .back-to-top-button {
      width: 56px;
      height: 56px;
    }

    .back-to-top-icon {
      width: 24px;
      height: 24px;
    }

    .back-to-top-tooltip {
      font-size: 14px;
      padding: 6px 12px;
      margin-right: 12px;
    }
  }

  &.size-large {
    .back-to-top-button {
      width: 64px;
      height: 64px;
    }

    .back-to-top-icon {
      width: 28px;
      height: 28px;
    }

    .back-to-top-tooltip {
      font-size: 16px;
      padding: 8px 16px;
      margin-right: 16px;
    }
  }

  // 悬停效果
  &:hover {
    transform: translateY(-2px);

    .back-to-top-button {
      background: linear-gradient(135deg, var(--primary-hover), #764ba2);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }

    .back-to-top-tooltip {
      opacity: 1;
      transform: translateX(0);
    }
  }

  // 点击效果
  &:active {
    transform: translateY(0);

    .back-to-top-button {
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    }
  }

  // 滚动中状态
  &.scrolling {
    .back-to-top-button {
      background: linear-gradient(135deg, #a8a8a8, #888888);
      animation: pulse 1.5s infinite;
    }
  }
}

.back-to-top-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color), #764ba2);
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.back-to-top-icon {
  color: white;
  transition: transform 0.3s ease;
}

.back-to-top:hover .back-to-top-icon {
  transform: translateY(-1px);
}

.back-to-top-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition:
    width 0.6s,
    height 0.6s;
  pointer-events: none;
}

.back-to-top:hover .back-to-top-ripple {
  width: 100px;
  height: 100px;
}

.back-to-top-tooltip {
  position: absolute;
  top: 50%;
  right: 100%;
  transform: translateY(-50%) translateX(-10px);
  background: var(--bg-card);
  color: var(--text-primary);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-medium);
  border: 1px solid var(--border-color);

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-left-color: var(--bg-card);
  }
}

// 进入/离开动画
.back-to-top-enter-active,
.back-to-top-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.back-to-top-enter-from,
.back-to-top-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.back-to-top-enter-active.position-bottom-center,
.back-to-top-leave-active.position-bottom-center {
  .back-to-top-enter-from,
  .back-to-top-leave-to {
    transform: translateX(-50%) translateY(20px) scale(0.8);
  }
}

// 脉冲动画
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
  .back-to-top {
    // 位置由JavaScript动态计算，包括响应式调整

    &.size-small {
      .back-to-top-button {
        width: 44px;
        height: 44px;
      }

      .back-to-top-icon {
        width: 18px;
        height: 18px;
      }
    }

    &.size-medium {
      .back-to-top-button {
        width: 52px;
        height: 52px;
      }

      .back-to-top-icon {
        width: 22px;
        height: 22px;
      }
    }

    &.size-large {
      .back-to-top-button {
        width: 60px;
        height: 60px;
      }

      .back-to-top-icon {
        width: 26px;
        height: 26px;
      }
    }
  }

  .back-to-top-tooltip {
    display: none; // 移动端隐藏文字提示
  }
}

// 小屏幕设备的位置调整由JavaScript动态计算

// 暗黑模式适配
[data-theme="dark"] .back-to-top {
  .back-to-top-tooltip {
    background: var(--bg-card);
    color: var(--text-primary);
    border-color: var(--border-color);

    &::after {
      border-left-color: var(--bg-card);
    }
  }
}

// 减少动画（用户偏好）
@media (prefers-reduced-motion: reduce) {
  .back-to-top,
  .back-to-top-button,
  .back-to-top-icon,
  .back-to-top-ripple,
  .back-to-top-tooltip {
    transition: none;
  }

  .back-to-top-enter-active,
  .back-to-top-leave-active {
    transition: opacity 0.2s ease;
  }

  .back-to-top-enter-from,
  .back-to-top-leave-to {
    transform: none;
  }
}
</style>
