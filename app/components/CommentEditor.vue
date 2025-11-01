<script setup lang="ts">
import { computed } from "vue";

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
  set: (val) => emit("update:modelValue", val),
});
</script>

<template>
  <div class="editor-card">
    <div class="editor-header">
      <img
        v-if="userAvatar"
        :src="userAvatar"
        alt="avatar"
        class="avatar"
      />
      <div class="title">{{ title }}</div>
      <div class="header-actions">
        <button class="btn primary" :disabled="submitting" @click="emit('submit')">
          {{ submitting ? "提交中..." : "发布" }}
        </button>
      </div>
    </div>
    <textarea
      v-model="content"
      class="textarea"
      :placeholder="placeholder"
      rows="3"
    />
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
.textarea {
  width: 100%;
  resize: vertical;
  background: var(--bg);
  color: var(--text-primary);
  border: 2px solid rgba(59, 130, 246, 0.2);
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 14px;
  line-height: 1.6;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  caret-color: var(--primary-color, #3b82f6);
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

