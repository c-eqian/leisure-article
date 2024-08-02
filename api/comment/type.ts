export namespace IArticleComment {
    export interface ICommentReq {
        /**
         * 评论的文章ID
         */
        article_id: any;
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
export namespace ICommentList {
    /**
     * 评论人信息
     */
    export interface IUserInfo {
        avatar: string;
        user_id: number;
        username: string;
    }

    /**
     * 二级评论明细
     */
        // eslint-disable-next-line no-use-before-define
    export interface SubCommentList extends IReplyInfo {
        // eslint-disable-next-line no-use-before-define
        reply_info: IReplyInfo;
        sub_comment_id: number;
    }

    // eslint-disable-next-line no-use-before-define
    export interface IReplyInfo extends DataList {
        parent_id: number;
        reply_id: number | null;
    }

    /**
     * 二级评论
     */
    export interface SubComment {
        list: SubCommentList[];
        total: number;
    }

    /**
     * 一级评论明细
     */
    export interface DataList {
        article_id: string;
        content: string;
        create_date: string;
        creator: number;
        description: null;
        comment_id: number;
        is_publisher: number;
        like_count: number;
        modifier: null;
        // 自定义键，判断是否回复
        is_reply?:boolean;
        status: number;
        sub_comment: SubComment;
        update_date: string;
        user_info: IUserInfo;
    }

    /**
     * 一级评论
     */
    export interface IResponse {
        total: number;
        list: DataList[];
    }

    export interface IReq {
        article_id: any;
        page_num?: number;
        page_size?: number;
        parent_id?: number;
    }
}
