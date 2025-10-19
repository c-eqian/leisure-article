<script setup lang="ts">
import { ref, watch } from "vue";
import { definePageMeta, useHead } from "#imports";

definePageMeta({
  layout: "common",
});

// 复制成功提示状态
const showCopyToast = ref(false);
const copyToastMessage = ref("");

// 输入文本
const inputText = ref("");
const outputText = ref("");

// 转换类型
const conversionTypes = [
  { key: "camelCase", label: "小驼峰 (camelCase)", example: "userName" },
  { key: "PascalCase", label: "大驼峰 (PascalCase)", example: "UserName" },
  { key: "snake_case", label: "下划线 (snake_case)", example: "user_name" },
  { key: "kebab-case", label: "短杆拼接 (kebab-case)", example: "user-name" },
  { key: "CONSTANT_CASE", label: "常量 (CONSTANT_CASE)", example: "USER_NAME" },
  { key: "space case", label: "空格分隔 (space case)", example: "user name" },
  { key: "dot.case", label: "点分隔 (dot.case)", example: "user.name" },
];

// 当前选择的转换类型
const selectedType = ref("camelCase");

// 单个文本转换函数
const convertSingleText = (text: string, targetType: string): string => {
  if (!text.trim()) return "";

  // 先标准化输入文本为单词数组
  const words = normalizeToWords(text);

  switch (targetType) {
    case "camelCase":
      return words
        .map((word, index) =>
          index === 0 ? word.toLowerCase() : capitalize(word.toLowerCase()),
        )
        .join("");

    case "PascalCase":
      return words.map((word) => capitalize(word.toLowerCase())).join("");

    case "snake_case":
      return words.map((word) => word.toLowerCase()).join("_");

    case "kebab-case":
      return words.map((word) => word.toLowerCase()).join("-");

    case "CONSTANT_CASE":
      return words.map((word) => word.toUpperCase()).join("_");

    case "space case":
      return words.map((word) => word.toLowerCase()).join(" ");

    case "dot.case":
      return words.map((word) => word.toLowerCase()).join(".");

    default:
      return text;
  }
};

// 批量转换函数
const convertText = (text: string, targetType: string): string => {
  if (!text.trim()) return "";

  // 按换行符分割文本，过滤空行
  const lines = text.split('\n').filter(line => line.trim());
  
  if (lines.length === 1) {
    // 单行文本，直接转换
    return convertSingleText(text, targetType);
  } else {
    // 多行文本，批量转换
    return lines.map(line => convertSingleText(line.trim(), targetType)).join('\n');
  }
};

// 将各种格式的文本标准化为单词数组
const normalizeToWords = (text: string): string[] => {
  // 处理各种分隔符：空格、下划线、短杆、点、大写字母等
  return text
    .replace(/([A-Z])/g, " $1") // 在大写字母前添加空格
    .replace(/[_\-\s\.]+/g, " ") // 将各种分隔符替换为空格
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map((word) => word.toLowerCase());
};

// 首字母大写
const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// 监听输入变化
watch(
  [inputText, selectedType],
  () => {
    outputText.value = convertText(inputText.value, selectedType.value);
  },
  { immediate: true },
);

// 复制到剪贴板
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    showCopySuccessToast("复制成功！");
  } catch (err) {
    console.error("复制失败:", err);
    showCopySuccessToast("复制失败，请手动复制");
  }
};

// 显示复制成功提示
const showCopySuccessToast = (message: string) => {
  copyToastMessage.value = message;
  showCopyToast.value = true;
  setTimeout(() => {
    showCopyToast.value = false;
  }, 2000);
};


// 清空输入
const clearInput = () => {
  inputText.value = "";
  outputText.value = "";
};

// 示例文本
const examples = [
  "userName",
  "UserName",
  "user_name",
  "user-name",
  "USER_NAME",
  "user name",
  "user.name",
];

// 批量示例文本
const batchExamples = [
  "userName\nuserAge\nuserEmail",
  "first_name\nlast_name\nemail_address",
  "user-name\nuser-age\nuser-email",
  "USER_NAME\nUSER_AGE\nUSER_EMAIL",
];

