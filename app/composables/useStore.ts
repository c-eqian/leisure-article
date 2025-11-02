import { isEmpty } from "@eqian/utils-vue";
import { useAsyncFetch } from "~~/api/server";
import { useCookie } from "nuxt/app";
import { defineStore } from "pinia";
import type { ICategoryTags } from "~~/api/category/type";
import type { IUserInfo } from "~~/api/oss/type";
import type { IWebsite } from "~~/api/system/type";
import type { User } from "~~/api/user/type";
/**
 * 网站主题类型
 */
type WebsiteTheme = "light" | "dark";

/**
 * 样式主题类型
 */
type StyleTheme =
  | "default"
  | "ocean"
  | "forest"
  | "sunset"
  | "purple"
  | "minimal";

/**
 * 网站状态管理 Store
 * 管理网站的整体状态，包括主题、设备类型、侧边栏状态等
 */
export const useStore = defineStore("WEBSITE-STORE", {
  state: () => ({
    // 网站主题（亮色/暗色）
    websiteTheme: "light",

    // 是否为移动设备
    isMobile: false as boolean,

    // 侧边栏是否打开
    isOpenSide: false as boolean,
    // 用户信息
    userInfo: {} as unknown as IUserInfo,
    theme: "light",
    website: {} as unknown as IWebsite.Data,
    categoryTags: [] as ICategoryTags[],
    articleSearchHistory: [] as string[],
    // 用户是否已登录（优先从本地持久化中恢复）
    isLogin: false,

    // 当前样式主题
    currentStyleTheme: "default" as StyleTheme,
  }),

  actions: {
    /**
     * 切换网站主题（亮色/暗色）
     */
    toggleWebsiteTheme() {
      this.websiteTheme = this.websiteTheme === "light" ? "dark" : "light";

      if (import.meta.client) {
        document.documentElement.setAttribute("data-theme", this.websiteTheme);
      }
    },

    /**
     * 设置移动设备状态
     * @param bool - 是否为移动设备
     */
    setIsMobile(bool: boolean = false) {
      this.isMobile = bool;
    },

    /**
     * 设置侧边栏打开状态
     * @param bool - 是否打开侧边栏
     */
    setIsOpenSide(bool: boolean = false) {
      this.isOpenSide = bool;
    },

    /**
     * 切换侧边栏打开状态
     */
    toggleOpenSide() {
      this.isOpenSide = !this.isOpenSide;
    },

    /**
     * 用户登录
     */
    login(params: User.ILoginRequest) {
      return new Promise((resolve, reject) => {
        useAsyncFetch("user/login", {
          method: "POST",
          body: params,
        })
          .then(async ({ data }) => {
            // useSetTokenCookie(res.token)
            const token = useCookie("__TOKEN_KEY__", {
              maxAge: 60 * 60 * 24,
            });
            token.value = data.token;
            await this.getUserInfo(data.token);
            resolve(data);
            if (import.meta.browser) {
              window.location.reload();
              // 重新加载当前页面
              // eslint-disable-next-line no-self-assign
              window.location.href = window.location.href;
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getUserInfo(token: string) {
      return new Promise((resolve, reject) => {
        useAsyncFetch("user/info", {
          token,
        })
          .then((res) => {
            this.userInfo = {} as any;
            this.userInfo = Object.assign(this.userInfo, res.data);
            this.isLogin = true;
            resolve(res.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    /**
     * 用户登出
     */
    logout() {
      return new Promise((resolve, reject) => {
        useAsyncFetch("user/logout")
          .then(() => {
            // useRemoveTokenCookie()
            const c = useCookie("__TOKEN_KEY__");
            c.value = "";
            this.userInfo = {} as unknown as IUserInfo;
            this.isLogin = false;
            // this.$reset();
            if (import.meta.browser) {
              window.location.reload();
              // 重新加载当前页面
              // eslint-disable-next-line no-self-assign
              window.location.href = window.location.href;
            }
            resolve("退出成功");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    /**
     * 切换登录状态
     */
    toggleLogin() {
      this.isLogin = !this.isLogin;
    },

    /**
     * 设置样式主题
     * @param theme - 主题名称
     */
    setStyleTheme(theme: string) {
      this.currentStyleTheme = theme as StyleTheme;
      this.applyStyleTheme(theme);
    },

    /**
     * 应用样式主题到DOM
     * @param theme - 主题名称
     */
    applyStyleTheme(theme: string) {
      if (!import.meta.client) return;

      // 移除所有主题类
      document.documentElement.classList.remove(
        "theme-default",
        "theme-ocean",
        "theme-forest",
        "theme-sunset",
        "theme-purple",
        "theme-minimal",
      );

      // 添加新主题类
      document.documentElement.classList.add(`theme-${theme}`);
    },
  },

  getters: {
    /**
     * 是否为暗色主题
     */
    isDark: (state) => state.websiteTheme === "dark",
  },

  // 持久化配置
  persist: {
    // pick: [
    //   "websiteTheme",
    //   "isMobile",
    //   "isOpenSide",
    //   "currentStyleTheme",
    //   "isLogin",
    //   "userInfo",
    // ],
    omit: [],
  },
});

export const useWebsiteStore = defineStore("WEBSITES-INFO", {
  state() {
    return {
      website: {} as unknown as IWebsite.Data,
    };
  },
  actions: {
    async getWebsiteInfo(): Promise<IWebsite.Data> {
      if (!isEmpty(this.website)) {
        return this.website;
      }
      const res = await useAsyncFetch("system/website");
      this.website = (res.data || {}) as unknown as IWebsite.Data;
      return this.website;
    },
  },
  persist: false,
});
