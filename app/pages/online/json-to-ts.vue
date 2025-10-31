<script setup lang="ts">
import {
  onMounted,
  onUnmounted,
  reactive,
  ref,
  unref,
  useTemplateRef,
  watch,
} from "vue";
import { JsonToTs } from "~/utils/jsonToTs";
import { mancoOptions } from "./mancoOptions";
definePageMeta({
  layout: "common",
});
// 响应式数据
const leftPanelWidth = ref(50); // 左侧面板宽度百分比
const isDragging = ref(false);
const containerRef = ref<HTMLElement>();
const splitterRef = ref<HTMLElement>();
const editorLeftRef = useTemplateRef("editorLeftRef");
const editorRightRef = useTemplateRef("editorRightRef");
const editorValue = reactive({
  originValue: "",
  targetValue: "",
});
// 鼠标事件处理
const handleMouseDown = (e: MouseEvent) => {
  isDragging.value = true;
  document.body.style.cursor = "col-resize";
  document.body.style.userSelect = "none";
  e.preventDefault();
};

const handleMouseMove = (e: MouseEvent) => {
  if (!isDragging.value || !containerRef.value) return;

  const containerRect = containerRef.value.getBoundingClientRect();
  const newLeftWidth =
    ((e.clientX - containerRect.left) / containerRect.width) * 100;

  // 限制最小和最大宽度
  const minWidth = 20;
  const maxWidth = 80;

  if (newLeftWidth >= minWidth && newLeftWidth <= maxWidth) {
    leftPanelWidth.value = newLeftWidth;
  }
};

const handleMouseUp = () => {
  isDragging.value = false;
  document.body.style.cursor = "";
  document.body.style.userSelect = "";
};
const init = () => {
  const leftEditor = unref(editorLeftRef.value?.$editor);
  if (leftEditor) {
    // 手动触发编辑器重新布局
    setTimeout(() => {
      leftEditor.layout();
    }, 100);

    leftEditor.onDidChangeModelContent(() => {
      const text = editorLeftRef.value?.$editor?.getValue();
      JsonToTs.DEBUG = import.meta.env.DEV;
      const result = JsonToTs.generateFromString(text || "", "ApiResponse");
      console.log(text);
      editorValue.targetValue = result.allCode;
    });

  }

  const rightEditor = unref(editorRightRef.value?.$editor);
  if (rightEditor) {
    // 手动触发编辑器重新布局
    setTimeout(() => {
      rightEditor.layout();
    }, 100);
  }
};
watch(
  () => editorLeftRef.value?.$editor,
  () => {
    if (import.meta.browser) {
      if (editorLeftRef.value?.$editor) {
        init();
        // 延迟触发布局，确保容器已经渲染完成
        setTimeout(() => {
          editorLeftRef.value?.$editor?.layout();
          editorRightRef.value?.$editor?.layout();
        }, 200);
      }
    }
  },
);
// 生命周期
onMounted(() => {
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
  if (import.meta.browser) {
    init();
    // 延迟触发布局，确保所有组件都已渲染
    setTimeout(() => {
      editorLeftRef.value?.$editor?.layout();
      editorRightRef.value?.$editor?.layout();
    }, 300);
  }
});

onUnmounted(() => {
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);
});

</script>

<template>
  <div ref="containerRef" class="split-container">
    <!-- 左侧面板 -->
    <div class="left-panel" :style="{ width: `${leftPanelWidth}%` }">
      <div class="panel-content">
        <MonacoEditor
          ref="editorLeftRef"
          :options="mancoOptions"
          lang="json"
          class="monaco-editor-box"
        />
      </div>
    </div>

    <!-- 分割条 -->
    <div ref="splitterRef" class="splitter" @mousedown="handleMouseDown" />

    <!-- 右侧面板 -->
    <div class="right-panel" :style="{ width: `${100 - leftPanelWidth}%` }">
      <div class="panel-content">
        <MonacoEditor
          ref="editorRightRef"
          v-model="editorValue.targetValue"
          :options="mancoOptions"
          lang="typescript"
          class="monaco-editor-box"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.split-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  margin: 0;
  padding: 0;
}

.left-panel,
.right-panel {
  height: 100%;
  background: #1e1e1e; // 与编辑器背景色一致
  border-radius: 0;
  margin: 0;
  box-shadow: none;
  overflow: hidden;
  transition: width 0.1s ease;
}

.panel-content {
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.monaco-editor-box {
  flex: 1;
  height: 100%;
  width: 100%;
}

// Monaco Editor 组件样式
:deep(.monaco-editor) {
  height: 100% !important;
  width: 100% !important;
}

.splitter {
  width: 4px;
  height: 100%;
  background: #1e1e1e; // 与编辑器背景色一致
  cursor: col-resize;
  position: relative;
  transition: background-color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: #2d2d30; // 悬停时稍微亮一点
  }

  &:active {
    background: #3c3c3c; // 激活时更亮
  }

  // 添加视觉指示器
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1px;
    height: 30px;
    background: #858585; // 与行号颜色一致
    border-radius: 1px;
  }

  &:hover::before {
    background: #c6c6c6; // 悬停时指示器变亮，与活动行号颜色一致
  }
}

// 响应式设计
@media (max-width: 768px) {
  .split-container {
    flex-direction: column;
    height: 100vh;
  }

  .left-panel,
  .right-panel {
    width: 100% !important;
    height: 50vh;
    margin: 0;
  }

  .splitter {
    width: 100%;
    height: 4px;
    cursor: row-resize;
    background: #1e1e1e; // 与编辑器背景色一致

    &:hover {
      background: #2d2d30;
    }

    &:active {
      background: #3c3c3c;
    }

    &::before {
      width: 30px;
      height: 1px;
      background: #858585; // 与行号颜色一致
    }

    &:hover::before {
      background: #c6c6c6; // 悬停时指示器变亮，与活动行号颜色一致
    }
  }
}
</style>
