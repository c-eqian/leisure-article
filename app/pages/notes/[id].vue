<script setup lang="ts">
import { isEmpty, useFormatDate } from "@eqian/utils-vue";
import { useAsyncRequest } from "~~/api/server";
import { computed, unref } from "vue";
import MarkdownRender from "@/components/MarkdownRender.vue";
import { useWebSize } from "@/composables/useWebSize";
import { useHead } from "#imports";
import { countWords } from "~/utils/wordCount";
import type { INoteItem } from "~~/api/notes/type";
import type { IWebsite } from "~~/api/system/type";

const route = useRoute();
const { id } = route.params;
const { data: noteDetail = {} as INoteItem } =
  await useAsyncRequest<IWebsite.Data>(`note/detail/${id}`, `note/detail`, {
    params: {
      note_id: id,
    },
  });

/**
 * 笔记详情页面组件
 * 显示笔记的详细内容，包括元数据和标签
 */

// 设备类型检测
const { isMobile } = useWebSize();

// 响应式样式
const styles = computed(() => {
  if (isMobile.value) {
    return {};
  }
  return { padding: "20px" };
});

// 格式化标签显示
const formatTags = (tags: any[]) => {
  if (isEmpty(tags)) {
    return [];
  }
  return tags.map((item) => item.tag_name || item);
};

// 计算阅读时间（基于字数估算）
const calculateReadingTime = (wordCount?: number) => {
  if (!wordCount) return 0;
  // 假设每分钟阅读200字
  return Math.ceil(wordCount / 200);
};
/**
 * SEO
 */
const metaDescription = computed(
  () =>
    `${unref(noteDetail)
      ?.content?.substring(0, 500)
      .replace(/\r?\n/g, "")
      .replace(/#/g, "")}...`,
);
const metaKeywords = computed(() =>
  unref(noteDetail)?.title?.length > 0 ? unref(noteDetail).title : "",
);
const useHeadOption = computed(() => {
  return {
    title: `${unref(noteDetail)?.title || "笔记详情"}`,
    meta: [
      {
        hid: "description",
        name: "description",
        content: `${unref(noteDetail)?.title || ""} - ${metaDescription.value}`,
      },
      {
        hid: "keywords",
        name: "keywords",
        content: metaKeywords.value,
      },
    ],
  };
});
useHead(useHeadOption);
</script>

<template>
  <div :style="styles">
    <div class="note-header">
      <div class="note-meta">
        <span class="author">{{ noteDetail.user_info?.username }}</span>
        <span class="date">{{
          useFormatDate(noteDetail.create_date || "")
        }}</span>
        <div class="stats">
          <span class="view-count">
            <svg class="icon" viewBox="0 0 24 24" width="16" height="16">
              <path
                fill="currentColor"
                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
              />
            </svg>
            {{ noteDetail.view_number || 0 }}
          </span>
          <span class="read-time">
            <svg class="icon" viewBox="0 0 24 24" width="16" height="16">
              <path
                fill="currentColor"
                d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"
              />
            </svg>
            {{ countWords(noteDetail.content || "").readingTime }}
          </span>
        </div>
      </div>
    </div>

    <!-- 笔记描述 -->
    <div v-if="noteDetail.description" class="note-description">
      <p>{{ noteDetail.description }}</p>
    </div>

    <!-- 笔记内容 -->
    <MarkdownRender :content="noteDetail.content" />

    <!-- 笔记标签 -->
    <div class="note-tags">
      <span class="tags-label">标签:</span>
      <div class="tags-container">
        <span
          v-for="tag in formatTags(
            noteDetail.category_tags || noteDetail.tags || [],
          )"
          :key="tag"
          class="tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- 位置信息 -->
    <div v-if="noteDetail.province || noteDetail.city" class="note-location">
      <span class="location-label">发布于·</span>
      <span class="location-text">
        {{ [noteDetail.province].filter(Boolean).join(" ")?.replace("省", "") }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.note-header {
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--border-color);
}

.note-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-family);
  font-size: 14px;
  line-height: 1.5;
}

.author {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 14px;
}

.date {
  color: var(--text-muted);
  font-size: 14px;
}

.stats {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
}

.view-count,
.read-time {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--text-muted);
  font-size: 14px;
}

.icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
  opacity: 0.7;
}

.note-description {
  margin-bottom: 20px;
  padding: 15px;
  background: var(--bg-card);
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary-color);

  p {
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 14px;
  }
}

.note-tags {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-family);
}

.tags-label {
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 500;
  flex-shrink: 0;
}

.tags-container {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  padding: 4px 12px;
  background-color: var(--bg-card);
  color: var(--text-primary);
  font-size: 13px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  transition: var(--transition-fast);
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: var(--bg-card-hover);
    border-color: var(--border-color-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-light);
  }
}

.note-location {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-family);
}

.location-label {
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 500;
  flex-shrink: 0;
}

.location-text {
  color: var(--text-muted);
  font-size: 14px;
}

@media (max-width: 768px) {
  .note-meta {
    flex-wrap: wrap;
    gap: 8px;
  }

  .stats {
    margin-left: 0;
    width: 100%;
    justify-content: flex-start;
  }

  .author,
  .date,
  .view-count,
  .read-time {
    font-size: 13px;
  }

  .note-description {
    padding: 12px;

    p {
      font-size: 13px;
    }
  }

  .note-tags {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .tags-container {
    width: 100%;
  }

  .tag {
    font-size: 12px;
    padding: 3px 10px;
  }

  .note-location {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .location-label,
  .location-text {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .note-meta {
    gap: 6px;
  }

  .author,
  .date,
  .view-count,
  .read-time {
    font-size: 12px;
  }

  .note-description {
    padding: 10px;

    p {
      font-size: 12px;
    }
  }

  .tag {
    font-size: 11px;
    padding: 2px 8px;
  }

  .location-label,
  .location-text {
    font-size: 12px;
  }
}
</style>