const loadExample = (example: string) => {
  inputText.value = example;
};

const loadBatchExample = (example: string) => {
  inputText.value = example;
};

useHead({
  title: `变量命名转换工具-支持单行和批量转换`,
});
</script>

<template>
  <div class="naming-converter">

    <div v-if="false" class="header">
      <h1 class="title">变量命名转换工具</h1>
      <p class="subtitle">支持多种命名格式的互相转换</p>
    </div>

    <div class="main-content">
      <!-- 左侧输入区域 -->
      <div class="input-section">
        <div class="section-header">
          <h3>输入文本</h3>
          <button class="clear-btn" @click="clearInput">清空</button>
        </div>

        <textarea
          v-model="inputText"
          placeholder="请输入要转换的变量名...&#10;支持批量转换，每行一个变量名"
          class="input-textarea"
        />

        <!-- 示例文本 -->
        <div class="examples">
          <h4>单行示例：</h4>
          <div class="example-tags">
            <button
              v-for="example in examples"
              :key="example"
              class="example-tag"
              @click="loadExample(example)"
            >
              {{ example }}
            </button>
          </div>
          
          <h4>批量示例（换行分隔）：</h4>
          <div class="example-tags">
            <button
              v-for="example in batchExamples"
              :key="example"
              class="example-tag batch-tag"
              @click="loadBatchExample(example)"
            >
              {{ example.split('\n').join(' | ') }}
            </button>
          </div>
        </div>
      </div>

      <!-- 右侧输出区域 -->
      <div class="output-section">
        <div class="section-header">
          <h3>转换结果</h3>
          <button
            class="copy-btn"
            :disabled="!outputText"
            @click="copyToClipboard(outputText)"
          >
            复制
          </button>
        </div>

        <div class="output-display">
          <div v-if="outputText" class="output-text">{{ outputText }}</div>
          <div v-else class="output-placeholder">转换结果将显示在这里...</div>
        </div>

        <!-- 转换信息 -->
        <div v-if="outputText" class="conversion-info">
          <div class="info-item">
            <span class="info-label">字符数：</span>
            <span class="info-value">{{ outputText.length }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">行数：</span>
            <span class="info-value">{{ outputText.split('\n').length }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">单词数：</span>
            <span class="info-value">{{
              normalizeToWords(inputText).length
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部转换选项 -->
    <div class="conversion-section">
      <h3>转换类型</h3>
      <div class="conversion-options">
        <label
          v-for="type in conversionTypes"
          :key="type.key"
          class="conversion-option"
          :class="{ active: selectedType === type.key }"
        >
          <input
            v-model="selectedType"
            :value="type.key"
            type="radio"
            name="conversionType"
            class="radio-input"
          >
          <div class="option-content">
            <div class="option-label">{{ type.label }}</div>
            <div class="option-example">{{ type.example }}</div>
          </div>
        </label>
      </div>
    </div>

    <!-- 复制成功提示 -->
    <div v-if="showCopyToast" class="copy-toast" :class="{ show: showCopyToast }">
      <div class="toast-content">
        <span class="toast-icon">✅</span>
        <span class="toast-message">{{ copyToastMessage }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.naming-converter {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 1rem;
  font-family: var(--font-family);
  transition: all 0.3s ease;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}



// 复制成功提示
.copy-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  opacity: 0;
  transition: all 0.3s ease;

  &.show {
    opacity: 1;
    animation: toastSlideIn 0.3s ease-out;
  }
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.5rem;
  background: var(--bg-secondary);
  color: var(--text-primary);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-heavy);
  border: 1px solid var(--border-color);
  font-size: 1rem;
  font-weight: 500;
}

.toast-icon {
  font-size: 1.2rem;
}

.toast-message {
  font-size: 0.95rem;
}

@keyframes toastSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}


.header {
  text-align: center;
  margin-bottom: 3rem;

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 0.5rem 0;
  }

  .subtitle {
    font-size: 1.1rem;
    color: #666;
    margin: 0;
  }
}

.main-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: stretch;
  flex: 1;
  margin-bottom: 1rem;
  min-height: 0;
}

