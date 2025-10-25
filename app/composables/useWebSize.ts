import { computed, onMounted, onUnmounted } from "vue";
import { useStore } from "@/composables/useStore";

/**
 * 响应式尺寸管理 Composable
 * 提供设备类型检测和窗口尺寸监听功能
 */
export const useWebSize = () => {
  const webStore = useStore();

  /**
   * 窗口尺寸变化处理函数
   * 根据窗口宽度判断是否为移动设备
   */
  const onResize = () => {
    if (!import.meta.client) return;

    // 1200px 作为移动端和桌面端的分界点
    webStore.setIsMobile(window.innerWidth < 1200);
  };

  // 组件挂载时初始化尺寸检测并添加监听器
  onMounted(() => {
    onResize();
    if (import.meta.client) {
      window.addEventListener("resize", onResize);
    }
  });

  // 组件卸载时移除监听器
  onUnmounted(() => {
    if (import.meta.client) {
      window.removeEventListener("resize", onResize);
    }
  });

  // 计算属性：是否为移动设备
  const isMobile = computed(() => webStore.isMobile);

  return {
    webStore,
    isMobile,
  };
};
