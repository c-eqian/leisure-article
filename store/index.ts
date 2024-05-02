import { defineStore } from 'pinia'
import piniaPersistConfig from '~/utils'
import type { IWebsite } from '~/api/system/type'
import { getSystemWebsite } from '~/api/system'
import { userInfo, userLogin, userLogout } from '~/api/user'
import type { User } from '~/api/user/type'
export interface IUserInfo extends Partial<User.IUserInfoResponse> {
  isLogin?: boolean;
}
export const useGlobalStore = defineStore({
  id: 'GlobalStore',
  state: () => ({
    // 用户信息
    userInfo: {} as IUserInfo,
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
      const cookies = useCookie('USER_TOKEN')
      return new Promise((resolve, reject) => {
        console.log(params)
        userLogin(params).then(async (res) => {
          cookies.value = res.token
          this.userInfo.isLogin = true
          await this.getUserInfo(res.token)
          resolve(res)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    logout () {
      const cookies = useCookie('USER_TOKEN')
      return new Promise((resolve, reject) => {
        userLogout().then(() => {
          cookies.value = ''
          this.userInfo = {}
          this.$reset()
          resolve('退出成功')
        }).catch((error) => {
          reject(error)
        })
      })
    },
    getUserInfo (token:string) {
      return new Promise((resolve) => {
        userInfo(token).then((res) => {
          Object.assign(this.userInfo, res)
          resolve(res)
        })
      })
    },
    /**
     * 获取站点配置
     */
    getWebsite () {
      return new Promise<IWebsite.Data>((resolve, reject) => {
        getSystemWebsite().then((res) => {
          this.setWebsite(res)
          resolve(res)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    setWebsite (v: IWebsite.Data) {
      this.website = { ...v }
    }
  },
  persist: piniaPersistConfig('GlobalStore', ['theme', 'userInfo', 'loginInfo'])
})
