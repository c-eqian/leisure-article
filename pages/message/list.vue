<script setup lang="ts">
import type { ICommentConfig, IResolveParams } from 'e-plus-ui';
import { EpComment, EpEditor, EpLine, EpIcon } from 'e-plus-ui';
import { Auth } from '@e-plus-ui/icons';
import { ref, h } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { isEmpty } from '@eqian/utils-vue';
import { initEmoji, useEmojiTransform } from '~/composables/emoji';
import { deleteMessageItem, getMessageList, postMessage } from '~/api/message';
import type { IMessageList } from '~/api/message/type';
const commentRef = ref<InstanceType<typeof EpComment>>();
const messageData = ref<any>({});
definePageMeta({
  layout: 'bg-header'
});
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
  showLevel: ({ item }: {item: IMessageList.DataList}) => {
    if (item?.user_info.id === 6) {
      return h(EpIcon, {
        width: 12,
        height: 12,
        color: '#6495fc'
      }, {
        default: () => h(Auth)
      });
    }
    return '';
  },
  showIpAddress: ({ item }) => {
    if (!item.province) { return ''; }
    return `<span class="cz-inline-block cz-px-2 cz-text-[10px]">来自·${item.province ? `${item.province?.replace('省', '')}` : ''}</span>`;
  },
  subStyle: {
    backgroundColor: 'rgba(248,249,250, .3)'
  },
  commentFields: {
    avatar: 'user_info.avatar',
    username: 'user_info.username',
    subComment: 'sub_comment',
    likeCount: 'like_count',
    commentId: 'id',
    createDate: 'create_date',
    reply: 'reply_info',
    parentId: 'parent_id'
  }
};
const handleConfirmReply = async (params: IResolveParams) => {
  try {
    const { resolve, value, item, clear, isSubReply } = params;
    if (!value) { return; }
    const data = await postMessage({
      content: value,
      reply_id: isSubReply ? item.id : undefined,
      parent_id: isSubReply ? item.parent_id : item.id
    });
    if (isSubReply) {
      resolve && resolve({
        ...data,
        reply_info: item
      });
    } else {
      resolve && resolve(data);
    }

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
  const res = await getMessageList();
  if (res) {
    messageData.value = res;
  }
};
getList();
</script>

<template>
  <div class="cz-my-0 cz-mx-auto cz-max-w-3xl">
    <div class="cz-mt-20  cz-bg-gray-50/80 cz-shadow-lg cz-rounded-2xl">
      <section style="height: calc(100vh - 100px)">
        <div class="cz-h-full cz-flex cz-flex-col cz-text-black">
          <div class="cz-px-5 cz-py-2">
            <ep-editor use-emojis :emojis="initEmoji()" @click-submit="handleSubmit" />
            <ep-line />
          </div>
          <main class="cz-flex-1 cz-h-full cz-p-5  cz-overflow-auto">
            <div>
              <ep-comment ref="commentRef" :data="messageData" :config="fieldsConfig" @confirm-reply="handleConfirmReply">
                <template #content="{item, isSubReply, reply}">
                  <div v-html="useEmojiTransform(item.content)" />
                  <div v-if="isSubReply && !isEmpty(reply)" class="cz-border cz-rounded-2xl cz-my-1 cz-text-[12px] cz-text-gray-600">
                    <div class="cz-p-2" v-html="useEmojiTransform(reply.content)" />
                  </div>
                </template>
                <template #actionsExtra="item">
                  <el-button v-if="item.item.is_publisher === 1" link type="danger" @click="()=> handleActions(0, item)">
                    删 除
                    <template #icon>
                      <cz-icon name="trash" />
                    </template>
                  </el-button>
                  <ep-line v-show="item.item.is_publisher === 1" />
                  <el-button
                    link
                    size="small"
                  >
                    反馈
                    <template #icon>
                      <cz-icon name="question-circle" />
                    </template>
                  </el-button>
                </template>
              </ep-comment>
            </div>
          </main>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
