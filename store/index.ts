import { defineStore } from 'pinia'
import { isEmpty } from '@eqian/utils-vue'
import piniaPersistConfig from '~/utils'
import type { IWebsite } from '~/api/system/type'
import { userInfo, userLogin, userLogout } from '~/api/user'
import type { User } from '~/api/user/type'
import { getSystemWebsite } from '~/api/system'
import type { ICategoryTags } from '~/api/category/type'
import { getCategoryTagsList } from '~/api/category'
export interface IUserInfo extends Partial<User.IUserInfoResponse> {
  isLogin?: boolean;
}
export const useGlobalStore = defineStore({
  id: 'GlobalStore',
  state: () => ({
    // 用户信息
    userInfo: { } as IUserInfo,
    theme: 'light',
    loginInfo: {
      account: '',
      password: ''
    },
    website: {} as IWebsite.Data,
    categoryTags: [] as ICategoryTags[],
    articleSearchHistory: [] as string[]
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
          // useSetTokenCookie(res.token)
          const token = useCookie('__TOKEN_KEY__', {
            maxAge: 60 * 60 * 24
          })
          token.value = res.token
          this.userInfo.isLogin = true
          await this.getUserInfo(res.token)
          resolve(res)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    logout () {
      return new Promise((resolve, reject) => {
        userLogout().then(() => {
          // useRemoveTokenCookie()
          const c = useCookie('__TOKEN_KEY__')
          c.value = ''
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
        userInfo({
          token
        }).then((res) => {
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
    },
    getCategoryTags ():Promise<ICategoryTags[]> {
      return new Promise((resolve) => {
        if (this.categoryTags.length > 0) {
          resolve(this.categoryTags)
          return
        }
        getCategoryTagsList().then((res) => {
          if (!isEmpty(res)) {
            this.categoryTags = res
          }
          resolve(this.categoryTags)
        }).catch(() => {
          resolve(this.categoryTags)
        })
      })
    },
    addArticleSearch (v:string) {
      if (this.articleSearchHistory.includes(v)) { return }
      if (this.articleSearchHistory.length > 30) {
        this.articleSearchHistory.pop()
      }
      this.articleSearchHistory.unshift(v)
    }
  },
  persist: piniaPersistConfig('GlobalStore', ['theme', 'userInfo', 'loginInfo', 'articleSearchHistory'])
})
