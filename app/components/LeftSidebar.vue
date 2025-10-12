<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import StyleConfigModal from "@/components/StyleConfigModal.vue";
import { useSideBar } from "@/composables/useSideBar";
import { useTheme } from "@/composables/useTheme";
import { useWebsite } from "~/composables/useWebsite";

/**
 * 左侧边栏组件
 * 包含导航菜单、站点统计、社交链接和标签等功能
 */

// 当前激活的菜单项
const activeMenu = ref("home");

// 路由相关
const router = useRouter();
const route = useRoute();

// 主题和侧边栏状态管理
const { isDark, toggleTheme, webStore } = useTheme();
const { isOpenSide, isMobile } = useSideBar();

// 样式配置模态框显示状态
const showStyleConfig = ref(false);
const { websiteDataRef, getWebsite } = useWebsite();
// 导航菜单项配置
const menuItems = [
  { id: "", name: "主页", icon: "🏠", active: true },
  { id: "daily", name: "日常", icon: "📝", active: false },
  { id: "images", name: "图片", icon: "🖼️", active: true },
  { id: "notes", name: "笔记", icon: "📔", active: true },
  { id: "messages", name: "留言", icon: "💬", active: false },
  { id: "about", name: "关于", icon: "ℹ️", active: true },
  { id: "tools", name: "工具箱", icon: "🔧", active: true },
  { id: "settings", name: "设置", icon: "⚙️", active: true },
];

// 标签数据
const tags = ["typescript", "Nuxt", "Vue"];

/**
 * 设置激活菜单项并导航
 * @param menuId - 菜单项ID
 */
const setActiveMenu = (menuId: string) => {
  if (menuId === "settings") {
    showStyleConfig.value = true;
    return;
  }
  if (["messages", "daily"].includes(menuId)) return;
  activeMenu.value = menuId;

  // 移动端点击菜单后关闭侧边栏
  if (isMobile.value) {
    webStore.setIsOpenSide();
  }

  router.push(`/${menuId}`);
};

// 监听路由变化，更新激活菜单
watchEffect(() => {
  activeMenu.value = route.path;
});
getWebsite();
</script>

<template>
  <transition name="overlay-fade">
    <div
      v-if="isMobile && isOpenSide"
      class="mobile-overlay"
      @click="() => webStore.setIsOpenSide(false)"
    />
  </transition>
  <transition name="sidebar-slide">
    <div
      v-if="!isMobile || isOpenSide"
      class="left-sidebar"
      :class="{ 'mobile-visible': isMobile && isOpenSide, dark: isDark }"
    >
      <div class="logo-section">
        <div class="logo">Eqian主页</div>
        <button
          class="theme-toggle"
          :title="isDark ? '切换到亮色模式' : '切换到暗黑模式'"
          @click="toggleTheme"
        >
          {{ isDark ? "☀️" : "🌙" }}
        </button>
      </div>
      <nav class="nav-menu">
        <ul>
          <li
            v-for="item in menuItems"
            :key="item.id"
            :class="{ active: activeMenu === `/${item.id}` }"
            @click="setActiveMenu(item.id)"
          >
            <span class="icon">{{ item.icon }}</span>
            <span class="text">{{ item.name }}</span>
          </li>
        </ul>
      </nav>

      <div class="follow-section">
        <h3>Follow Me</h3>
        <div class="social-icons">
          <div class="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </div>
          <div class="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#C71D23" />
              <path
                d="M8.5 7.5h7c.8 0 1.5.7 1.5 1.5v6c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5V9c0-.8.7-1.5 1.5-1.5zm.5 2v5h6v-5H9zm2.5 1.5c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5z"
                fill="white"
              />
            </svg>
          </div>
          <div class="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.38a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
              />
            </svg>
          </div>
          <div class="social-icon">🔗</div>
        </div>
      </div>
      <div class="tags-section">
        <h3>技术栈</h3>
        <div class="tags">
          <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </transition>
  <StyleConfigModal v-model:visible="showStyleConfig" />
</template>

<style scoped lang="scss">
/* trimmed styles: mirrored from original */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

