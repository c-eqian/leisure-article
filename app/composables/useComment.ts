import { computed, reactive, ref } from "vue";
import { useLogin } from "@/composables/useLogin";

// 类型定义
export type User = { id: number; username: string; avatar: string };
export type SubMessage = {
  id: number;
  content: string;
  create_date: string;
  user_info: User;
  // 二级里被 @ 的对象
  reply_info?: { user_info: User; content?: string } | null;
};
export type MessageItem = {
  id: number;
  content: string;
  create_date: string;
  user_info: User;
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
  const { userInfo } = useLogin();

  // 默认用户信息
  const mockCurrentUser: User = {
    id: 1000,
    username: "游客",
    avatar: "/avatar/default.png",
  };

  // 评论列表
  const messages = ref<MessageItem[]>([]);
  
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

  // 获取当前用户信息
  const getCurrentUser = (): User => {
    return ((userInfo as any)?.value || mockCurrentUser) as User;
  };

  // 初始化模拟数据
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
      const name = names[i % names.length];
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
          list: i % 3 === 0
            ? [
                {
                  id: autoId++,
                  content: "收到~",
                  create_date: new Date().toISOString(),
                  user_info: { id: 2, username: "站长", avatar: "/avatar/2.jpg" },
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
  function submitNew() {
    const content = newContent.value.trim();
    if (!content) return;
    submitting.value = true;
    setTimeout(() => {
      messages.value.unshift({
        id: autoId++,
        content,
        create_date: new Date().toISOString(),
        user_info: getCurrentUser(),
        sub_comment: { list: [], total: 0 },
      });
      newContent.value = "";
      submitting.value = false;
    }, 300);
  }

  // 打开回复框
  function openReply(parent: MessageItem, target?: MessageItem | SubMessage) {
    replyState.visible = true;
    replyState.parentId = parent.id;
    replyState.replyTarget = target || parent;
    // 如果target是SubMessage，则记录其ID，否则为null（表示回复主评论）
    replyState.replyTargetId = target && "id" in target && target !== parent ? target.id : null;
    
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
  function submitReply() {
    const content = replyContent.value.trim();
    if (!content || !replyState.parentId) return;
    replying.value = true;
    setTimeout(() => {
      const parent = messages.value.find((m) => m.id === replyState.parentId);
      if (!parent) return;
      
      // 只有当回复的是子评论时（replyTargetId不为null），才需要设置@信息
      // 如果直接回复主评论（replyTargetId为null），不需要@
      let replyInfo = null;
      if (replyState.replyTargetId !== null && replyState.replyTarget) {
        // 回复子评论，需要@被回复的用户，并引用被回复的内容
        const target = replyState.replyTarget as SubMessage;
        const atUser = target?.user_info;
        const originalContent = target?.content; // 被回复的原始内容
        replyInfo = atUser
          ? {
              user_info: atUser,
              content: originalContent, // 保存被回复的内容用于引用显示
            }
          : null;
      }
      
      parent.sub_comment.list.push({
        id: autoId++,
        content,
        create_date: new Date().toISOString(),
        user_info: getCurrentUser(),
        reply_info: replyInfo,
      });
      parent.sub_comment.total = parent.sub_comment.list.length;
      cancelReply();
      replying.value = false;
    }, 300);
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
    // 方法
    seedMock,
    submitNew,
    openReply,
    cancelReply,
    submitReply,
  };
};

