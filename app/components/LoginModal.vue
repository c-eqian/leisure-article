<script setup lang="ts">
import { computed, ref } from "vue";
import { useTheme } from "@/composables/useTheme";

const props = defineProps<{ visible?: boolean }>();
const emit = defineEmits<{
  (e: "update:visible", v: boolean): void;
  (e: "confirm" | "close"): void;
}>();
const { isDark } = useTheme();

const username = ref("");
const password = ref("");
const isLoading = ref(false);
const errorMessage = ref("");

const isFormValid = computed(
  () => username.value.trim() !== "" && password.value.trim() !== "",
);

const handleLogin = async () => {
  if (!isFormValid.value) return;
  isLoading.value = true;
  errorMessage.value = "";
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (username.value === "admin" && password.value === "123456") {
      emit("confirm");
      resetForm();
      emit("update:visible", false);
    } else {
      errorMessage.value = "用户名或密码错误";
    }
  } catch {
    errorMessage.value = "登录失败，请重试";
  } finally {
    isLoading.value = false;
  }
};

const resetForm = () => {
  username.value = "";
  password.value = "";
  errorMessage.value = "";
};
const handleClose = () => {
  emit("close");
  resetForm();
  emit("update:visible", false);
};
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") handleClose();
};
</script>

<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div
        v-if="props.visible"
        class="modal-overlay"
        tabindex="-1"
        @keydown="handleKeydown"
      >
        <transition name="modal-scale">
          <div
            v-if="props.visible"
            class="modal-container"
            :class="{ dark: isDark }"
            @click.stop
          >
            <button class="close-btn" title="关闭" @click="handleClose">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
              </svg>
            </button>
            <div class="login-form">
              <div class="form-header">
                <h2>登录</h2>
                <p>欢迎回来，请输入您的登录信息</p>
              </div>
              <form class="form-content" @submit.prevent="handleLogin">
                <div class="form-group">
                  <label for="username">用户名</label>
                  <input
                    id="username"
                    v-model="username"
                    type="text"
                    placeholder="请输入用户名"
                    :disabled="isLoading"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="password">密码</label>
                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    placeholder="请输入密码"
                    :disabled="isLoading"
                    required
                  />
                </div>
                <div v-if="errorMessage" class="error-message">
                  {{ errorMessage }}
                </div>
                <div class="form-actions">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    :disabled="isLoading"
                    @click="handleClose"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    :disabled="!isFormValid || isLoading"
                  >
                    <span v-if="isLoading" class="loading-spinner" />
                    {{ isLoading ? "登录中..." : "登录" }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
/* styles copied from original, expanded for readability */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  cursor: default;
}

.modal-container {
  background: var(--bg-primary);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 90%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  border: 1px solid var(--border-color);

  &.dark {
    background: var(--bg-primary);
    border-color: var(--border-color);
  }
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-secondary);
  transition: all 0.2s ease;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    color: var(--text-primary);
    transform: scale(1.1);
  }
}

.login-form {
  padding: 32px;
}

.form-header {
  text-align: center;
  margin-bottom: 32px;

  h2 {
    margin: 0 0 8px 0;
    font-size: 24px;
    font-weight: 600;
    color: var(--text-primary);
  }

  p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 14px;
  }
}

.form-content {
  .form-group {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: var(--text-primary);
      font-size: 14px;
    }

    input {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid var(--border-color);
      border-radius: 8px;
      font-size: 14px;
      background: var(--bg-secondary);
      color: var(--text-primary);
      transition: all 0.2s ease;
      box-sizing: border-box;

      &:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &::placeholder {
        color: var(--text-tertiary);
      }
    }
  }
}

.error-message {
  background: #fee;
  color: #c33;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 20px;
  border: 1px solid #fcc;
}

.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;

  .btn {
    flex: 1;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &.btn-secondary {
      background: var(--bg-secondary);
      color: var(--text-secondary);
      border: 2px solid var(--border-color);

      &:hover:not(:disabled) {
        background: var(--bg-tertiary);
        color: var(--text-primary);
      }
    }

    &.btn-primary {
      background: var(--primary-color);
      color: #fff;

      &:hover:not(:disabled) {
        background: var(--primary-hover);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
      }

      &:active:not(:disabled) {
        transform: translateY(0);
      }
    }
  }
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-scale-enter-active,
.modal-scale-leave-active {
  transition: all 0.3s ease;
}
.modal-scale-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(-20px);
}
.modal-scale-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

@media (max-width: 480px) {
  .modal-container {
    width: 95%;
    margin: 20px;
  }
  .login-form {
    padding: 24px;
  }
  .form-header h2 {
    font-size: 20px;
  }
  .form-actions {
    flex-direction: column;
  }
  .form-actions .btn {
    width: 100%;
  }
}
</style>
