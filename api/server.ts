import { useAsyncData, useNuxtApp } from "nuxt/app";
import { useCookie } from "#app";
import { useLogin } from "~/composables/useLogin";

export const getServer = () => {
  const { $config } = useNuxtApp();
  return $config.public.BASE_URL;
};
export const useAsyncRequest = <T = any>(
  key: string,
  url: string,
  reqParams: any = {},
  options: any = {},
) => {
  return useAsyncData(
    key,
    () =>
      $fetch<T>(getServer() + url.replace(/^\//, ""), {
        method: "GET",
        // 请求拦截器
        onRequest({ request: _, options }): Promise<void> | void {
          // 添加认证token
          const cookies = useCookie("__TOKEN_KEY__");
          if (reqParams?.token || cookies) {
            options.headers = {
              ...options.headers,
              Authorization: reqParams?.token || cookies.value,
            } as any;
          }
        },
        ...reqParams,
      }),
    {
      server: false,
      transform: (res: any) => {
        return res.data;
      },
      default: () => {
        return {} as unknown as T;
      },
      ...options,
    },
  );
};
export const useAsyncFetch = async <T = any>(
  url: string,
  reqParams: any = {},
) => {
  return await $fetch<T>(getServer() + url.replace(/^\//, ""), {
    method: "GET",
    // 请求拦截器
    onRequest({ request: _, options }): Promise<void> | void {
      // 添加认证token
      const cookies = useCookie("__TOKEN_KEY__");
      if (reqParams?.token || cookies) {
        options.headers = {
          ...options.headers,
          Authorization: reqParams?.token || cookies.value,
        } as any;
      }
    },
    // 响应拦截器
    async onResponse({ request: _, response }) {
      const { code } = response._data as any;

      if (code !== 200) {
        // 处理认证失败
        if (code === 401 || code === 423) {
          const { createLoginModal, webStore } = useLogin();
          const goToLogin = async (form: any, _close: () => void) => {
            await webStore.login(form);
          };
          await createLoginModal({
            loginFn: goToLogin,
            title: "欢迎使用：需要登录才能留言哦~",
          });
        }
        return Promise.reject(response._data);
      } else {
        return Promise.resolve((response._data as any).data || {});
      }
    },

    // 响应错误处理
    onResponseError({ request: _, response }) {
      console.error("响应错误:", _, response);
      return Promise.reject(response._data);
    },

    ...reqParams,
  });
};
