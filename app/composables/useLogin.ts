import { computed } from 'vue'
import { useStore } from '@/stores/website'

export const useLogin = () => {
  const webStore = useStore()
  const isLogin = computed(() => webStore.isLogin)

  const login = () => webStore.login()
  const logout = () => webStore.logout()
  const toggleLogin = () => webStore.toggleLogin()
  // local UI should control modal visibility; remove store modal flags usage

  return {
    isLogin,
    login,
    logout,
    toggleLogin,
  }
}


