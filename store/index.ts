import { defineStore } from 'pinia'
import piniaPersistConfig from '~/utils'
export const useGlobalStore = defineStore({
  id: 'GlobalStore',
  state: () => ({
    // 用户信息
    userInfo: ''
  }),
  actions: {
    setUserInfo (userInfo: any) {
      this.userInfo = userInfo
    }
  },
  persist: piniaPersistConfig('GlobalStore')
})
