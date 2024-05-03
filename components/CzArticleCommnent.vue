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
handleGetCommentList()
</script>

<template>
  <div>
    <CzCommentBox
      v-for="comment in commentList.list"
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
          <div class="cz-flex cz-items-center cz-space-x-1">
            <CzIcon name="hand-thumbs-up" />
            <span>点赞</span>
          </div>
          <div class="cz-flex cz-items-center cz-space-x-1">
            <CzIcon name="chat-dots" />
            <span>回复</span>
          </div>
        </div>
      </template>
      <template v-if="comment.sub_comment.total > 0" #sub>
        <div>
          <CzCommentBox
            v-for="subComment in comment.sub_comment.list"
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
                <div class="cz-flex cz-items-center cz-space-x-1">
                  <CzIcon name="hand-thumbs-up" />
                  <span>点赞</span>
                </div>
                <div class="cz-flex cz-items-center cz-space-x-1">
                  <CzIcon name="chat-dots" />
                  <span>回复</span>
                </div>
              </div>
            </template>
          </CzCommentBox>
        </div>
      </template>
    </CzCommentBox>
  </div>
</template>

<style scoped lang="scss">

</style>
