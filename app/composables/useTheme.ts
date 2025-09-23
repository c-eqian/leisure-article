import { ref, watch } from 'vue'
import { useStore } from '@/stores/website'

const isDark = ref(false)

export function useTheme() {
  const webStore = useStore()

  const initTheme = () => {
    isDark.value = webStore.isDark
    updateDocumentTheme()
  }

  const updateDocumentTheme = () => {
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
    }
  }

  const toggleTheme = () => {
    webStore.toggleWebsiteTheme()
    isDark.value = webStore.isDark
    updateDocumentTheme()
  }

  watch(isDark, updateDocumentTheme)
  if (import.meta.client) initTheme()

  return {
    isDark,
    toggleTheme,
    webStore,
    get themeClass() {
      return webStore.websiteTheme
    }
  }
}


