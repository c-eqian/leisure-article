import { computed } from 'vue'
import { useStore } from '@/stores/website'

export const useStyleConfig = () => {
  const webStore = useStore()
  const showStyleConfigModal = computed(() => webStore.showStyleConfigModal)
  const currentStyleTheme = computed(() => webStore.currentStyleTheme)

  const showStyleConfig = () => webStore.showStyleConfig()
  const hideStyleConfig = () => webStore.hideStyleConfig()
  const setStyleTheme = (theme: string) => webStore.setStyleTheme(theme)

  return {
    showStyleConfigModal,
    currentStyleTheme,
    showStyleConfig,
    hideStyleConfig,
    setStyleTheme
  }
}


