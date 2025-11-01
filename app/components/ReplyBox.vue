<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

interface Props {
  modelValue: string;
  visible: boolean;
  placeholder?: string;
  replying?: boolean;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
  (e: "cancel"): void;
  (e: "submit"): void;
}

const props = withDefaults(defineProps<Props>(), {
  replying: false,
  placeholder: "回复",
});

const emit = defineEmits<Emits>();

const replyBoxRef = ref<HTMLElement | null>(null);

const content = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

// 点击外部关闭
const handleClickOutside = (e: MouseEvent) => {
  if (!(e.target instanceof Node)) return;
  if (replyBoxRef.value && !replyBoxRef.value.contains(e.target)) {
    emit("cancel");
  }
};

onMounted(() => {
  if (props.visible) {
    document.addEventListener("click", handleClickOutside, true);
  }
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside, true);
});

watch(
  () => props.visible,
  (newVal) => {
    if (newVal) {
      setTimeout(() => {
        document.addEventListener("click", handleClickOutside, true);
      }, 0);
    } else {
      document.removeEventListener("click", handleClickOutside, true);
    }
  }
);
</script>

<template>
  <div v-if="visible" ref="replyBoxRef" class="reply-box">
    <textarea
      v-model="content"
      class="textarea"
      :placeholder="placeholder"
      rows="3"
    />
    <div class="editor-actions">
      <button class="btn" @click="emit('cancel')">取消</button>
      <button class="btn primary" :disabled="replying" @click="emit('submit')">
        {{ replying ? "发送中..." : "发送" }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reply-box {
  margin-left: 52px;
  margin-top: 10px;
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
.editor-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 6px;
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

