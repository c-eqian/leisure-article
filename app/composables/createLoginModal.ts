import { createApp } from "vue";

export type LoginFn = (data: any, close: () => void) => Promise<void> | void;

export interface CreateLoginModalOptions {
  loginFn?: LoginFn;
  onClose?: () => void;
}

export interface LoginModalController {
  open: () => void;
  close: () => void;
  destroy: () => void;
}

export async function createBaseLoginModal(
  options: CreateLoginModalOptions = {},
): Promise<LoginModalController> {
  const LoginModal = (await import("@/components/LoginModal.vue")).default;
  const LoadingSpinner = (await import("@/components/LoadingSpinner.vue"))
    .default as any;
  const container = document.createElement("div");
  document.body.appendChild(container);

  const app = createApp(LoginModal as any, {
    loginFn: options.loginFn,
    onClose: options.onClose,
  });

  // Register v-loading directive locally for this programmatic app
  app.directive("loading", {
    mounted(el, binding) {
      setLoading(
        el as HTMLElement,
        Boolean(binding.value),
        binding.modifiers as any,
      );
    },
    updated(el, binding) {
      setLoading(
        el as HTMLElement,
        Boolean(binding.value),
        binding.modifiers as any,
      );
    },
    unmounted(el) {
      cleanup(el as HTMLElement);
    },
  });

  function setLoading(
    el: HTMLElement,
    isLoading: boolean,
    modifiers: Record<string, boolean>,
  ) {
    if (isLoading) {
      if (!(el as any).__vLoading) {
        const container = document.createElement("span");
        container.className = "v-loading-inline";
        el.insertBefore(container, el.firstChild);

        const spinnerApp = createApp(LoadingSpinner, {
          size: modifiers.md ? 18 : modifiers.lg ? 20 : 16,
          thickness: 2,
          ariaLabel: "加载中",
        });
        spinnerApp.mount(container);
        (el as any).__vLoading = { app: spinnerApp, el: container };
      }
      el.setAttribute("disabled", "true");
    } else {
      cleanup(el);
      el.removeAttribute("disabled");
    }
  }

  function cleanup(el: HTMLElement) {
    const inst: { app: any; el: HTMLElement } | undefined = (el as any)
      .__vLoading;
    if (inst) {
      inst.app.unmount();
      if (inst.el && inst.el.parentNode)
        inst.el.parentNode.removeChild(inst.el);
      (el as any).__vLoading = undefined;
    }
  }

  // Inline style needed for inline container spacing
  if (!document.getElementById("v-loading-inline-style")) {
    const style = document.createElement("style");
    style.id = "v-loading-inline-style";
    style.textContent = `.v-loading-inline{display:inline-flex;align-items:center;margin-right:8px;}`;
    document.head.appendChild(style);
  }

  const vm = app.mount(container) as any;

  const open = () => {
    vm?.open?.();
  };

  const close = () => {
    vm?.close?.();
    destroy();
  };

  const destroy = () => {
    try {
      app.unmount();
    } finally {
      if (container.parentNode) container.parentNode.removeChild(container);
    }
  };

  return { open, close, destroy };
}
