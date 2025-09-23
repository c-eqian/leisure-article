import { defineStore } from 'pinia'

export const useStore = defineStore('WEBSITE-STORE', {
  state: () => ({
    websiteTheme: typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    isMobile: false as boolean,
    isOpenSide: false as boolean,
    isLogin: false as boolean,
    showLoginModal: false as boolean,
    showStyleConfigModal: false as boolean,
    currentStyleTheme: 'default' as string
  }),
  actions: {
    toggleWebsiteTheme() {
      this.websiteTheme = this.websiteTheme === 'light' ? 'dark' : 'light'
      if (import.meta.client) {
        document.documentElement.setAttribute('data-theme', this.websiteTheme)
      }
    },
    setIsMobile(bool: boolean = false) {
      this.isMobile = bool
    },
    setIsOpenSide(bool: boolean = false) {
      this.isOpenSide = bool
    },
    toggleOpenSide() {
      this.isOpenSide = !this.isOpenSide
    },
    login() {
      this.isLogin = true
    },
    logout() {
      this.isLogin = false
    },
    toggleLogin() {
      this.isLogin = !this.isLogin
    },
    setStyleTheme(theme: string) {
      this.currentStyleTheme = theme
      this.applyStyleTheme(theme)
    },
    applyStyleTheme(theme: string) {
      if (!import.meta.client) return
      document.documentElement.classList.remove(
        'theme-default',
        'theme-ocean',
        'theme-forest',
        'theme-sunset',
        'theme-purple',
        'theme-minimal'
      )
      document.documentElement.classList.add(`theme-${theme}`)
    }
  },
  getters: {
    isDark: state => state.websiteTheme === 'dark'
  },
  persist: {
    pick: ['websiteTheme', 'isMobile', 'isOpenSide', 'currentStyleTheme']
  }
})