.left-sidebar {
  flex: 0 0 var(--sidebar-width);
  width: var(--sidebar-width);
  background: var(--bg-sidebar);
  color: var(--text-white);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-shadow: var(--shadow-medium);
  height: 100vh;
  overflow-y: auto;
  transition: all var(--transition-normal);
  position: sticky;
  top: 0;

  // hide scrollbars
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  &.mobile-hidden {
    transform: translateX(-100%);
  }

  .logo-section {
    text-align: center;
    margin-bottom: 10px;
    position: relative;

    .logo {
      font-size: 28px;
      font-weight: 800;
      color: var(--text-white);
      margin-bottom: 10px;
      letter-spacing: 1px;
      transition: all var(--transition-normal);
    }

    .theme-toggle {
      background: rgba(255, 255, 255, 0.25);
      border: 2px solid rgba(255, 255, 255, 0.3);
      color: var(--text-white);
      font-size: 20px;
      padding: 10px;
      border-radius: 50%;
      cursor: pointer;
      transition: all var(--transition-normal);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

      &:hover {
        background: rgba(255, 255, 255, 0.4);
        border-color: rgba(255, 255, 255, 0.5);
        transform: scale(1.1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }
    }
  }

  .nav-menu {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      margin: 4px 0;
      border-radius: var(--border-radius);
      cursor: pointer;
      transition: all var(--transition-normal);
      background: rgba(255, 255, 255, 0.1);

      &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateX(4px);
      }

      &.active {
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      }

      .icon {
        margin-right: 12px;
        font-size: 16px;
      }

      .text {
        font-size: 15px;
        font-weight: 600;
        color: var(--text-white-soft);
        transition: all var(--transition-normal);
      }
    }
  }

  .stats-section {
    background: var(--sidebar-section-bg, rgba(255, 255, 255, 0.1));
    border: 1px solid var(--sidebar-section-border, rgba(255, 255, 255, 0.2));
    border-radius: 12px;
    padding: 20px;
    backdrop-filter: blur(10px);
    transition: all var(--transition-normal);

    h3 {
      margin: 0 0 15px 0;
      font-size: 18px;
      font-weight: 700;
      color: var(--text-white-soft);
      letter-spacing: 0.5px;
      transition: all var(--transition-normal);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .stat-item {
      background: rgba(255, 255, 255, 0.2);
      padding: 12px;
      border-radius: 8px;
      text-align: center;
      backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all var(--transition-normal);

      &:hover {
        background: rgba(255, 255, 255, 0.25);
        transform: translateY(-2px);
      }

      .number {
        display: block;
        font-size: 20px;
        font-weight: 800;
        margin-bottom: 4px;
        color: var(--text-white);
        transition: all var(--transition-normal);
      }

      .label {
        font-size: 13px;
        font-weight: 500;
        color: var(--text-white-muted);
        transition: all var(--transition-normal);
      }
    }
  }

  .follow-section {
    background: var(--sidebar-section-bg, rgba(255, 255, 255, 0.1));
    border: 1px solid var(--sidebar-section-border, rgba(255, 255, 255, 0.2));
    border-radius: 12px;
    padding: 20px;
    backdrop-filter: blur(10px);
    transition: all var(--transition-normal);

    h3 {
      margin: 0 0 15px 0;
      font-size: 18px;
      font-weight: 700;
      color: var(--text-white-soft);
      letter-spacing: 0.5px;
      transition: all var(--transition-normal);
    }

    .social-icons {
      display: flex;
      gap: 12px;
      justify-content: center;

      .social-icon {
        width: 36px;
        height: 36px;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 16px;
        border: 1px solid rgba(255, 255, 255, 0.1);

        &:hover {
          background: rgba(255, 255, 255, 0.35);
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

  .tags-section {
    background: var(--sidebar-section-bg, rgba(255, 255, 255, 0.1));
    border: 1px solid var(--sidebar-section-border, rgba(255, 255, 255, 0.2));
    border-radius: 12px;
    padding: 20px;
    backdrop-filter: blur(10px);
    transition: all var(--transition-normal);

    h3 {
      margin: 0 0 15px 0;
      font-size: 18px;
      font-weight: 700;
      color: var(--text-white-soft);
      letter-spacing: 0.5px;
      transition: all var(--transition-normal);
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      .tag {
        background: var(--tag-bg, rgba(255, 255, 255, 0.2));
        padding: 8px 14px;
        border-radius: 18px;
        font-size: 13px;
        font-weight: 500;
        color: var(--tag-text, var(--text-white-soft));
        cursor: pointer;
        transition: all var(--transition-normal);
        backdrop-filter: blur(5px);
        border: 1px solid var(--tag-border, rgba(255, 255, 255, 0.15));

        &:hover {
          background: var(--tag-hover-bg, rgba(255, 255, 255, 0.3));
          border-color: var(--tag-hover-border, rgba(255, 255, 255, 0.3));
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }
}

.sidebar-slide-enter-active,
.sidebar-slide-leave-active {
  transition:
    transform var(--transition-normal),
    opacity var(--transition-normal);
}
.sidebar-slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.sidebar-slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.sidebar-slide-enter-to,
.sidebar-slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity var(--transition-normal);
}
.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}
.overlay-fade-enter-to,
.overlay-fade-leave-from {
  opacity: 1;
}

@media (max-width: 768px) {
  .sidebar-slide-enter-active,
  .sidebar-slide-leave-active {
    transition: transform var(--transition-normal);
  }
  .sidebar-slide-enter-from {
    transform: translateX(-100%);
  }
  .sidebar-slide-leave-to {
    transform: translateX(-100%);
  }
  .sidebar-slide-enter-to,
  .sidebar-slide-leave-from {
    transform: translateX(0);
  }

  .left-sidebar {
    width: var(--sidebar-width-mobile);
    position: fixed !important;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform var(--transition-normal);
    z-index: 100000;
    overflow-y: auto;
    overflow-x: hidden;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;

    &.mobile-visible {
      transform: translateX(0);
    }

    .nav-menu {
      ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      li {
        padding: 16px;
        text-align: center;
      }
    }

    .stats-section {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }
    }

    .follow-section {
      .social-icons {
        justify-content: space-around;
      }
    }

    .tags-section {
      .tags {
        justify-content: center;
      }
    }
  }
}
</style>
