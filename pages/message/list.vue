<script setup lang="ts">
import type { ICommentConfig, IResolveParams } from 'e-plus-ui';
import { EpComment } from 'e-plus-ui';
import { ref, h } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { Delete, Warning } from '@element-plus/icons-vue';
import { initEmoji } from '~/composables/emoji';
import { deleteMessageItem, getMessageList, postMessage } from '~/api/message';
const commentRef = ref<InstanceType<typeof EpComment>>();
const messageData = ref<any>({});
const handleSubmit = async (text: string) => {
  const data = await postMessage({
    content: text
  });
  commentRef.value?.appendComments(data);
};
/**
 * 通过配置修改字段值
 */
const fieldsConfig: ICommentConfig = {
  emojis: initEmoji(),
  useEmojis: true,
  hasMore: 'is_more',
  defaultAvatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
  actionsExtra: true,
  showIpAddress: ({ item }) => {
    console.log(item);
    return h('span', {
      class: 'cz-inline-block cz-px-2 cz-text-[10px]'
    }, '深圳');
  },
  commentFields: {
    avatar: 'user_info.avatar',
    username: 'user_info.username',
    subComment: 'sub_comment',
    likeCount: 'like_count',
    commentId: 'comment_id',
    createDate: 'create_date',
    reply: 'reply_info',
    parentId: 'parent_id'
  }
};
const handleConfirmReply = async (params: IResolveParams) => {
  try {
    const { resolve, value, item, clear, isSubReply } = params;
    console.log(item);
    if (!value) { return; }
    const data = await postMessage({
      content: value,
      reply_id: isSubReply ? item.id : undefined,
      parent_id: isSubReply ? item.parent_id : item.id
    });
    resolve && resolve(data);
    clear && clear(true);
    ElMessage.error('操作成功');
  } catch (e:any) {
    ElMessage.error('操作失败');
  }
};
const handleActions = async (type: 0| 1, { item, isSubReply }) => {
  if (item.is_publisher !== 1) { return; }
  if (type === 0) {
    await ElMessageBox.confirm('是否删除该评论？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    });
    const data = {} as {
      id?: number;
      sub_id?: number;
    };
    if (isSubReply) {
      data.sub_id = item.id;
    } else {
      data.id = item.id;
    }
    await deleteMessageItem(data);
    commentRef.value?.deleteComment(item);
  }
};
const getList = async () => {
  const { data } = await useAsyncData('message-list', () => getMessageList());
  if (data.value) {
    messageData.value = data.value;
  }
};
await getList();
</script>

<template>
  <div class="cz-bg-amber-50 cz-p-5 cz-text-black">
    <ep-editor use-emojis :emojis="initEmoji()" @click-submit="handleSubmit" />
    <ep-line />
    <ep-comment ref="commentRef" :data="messageData" :config="fieldsConfig" @confirm-reply="handleConfirmReply">
      <template #actionsExtra="item">
        <el-button v-if="item.item.is_publisher === 1" link type="danger" :icon="Delete" @click="()=> handleActions(0, item)">
          删 除
        </el-button>
        <ep-line />
        <el-button
          link
          size="small"
          :icon="Warning"
        >
          投 诉
        </el-button>
      </template>
    </ep-comment>
  </div>
</template>

<style scoped lang="scss">

</style>
