import { CommentDataRow, LoadData, ICommentData } from '../type';
import { type Ref } from 'vue';
export type CommentRecordMap = {
    /**
     * 子节点
     */
    children?: CommentDataRow[];
    /**
     * 父节点
     */
    parent?: CommentDataRow;
    /**
     * 当前索引
     */
    index: number;
    /**
     * 父索引,如果是一级，值为 -1
     */
    $index: number;
};
interface WatcherPropsData {
    data: Ref<ICommentData>;
}
export declare const useComment: (watcherPropsData: WatcherPropsData) => {
    resolve: (list: CommentDataRow[], data: LoadData & {
        loadDone: any;
    }, hasMore?: boolean) => void;
    getMapValues: (item: CommentDataRow) => {
        children?: {
            [x: string]: any;
            content?: string | undefined;
            createDate?: (string | Date) | undefined;
            commentId?: (number | string) | undefined;
            publisher?: (number | boolean) | undefined;
            likeCount?: number | undefined;
            updateDate?: string | undefined;
            userInfo?: {
                avatar?: string | undefined;
                userId?: number | undefined;
                username?: string | undefined;
            } | undefined;
            children?: {
                [x: string]: any;
                content?: string | undefined;
                createDate?: (string | Date) | undefined;
                commentId?: (number | string) | undefined;
                publisher?: (number | boolean) | undefined;
                likeCount?: number | undefined;
                updateDate?: string | undefined;
                userInfo?: {
                    avatar?: string | undefined;
                    userId?: number | undefined;
                    username?: string | undefined;
                } | undefined;
                children?: any[] | undefined;
                subComment?: {
                    total?: number | undefined;
                    hasMore?: boolean | undefined;
                    list: any[];
                } | undefined;
                parentId?: number | undefined;
                replyId?: (number | null) | undefined;
                ipAddress?: string | undefined;
                reply?: any | undefined;
                like?: (number | boolean) | undefined;
                level?: number | undefined;
            }[] | undefined;
            subComment?: {
                total?: number | undefined;
                hasMore?: boolean | undefined;
                list: any[];
            } | undefined;
            parentId?: number | undefined;
            replyId?: (number | null) | undefined;
            ipAddress?: string | undefined;
            reply?: {
                [x: string]: any;
                content?: string | undefined;
                createDate?: (string | Date) | undefined;
                commentId?: (number | string) | undefined;
                publisher?: (number | boolean) | undefined;
                likeCount?: number | undefined;
                updateDate?: string | undefined;
                userInfo?: {
                    avatar?: string | undefined;
                    userId?: number | undefined;
                    username?: string | undefined;
                } | undefined;
                children?: any[] | undefined;
                subComment?: {
                    total?: number | undefined;
                    hasMore?: boolean | undefined;
                    list: any[];
                } | undefined;
                parentId?: number | undefined;
                replyId?: (number | null) | undefined;
                ipAddress?: string | undefined;
                reply?: any | undefined;
                like?: (number | boolean) | undefined;
                level?: number | undefined;
            } | undefined;
            like?: (number | boolean) | undefined;
            level?: number | undefined;
        }[] | undefined;
        parent?: {
            [x: string]: any;
            content?: string | undefined;
            createDate?: (string | Date) | undefined;
            commentId?: (number | string) | undefined;
            publisher?: (number | boolean) | undefined;
            likeCount?: number | undefined;
            updateDate?: string | undefined;
            userInfo?: {
                avatar?: string | undefined;
                userId?: number | undefined;
                username?: string | undefined;
            } | undefined;
            children?: {
                [x: string]: any;
                content?: string | undefined;
                createDate?: (string | Date) | undefined;
                commentId?: (number | string) | undefined;
                publisher?: (number | boolean) | undefined;
                likeCount?: number | undefined;
                updateDate?: string | undefined;
                userInfo?: {
                    avatar?: string | undefined;
                    userId?: number | undefined;
                    username?: string | undefined;
                } | undefined;
                children?: any[] | undefined;
                subComment?: {
                    total?: number | undefined;
                    hasMore?: boolean | undefined;
                    list: any[];
                } | undefined;
                parentId?: number | undefined;
                replyId?: (number | null) | undefined;
                ipAddress?: string | undefined;
                reply?: any | undefined;
                like?: (number | boolean) | undefined;
                level?: number | undefined;
            }[] | undefined;
            subComment?: {
                total?: number | undefined;
                hasMore?: boolean | undefined;
                list: any[];
            } | undefined;
            parentId?: number | undefined;
            replyId?: (number | null) | undefined;
            ipAddress?: string | undefined;
            reply?: {
                [x: string]: any;
                content?: string | undefined;
                createDate?: (string | Date) | undefined;
                commentId?: (number | string) | undefined;
                publisher?: (number | boolean) | undefined;
                likeCount?: number | undefined;
                updateDate?: string | undefined;
                userInfo?: {
                    avatar?: string | undefined;
                    userId?: number | undefined;
                    username?: string | undefined;
                } | undefined;
                children?: any[] | undefined;
                subComment?: {
                    total?: number | undefined;
                    hasMore?: boolean | undefined;
                    list: any[];
                } | undefined;
                parentId?: number | undefined;
                replyId?: (number | null) | undefined;
                ipAddress?: string | undefined;
                reply?: any | undefined;
                like?: (number | boolean) | undefined;
                level?: number | undefined;
            } | undefined;
            like?: (number | boolean) | undefined;
            level?: number | undefined;
        } | undefined;
        index: number;
        $index: number;
    } | undefined;
    addMapValues: (item: CommentDataRow, values: CommentRecordMap) => void;
    recordsDataMap: Ref<Map<string, {
        children?: {
            [x: string]: any;
            content?: string | undefined;
            createDate?: (string | Date) | undefined;
            commentId?: (number | string) | undefined;
            publisher?: (number | boolean) | undefined;
            likeCount?: number | undefined;
            updateDate?: string | undefined;
            userInfo?: {
                avatar?: string | undefined;
                userId?: number | undefined;
                username?: string | undefined;
            } | undefined;
            children?: {
                [x: string]: any;
                content?: string | undefined;
                createDate?: (string | Date) | undefined;
                commentId?: (number | string) | undefined;
                publisher?: (number | boolean) | undefined;
                likeCount?: number | undefined;
                updateDate?: string | undefined;
                userInfo?: {
                    avatar?: string | undefined;
                    userId?: number | undefined;
                    username?: string | undefined;
                } | undefined;
                children?: any[] | undefined;
                subComment?: {
                    total?: number | undefined;
                    hasMore?: boolean | undefined;
                    list: any[];
                } | undefined;
                parentId?: number | undefined;
                replyId?: (number | null) | undefined;
                ipAddress?: string | undefined;
                reply?: any | undefined;
                like?: (number | boolean) | undefined;
                level?: number | undefined;
            }[] | undefined;
            subComment?: {
                total?: number | undefined;
                hasMore?: boolean | undefined;
                list: any[];
            } | undefined;
            parentId?: number | undefined;
            replyId?: (number | null) | undefined;
            ipAddress?: string | undefined;
            reply?: {
                [x: string]: any;
                content?: string | undefined;
                createDate?: (string | Date) | undefined;
                commentId?: (number | string) | undefined;
                publisher?: (number | boolean) | undefined;
                likeCount?: number | undefined;
                updateDate?: string | undefined;
                userInfo?: {
                    avatar?: string | undefined;
                    userId?: number | undefined;
                    username?: string | undefined;
                } | undefined;
                children?: any[] | undefined;
                subComment?: {
                    total?: number | undefined;
                    hasMore?: boolean | undefined;
                    list: any[];
                } | undefined;
                parentId?: number | undefined;
                replyId?: (number | null) | undefined;
                ipAddress?: string | undefined;
                reply?: any | undefined;
                like?: (number | boolean) | undefined;
                level?: number | undefined;
            } | undefined;
            like?: (number | boolean) | undefined;
            level?: number | undefined;
        }[] | undefined;
        parent?: {
            [x: string]: any;
            content?: string | undefined;
            createDate?: (string | Date) | undefined;
            commentId?: (number | string) | undefined;
            publisher?: (number | boolean) | undefined;
            likeCount?: number | undefined;
            updateDate?: string | undefined;
            userInfo?: {
                avatar?: string | undefined;
                userId?: number | undefined;
                username?: string | undefined;
            } | undefined;
            children?: {
                [x: string]: any;
                content?: string | undefined;
                createDate?: (string | Date) | undefined;
                commentId?: (number | string) | undefined;
                publisher?: (number | boolean) | undefined;
                likeCount?: number | undefined;
                updateDate?: string | undefined;
                userInfo?: {
                    avatar?: string | undefined;
                    userId?: number | undefined;
                    username?: string | undefined;
                } | undefined;
                children?: any[] | undefined;
                subComment?: {
                    total?: number | undefined;
                    hasMore?: boolean | undefined;
                    list: any[];
                } | undefined;
                parentId?: number | undefined;
                replyId?: (number | null) | undefined;
                ipAddress?: string | undefined;
                reply?: any | undefined;
                like?: (number | boolean) | undefined;
                level?: number | undefined;
            }[] | undefined;
            subComment?: {
                total?: number | undefined;
                hasMore?: boolean | undefined;
                list: any[];
            } | undefined;
            parentId?: number | undefined;
            replyId?: (number | null) | undefined;
            ipAddress?: string | undefined;
            reply?: {
                [x: string]: any;
                content?: string | undefined;
                createDate?: (string | Date) | undefined;
                commentId?: (number | string) | undefined;
                publisher?: (number | boolean) | undefined;
                likeCount?: number | undefined;
                updateDate?: string | undefined;
                userInfo?: {
                    avatar?: string | undefined;
                    userId?: number | undefined;
                    username?: string | undefined;
                } | undefined;
                children?: any[] | undefined;
                subComment?: {
                    total?: number | undefined;
                    hasMore?: boolean | undefined;
                    list: any[];
                } | undefined;
                parentId?: number | undefined;
                replyId?: (number | null) | undefined;
                ipAddress?: string | undefined;
                reply?: any | undefined;
                like?: (number | boolean) | undefined;
                level?: number | undefined;
            } | undefined;
            like?: (number | boolean) | undefined;
            level?: number | undefined;
        } | undefined;
        index: number;
        $index: number;
    }> & Omit<Map<string, CommentRecordMap>, keyof Map<any, any>>>;
    updateComment: (recordItem: CommentDataRow, item: CommentDataRow) => void;
    deleteComment: (recordItem: CommentDataRow) => void;
    clearMapValues: () => void;
    getRecordComment: (recordItem: CommentDataRow) => {
        children?: {
            [x: string]: any;
            content?: string | undefined;
            createDate?: (string | Date) | undefined;
            commentId?: (number | string) | undefined;
            publisher?: (number | boolean) | undefined;
            likeCount?: number | undefined;
            updateDate?: string | undefined;
            userInfo?: {
                avatar?: string | undefined;
                userId?: number | undefined;
                username?: string | undefined;
            } | undefined;
            children?: {
                [x: string]: any;
                content?: string | undefined;
                createDate?: (string | Date) | undefined;
                commentId?: (number | string) | undefined;
                publisher?: (number | boolean) | undefined;
                likeCount?: number | undefined;
                updateDate?: string | undefined;
                userInfo?: {
                    avatar?: string | undefined;
                    userId?: number | undefined;
                    username?: string | undefined;
                } | undefined;
                children?: any[] | undefined;
                subComment?: {
                    total?: number | undefined;
                    hasMore?: boolean | undefined;
                    list: any[];
                } | undefined;
                parentId?: number | undefined;
                replyId?: (number | null) | undefined;
                ipAddress?: string | undefined;
                reply?: any | undefined;
                like?: (number | boolean) | undefined;
                level?: number | undefined;
            }[] | undefined;
            subComment?: {
                total?: number | undefined;
                hasMore?: boolean | undefined;
                list: any[];
            } | undefined;
            parentId?: number | undefined;
            replyId?: (number | null) | undefined;
            ipAddress?: string | undefined;
            reply?: {
                [x: string]: any;
                content?: string | undefined;
                createDate?: (string | Date) | undefined;
                commentId?: (number | string) | undefined;
                publisher?: (number | boolean) | undefined;
                likeCount?: number | undefined;
                updateDate?: string | undefined;
                userInfo?: {
                    avatar?: string | undefined;
                    userId?: number | undefined;
                    username?: string | undefined;
                } | undefined;
                children?: any[] | undefined;
                subComment?: {
                    total?: number | undefined;
                    hasMore?: boolean | undefined;
                    list: any[];
                } | undefined;
                parentId?: number | undefined;
                replyId?: (number | null) | undefined;
                ipAddress?: string | undefined;
                reply?: any | undefined;
                like?: (number | boolean) | undefined;
                level?: number | undefined;
            } | undefined;
            like?: (number | boolean) | undefined;
            level?: number | undefined;
        }[] | undefined;
        parent?: {
            [x: string]: any;
            content?: string | undefined;
            createDate?: (string | Date) | undefined;
            commentId?: (number | string) | undefined;
            publisher?: (number | boolean) | undefined;
            likeCount?: number | undefined;
            updateDate?: string | undefined;
            userInfo?: {
                avatar?: string | undefined;
                userId?: number | undefined;
                username?: string | undefined;
            } | undefined;
            children?: {
                [x: string]: any;
                content?: string | undefined;
                createDate?: (string | Date) | undefined;
                commentId?: (number | string) | undefined;
                publisher?: (number | boolean) | undefined;
                likeCount?: number | undefined;
                updateDate?: string | undefined;
                userInfo?: {
                    avatar?: string | undefined;
                    userId?: number | undefined;
                    username?: string | undefined;
                } | undefined;
                children?: any[] | undefined;
                subComment?: {
                    total?: number | undefined;
                    hasMore?: boolean | undefined;
                    list: any[];
                } | undefined;
                parentId?: number | undefined;
                replyId?: (number | null) | undefined;
                ipAddress?: string | undefined;
                reply?: any | undefined;
                like?: (number | boolean) | undefined;
                level?: number | undefined;
            }[] | undefined;
            subComment?: {
                total?: number | undefined;
                hasMore?: boolean | undefined;
                list: any[];
            } | undefined;
            parentId?: number | undefined;
            replyId?: (number | null) | undefined;
            ipAddress?: string | undefined;
            reply?: {
                [x: string]: any;
                content?: string | undefined;
                createDate?: (string | Date) | undefined;
                commentId?: (number | string) | undefined;
                publisher?: (number | boolean) | undefined;
                likeCount?: number | undefined;
                updateDate?: string | undefined;
                userInfo?: {
                    avatar?: string | undefined;
                    userId?: number | undefined;
                    username?: string | undefined;
                } | undefined;
                children?: any[] | undefined;
                subComment?: {
                    total?: number | undefined;
                    hasMore?: boolean | undefined;
                    list: any[];
                } | undefined;
                parentId?: number | undefined;
                replyId?: (number | null) | undefined;
                ipAddress?: string | undefined;
                reply?: any | undefined;
                like?: (number | boolean) | undefined;
                level?: number | undefined;
            } | undefined;
            like?: (number | boolean) | undefined;
            level?: number | undefined;
        } | undefined;
        index: number;
        $index: number;
    } | undefined;
    getChildrenComments: (recordItem: CommentDataRow) => {
        [x: string]: any;
        content?: string | undefined;
        createDate?: (string | Date) | undefined;
        commentId?: (number | string) | undefined;
        publisher?: (number | boolean) | undefined;
        likeCount?: number | undefined;
        updateDate?: string | undefined;
        userInfo?: {
            avatar?: string | undefined;
            userId?: number | undefined;
            username?: string | undefined;
        } | undefined;
        children?: {
            [x: string]: any;
            content?: string | undefined;
            createDate?: (string | Date) | undefined;
            commentId?: (number | string) | undefined;
            publisher?: (number | boolean) | undefined;
            likeCount?: number | undefined;
            updateDate?: string | undefined;
            userInfo?: {
                avatar?: string | undefined;
                userId?: number | undefined;
                username?: string | undefined;
            } | undefined;
            children?: any[] | undefined;
            subComment?: {
                total?: number | undefined;
                hasMore?: boolean | undefined;
                list: any[];
            } | undefined;
            parentId?: number | undefined;
            replyId?: (number | null) | undefined;
            ipAddress?: string | undefined;
            reply?: any | undefined;
            like?: (number | boolean) | undefined;
            level?: number | undefined;
        }[] | undefined;
        subComment?: {
            total?: number | undefined;
            hasMore?: boolean | undefined;
            list: any[];
        } | undefined;
        parentId?: number | undefined;
        replyId?: (number | null) | undefined;
        ipAddress?: string | undefined;
        reply?: {
            [x: string]: any;
            content?: string | undefined;
            createDate?: (string | Date) | undefined;
            commentId?: (number | string) | undefined;
            publisher?: (number | boolean) | undefined;
            likeCount?: number | undefined;
            updateDate?: string | undefined;
            userInfo?: {
                avatar?: string | undefined;
                userId?: number | undefined;
                username?: string | undefined;
            } | undefined;
            children?: any[] | undefined;
            subComment?: {
                total?: number | undefined;
                hasMore?: boolean | undefined;
                list: any[];
            } | undefined;
            parentId?: number | undefined;
            replyId?: (number | null) | undefined;
            ipAddress?: string | undefined;
            reply?: any | undefined;
            like?: (number | boolean) | undefined;
            level?: number | undefined;
        } | undefined;
        like?: (number | boolean) | undefined;
        level?: number | undefined;
    }[];
    getParentComment: (recordItem: CommentDataRow) => {
        [x: string]: any;
        content?: string | undefined;
        createDate?: (string | Date) | undefined;
        commentId?: (number | string) | undefined;
        publisher?: (number | boolean) | undefined;
        likeCount?: number | undefined;
        updateDate?: string | undefined;
        userInfo?: {
            avatar?: string | undefined;
            userId?: number | undefined;
            username?: string | undefined;
        } | undefined;
        children?: {
            [x: string]: any;
            content?: string | undefined;
            createDate?: (string | Date) | undefined;
            commentId?: (number | string) | undefined;
            publisher?: (number | boolean) | undefined;
            likeCount?: number | undefined;
            updateDate?: string | undefined;
            userInfo?: {
                avatar?: string | undefined;
                userId?: number | undefined;
                username?: string | undefined;
            } | undefined;
            children?: any[] | undefined;
            subComment?: {
                total?: number | undefined;
                hasMore?: boolean | undefined;
                list: any[];
            } | undefined;
            parentId?: number | undefined;
            replyId?: (number | null) | undefined;
            ipAddress?: string | undefined;
            reply?: any | undefined;
            like?: (number | boolean) | undefined;
            level?: number | undefined;
        }[] | undefined;
        subComment?: {
            total?: number | undefined;
            hasMore?: boolean | undefined;
            list: any[];
        } | undefined;
        parentId?: number | undefined;
        replyId?: (number | null) | undefined;
        ipAddress?: string | undefined;
        reply?: {
            [x: string]: any;
            content?: string | undefined;
            createDate?: (string | Date) | undefined;
            commentId?: (number | string) | undefined;
            publisher?: (number | boolean) | undefined;
            likeCount?: number | undefined;
            updateDate?: string | undefined;
            userInfo?: {
                avatar?: string | undefined;
                userId?: number | undefined;
                username?: string | undefined;
            } | undefined;
            children?: any[] | undefined;
            subComment?: {
                total?: number | undefined;
                hasMore?: boolean | undefined;
                list: any[];
            } | undefined;
            parentId?: number | undefined;
            replyId?: (number | null) | undefined;
            ipAddress?: string | undefined;
            reply?: any | undefined;
            like?: (number | boolean) | undefined;
            level?: number | undefined;
        } | undefined;
        like?: (number | boolean) | undefined;
        level?: number | undefined;
    } | undefined;
    getParentNodes: (recordItem: CommentDataRow) => CommentDataRow[] | undefined;
    appendComments: (items: CommentDataRow[] | CommentDataRow, recordItem?: CommentDataRow, hasMore?: boolean) => void;
    updateLikeCount: (recordItem: CommentDataRow, likeCount: number) => void;
    loadData: (data: LoadData & {
        loadDone: any;
    }) => void;
};
export {};
