<script setup lang="ts">
import { useFormatDate } from "@eqian/utils-vue";
import { computed } from "vue";
import defaultAvatar from "@/assets/avatar/default.png";
import ReplyBox from "@/components/ReplyBox.vue";
import { useEmojiTransform } from "~/composables/useEmoji";
import type { MessageItem, SubMessage } from "@/composables/useComment";

interface Props {
  item: MessageItem;
  replyState: {
    visible: boolean;
    parentId: number | null;
    replyTargetId: number | null;
  };
  replyContent: string;
  replying: boolean;
  placeholder: string;
}

interface Emits {
  (e: "reply", item: MessageItem, target?: MessageItem | SubMessage): void;
  (e: "update:replyContent", value: string): void;
  (e: "submitReply" | "cancelReply"): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const handleReply = (target?: MessageItem | SubMessage) => {
  emit("reply", props.item, target);
};

const isReplyingToSubComment = (subId: number) => {
  return (
    props.replyState.visible &&
    props.replyState.parentId === props.item.id &&
    props.replyState.replyTargetId === subId
  );
};

const isReplyingToMain = () => {
  return (
    props.replyState.visible &&
    props.replyState.parentId === props.item.id &&
    props.replyState.replyTargetId === null
  );
};

const localReplyContent = computed({
  get: () => props.replyContent,
  set: (val) => emit("update:replyContent", val),
});

// 处理头像加载失败
const handleAvatarError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  if (img.src !== defaultAvatar) {
    img.src = defaultAvatar;
  }
};
</script>

<template>
  <div class="comment-item">
    <div class="comment-main">
      <img
        :src="item.user_info?.avatar || defaultAvatar"
        alt="avatar"
        class="avatar"
        @error="handleAvatarError"
      >
      <div class="content-wrap">
        <div class="meta">
          <span
            class="name"
            :class="{
              'name-author': item.is_admin === 1,
            }"
          >
            {{ item.user_info?.username }}
          </span>
          <span v-if="item?.province" class="location">
            来自·{{ item.province.replace("省", "") }}
          </span>
          <span class="date">{{
            useFormatDate(item.create_date, "yyyy-MM-dd HH:mm")
          }}</span>
          <button class="reply-btn" title="回复" @click="handleReply(item)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              />
              <path d="M13 8H3" />
              <path d="M17 12H3" />
            </svg>
          </button>
        </div>
        <div class="text" v-html="useEmojiTransform(item.content)" />
      </div>
    </div>

    <!-- 回复主评论的输入框 -->
    <ReplyBox
      v-if="isReplyingToMain()"
      v-model="localReplyContent"
      :visible="isReplyingToMain()"
      :placeholder="placeholder"
      :replying="replying"
      @cancel="emit('cancelReply')"
      @submit="emit('submitReply')"
    />

    <div v-if="item.sub_comment?.list?.length" class="sub-list">
      <div v-for="sub in item.sub_comment.list" :key="sub.id" class="sub-item">
        <div class="sub-item-content">
          <img
            class="avatar small"
            :src="sub.user_info?.avatar || defaultAvatar"
            alt="avatar"
            @error="handleAvatarError"
          >
          <div class="content-wrap">
            <div class="meta">
              <span
                class="name"
                :class="{
                  'name-author': sub.is_admin === 1,
                }"
              >
                {{ sub.user_info?.username }}
              </span>
              <span v-if="sub?.province" class="location">
                来自·{{ sub.province.replace("省", "") }}
              </span>
              <span class="date">{{
                useFormatDate(sub.create_date, "yyyy-MM-dd HH:mm")
              }}</span>
              <button class="reply-btn" title="回复" @click="handleReply(sub)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                  />
                  <path d="M13 8H3" />
                  <path d="M17 12H3" />
                </svg>
              </button>
            </div>
            <div class="text">
              <template v-if="sub.reply_info && sub.reply_info.user_info">
                <div class="reply-quote">
                  <span
                    class="at"
                    :class="{
                      'at-author': sub.is_admin === 1,
                    }"
                  >
                    @{{ sub.reply_info.user_info.username }}
                  </span>
                  <template v-if="sub.reply_info.content">
                    <span class="quote-content">{{
                      sub.reply_info.content
                    }}</span>
                  </template>
                </div>
              </template>
              <div class="content" v-html="useEmojiTransform(sub.content)" />
            </div>
          </div>
        </div>
        <!-- 回复子评论的输入框 -->
        <ReplyBox
          v-if="isReplyingToSubComment(sub.id)"
          v-model="localReplyContent"
          :visible="isReplyingToSubComment(sub.id)"
          :placeholder="placeholder"
          :replying="replying"
          @cancel="emit('cancelReply')"
          @submit="emit('submitReply')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.comment-item {
  padding: 16px 0;
  border-bottom: 1px dashed var(--border-color);
}
.comment-main {
  display: flex;
  gap: 12px;
}
.content-wrap {
  flex: 1;
}
.meta {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 13px;
  position: relative;
}
.name {
  color: var(--text-primary);
  font-weight: 700;
}
.location {
  color: var(--text-muted);
  font-size: 12px;
  margin-left: 4px;
}
.name.name-author {
  color: #f59e0b;
  position: relative;
}
.name.name-author::after {
  content: "👑";
  margin-left: 4px;
  font-size: 12px;
}
.text {
  margin-top: 6px;
  line-height: 1.8;
}
.reply-btn {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
  opacity: 0.6;
}
.reply-btn:hover {
  color: var(--primary-color, #3b82f6);
  background: rgba(59, 130, 246, 0.1);
  opacity: 1;
}
.reply-btn svg {
  width: 16px;
  height: 16px;
}
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--border-color);
}
.avatar.small {
  width: 28px;
  height: 28px;
}
.sub-list {
  margin-left: 52px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.sub-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.sub-item-content {
  display: flex;
  gap: 10px;
  background: var(--bg);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 8px 10px;
}
.at {
  display: inline-block;
  margin-right: 6px;
  padding: 1px 6px;
  border-radius: 12px;
  background: rgba(59, 130, 246, 0.1);
  color: var(--primary-color, #3b82f6);
  font-size: 12px;
  vertical-align: baseline;
}
.reply-quote {
  margin-bottom: 8px;
  padding: 8px 12px;
  background: var(--bg-card);
  border-left: 3px solid rgba(59, 130, 246, 0.3);
  border-radius: 6px;
  font-size: 13px;
  line-height: 1.6;
}
.reply-quote .at {
  display: inline-block;
  margin-right: 8px;
  font-weight: 600;
}
.reply-quote .at.at-author {
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.15);
  border: 1px solid rgba(245, 158, 11, 0.3);
  padding: 2px 8px;
  border-radius: 12px;
}
.quote-content {
  color: var(--text-muted);
  font-style: italic;
}
.content {
  margin-top: 4px;
}

@media (prefers-color-scheme: dark) {
  .avatar {
    border-color: rgba(255, 255, 255, 0.08);
  }
  .sub-item {
    background: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.08);
  }
  .name.name-author {
    color: #fbbf24;
  }
  .reply-quote .at.at-author {
    color: #fbbf24;
    background: rgba(245, 158, 11, 0.2);
    border-color: rgba(245, 158, 11, 0.4);
  }
}
</style>
