import { computed } from 'vue'
import { useStore } from '@/composables/useStore'

/**
 * 样式配置管理 Composable
 * 提供样式主题的配置和切换功能
 */
export const useStyleConfig = () => {
  const webStore = useStore()
  
  // 计算属性：当前样式主题
  const currentStyleTheme = computed(() => webStore.currentStyleTheme)
  
  /**
   * 设置样式主题
   * @param theme - 主题名称
   */
  const setStyleTheme = (theme: string) => webStore.setStyleTheme(theme)

  return {
    currentStyleTheme,
    setStyleTheme
  }
}


