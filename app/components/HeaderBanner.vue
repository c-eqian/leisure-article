<script setup lang="ts">
import { ref } from 'vue'
import { useLogin } from '@/composables/useLogin'
import LoginModal from '@/components/LoginModal.vue'

/**
 * 头部横幅组件
 * 显示网站标题和用户登录状态
 */

// 登录状态管理
const { isLogin, login, logout } = useLogin()

// 登录模态框显示状态
const showLoginModal = ref(false)

/**
 * 处理登录按钮点击事件
 * 如果已登录则登出，否则显示登录模态框
 */
const handleLoginClick = () => {
  if (isLogin.value) {
    logout()
  } else {
    showLoginModal.value = true
  }
}
</script>

<template>
  <div class="header-banner">
    <div class="banner-image">
      <div class="banner-overlay">
        <div v-if="isLogin" class="banner-avatar logged-in" @click="handleLoginClick">
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
  <LoginModal v-model:visible="showLoginModal" @confirm="() => { login(); showLoginModal = false }" @close="() => (showLoginModal = false)" />
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
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
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
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
}
.login-btn:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
}

.login-icon {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logged-in {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.3), rgba(76, 175, 80, 0.1));
  border-color: rgba(76, 175, 80, 0.3);
}
.logged-in:hover {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.4), rgba(76, 175, 80, 0.2));
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
</style>


