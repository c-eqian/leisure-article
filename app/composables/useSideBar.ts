import { computed, watch } from 'vue'
import { useWebSize } from '@/composables/useWebSize'

export const useSideBar = () => {
  const { webStore, isMobile } = useWebSize()
  const isOpenSide = computed(() => webStore.isOpenSide)
  watch([isMobile, isOpenSide], ([mobile, visible]) => {
    if (mobile && visible) {
      if (import.meta.client) {
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'
        document.body.style.width = '100%'
      }
      webStore.setIsOpenSide(true)
    } else {
      webStore.setIsOpenSide(false)
      if (import.meta.client) {
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.width = ''
      }
    }
  }, { immediate: true })
  return { isOpenSide, webStore, isMobile }
}


