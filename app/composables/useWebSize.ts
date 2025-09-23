import { computed, onMounted, onUnmounted } from 'vue'
import { useStore } from '@/stores/website'

export const useWebSize = () => {
  const webStore = useStore()

  const onResize = () => {
    if (!import.meta.client) return
    webStore.setIsMobile(window.innerWidth < 768)
  }

  onMounted(() => {
    onResize()
    if (import.meta.client) window.addEventListener('resize', onResize)
  })
  onUnmounted(() => {
    if (import.meta.client) window.removeEventListener('resize', onResize)
  })

  const isMobile = computed(() => webStore.isMobile)
  return { webStore, isMobile }
}


