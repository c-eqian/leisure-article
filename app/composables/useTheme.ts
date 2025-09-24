import { ref, watch } from 'vue'
import { useStore } from '@/composables/useStore'

// 全局暗色主题状态
const isDark = ref(false)

/**
 * 主题管理 Composable
 * 提供主题切换和状态管理功能
 */
export function useTheme() {
  const webStore = useStore()

  /**
   * 初始化主题
   * 从store中获取当前主题状态并应用到DOM
   */
  const initTheme = () => {
    isDark.value = webStore.isDark
    updateDocumentTheme()
  }

  /**
   * 更新DOM主题属性
   * 根据当前主题状态设置document的data-theme属性
   */
  const updateDocumentTheme = () => {
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
    }
  }

  /**
   * 切换主题
   * 在亮色和暗色主题之间切换
   */
  const toggleTheme = () => {
    webStore.toggleWebsiteTheme()
    isDark.value = webStore.isDark
    updateDocumentTheme()
  }

  // 监听主题变化并更新DOM
  watch(isDark, updateDocumentTheme)
  
  // 客户端初始化主题
  if (import.meta.client) {
    initTheme()
  }

  return {
    // 当前是否为暗色主题
    isDark,
    // 切换主题方法
    toggleTheme,
    // store实例
    webStore,
    // 当前主题类名
    get themeClass() {
      return webStore.websiteTheme
    }
  }
}


