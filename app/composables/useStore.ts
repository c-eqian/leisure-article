import { defineStore } from "pinia";

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
    websiteTheme:
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : ("light" as WebsiteTheme),

    // 是否为移动设备
    isMobile: false as boolean,

    // 侧边栏是否打开
    isOpenSide: false as boolean,

    // 用户是否已登录
    isLogin: false as boolean,

    // 是否显示登录模态框
    showLoginModal: false as boolean,

    // 是否显示样式配置模态框
    showStyleConfigModal: false as boolean,

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
    login() {
      this.isLogin = true;
    },

    /**
     * 用户登出
     */
    logout() {
      this.isLogin = false;
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
    pick: ["websiteTheme", "isMobile", "isOpenSide", "currentStyleTheme"],
  },
});
