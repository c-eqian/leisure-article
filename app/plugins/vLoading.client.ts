import { createApp } from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { defineNuxtPlugin } from "#app";

interface LoadingInstance {
  app: ReturnType<typeof createApp>;
  el: HTMLElement;
}

declare module "vue" {
  interface ComponentCustomProperties {
    __vLoading?: LoadingInstance;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("loading", {
    mounted(el, binding) {
      setLoading(el as HTMLElement, Boolean(binding.value), binding.modifiers);
    },
    updated(el, binding) {
      setLoading(el as HTMLElement, Boolean(binding.value), binding.modifiers);
    },
    unmounted(el) {
      cleanup(el as HTMLElement);
    },
  });
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
      // Insert as first child
      el.insertBefore(container, el.firstChild);

      const app = createApp(LoadingSpinner, {
        size: modifiers.md ? 18 : modifiers.lg ? 20 : 16,
        thickness: 2,
        ariaLabel: "加载中",
      });
      app.mount(container);
      (el as any).__vLoading = { app, el: container };
    }
    el.setAttribute("disabled", "true");
  } else {
    cleanup(el);
    el.removeAttribute("disabled");
  }
}

function cleanup(el: HTMLElement) {
  const inst: LoadingInstance | undefined = (el as any).__vLoading;
  if (inst) {
    inst.app.unmount();
    if (inst.el && inst.el.parentNode) inst.el.parentNode.removeChild(inst.el);
    (el as any).__vLoading = undefined;
  }
}

// Basic styles for inline container
document.head.appendChild(
  Object.assign(document.createElement("style"), {
    textContent: `.v-loading-inline{display:inline-flex;align-items:center;margin-right:8px;}`,
  }),
);
