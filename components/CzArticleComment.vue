<script setup lang="ts">
import { useBeforeDate } from 'co-utils-vue'
import { useQuasar } from 'quasar'
import type { ICommentList } from '~/api/comment/type'
import { deleteCommentItem, getCommentList, postArticleComment } from '~/api/comment'
import CzCommentBox from '~/components/CzCommentBox.vue'
import { useEmojiTransform } from '~/composables/emoji'
const $q = useQuasar()
const articleId = defineModel('articleId', {
  type: [String, Number],
  default: ''
})
const authorId = defineModel('authorId', {
  type: [String, Number],
  default: ''
})
const isLogin = defineModel('isLogin', {
  type: Boolean,
  default: false
})
const emits = defineEmits<{
  (event: 'update-comment-count', v: number):void
}>()
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
const handleResetBox = () => {
  if (currentReply.value.parentIndex === -1 && currentReply.value.index > -1) {
    commentList.value.list[currentReply.value.index].is_reply = false
  } else if (currentReply.value.parentIndex > -1 && currentReply.value.index > -1) {
    commentList.value.list[currentReply.value.parentIndex].sub_comment.list[currentReply.value.index].is_reply = false
  }
}
/**
 * 处理是否显示评论框
 * @param index 当前回复索引
 * @param parentIndex 父节点索引 -1 表示一级评论
 */
