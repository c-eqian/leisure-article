<script setup lang="ts">
import { EpImage, EpComment, EpLine, type ICommentConfig, type IResolveParams, type LoadData } from 'e-plus-ui'
import { isEmpty } from '@eqian/utils-vue'
import { deleteCommentItem, getCommentList, postArticleComment } from '~/api/comment'
import type { ICommentList } from '~/api/comment/type'
import { useEmojiTransform } from '~/composables/emoji'
const $q = useQuasar()
const config = {
  hasMore: 'is_more',
  defaultAvatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
  actionsExtra: true,
  commentFields: {
    avatar: 'user_info.avatar',
    username: 'user_info.username',
    subComment: 'sub_comment',
    likeCount: 'like_count',
    commentId: 'comment_id',
    createDate: 'created_date',
    reply: 'reply_info',
    parentId: 'parent_id'
  }

} as ICommentConfig
const queryParams = ref({
  page_num: 1,
  page_size: 10
})
const props = defineProps({
  articleId: {
    type: [Number, String],
    default: 0
  },
  isLogin: {
    type: Boolean,
    default: false
  }
})
const commentList = ref<ICommentList.IResponse>({ list: [], total: 0 } as ICommentList.IResponse)
const isLogin = computed(() => props.isLogin)
const commentRef = ref<InstanceType<typeof EpComment>>()
const handleGetCommentList = () => {
  queryParams.value.page_num = 1
  if (!props.articleId) { return }
  getCommentList({
    article_id: props.articleId || ''
  }).then((res) => {
    commentList.value = res
  })
}
onMounted(() => {
  handleGetCommentList()
})
watch(() => props.articleId, () => {
  if (!props.articleId) {
    commentList.value = { list: [] as any[], total: 0 } as ICommentList.IResponse
  } else {
    handleGetCommentList()
  }
})
const handleConfirmReply = async (params: IResolveParams) => {
  try {
    const { resolve, value, item, clear, isSubReply } = params
    if (!value) { return }
    const data = await postArticleComment({
      article_id: props.articleId,
      content: value,
      reply_id: isSubReply ? item.sub_comment_id : undefined,
      parent_id: isSubReply ? item.parent_id : item.comment_id
    })
    resolve && resolve(data)
    clear && clear(true)
    $q.notify({
      type: 'positive',
      position: 'top',
      timeout: 3000,
      message: '评论成功'
    })
  } catch (e:any) {
    $q.notify({
      type: 'positive',
      position: 'top',
      timeout: 3000,
      message: e.msg || '操作失败'
    })
  }
}
const handleReplyBefore = () => {
  if (!isLogin.value) {
    useLogin()
    return false
  } else {
    return true
  }
}
const handleLoad = (load: LoadData) => {
  const { resolve } = load
  if (!props.articleId) {
    resolve([], false)
    return
  }
  queryParams.value.page_num += 1
  getCommentList({
    article_id: props.articleId || '',
    ...queryParams.value
  }).then((res) => {
    const { is_more: isMore, list } = res
    resolve(list, isMore === 1)
  })
}
const handleActions = async (type: 0| 1, { item, isSubReply }) => {
  if (item.is_publisher !== 1) { return }
  if (type === 0 && handleReplyBefore()) {
    const data = {} as {
      comment_id?: number;
      sub_comment_id?: number;
    }
    if (isSubReply) {
      data.sub_comment_id = item.sub_comment_id
    } else {
      data.comment_id = item.comment_id
    }
    await deleteCommentItem(data)
    commentRef.value?.deleteComment(item)
  }
}
defineExpose({
  handleGetCommentList
})
</script>

<template>
  <EpComment
    ref="commentRef"
    :load="handleLoad"
    :before-reply="handleReplyBefore"
    :data="commentList"
    :config="config"
    @confirm-reply="handleConfirmReply"
  >
    <template #avatar="{item, isSubReply}">
      <ep-image round scale :url="item.user_info.avatar || config.defaultAvatar" :width="isSubReply ? 24 : 36" :height="isSubReply ? 24 : 36" />
    </template>
    <template #content="{item, isSubReply, reply}">
      <div>
        <div v-dompurify-html="useEmojiTransform(item.content)" />
        <div v-if="isSubReply && !isEmpty(reply)" class="cz-border cz-rounded-2xl cz-my-1 cz-text-[12px] cz-text-gray-600">
          <div v-dompurify-html="useEmojiTransform(reply.content)" class="cz-p-2" />
        </div>
      </div>
    </template>
    <template #actions-extra="{item}">
      <el-button v-if="item.is_publisher === 1" link type="danger" @click="()=> handleActions(0, {item})">
        删 除
        <template #icon>
          <cz-icon name="trash" />
        </template>
      </el-button>
      <ep-line />
      <el-button
        link
        size="small"
      >
        投 诉
        <template #icon>
          <cz-icon name="question-circle" />
        </template>
      </el-button>
    </template>
  </EpComment>
</template>

<style scoped lang="scss">

</style>