.input-section,
.output-section {
  background: var(--bg-secondary);
  border-radius: var(--border-radius-large);
  padding: 1rem;
  box-shadow: var(--shadow-light);
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: var(--text-primary);
  }
}

.clear-btn,
.copy-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--border-radius-small);
  font-size: 0.9rem;
  cursor: pointer;
  transition: var(--transition-fast);

  &:hover {
    transform: translateY(-1px);
  }
}

.clear-btn {
  background: var(--bg-card);
  color: var(--text-secondary);

  &:hover {
    background: var(--bg-card-hover);
  }
}

.copy-btn {
  background: var(--primary-color);
  color: var(--text-white);

  &:hover:not(:disabled) {
    background: var(--primary-hover);
  }

  &:disabled {
    background: var(--text-muted);
    cursor: not-allowed;
    transform: none;
  }
}

.input-textarea {
  width: 100%;
  flex: 1;
  min-height: 0;
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  background: var(--bg-primary);
  color: var(--text-primary);
  resize: none;
  transition: var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  &::placeholder {
    color: var(--text-muted);
  }
}

.examples {
  margin-top: 1rem;
  flex-shrink: 0;

  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
}

.example-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.example-tag {
  padding: 0.3rem 0.8rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-small);
  font-size: 0.8rem;
  color: var(--text-primary);
  cursor: pointer;
  transition: var(--transition-fast);

  &:hover {
    background: var(--bg-card-hover);
    border-color: var(--primary-color);
  }
}

.batch-tag {
  background: var(--primary-color);
  color: var(--text-white);
  border-color: var(--primary-color);

  &:hover {
    background: var(--primary-hover);
    border-color: var(--primary-hover);
  }
}

.conversion-section {
  background: var(--bg-secondary);
  border-radius: var(--border-radius-large);
  padding: 1rem;
  box-shadow: var(--shadow-light);
  border: 1px solid var(--border-color);
  flex-shrink: 0;

  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
    color: var(--text-primary);
  }
}

.conversion-options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.conversion-option {
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition-fast);
  flex: 0 0 auto;
  min-width: 200px;
  background: var(--bg-card);
  color: var(--text-primary);

  &:hover {
    border-color: var(--primary-color);
    background: var(--bg-card-hover);
  }

  &.active {
    border-color: var(--primary-color);
    background: var(--primary-color);
    color: var(--text-white);
  }
}

.radio-input {
  margin-right: 0.8rem;
  accent-color: var(--primary-color);
}

.option-content {
  flex: 1;
}

.option-label {
  font-weight: 500;
  color: inherit;
  margin-bottom: 0.2rem;
}

.option-example {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
}

.output-display {
  flex: 1;
  min-height: 0;
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--bg-primary);
  margin-bottom: 1rem;
  overflow-y: auto;
}

.output-text {
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 1rem;
  color: var(--text-primary);
  word-break: break-all;
  white-space: pre-wrap;
  line-height: 1.5;
}

.output-placeholder {
  color: var(--text-muted);
  font-style: italic;
}

.conversion-info {
  display: flex;
  gap: 1rem;
  padding: 0.8rem;
  background: var(--bg-card);
  border-radius: var(--border-radius-small);
  font-size: 0.9rem;
  flex-shrink: 0;
}

.info-item {
  display: flex;
  gap: 0.3rem;
}

.info-label {
  color: var(--text-secondary);
}

.info-value {
  font-weight: 500;
  color: var(--text-primary);
}

// 响应式设计
@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .conversion-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 0.8rem;
  }
}

@media (max-width: 768px) {
  .naming-converter {
    padding: 0.5rem;
  }

  .header .title {
    font-size: 2rem;
  }

  .conversion-options {
    grid-template-columns: 1fr;
  }

  .conversion-option {
    min-width: auto;
  }

  .toast-content {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>
