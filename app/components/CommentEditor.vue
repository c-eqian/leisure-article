<script setup lang="ts">
import { computed } from "vue";
import defaultAvatar from "@/assets/avatar/default.png";

interface Props {
  modelValue: string;
  submitting?: boolean;
  userAvatar?: string;
  title?: string;
  placeholder?: string;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
  (e: "submit"): void;
}

const props = withDefaults(defineProps<Props>(), {
  submitting: false,
  title: "留言板",
  placeholder: "写下想说的话...",
});

const emit = defineEmits<Emits>();

const content = computed({
  get: () => props.modelValue,
  set: (val) => {
    // 限制字数在100字以内
    if (val.length <= 100) {
      emit("update:modelValue", val);
    } else {
      // 如果超过限制，只更新前100个字符
      emit("update:modelValue", val.slice(0, 100));
    }
  },
});

const charCount = computed(() => props.modelValue.length);
const maxLength = 100;
const isNearLimit = computed(() => charCount.value >= maxLength * 0.8);
const isOverLimit = computed(() => charCount.value >= maxLength);

// 处理头像加载失败
const handleAvatarError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  if (img.src !== defaultAvatar) {
    img.src = defaultAvatar;
  }
};
</script>

<template>
  <div class="editor-card">
    <div class="editor-header">
      <img
        :src="userAvatar || defaultAvatar"
        alt="avatar"
        class="avatar"
        @error="handleAvatarError"
      />
      <div class="title">{{ title }}</div>
      <div class="header-actions">
        <button class="btn primary" :disabled="submitting" @click="emit('submit')">
          {{ submitting ? "提交中..." : "发布" }}
        </button>
      </div>
    </div>
    <div class="textarea-wrapper">
      <textarea
        v-model="content"
        class="textarea"
        :class="{ 'near-limit': isNearLimit && !isOverLimit, 'over-limit': isOverLimit }"
        :placeholder="placeholder"
        rows="3"
        maxlength="100"
      />
      <div class="char-count" :class="{ 'over-limit': isOverLimit }">
        {{ charCount }}/{{ maxLength }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.editor-card {
  background: var(--bg-card);
  border: 1px 1px 0 1px solid var(--border-color);
  // border-radius: 12px;
  padding: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.03);
}
.editor-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.header-actions {
  margin-left: auto;
}
.title {
  font-weight: 700;
  font-size: 14px;
}
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--border-color);
}
.textarea-wrapper {
  position: relative;
}
.textarea {
  width: 100%;
  resize: vertical;
  background: var(--bg);
  color: var(--text-primary);
  border: 2px solid rgba(59, 130, 246, 0.2);
  border-radius: 10px;
  padding: 12px 14px;
  padding-bottom: 32px;
  font-size: 14px;
  line-height: 1.6;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  caret-color: var(--primary-color, #3b82f6);
}
.textarea.near-limit {
  border-color: rgba(245, 158, 11, 0.4);
}
.textarea.over-limit {
  border-color: rgba(239, 68, 68, 0.5);
}
.char-count {
  position: absolute;
  right: 14px;
  bottom: 10px;
  font-size: 12px;
  color: var(--text-muted);
  pointer-events: none;
  transition: color 0.2s ease;
}
.char-count.over-limit {
  color: #ef4444;
  font-weight: 600;
}
.textarea::placeholder {
  color: var(--text-muted);
  opacity: 0.6;
}
.textarea:hover:not(:focus) {
  border-color: rgba(59, 130, 246, 0.35);
}
.textarea:focus {
  border-color: var(--primary-color, #3b82f6);
  box-shadow: 
    0 0 0 4px rgba(59, 130, 246, 0.1),
    0 2px 8px rgba(59, 130, 246, 0.15),
    0 0 20px rgba(59, 130, 246, 0.08);
  transform: translateY(-1px);
}
.btn {
  padding: 6px 12px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  color: var(--text-primary);
  border-radius: 8px;
  transition: transform 0.12s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}
.btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}
.btn.primary {
  background: var(--primary-color, #3b82f6);
  color: #fff;
  border-color: transparent;
}
.btn.primary:hover:not(:disabled) {
  filter: brightness(1.05);
}

@media (prefers-color-scheme: dark) {
  .editor-card {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
    border-color: rgba(255, 255, 255, 0.08);
  }
  .avatar {
    border-color: rgba(255, 255, 255, 0.08);
  }
  .textarea {
    background: rgba(255, 255, 255, 0.02);
    border-color: rgba(59, 130, 246, 0.3);
  }
  .textarea:hover:not(:focus) {
    border-color: rgba(59, 130, 246, 0.45);
  }
  .textarea:focus {
    border-color: #60a5fa;
    box-shadow: 
      0 0 0 4px rgba(96, 165, 250, 0.15),
      0 2px 12px rgba(96, 165, 250, 0.2),
      0 0 24px rgba(96, 165, 250, 0.1);
  }
}
</style>

