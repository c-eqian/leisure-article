import { computed } from "vue";
import { useStore } from "@/composables/useStore";

/**
 * 用户登录状态管理 Composable
 * 提供登录相关的状态和方法
 */
export const useLogin = () => {
  const webStore = useStore();

  // 计算属性：当前登录状态
  const isLogin = computed(() => webStore.isLogin);

  /**
   * 用户登录
   * 设置登录状态为已登录
   */
  const login = () => webStore.login();

  /**
   * 用户登出
   * 设置登录状态为未登录
   */
  const logout = () => webStore.logout();

  /**
   * 切换登录状态
   * 在登录和未登录之间切换
   */
  const toggleLogin = () => webStore.toggleLogin();

  return {
    isLogin,
    login,
    logout,
    toggleLogin,
  };
};
