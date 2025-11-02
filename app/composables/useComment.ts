import { useAsyncFetch } from "~~/api/server";
import { computed, reactive, ref } from "vue";
import type { IMessageList } from "~~/api/message/type";

// 类型定义
export type User = {
  id: number;
  username: string;
  avatar: string;
};
export type SubMessage = {
  id: number;
  content: string;
  create_date: string;
  province?: string;
  is_admin?: number;
  user_info: User;
  // 二级里被 @ 的对象
  reply_info?: { user_info: User; content?: string } | null;
};
export type MessageItem = {
  id: number;
  content: string;
  create_date: string;
  user_info: User;
  province?: string;
  is_admin?: number;
  sub_comment: { list: SubMessage[]; total: number };
};

export interface ReplyState {
  visible: boolean;
  parentId: number | null;
  replyTarget: MessageItem | SubMessage | null;
  replyTargetId: number | null; // 被回复的子评论ID，如果是回复主评论则为null
  placeholder: string;
}

/**
 * 评论管理 Composable
 * 提供评论相关的状态和方法
 */
export const useComment = () => {
  // const { userInfo } = useLogin();

  // 默认用户信息（保留用于测试）
  // const mockCurrentUser: User = {
  //   id: 1000,
  //   username: "游客",
  //   avatar: "/avatar/default.png",
  // };

  // 评论列表
  const messages = ref<MessageItem[]>([]);

  // 加载状态
  const loading = ref(false);
  const isFirstLoaded = ref(true);

  // 分页状态
  const pageNum = ref(1);
  const pageSize = ref(50);
  const isHasMore = ref(false);

  // 新评论内容
  const newContent = ref("");
  const submitting = ref(false);

  // 回复状态
  const replyState = reactive<ReplyState>({
    visible: false,
    parentId: null,
    replyTarget: null,
    replyTargetId: null, // 被回复的子评论ID
    placeholder: "",
  });
  const replyContent = ref("");
  const replying = ref(false);

  // ID 生成器
  let autoId = 3;

  // 计算属性
  const hasData = computed(() => messages.value.length > 0);

  // 转换 API 数据为组件使用的数据结构
  function transformMessageItem(item: IMessageList.DataList): MessageItem {
    const subComments: SubMessage[] = (item.sub_comment?.list || []).map(
      (sub: IMessageList.SubMessageList) => {
        // 处理回复信息
        let replyInfo = null;
        if (sub.reply_info && sub.reply_id !== null) {
          // 如果有 reply_info 且 reply_id 不为 null，说明是回复子评论
          const replyUser = sub.reply_info.user_info;
          replyInfo = {
            user_info: {
              id: replyUser.id,
              username: replyUser.username,
              avatar: replyUser.avatar || "",
              province: replyUser.province,
              ip: replyUser.ip,
            },
            content: sub.reply_info.content || sub.content,
          };
        }

        return {
          id: sub.id,
          content: sub.content,
          province: sub.province,
          is_admin: sub.is_admin,
          create_date: sub.create_date,
          user_info: {
            id: sub.user_info.id,
            username: sub.user_info.username,
            avatar: sub.user_info.avatar || "",
          },
          reply_info: replyInfo,
        };
      },
    );

    return {
      id: item.id,
      content: item.content,
      create_date: item.create_date,
      province: item.province,
      is_admin: item.is_admin,
      user_info: {
        id: item.user_info.id,
        username: item.user_info.username,
        avatar: item.user_info.avatar || "",
      },
      sub_comment: {
        list: subComments,
        total: item.sub_comment?.total || subComments.length,
      },
    };
  }

  // 加载留言列表
  async function loadMessages(currentPage = 1, reset = false) {
    try {
      loading.value = true;
      isFirstLoaded.value = currentPage === 1;

      const res = await useAsyncFetch<{ data: IMessageList.IResponse }>(
        "message/list",
        {
          method: "GET",
          params: {
            page_num: currentPage,
            page_size: pageSize.value,
          },
        },
      );

      const data = res.data || (res as any);
      const transformedMessages = (data.list || []).map(transformMessageItem);

      if (reset || currentPage === 1) {
        messages.value = transformedMessages;
        pageNum.value = 1;
      } else {
        messages.value = [...messages.value, ...transformedMessages];
      }

      // 更新分页状态
      pageNum.value = currentPage;
      isHasMore.value = data.is_more === 1;
    } catch (error) {
      console.error("加载留言失败:", error);
      if (currentPage === 1) {
        messages.value = [];
      }
    } finally {
      loading.value = false;
      isFirstLoaded.value = false;
    }
  }

  // 加载更多
  function loadMore() {
    if (!loading.value && isHasMore.value) {
      loadMessages(pageNum.value + 1);
    }
  }

  // 初始化数据（保留用于测试）
  function seedMock() {
    messages.value = [
      {
        id: 1,
        content: "这个站点很棒，界面很干净！",
        create_date: new Date().toISOString(),
        user_info: { id: 1, username: "张三", avatar: "/avatar/1.jpg" },
        sub_comment: {
          list: [
            {
              id: 11,
              content: "谢谢支持！",
              create_date: new Date().toISOString(),
              user_info: { id: 2, username: "站长", avatar: "/avatar/2.jpg" },
              // 这个是直接回复主评论的，不需要@信息
              reply_info: null,
            },
          ],
          total: 1,
        },
      },
      {
        id: 2,
        content: "期待更多工具上线～",
        create_date: new Date().toISOString(),
        user_info: { id: 3, username: "李四", avatar: "/avatar/3.jpg" },
        sub_comment: { list: [], total: 0 },
      },
    ];
    // 追加更多示例用于滚动测试
    const names = [
      "王五",
      "Zoe",
      "Mike",
      "小明",
      "Alice",
      "Bob",
      "陈晨",
      "Luna",
      "Ethan",
      "Ivy",
      "Noah",
      "Mia",
      "Liam",
      "Emma",
      "Olivia",
    ];
    for (let i = 0; i < 18; i++) {
      const name = names[i % names.length]!;
      const id = autoId++;
      messages.value.push({
        id,
        content: `示例留言 ${id}：这是一条用于滚动测试的内容。`,
        create_date: new Date(Date.now() - i * 3600_000).toISOString(),
        user_info: {
          id: 100 + i,
          username: name,
          avatar: `/avatar/${(i % 6) + 1}.jpg`,
        },
        sub_comment: {
          list:
            i % 3 === 0
              ? [
                  {
                    id: autoId++,
                    content: "收到~",
                    create_date: new Date().toISOString(),
                    user_info: {
                      id: 2,
                      username: "站长",
                      avatar: "/avatar/2.jpg",
                    },
                    // 这个是直接回复主评论的，不需要@信息
                    reply_info: null,
                  },
                ]
              : [],
          total: i % 3 === 0 ? 1 : 0,
        },
      });
    }
  }

  // 提交新评论
  async function submitNew() {
    const content = newContent.value.trim();
    if (!content) return;
    // 限制字数在100字以内
    if (content.length > 100) {
      console.warn("留言内容不能超过100字");
      return;
    }
    submitting.value = true;
    try {
      await useAsyncFetch("message/add", {
        method: "POST",
        body: {
          content,
        },
      });
      // 提交成功后重新加载列表
      await loadMessages(1, true);
      newContent.value = "";
    } catch (error) {
      console.error("提交留言失败:", error);
    } finally {
      submitting.value = false;
    }
  }

  // 打开回复框
  function openReply(parent: MessageItem, target?: MessageItem | SubMessage) {
    replyState.visible = true;
    replyState.parentId = parent.id;
    replyState.replyTarget = target || parent;
    // 如果target是SubMessage，则记录其ID，否则为null（表示回复主评论）
    replyState.replyTargetId =
      target && "id" in target && target !== parent ? target.id : null;

    // 只有当回复的是子评论时，才显示@用户名
    // 如果直接回复主评论，不显示@
    if (replyState.replyTargetId !== null && target) {
      const name = target.user_info?.username;
      replyState.placeholder = name ? `回复 @${name}` : "回复";
    } else {
      replyState.placeholder = "回复";
    }
    replyContent.value = "";
  }

  // 取消回复
  function cancelReply() {
    replyState.visible = false;
    replyState.parentId = null;
    replyState.replyTarget = null;
    replyState.replyTargetId = null;
    replyContent.value = "";
  }

  // 提交回复
  async function submitReply() {
    const content = replyContent.value.trim();
    if (!content || !replyState.parentId) return;
    // 限制字数在100字以内
    if (content.length > 100) {
      console.warn("回复内容不能超过100字");
      return;
    }
    replying.value = true;
    try {
      const requestData: {
        content: string;
        parent_id: number;
        reply_id?: number;
      } = {
        content,
        parent_id: replyState.parentId,
      };
      if (replyState.replyTargetId !== null) {
        requestData.reply_id = replyState.replyTargetId;
      }
      await useAsyncFetch("message/add", {
        method: "POST",
        body: requestData,
      });
      // 提交成功后重新加载列表
      await loadMessages(1, true);
      cancelReply();
    } catch (error) {
      console.error("提交回复失败:", error);
    } finally {
      replying.value = false;
    }
  }

  return {
    // 状态
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
    // 方法
    seedMock,
    loadMessages,
    loadMore,
    submitNew,
    openReply,
    cancelReply,
    submitReply,
  };
};
