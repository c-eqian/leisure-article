export namespace IMessage {
  export interface IMessageReq {
    /**
     * 评论内容
     */
    content: string;
    /**
     * 一级评论ID
     * */
    parent_id?: number;
    /**
     * 二级级评论被回复的评论ID
     * */
    reply_id?: number;
  }
}

/**
 * 评论列表
 */
export namespace IMessageList {
  /**
   * 评论人信息
   */
  export interface IUserInfo {
    avatar: string;
    id: number;
    username: string;
    province?: string;
    ip?: string;
  }

  /**
   * 二级评论明细
   */

  export type SubMessageList = {
    reply_info: IReplyInfo;
  } & IReplyInfo;

  export interface IReplyInfo extends DataList {
    parent_id: number;
    reply_id: number | null;
  }

  /**
   * 二级评论
   */
  export type SubMessage = {
    list: SubMessageList[];
    total: number;
  };

  /**
   * 一级评论明细
   */
  export type DataList = {
    content: string;
    create_date: string;
    creator: number;
    description: null;
    id: number;
    is_publisher: number;
    like_count: number;
    modifier: null;
    // 自定义键，判断是否回复
    is_reply?: boolean;
    status: number;
    sub_comment: SubMessage;
    update_date: string;
    user_info: IUserInfo;
    province?: string;
    is_admin?: number;
  };

  /**
   * 一级评论
   */
  export interface IResponse {
    total: number;
    is_more: 0 | 1;
    list: DataList[];
  }

  export interface IReq {
    page_num?: number;
    page_size?: number;
    parent_id?: number;
  }
}
