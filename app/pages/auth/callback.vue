<script setup lang="ts">
import { useAsyncFetch } from "~~/api/server";
import { useCookie } from "nuxt/app";
import { onMounted, onUnmounted, ref } from "vue";
import { useStore } from "@/composables/useStore";
import { definePageMeta, useRoute, useRouter } from "#imports";
import { useNoticeToast } from "~/composables/useNoticeToast";

definePageMeta({
  layout: "common",
});
const router = useRouter();
const route = useRoute();
const store = useStore();
const { openToast } = useNoticeToast();
const loading = ref(true);
const isError = ref(false);
const countdown = ref(5);
const toPathRef = ref("/");
let countdownTimer: any = null;
onMounted(async () => {
  const code = (route.query.code as string) || "";
  const state = (route.query.state as string) || "/";
  const toPath = decodeURIComponent(state || "/");
  toPathRef.value = toPath;

  if (code) {
    try {
      const res: any = await useAsyncFetch("user/auth/github", {
        body: { code, state },
        server: false,
        method: "POST",
      });
      const tokenValue = res && (res.data?.token || res.token || res?.data);
      if (tokenValue) {
        await store.getUserInfo(tokenValue);
        const tokenCookie = useCookie("__TOKEN_KEY__");
        tokenCookie.value = tokenValue as string;
        router.replace(toPath || "/");
        return;
      }
      // If no token returned, treat as failure
      throw new Error("NO_TOKEN");
    } catch (err: any) {
      console.info(err);
      openToast({
        icon: "",
        message: err?.message || "授权失败",
      });
      isError.value = true;
      loading.value = false;
      countdown.value = 5;
      countdownTimer = setInterval(() => {
        countdown.value -= 1;
        if (countdown.value <= 0) {
          clearInterval(countdownTimer);
          router.replace(toPath || "/");
        }
      }, 1000);
      return;
    }
  }
  router.replace(toPath || "/");
});
onUnmounted(() => {
  if (countdownTimer) clearInterval(countdownTimer);
});
</script>

<template>
  <div class="auth-callback">
    <div v-if="loading && !isError" class="loading-box">
      <div class="spinner" aria-hidden="true" />
      <div class="text">正在请求授权登录，请稍候...</div>
    </div>
    <div v-else-if="isError" class="error-box">
      <div class="error-text">授权失败</div>
      <div class="sub-text">{{ countdown }} 秒后将返回上一页</div>
    </div>
  </div>
</template>

<style scoped>
.auth-callback {
  padding: 32px;
  width: 100%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f5f5f5;
  color: var(--text-secondary);
}
.loading-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.spinner {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 3px solid rgba(0, 0, 0, 0.08);
  border-top-color: var(--primary, #3b82f6);
  animation: spin 0.9s linear infinite;
}
.text {
  font-size: 14px;
}
.error-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.error-text {
  color: #ef4444;
  font-weight: 600;
}
.sub-text {
  color: var(--text-secondary);
  font-size: 13px;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
