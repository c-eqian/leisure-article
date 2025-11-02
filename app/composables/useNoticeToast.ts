import { useDebounce } from "@eqian/utils-vue";
import { createApp } from "vue";
export type NoticeToast = {
  message: string;
  icon?: string;
  /**
   * 2000 ms
   */
  duration?: number;
};
let ToastCache: any;
let vm: any;
let app: ReturnType<typeof createApp> | undefined;
let container: Element | undefined;
let tide: NodeJS.Timeout | undefined;
/**
 * 弹窗通知
 */
export const useNoticeToast = () => {
  const openToast = async (options: NoticeToast) => {
    const { duration = 3000, ...ops } = options;
    closeToast();
    if (!ToastCache) {
      ToastCache = (await import("../components/NoticeToast.vue")).default;
    }
    container = document.createElement("div");
    document.body.appendChild(container);
    app = createApp(ToastCache as any, ops);
    vm = app.mount(container) as any;
    vm?.visibleSwitch(true);
    tide && clearTimeout(tide);
    if (duration) {
      tide = setTimeout(closeToast, duration);
    }
  };
  const destroy = () => {
    try {
      app?.unmount();
    } finally {
      if (container?.parentNode) container.parentNode.removeChild(container);
    }
  };
  const closeToast = () => {
    vm?.visibleSwitch(false);
    destroy();
    app = undefined;
    vm = undefined;
  };
  return {
    openToast: useDebounce(openToast, 50),
    closeToast,
  };
};
