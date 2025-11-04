<script setup lang="ts">
import { onMounted } from "vue";
import CommentEditor from "@/components/CommentEditor.vue";
import CommentItem from "@/components/CommentItem.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import LoadMoreButton from "@/components/LoadMoreButton.vue";
import { useComment } from "@/composables/useComment";
import { useLogin } from "@/composables/useLogin";

const { userInfo } = useLogin();
const {
  messages,
  newContent,
  submitting,
  replyState,
  replyContent,
  replying,
  hasData,
  loading,
  isFirstLoaded,
  isHasMore,
  loadMessages,
  loadMore,
  submitNew,
  openReply,
  cancelReply,
  submitReply,
} = useComment();

onMounted(() => {
  loadMessages();
});
</script>

<template>
  <div class="message-page">
    <CommentEditor
      v-model="newContent"
      :submitting="submitting"
      :user-avatar="userInfo?.avatar"
      title="留言板"
      placeholder="写下想说的话..."
      @submit="submitNew"
    />

    <div class="list-card">
      <!-- 首次加载 -->
      <div v-if="isFirstLoaded && loading" class="loading-container">
        <LoadingSpinner :size="32" />
        <span class="loading-text">加载中...</span>
      </div>
      <!-- 空状态 -->
      <div v-else-if="!loading && !hasData" class="empty">
        暂无留言，来做第一个吧～
      </div>
      <!-- 列表内容 -->
      <div v-else>
        <div v-for="item in messages" :key="item.id" class="comment-wrapper">
          <CommentItem
            :item="item"
            :reply-state="replyState"
            :reply-content="replyContent"
            :replying="replying"
            :placeholder="replyState.placeholder || '回复'"
            @reply="openReply"
            @update:reply-content="(val) => (replyContent = val)"
            @submit-reply="submitReply"
            @cancel-reply="cancelReply"
          />
        </div>
      </div>
      <!-- 加载更多按钮 -->
      <LoadMoreButton
        v-if="hasData && !loading && isHasMore"
        :loading="loading"
        @click="loadMore"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.message-page {
  display: flex;
  flex-direction: column;
  // gap: 12px;
}
.list-card {
  background: var(--bg-card);
  border: 0 1px 1px solid var(--border-color);
  // border-radius: 12px;
  padding: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.03);
  // max-height: 72vh;
  // overflow: auto;
}
.list-card::-webkit-scrollbar {
  width: 8px;
}
.list-card::-webkit-scrollbar-thumb {
  background: rgba(125, 125, 125, 0.25);
  border-radius: 8px;
}
.list-card::-webkit-scrollbar-thumb:hover {
  background: rgba(125, 125, 125, 0.35);
}
.comment-wrapper {
  position: relative;
}
.empty {
  color: var(--text-muted);
  text-align: center;
  padding: 40px 20px;
}
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  gap: 16px;
}
.loading-container .loading-spinner {
  color: var(--primary-color, #3b82f6);
}
.loading-text {
  color: var(--text-muted);
  font-size: 14px;
}

@media (prefers-color-scheme: dark) {
  .list-card {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
    border-color: rgba(255, 255, 255, 0.08);
  }
  .list-card::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.18);
  }
  .list-card::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.26);
  }
}
</style>
