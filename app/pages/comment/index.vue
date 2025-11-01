<script setup lang="ts">
import { onMounted } from "vue";
import CommentEditor from "@/components/CommentEditor.vue";
import CommentItem from "@/components/CommentItem.vue";
import ReplyBox from "@/components/ReplyBox.vue";
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
  seedMock,
  submitNew,
  openReply,
  cancelReply,
  submitReply,
} = useComment();


onMounted(() => {
  seedMock();
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
      <div v-if="!hasData" class="empty">暂无留言，来做第一个吧～</div>
      <div v-else>
        <div v-for="item in messages" :key="item.id" class="comment-wrapper">
          <CommentItem
            :item="item"
            :reply-state="replyState"
            :reply-content="replyContent"
            :replying="replying"
            :placeholder="replyState.placeholder || '回复'"
            @reply="openReply"
            @update:reply-content="(val: string) => (replyContent = val)"
            @submit-reply="submitReply"
            @cancel-reply="cancelReply"
          />
        </div>
      </div>
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