const handleReplyBox = (index: number, parentIndex: number = -1) => {
  handleResetBox()
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
const handleDeleteComment = async (p: {
  comment_id?: number;
  sub_comment_id?:number
}) => {
  $q.dialog({
    title: '提示',
    message: '确定删除?',
    cancel: '取消',
    ok: '确定',
    persistent: true
  }).onOk(async () => {
    await deleteCommentItem(p)
    handleGetCommentList()
    $q.notify({
      type: 'positive',
      position: 'top',
      timeout: 3000,
      message: '删除评论成功'
    })
    if (p.comment_id) {
      emits('update-comment-count', -1)
    }
  })
}
/**
 * 提交二级评论
 */
const handleSubMit = async (v:string, item: any, type: 1 | 2) => {
  if (!v) {
    return
  }
  await postArticleComment({
    article_id: item.article_id,
    content: v,
    reply_id: type === 2 ? item.sub_comment_id : undefined,
    parent_id: type === 2 ? item.parent_id : item.comment_id
  })
  $q.notify({
    type: 'positive',
    position: 'top',
    timeout: 3000,
    message: '评论成功'
  })
  handleResetBox()
  handleGetCommentList()
}
const checkIfItSTheAuthor = (userId: any) => {
  return userId && +authorId.value === +userId
}
defineExpose({
  handleGetCommentList
})
</script>

<template>
  <div>
    <CzCommentBox
      v-for="(comment, index) in commentList.list"
      :key="comment.comment_id"
      class-name="cz-comment-box"
      :datetime="useBeforeDate(comment.create_date)"
    >
      <template #avatar>
        <div class="cz-h-9 cz-w-9">
          <CzImg round :img-src="comment.user_info.avatar" />
        </div>
      </template>
      <template #left>
        <div>
          <div class="cz-relative cz-w-fit">
            <span class="cz-pr-1">{{ comment.user_info.username }}</span>
            <div v-if="checkIfItSTheAuthor(comment.user_info?.id)" class="cz-absolute -cz-right-5 cz-top-0" title="作者">
              <CzIcon name="patch-check-fill" class="cz-text-lime-500" />
            </div>
          </div>
        </div>
      </template>
      <template #content>
        <div v-dompurify-html="useEmojiTransform(comment.content)" />
      </template>
      <template #action>
        <div class="cz-flex cz-space-x-10 cz-py-2 dark:cz-text-gray-400 cz-text-gray-600 cz-text-xs">
          <div class="cz-flex cz-items-center cz-cursor-pointer cz-space-x-1">
            <CzIcon name="hand-thumbs-up" />
            <span>点赞</span>
          </div>
          <div class="cz-flex cz-cursor-pointer cz-items-center cz-space-x-1" @click="handleReplyBox(index, -1 )">
            <CzIcon name="chat-dots" />
            <span>{{ comment.is_reply ? '取消回复' : '回复' }}</span>
          </div>
          <div
            v-if="comment.is_publisher === 1"
            class="cz-space-x-1 cz-cursor-pointer cz-delete__comment"
            @click="handleDeleteComment({comment_id: comment.comment_id})"
          >
            <CzIcon
              name="x"
            />
            删除
          </div>
        </div>
      </template>
      <template v-if="comment.is_reply" #reply>
        <CzComment :is-login="isLogin" :placeholder="`回复 ${comment.user_info.username}`" @on-sub-mit="(v)=>handleSubMit(v, comment, 1)" />
      </template>
      <template v-if="comment.sub_comment.total > 0" #sub>
        <div>
          <CzCommentBox
            v-for="(subComment, subIndex) in comment.sub_comment.list"
            :key="subComment.comment_id"
            class-name="cz-comment-sub-box"
            :datetime="useBeforeDate(subComment.create_date)"
          >
            <template #avatar>
              <div class="cz-h-9 cz-w-9">
                <CzImg round :img-src="subComment.user_info.avatar" />
              </div>
            </template>
            <template #left>
              <div class="cz-flex">
                <div class="cz-flex cz-space-x-5">
                  <div class="cz-relative cz-w-fit">
                    <span class="cz-pr-1">{{ subComment.user_info.username }}</span>
                    <div v-if="checkIfItSTheAuthor(subComment.user_info?.id)" class="cz-absolute -cz-right-4 cz-top-0" title="作者">
                      <CzIcon name="patch-check-fill" class="cz-text-lime-500" />
                    </div>
                  </div>
                  <span v-if="subComment.reply_id && subComment.reply_info" class="cz-px-1">
                    <strong>回复</strong>
                    {{ subComment.reply_info.user_info.username }}
                  </span>
                </div>
              </div>
            </template>
            <template #content>
              <div v-dompurify-html="useEmojiTransform(subComment.content)" />
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
              <div class="cz-flex cz-py-2 cz-space-x-10 dark:cz-text-gray-400 cz-text-gray-600 cz-text-xs">
                <div class="cz-flex cz-items-center cz-cursor-pointer cz-space-x-1">
                  <CzIcon name="hand-thumbs-up" />
                  <span>点赞</span>
                </div>
                <div class="cz-flex cz-items-center cz-cursor-pointer cz-space-x-1" @click="handleReplyBox(subIndex, index )">
                  <CzIcon name="chat-dots" />
                  <span>{{ subComment.is_reply ? '取消回复' : '回复' }}</span>
                </div>
                <div
                  v-if="subComment.is_publisher === 1"
                  class="cz-space-x-1 cz-cursor-pointer cz-hidden cz-delete-sub__comment"
                  @click="handleDeleteComment({sub_comment_id: subComment.sub_comment_id})"
                >
                  <CzIcon
                    name="x"
                  />
                  删除
                </div>
              </div>
            </template>
            <template v-if="subComment.is_reply" #reply>
              <CzComment :is-login="isLogin" :placeholder="`回复 ${subComment.user_info.username}`" @on-sub-mit="(v)=> handleSubMit(v, subComment, 2)" />
            </template>
          </CzCommentBox>
        </div>
      </template>
    </CzCommentBox>
  </div>
</template>

<style scoped lang="scss">
.cz-comment-box:hover .cz-delete__comment {
  display: block;
}
.cz-delete__comment {
  display: none;
}
.cz-comment-sub-box:hover .cz-delete-sub__comment {
  display: block;
}
.cz-delete-sub__comment {
  display: none;
}
</style>
