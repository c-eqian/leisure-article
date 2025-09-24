<script setup lang="ts">
import { provide, ref } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { useWebSize } from '@/composables/useWebSize'
import AboutMe from '@/components/AboutMe.vue'

/**
 * 主内容区域组件
 * 提供页面内容容器和加载状态管理
 */

// 设备类型和主题状态
const { isMobile } = useWebSize()
const { webStore } = useTheme()

// 加载状态管理
const isLoading = ref(false)
const loadingMessage = ref('加载中...')

/**
 * 设置加载状态
 * @param loading - 是否加载中
 * @param message - 加载消息
 */
const setLoading = (loading: boolean, message?: string) => {
  isLoading.value = loading
  if (message) {
    loadingMessage.value = message
  }
}

// 向子组件提供加载状态和方法
provide('isLoading', isLoading)
provide('loadingMessage', loadingMessage)
provide('setLoading', setLoading)
</script>

<template>
  <div class="main-content">
    <button v-if="isMobile" class="mobile-menu-toggle" @click="webStore.toggleOpenSide">☰</button>
    <div class="content">
      <slot />
    </div>
    <div v-if="isMobile" class="mobile-about-section">
      <AboutMe class="mobile-about" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-content {
  flex: 1 1 auto;
  padding: 0;
  background: var(--bg-content);
  height: 100vh;
  transition: background var(--transition-normal), color var(--transition-normal);
  color: var(--text-primary);
  overflow-x: hidden;
  overflow-y: auto;
}

.content {
  padding: 10px;
}

.mobile-menu-toggle {
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 100000;
  background: var(--primary-color);
  color: var(--text-white);
  border: none;
  font-size: 20px;
  padding: 12px;
  border-radius: var(--border-radius);
  cursor: pointer;
  box-shadow: var(--shadow-medium);
  transition: all var(--transition-normal);
}

.mobile-menu-toggle:hover {
  background: var(--primary-hover);
  transform: scale(1.05);
}

@media (max-width: 1200px) {
  .main-content { height: 100vh; min-height: 100vh; overflow-y: auto; }
}

@media (max-width: 768px) {
  .main-content { height: 100vh; min-height: 100vh; overflow-y: auto; background: var(--bg-content); }
  .mobile-menu-toggle {
    display: block !important;
  }
  .mobile-about-section {
    margin: 30px 20px;
  }
}
</style>


