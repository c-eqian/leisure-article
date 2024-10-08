import { defineStore } from 'pinia'
import { isEmpty } from '@eqian/utils-vue'
import piniaPersistConfig from '~/utils'
import type { IWebsite } from '~/api/system/type'
import { userInfo, userLogin, userLogout } from '~/api/user'
import type { User } from '~/api/user/type'
import { useRemoveTokenCookie, useSetTokenCookie, useGetTokenCookie } from '~/composables/use-cookies'
import { getSystemWebsite } from '~/api/system'
export interface IUserInfo extends Partial<User.IUserInfoResponse> {
  isLogin?: boolean;
}
export const useGlobalStore = defineStore({
  id: 'GlobalStore',
  state: () => ({
    // 用户信息
    userInfo: { isLogin: !!useGetTokenCookie() } as IUserInfo,
    theme: 'light',
    loginInfo: {
      account: '',
      password: ''
    },
    website: {} as IWebsite.Data
  }),
  actions: {
    settingTheme (theme: string) {
      this.theme = theme
    },
    setLoginInfo (loginInfo: any) {
      this.loginInfo = loginInfo
    },
    // 用户登录
    login (params: User.ILoginRequest) {
      return new Promise((resolve, reject) => {
        userLogin(params).then(async (res) => {
          useSetTokenCookie(res.token)
          this.userInfo.isLogin = true
          await this.getUserInfo()
          resolve(res)
        }).catch((error) => {
          console.log(error)
          reject(error)
        })
      })
    },
    logout () {
      return new Promise((resolve, reject) => {
        userLogout().then(() => {
          useRemoveTokenCookie()
          this.userInfo = {}
          this.$reset()
          resolve('退出成功')
        }).catch((error) => {
          reject(error)
        })
      })
    },
    getUserInfo () {
      return new Promise((resolve) => {
        userInfo().then((res) => {
          Object.assign(this.userInfo, res)
          resolve(res)
        })
      })
    },
    /**
     * 获取站点配置
     */
    getWebsite () {
      return new Promise<IWebsite.Data>((resolve) => {
        if (isEmpty(this.website)) {
          getSystemWebsite().then((res) => {
            this.setWebsite(<IWebsite.Data>unref(res) || {})
            resolve(<IWebsite.Data>unref(res) || {})
          })
        } else {
          resolve(this.website)
        }
      })
    },
    setWebsite (v: IWebsite.Data) {
      this.website = { ...v }
    }
  },
  persist: piniaPersistConfig('GlobalStore', ['theme', 'userInfo', 'loginInfo'])
})
