import { computed, watch } from "vue";
import { useWebSize } from "@/composables/useWebSize";

/**
 * 侧边栏管理 Composable
 * 提供侧边栏状态管理和移动端适配功能
 */
export const useSideBar = () => {
  const { webStore, isMobile } = useWebSize();

  // 计算属性：侧边栏是否打开
  const isOpenSide = computed(() => webStore.isOpenSide);

  /**
   * 监听移动端和侧边栏状态变化
   * 在移动端打开侧边栏时固定body，防止背景滚动
   */
  watch(
    [isMobile, isOpenSide],
    ([mobile, visible]) => {
      if (mobile && visible) {
        // 移动端侧边栏打开时，固定body防止背景滚动
        if (import.meta.client) {
          document.body.style.overflow = "hidden";
          document.body.style.position = "fixed";
          document.body.style.width = "100%";
        }
        webStore.setIsOpenSide(true);
      } else {
        // 侧边栏关闭时，恢复body样式
        webStore.setIsOpenSide(false);
        if (import.meta.client) {
          document.body.style.overflow = "";
          document.body.style.position = "";
          document.body.style.width = "";
        }
      }
    },
    { immediate: true },
  );

  return {
    isOpenSide,
    webStore,
    isMobile,
  };
};
