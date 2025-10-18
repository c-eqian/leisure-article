<script setup lang="ts">
import { isFunction } from "@eqian/utils-vue";
import { computed, reactive, ref } from "vue";
const props = defineProps({
  loginFn: {
    type: Function,
    default: () => null,
  },
});
const emit = defineEmits<{
  (e: "close"): void;
}>();
const isVisible = ref(false);
const formValues = reactive({
  account: import.meta.dev ? "admin" : "",
  password: import.meta.dev ? "cyq990127" : "",
});
const isLoading = ref(false);
const errorMessage = ref("");

const isFormValid = computed(
  () => formValues.account.trim() !== "" && formValues.password.trim() !== "",
);
const handleClose = () => {
  isVisible.value = false;
  emit("close");
  resetForm();
};
const open = () => {
  isVisible.value = true;
};
const submitLogin = async () => {
  if (!isFormValid.value) return;
  const loginFn = props.loginFn;
  if (isFunction(loginFn)) {
    try {
      isLoading.value = true;
      const res = await loginFn(formValues, close);
      console.log(res);
      errorMessage.value = "";
      isVisible.value = false;
      resetForm();
      isLoading.value = false;
    } catch (e: any) {
      isLoading.value = false;
      console.log(e);
      errorMessage.value = e.msg || "登录失败";
    }
  }
};

const resetForm = () => {
  formValues.account = "";
  formValues.password = "";
  errorMessage.value = "";
};
defineExpose({
  open,
  close: handleClose,
  submitLogin,
  resetForm,
});
</script>

<template>
  <BaseModal v-model:visible="isVisible" closable @close="handleClose">
    <div class="login-form">
      <div class="form-header">
        <h2>登录</h2>
        <p>欢迎回来，请输入您的登录信息</p>
      </div>
      <form class="form-content" @submit.prevent="submitLogin">
        <div class="form-group">
          <label for="username">用户名</label>
          <input
            id="username"
            v-model="formValues.account"
            type="text"
            placeholder="请输入用户名"
            :disabled="isLoading"
            required
            @keydown.enter.prevent="submitLogin"
          >
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input
            id="password"
            v-model="formValues.password"
            type="password"
            placeholder="请输入密码"
            :disabled="isLoading"
            required
            @keydown.enter.prevent="submitLogin"
          >
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
            v-loading.lg="isLoading"
            type="submit"
            class="btn btn-primary"
            :disabled="!isFormValid || isLoading"
          >
            {{ isLoading ? "登录中..." : "登录" }}
          </button>
        </div>
      </form>
    </div>
  </BaseModal>
</template>

<style lang="scss" scoped>
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

@media (max-width: 480px) {
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
