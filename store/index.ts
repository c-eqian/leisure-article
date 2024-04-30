import { defineStore } from 'pinia'
import piniaPersistConfig from '~/utils'
import type { IWebsite } from '~/api/system/type'
import { getSystemWebsite } from '~/api/system'
export const useGlobalStore = defineStore({
  id: 'GlobalStore',
  state: () => ({
    // 用户信息
    userInfo: '',
    website: {} as IWebsite.Data
  }),
  actions: {
    setUserInfo (userInfo: any) {
      this.userInfo = userInfo
    },
    /**
     * 获取站点配置
     */
    getWebsite () {
      return new Promise<IWebsite.Data>((resolve, reject) => {
        if (Object.keys(this.website).length > 0) {
          resolve(this.website)
        } else {
          getSystemWebsite().then((res) => {
            this.setWebsite(res)
            resolve(res)
          }).catch((error) => {
            reject(error)
          })
        }
      })
    },
    setWebsite (v: IWebsite.Data) {
      this.website = { ...v }
    }
  },
  persist: piniaPersistConfig('GlobalStore')
})
