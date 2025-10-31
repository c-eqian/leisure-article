<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";
const props = defineProps<{ visible?: boolean }>();
const emit = defineEmits<{ (e: "update:visible", v: boolean): void }>();
const { isDark, webStore } = useTheme();
const currentStyleTheme = computed(() => webStore.currentStyleTheme);

const themeOptions = [
  {
    id: "default",
    name: "默认主题",
    description: "蓝紫渐变，经典配色",
    sidebarPreview: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    contentPreview: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
    darkSidebarPreview: "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",
    darkContentPreview: "linear-gradient(135deg, #1a1a1a 0%, #2d3748 100%)",
  },
  {
    id: "ocean",
    name: "海洋主题",
    description: "蓝绿渐变，清新自然",
    sidebarPreview: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    contentPreview: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
    darkSidebarPreview: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    darkContentPreview: "linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)",
  },
  {
    id: "forest",
    name: "森林主题",
    description: "绿色渐变，生机盎然",
    sidebarPreview: "linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)",
    contentPreview: "linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)",
    darkSidebarPreview: "linear-gradient(135deg, #2c5530 0%, #1a3d1a 100%)",
    darkContentPreview: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)",
  },
  {
    id: "sunset",
    name: "日落主题",
    description: "橙红渐变，温暖浪漫",
    sidebarPreview: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    contentPreview: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
    darkSidebarPreview: "linear-gradient(135deg, #8b2635 0%, #4a1a2e 100%)",
    darkContentPreview: "linear-gradient(135deg, #bf360c 0%, #d84315 100%)",
  },
  {
    id: "purple",
    name: "紫色主题",
    description: "紫粉渐变，优雅神秘",
    sidebarPreview: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    contentPreview: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)",
    darkSidebarPreview: "linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)",
    darkContentPreview: "linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)",
  },
  {
    id: "minimal",
    name: "简约主题",
    description: "灰白渐变，简洁大方",
    sidebarPreview: "linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)",
    contentPreview: "linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)",
    darkSidebarPreview: "linear-gradient(135deg, #424242 0%, #616161 100%)",
    darkContentPreview: "linear-gradient(135deg, #424242 0%, #616161 100%)",
  },
];

const handleClose = () => emit("update:visible", false);
const handleThemeSelect = (themeId: string) => webStore.setStyleTheme(themeId);
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
            <div class="style-config">
              <div class="config-header">
                <h2>样式配置</h2>
                <p>选择您喜欢的配色方案，支持亮色和暗黑模式</p>
              </div>
              <div class="theme-selection">
                <h3>主题配色</h3>
                <div class="theme-grid">
                  <div
                    v-for="theme in themeOptions"
                    :key="theme.id"
                    class="theme-option"
                    :class="{ active: currentStyleTheme === theme.id }"
                    @click="handleThemeSelect(theme.id)"
                  >
                    <div class="theme-preview">
                      <div class="preview-container">
                        <div class="preview-sidebar">
                          <div
                            class="preview-gradient"
                            :style="{
                              background: isDark
                                ? theme.darkSidebarPreview
                                : theme.sidebarPreview,
                            }"
                          />
                        </div>
                        <div class="preview-content">
                          <div
                            class="preview-gradient"
                            :style="{
                              background: isDark
                                ? theme.darkContentPreview
                                : theme.contentPreview,
                            }"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="theme-info">
                      <h4>{{ theme.name }}</h4>
                      <p>{{ theme.description }}</p>
                    </div>
                    <div
                      v-if="currentStyleTheme === theme.id"
                      class="selected-indicator"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="config-footer">
                <p class="tip">💡 提示：主题配色会自动适配亮色和暗黑模式</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000000;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  cursor: default;
}

.modal-container {
  background: var(--bg-primary);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 800px;
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

.style-config {
  padding: 32px;
  overflow-y: auto;
  max-height: 80vh;
}

.config-header {
  text-align: center;
  margin-bottom: 32px;

  h2 {
    margin: 0 0 8px 0;
    font-size: 28px;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: 0.5px;
  }
  p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 15px;
    font-weight: 400;
  }
}

.theme-selection {
  h3 {
    margin: 0 0 20px 0;
    font-size: 20px;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: 0.3px;
  }
}

.theme-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.theme-option {
  position: relative;
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 16px;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  &.active {
    border-color: var(--primary-color);
    background: var(--bg-card);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
}

.theme-preview {
  width: 80px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.preview-container {
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
}
.preview-sidebar {
  width: 30%;
  height: 100%;
}
.preview-content {
  width: 70%;
  height: 100%;
}
.preview-gradient {
  width: 100%;
  height: 100%;
}

.theme-info {
  flex: 1;
  min-width: 0;
}
.theme-info h4 {
  margin: 0 0 6px 0;
  font-size: 17px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: 0.2px;
}
.theme-info p {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  line-height: 1.5;
}

.selected-indicator {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  animation: scaleIn 0.2s ease;
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
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

@media (max-width: 768px) {
  .modal-container {
    width: 95%;
    margin: 20px;
  }
  .style-config {
    padding: 24px;
  }
  .config-header h2 {
    font-size: 20px;
  }
  .theme-grid {
    grid-template-columns: 1fr;
  }
  .theme-option {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  .theme-preview {
    width: 80px;
    height: 80px;
  }
}
</style>
