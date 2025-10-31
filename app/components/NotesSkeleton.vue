<script setup lang="ts">
import Skeleton from "@/components/Skeleton.vue";

interface Props {
  count?: number;
}

withDefaults(defineProps<Props>(), { count: 3 });
</script>

<template>
  <div class="notes-skeleton-container">
    <div v-for="i in count" :key="i" class="skeleton-note-card">
      <!-- 日期区域骨架 -->
      <div class="skeleton-date">
        <div class="skeleton-date-number">
          <Skeleton type="text" width="24px" height="24px" />
        </div>
        <div class="skeleton-date-month">
          <Skeleton type="text" width="40px" height="12px" />
        </div>
      </div>

      <!-- 文章内容区域骨架 -->
      <div class="skeleton-content">
        <!-- 标题骨架 -->
        <div class="skeleton-title">
          <Skeleton type="text" width="70%" height="20px" />
        </div>

        <!-- 元数据骨架 -->
        <div class="skeleton-meta">
          <Skeleton type="text" width="80px" height="14px" />
          <Skeleton type="text" width="60px" height="14px" />
          <Skeleton type="text" width="50px" height="14px" />
        </div>

        <!-- 描述骨架 -->
        <div class="skeleton-description">
          <Skeleton type="text" width="100%" height="14px" />
          <Skeleton type="text" width="90%" height="14px" />
          <Skeleton type="text" width="60%" height="14px" />
        </div>

        <!-- 阅读更多骨架 -->
        <div class="skeleton-read-more">
          <Skeleton type="text" width="60px" height="14px" />
          <Skeleton type="text" width="12px" height="14px" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.notes-skeleton-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.skeleton-note-card {
  display: flex;
  background: var(--bg-card);
  border-radius: var(--border-radius-large);
  padding: 20px;
  padding-left: 100px; // 为突出的日期区域留出空间
  box-shadow: var(--shadow-light);
  border: 1px solid var(--border-color);
  position: relative;

  // 日期区域骨架 - 突出到卡片外部
  .skeleton-date {
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #e2e8f0, #cbd5e0);
    border-radius: var(--border-radius);
    padding: 12px 8px;
    box-shadow: var(--shadow-medium);
    z-index: 2;

    .skeleton-date-number {
      margin-bottom: 4px;
    }

    .skeleton-date-month {
      opacity: 0.8;
    }
  }

  // 文章内容区域骨架
  .skeleton-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .skeleton-title {
      margin-bottom: 4px;
    }

    .skeleton-meta {
      display: flex;
      gap: 16px;
      align-items: center;
    }

    .skeleton-description {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin: 8px 0;
    }

    .skeleton-read-more {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: auto;
    }
  }
}

// 暗黑模式适配
:global([data-theme="dark"]) {
  .skeleton-note-card {
    background: var(--bg-card);
    border-color: var(--border-color-dark);

    .skeleton-date {
      background: linear-gradient(135deg, #2d3748, #4a5568);
    }
  }
}

:global(.dark-mode) {
  .skeleton-note-card {
    background: var(--bg-card);
    border-color: var(--border-color-dark);

    .skeleton-date {
      background: linear-gradient(135deg, #2d3748, #4a5568);
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .skeleton-note-card {
    flex-direction: column;
    padding: 15px;

    .skeleton-date {
      position: static;
      transform: none;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 15px;
      min-height: 60px;
      width: 120px;
      align-self: center;
      left: auto;
      top: auto;

      .skeleton-date-number {
        margin-right: 8px;
        margin-bottom: 0;
      }
    }

    .skeleton-content {
      .skeleton-meta {
        flex-wrap: wrap;
        gap: 12px;
      }
    }
  }
}

@media (max-width: 480px) {
  .skeleton-note-card {
    padding: 12px;

    .skeleton-date {
      width: 100px;
      min-height: 50px;
    }
  }
}
</style>
