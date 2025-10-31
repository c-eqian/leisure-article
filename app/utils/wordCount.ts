/**
 * 简化的Markdown文章字数统计和阅读时间计算工具
 */

export interface WordCountResult {
  /** 总字符数 */
  totalChars: number;
  /** 纯文字字符数（不包含空格和标点） */
  wordChars: number;
  /** 预计阅读时间（分钟） */
  readingTime: number;
  /** 格式化后的阅读时间字符串 */
  readingTimeText: string;
}

/**
 * 移除Markdown标记符号，提取纯文本内容
 */
function stripMarkdown(markdown: string): string {
  let text = markdown;

  // 移除代码块
  text = text.replace(/```[\s\S]*?```/g, "");
  text = text.replace(/`[^`]*`/g, "");

  // 移除HTML标签
  text = text.replace(/<[^>]*>/g, "");

  // 移除Markdown链接 [text](url)
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");

  // 移除图片 ![alt](url)
  text = text.replace(/!\[([^\]]*)\]\([^)]*\)/g, "");

  // 移除标题标记 # ## ###
  text = text.replace(/^#{1,6}\s+/gm, "");

  // 移除粗体和斜体
  text = text.replace(/\*\*([^*]*)\*\*/g, "$1");
  text = text.replace(/__([^_]*)__/g, "$1");
  text = text.replace(/\*([^*]*)\*/g, "$1");
  text = text.replace(/_([^_]*)_/g, "$1");

  // 移除删除线
  text = text.replace(/~~([^~]*)~~/g, "$1");

  // 移除引用标记
  text = text.replace(/^>\s+/gm, "");

  // 移除列表标记
  text = text.replace(/^[\s]*[-*+]\s+/gm, "");
  text = text.replace(/^[\s]*\d+\.\s+/gm, "");

  // 移除表格标记
  text = text.replace(/\|/g, " ");

  // 移除水平线
  text = text.replace(/^[-*]{3,}$/gm, "");

  // 移除脚注
  text = text.replace(/\[\^[^\]]*\]/g, "");

  // 移除任务列表
  text = text.replace(/^[\s]*[-*+]\s+\[[ x]\]\s+/gm, "");

  // 清理多余的空行和空格
  text = text.replace(/\n\s*\n/g, "\n");
  text = text.replace(/[ \t]+/g, " ");
  text = text.trim();

  return text;
}

/**
 * 计算预计阅读时间（按300字/分钟计算）
 */
function calculateReadingTime(wordChars: number): number {
  return Math.ceil(wordChars / 300);
}

/**
 * 格式化阅读时间文本
 */
function formatReadingTime(minutes: number): string {
  if (minutes < 1) {
    return "不到1分钟";
  }

  if (minutes === 1) {
    return "1分钟";
  }

  if (minutes < 60) {
    return `${minutes}分钟`;
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (remainingMinutes === 0) {
    return `${hours}小时`;
  }

  return `${hours}小时${remainingMinutes}分钟`;
}

/**
 * 统计Markdown文章的字数和阅读时间
 * @param markdown - Markdown格式的文章内容
 * @returns 统计结果
 */
export function countWords(markdown: string): WordCountResult {
  if (!markdown || markdown.trim() === "") {
    return {
      totalChars: 0,
      wordChars: 0,
      readingTime: 0,
      readingTimeText: "0分钟",
    };
  }

  // 提取纯文本
  const plainText = stripMarkdown(markdown);

  // 统计字符数
  const totalChars = plainText.length;
  const wordChars = plainText.replace(/[\s\p{P}]/gu, "").length;

  // 计算阅读时间
  const readingTime = calculateReadingTime(wordChars);

  // 格式化阅读时间文本
  const readingTimeText = formatReadingTime(readingTime);

  return {
    totalChars,
    wordChars,
    readingTime,
    readingTimeText,
  };
}

/**
 * 快速统计函数，返回简化的结果
 * @param markdown - Markdown格式的文章内容
 * @returns 简化的统计结果
 */
export function quickCount(markdown: string): {
  words: number;
  readingTime: string;
} {
  const result = countWords(markdown);
  return {
    words: result.wordChars,
    readingTime: result.readingTimeText,
  };
}
