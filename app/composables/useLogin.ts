import { isEmpty } from "@eqian/utils-vue";
import { computed } from "vue";
import { useStore } from "@/composables/useStore";
import { useCookie } from "#app";
import { createBaseLoginModal } from "~/composables/createLoginModal";
/**
 * 用户登录状态管理 Composable
 * 提供登录相关的状态和方法
 */
export const useLogin = () => {
  const webStore = useStore();
  const cookieStore = useCookie("__TOKEN_KEY__");
  // 计算属性：当前登录状态
  const isLogin = computed(
    () => webStore.isLogin && !isEmpty(webStore.userInfo && cookieStore.value),
  );
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
  const userInfo = computed(() => webStore.userInfo || {});
  /**
   * 创建登录
   */
  const createLoginModal = async (options: CreateLoginModalOptions) => {
    const modal = await createBaseLoginModal(options);
    modal.open();
    return modal;
  };
  return {
    isLogin,
    logout,
    webStore,
    toggleLogin,
    userInfo,
    createLoginModal,
  };
};
