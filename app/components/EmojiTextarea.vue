<script setup lang="ts">
import { computed, ref, nextTick, onMounted, onUnmounted, watch } from "vue";
import { initEmoji } from "../composables/useEmoji";

interface Props {
  modelValue: string;
  placeholder?: string;
  maxLength?: number;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "写点什么...",
  maxLength: 100,
});

const emit = defineEmits<Emits>();

const wrapperRef = ref<HTMLElement | null>(null);
const textareaRef = ref<HTMLTextAreaElement | null>(null);
const showEmoji = ref(false);
const emojis = ref(initEmoji());
const caretPosition = ref<number | null>(null);
const emojiPanelRef = ref<HTMLElement | null>(null);
const emojiToggleRef = ref<HTMLElement | null>(null);
const panelStyle = ref<Record<string, string>>({});

const content = computed({
  get: () => props.modelValue,
  set: (val) => {
    if (val.length <= props.maxLength) {
      emit("update:modelValue", val);
    } else {
      emit("update:modelValue", val.slice(0, props.maxLength));
    }
  },
});

const charCount = computed(() => props.modelValue.length);
const isNearLimit = computed(() => charCount.value >= props.maxLength * 0.8);
const isOverLimit = computed(() => charCount.value >= props.maxLength);

const updateCaret = () => {
  const el = textareaRef.value;
  if (!el) return;
  caretPosition.value = el.selectionStart ?? null;
};

const insertEmojiAtCaret = (emojiTitle: string) => {
  const el = textareaRef.value;
  if (!el) return;
  const current = content.value ?? "";
  const pos = caretPosition.value ?? el.selectionStart ?? current.length;
  const before = current.slice(0, pos);
  const after = current.slice(pos);
  const next = `${before}${emojiTitle}${after}`;
  content.value = next;
  nextTick(() => {
    const newPos = Math.min((before + emojiTitle).length, props.maxLength);
    el.focus();
    el.setSelectionRange(newPos, newPos);
  });
  showEmoji.value = false;
};

const handleWrapperClick = (e: MouseEvent) => {
  if (!(e.target instanceof Node)) return;
  const clickedInsideEmojiPanel = !!(emojiPanelRef.value && emojiPanelRef.value.contains(e.target as Node));
  const clickedEmojiToggle = !!(emojiToggleRef.value && emojiToggleRef.value.contains(e.target as Node));
  if (showEmoji.value && !clickedInsideEmojiPanel && !clickedEmojiToggle) {
    showEmoji.value = false;
  }
};

const handleDocumentClick = (e: MouseEvent) => {
  if (!(e.target instanceof Node)) return;
  const insideWrapper = !!(wrapperRef.value && wrapperRef.value.contains(e.target));
  if (!insideWrapper) {
    showEmoji.value = false;
  }
};

const positionPanel = () => {
  const toggle = emojiToggleRef.value;
  const panel = emojiPanelRef.value;
  const wrapper = wrapperRef.value;
  if (!toggle || !panel || !wrapper) return;
  const toggleRect = toggle.getBoundingClientRect();
  const panelRect = panel.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const spaceBelow = viewportHeight - toggleRect.bottom;
  const spaceAbove = toggleRect.top;
  // Default offsets relative to wrapper
  // Choose to open down if enough space, else open up
  const openDown = spaceBelow >= panelRect.height + 8 || spaceBelow >= spaceAbove;
  if (openDown) {
    panelStyle.value = { top: "40px", bottom: "auto", left: "8px" };
  } else {
    panelStyle.value = { bottom: "40px", top: "auto", left: "8px" };
  }
};

watch(showEmoji, async (val) => {
  if (val) {
    await nextTick();
    positionPanel();
    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("resize", positionPanel);
    window.addEventListener("scroll", positionPanel, true);
  } else {
    document.removeEventListener("click", handleDocumentClick, true);
    window.removeEventListener("resize", positionPanel);
    window.removeEventListener("scroll", positionPanel, true);
  }
});

onMounted(() => {
  // noop, listeners are attached when opening
});

onUnmounted(() => {
  document.removeEventListener("click", handleDocumentClick, true);
  window.removeEventListener("resize", positionPanel);
  window.removeEventListener("scroll", positionPanel, true);
});
</script>

<template>
  <div ref="wrapperRef" class="emoji-textarea" @click.capture="handleWrapperClick">
    <textarea
      ref="textareaRef"
      v-model="content"
      class="textarea"
      :class="{ 'near-limit': isNearLimit && !isOverLimit, 'over-limit': isOverLimit }"
      :placeholder="placeholder"
      rows="3"
      :maxlength="maxLength"
      @click="updateCaret"
      @keyup="updateCaret"
      @mouseup="updateCaret"
    />
    <button ref="emojiToggleRef" class="emoji-toggle" type="button" @click.stop="showEmoji = !showEmoji">😊</button>

    <div v-if="showEmoji" ref="emojiPanelRef" class="emoji-panel" :style="panelStyle" @mousedown.prevent>
      <div class="emoji-grid">
        <button
          v-for="e in emojis"
          :key="e.title"
          type="button"
          class="emoji-item"
          :title="e.title"
          @click.stop="insertEmojiAtCaret(e.title)"
        >
          <img :src="e.url" :alt="e.title">
        </button>
      </div>
    </div>

    <div class="char-count" :class="{ 'over-limit': isOverLimit }">
      {{ charCount }}/{{ maxLength }}
    </div>
  </div>
  
</template>

<style scoped lang="scss">
.emoji-textarea {
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
.textarea.near-limit { border-color: rgba(245, 158, 11, 0.4); }
.textarea.over-limit { border-color: rgba(239, 68, 68, 0.5); }
.textarea::placeholder { color: var(--text-muted); opacity: 0.6; }
.textarea:hover:not(:focus) { border-color: rgba(59, 130, 246, 0.35); }
.textarea:focus {
  border-color: var(--primary-color, #3b82f6);
  box-shadow: 
    0 0 0 4px rgba(59, 130, 246, 0.1),
    0 2px 8px rgba(59, 130, 246, 0.15),
    0 0 20px rgba(59, 130, 246, 0.08);
  transform: translateY(-1px);
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
.char-count.over-limit { color: #ef4444; font-weight: 600; }
.emoji-toggle {
  position: absolute;
  left: 12px;
  bottom: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  padding: 4px;
  border-radius: 6px;
}
.emoji-toggle:hover { background: var(--bg-card); }
.emoji-panel {
  position: absolute;
  left: 8px;
  bottom: 40px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  padding: 8px;
  z-index: 20;
  width: 480px;
}
.emoji-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 6px;
  max-height: 220px;
  overflow: auto;
}
.emoji-item {
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  background: transparent;
  border-radius: 6px;
  padding: 0;
  cursor: pointer;
}
.emoji-item:hover { border-color: var(--border-color); background: var(--bg); }
.emoji-item img { width: 24px; height: 24px; }

@media (prefers-color-scheme: dark) {
  .textarea { background: rgba(255, 255, 255, 0.02); border-color: rgba(59, 130, 246, 0.3); }
  .textarea:hover:not(:focus) { border-color: rgba(59, 130, 246, 0.45); }
  .textarea:focus {
    border-color: #60a5fa;
    box-shadow: 
      0 0 0 4px rgba(96, 165, 250, 0.15),
      0 2px 12px rgba(96, 165, 250, 0.2),
      0 0 24px rgba(96, 165, 250, 0.1);
  }
}
</style>


