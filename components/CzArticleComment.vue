<script setup lang="ts">
import { useBeforeDate } from 'co-utils-vue'
import type { ICommentList } from '~/api/comment/type'
import { getCommentList } from '~/api/comment'
import CzCommentBox from '~/components/CzCommentBox.vue'
import { useEmojiTransform } from '~/composables/emoji'

const articleId = defineModel('articleId', {
  type: String,
  default: ''
})
const currentReply = ref<{
  index: number;
  parentIndex: number;
}>({
  index: -1,
  // -1 表示一级评论
  parentIndex: -1
})
const commentList = ref<ICommentList.IResponse>({} as ICommentList.IResponse)
const handleGetCommentList = () => {
  if (!articleId.value) { return }
  getCommentList({
    article_id: articleId.value || ''
  }).then((res) => {
    commentList.value = res
  })
}
watch(() => articleId.value, (id) => {
  if (!id) {
    commentList.value = {} as ICommentList.IResponse
  } else {
    handleGetCommentList()
  }
})
/**
 * 处理是否显示评论框
 * @param index 当前回复索引
 * @param parentIndex 父节点索引 -1 表示一级评论
 */
const handleReplyBox = (index: number, parentIndex: number = -1) => {
  if (currentReply.value.parentIndex === -1 && currentReply.value.index > -1) {
    commentList.value.list[currentReply.value.index].is_reply = false
  } else if (currentReply.value.parentIndex > -1 && currentReply.value.index > -1) {
    commentList.value.list[currentReply.value.parentIndex].sub_comment.list[currentReply.value.index].is_reply = false
  }
  if (index === currentReply.value.index && currentReply.value.parentIndex === parentIndex) {
    currentReply.value.parentIndex = -1
    currentReply.value.index = -1
    return
  }
  currentReply.value.parentIndex = parentIndex
  currentReply.value.index = index
  if (parentIndex === -1 && index > -1) {
    commentList.value.list[index].is_reply = true
  } else if (parentIndex > -1 && index > -1) {
    commentList.value.list[parentIndex].sub_comment.list[index].is_reply = true
  }
}
handleGetCommentList()
</script>

<template>
  <div>
    <CzCommentBox
      v-for="(comment, index) in commentList.list"
      :key="comment.comment_id"
      :datetime="useBeforeDate(comment.create_date)"
    >
      <template #avatar>
        <div>
          <img
            v-img-lazy="[comment.user_info.avatar, 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg']"
            alt=""
            class="cz-rounded-full cz-object-cover"
            width="36"
            loading="lazy"
            height="36"
          >
        </div>
      </template>
      <template #left>
        <div>{{ comment.user_info.username }}</div>
      </template>
      <template #content>
        <div class="cz-py-2">
          <div v-dompurify-html="useEmojiTransform(comment.content)" />
        </div>
      </template>
      <template #action>
        <div class="cz-flex cz-space-x-10 dark:cz-text-gray-400 cz-text-gray-600 cz-text-sm">
          <div class="cz-flex cz-items-center cz-cursor-pointer cz-space-x-1">
            <CzIcon name="hand-thumbs-up" />
            <span>点赞</span>
          </div>
          <div class="cz-flex cz-cursor-pointer cz-items-center cz-space-x-1" @click="handleReplyBox(index, -1 )">
            <CzIcon name="chat-dots" />
            <span>{{ comment.is_reply ? '取消回复' : '回复' }}</span>
          </div>
        </div>
      </template>
      <template v-if="comment.is_reply" #reply>
        <CzComment :placeholder="`回复 ${comment.user_info.username}`" />
      </template>
      <template v-if="comment.sub_comment.total > 0" #sub>
        <div>
          <CzCommentBox
            v-for="(subComment, subIndex) in comment.sub_comment.list"
            :key="subComment.comment_id"

            :datetime="useBeforeDate(subComment.create_date)"
          >
            <template #avatar>
              <div>
                <img
                  v-img-lazy="[subComment.user_info.avatar, 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg']"
                  alt=""
                  class="cz-rounded-full cz-object-cover"
                  width="36"
                  loading="lazy"
                  height="36"
                >
              </div>
            </template>
            <template #left>
              <div class="cz-flex">
                <div>
                  {{ subComment.user_info.username }}
                  <span v-if="subComment.reply_id && subComment.reply_info">
                    <strong>回复</strong>
                    {{ subComment.reply_info.user_info.username }}
                  </span>
                </div>
              </div>
            </template>
            <template #content>
              <div class="cz-py-2">
                <div v-dompurify-html="useEmojiTransform(subComment.content)" />
              </div>
              <div
                v-if="subComment.reply_id && subComment.reply_info"
                class="cz-border-[1px] cz-text-sm cz-text-gray-600"
              >
                <div class="cz-p-2 ">
                  “{{ subComment.reply_info?.content }}”
                </div>
              </div>
            </template>
            <template #action>
              <div class="cz-flex cz-space-x-10 dark:cz-text-gray-400 cz-text-gray-600 cz-text-sm">
                <div class="cz-flex cz-items-center cz-cursor-pointer cz-space-x-1">
                  <CzIcon name="hand-thumbs-up" />
                  <span>点赞</span>
                </div>
                <div class="cz-flex cz-items-center cz-cursor-pointer cz-space-x-1" @click="handleReplyBox(subIndex, index )">
                  <CzIcon name="chat-dots" />
                  <span>{{ subComment.is_reply ? '取消回复' : '回复' }}</span>
                </div>
              </div>
            </template>
            <template v-if="subComment.is_reply" #reply>
              <CzComment :placeholder="`回复 ${subComment.user_info.username}`" />
            </template>
          </CzCommentBox>
        </div>
      </template>
    </CzCommentBox>
  </div>
</template>

<style scoped lang="scss">

</style>
