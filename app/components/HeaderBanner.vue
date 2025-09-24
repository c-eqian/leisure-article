<script setup lang="ts">
import { ref } from "vue";
import { useLogin } from "../composables/useLogin";

/**
 * 头部横幅组件
 * 显示网站标题和用户登录状态
 */

// 登录状态管理
const { isLogin, createLoginModal, login, logout } = useLogin();

// 退出确认弹窗
const showLogoutConfirm = ref(false);
const goToLogin = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      login();
      resolve(true);
    }, 5000),
  );
};
/**
 * 处理登录按钮点击事件
 * 如果已登录则登出，否则显示登录模态框
 */
const handleLoginClick = async () => {
  if (isLogin.value) {
    showLogoutConfirm.value = true;
  } else {
    await createLoginModal({ loginFn: goToLogin });
  }
};

const confirmLogout = () => {
  logout();
  showLogoutConfirm.value = false;
};
</script>

<template>
  <client-only>
    <div class="header-banner">
      <div class="banner-image">
        <div class="banner-overlay">
          <div
            v-if="isLogin"
            class="banner-avatar logged-in"
            @click="handleLoginClick"
          >
            <div class="avatar-circle">片</div>
            <span class="avatar-text">片刻</span>
            <div class="logout-icon">×</div>
          </div>
          <div v-else class="banner-avatar login-btn" @click="handleLoginClick">
            <div class="login-icon">👤</div>
            <span class="avatar-text">登录</span>
          </div>
        </div>
      </div>
    </div>
    <BaseModal
      :visible="showLogoutConfirm"
      title="确认退出"
      closable
      @update:visible="(v) => (showLogoutConfirm = v)"
      @close="() => (showLogoutConfirm = false)"
    >
      <div class="confirm-dialog">
        <div class="confirm-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 15h-2v-2h2Zm0-4h-2V7h2Z"
            />
          </svg>
        </div>
        <div class="confirm-body">
          <h3 class="confirm-title">确定退出登录？</h3>
          <p class="confirm-desc">
            退出后将无法进行需要登录的操作，仍要继续吗？
          </p>
        </div>
        <div class="confirm-actions">
          <button class="btn btn-ghost" @click="showLogoutConfirm = false">
            取消
          </button>
          <button class="btn btn-danger" @click="confirmLogout">
            确认退出
          </button>
        </div>
      </div>
    </BaseModal>
  </client-only>
</template>

<style scoped>
.header-banner {
  position: relative;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea;stop-opacity:1" /><stop offset="100%" style="stop-color:%23764ba2;stop-opacity:1" /></linearGradient></defs><rect width="1200" height="300" fill="url(%23grad1)"/><circle cx="200" cy="100" r="60" fill="rgba(255,255,255,0.1)"/><circle cx="800" cy="200" r="80" fill="rgba(255,255,255,0.05)"/><rect x="100" y="150" width="200" height="100" fill="rgba(255,255,255,0.1)" rx="10"/><rect x="600" y="80" width="150" height="80" fill="rgba(255,255,255,0.08)" rx="8"/></svg>')
    center/cover;
  position: relative;
}

.banner-overlay {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.banner-avatar {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.banner-avatar::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.banner-avatar:hover::before {
  left: 100%;
}

.banner-avatar:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

.banner-avatar:active {
  transform: translateY(0);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.avatar-circle {
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #667eea;
  font-size: 14px;
}

.login-btn {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.1)
  );
}
.login-btn:hover {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.2)
  );
}

.login-icon {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logged-in {
  background: linear-gradient(
    135deg,
    rgba(76, 175, 80, 0.3),
    rgba(76, 175, 80, 0.1)
  );
  border-color: rgba(76, 175, 80, 0.3);
}
.logged-in:hover {
  background: linear-gradient(
    135deg,
    rgba(76, 175, 80, 0.4),
    rgba(76, 175, 80, 0.2)
  );
  border-color: rgba(76, 175, 80, 0.5);
}

.logout-icon {
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  color: white;
  transition: all 0.2s ease;
  margin-left: 5px;
}
.logout-icon:hover {
  background: rgba(255, 0, 0, 0.3);
  transform: scale(1.1);
}

.avatar-text {
  color: white;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .header-banner {
    height: 200px;
  }
}

/* Confirm dialog styles */
.confirm-dialog {
  display: grid;
  grid-template-columns: 48px 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: 16px;
  align-items: start;
}
.confirm-icon {
  grid-row: 1 / span 2;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 99, 71, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e05858;
}
.confirm-icon svg {
  width: 28px;
  height: 28px;
  fill: currentColor;
}
.confirm-body {
  margin-bottom: 16px;
}
.confirm-title {
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}
.confirm-desc {
  margin: 0;
  color: var(--text-secondary);
  font-size: 14px;
}
.confirm-actions {
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 8px;
}
.btn {
  padding: 10px 16px;
  border-radius: 10px;
  border: 2px solid transparent;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.btn-ghost {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border-color: var(--border-color);
}
.btn-ghost:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}
.btn-danger {
  background: #e05858;
  color: #fff;
}
.btn-danger:hover {
  background: #cc4c4c;
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(224, 88, 88, 0.35);
}
</style>
