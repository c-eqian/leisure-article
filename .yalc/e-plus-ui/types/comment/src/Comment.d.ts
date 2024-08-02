import { type PropType, type SlotsType } from 'vue';
import type { CommentDataRow, ICommentData, ICommentConfig, ItemSlots, CommentLoadFn } from '../type';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<ICommentData>;
        default: () => ICommentData<any>;
    };
    config: {
        type: PropType<ICommentConfig>;
        default: () => {};
    };
    /**
     * 点击回复之前，如果返回false,则不会进行回复
     */
    beforeReply: {
        type: FunctionConstructor;
    };
    load: {
        type: PropType<CommentLoadFn>;
    };
}, {
    computedData: import("vue").Ref<{
        total?: number | undefined;
        hasMore?: boolean | undefined;
        list: {
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
            subComment?: any | undefined;
            parentId?: number | undefined;
            replyId?: (number | null) | undefined;
            ipAddress?: string | undefined;
            reply?: any | undefined;
            like?: (number | boolean) | undefined;
            level?: number | undefined;
        }[];
    }>;
    appendComments: (items: CommentDataRow[] | CommentDataRow, recordItem?: CommentDataRow, hasMore?: boolean) => void;
    getValueByKey: (key: string, isField?: boolean) => any;
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
    addMapValues: (item: CommentDataRow, values: import("../hooks/useComment").CommentRecordMap) => void;
    getParentNodes: (recordItem: CommentDataRow) => CommentDataRow[] | undefined;
    clearMapValues: () => void;
    updateComment: (recordItem: CommentDataRow, item: CommentDataRow) => void;
    computedConfig: import("vue").ComputedRef<ICommentConfig>;
    loadingMap: import("vue").Ref<{
        level1: boolean;
        level2: boolean;
    }>;
    loadingStatus: () => {
        isLoading: import("vue").Ref<boolean>;
        setStatus: (val: boolean) => void;
    };
    loadData: (data: import("../type").LoadData & {
        loadDone: any;
    }) => void;
    updateLikeCount: (recordItem: CommentDataRow, likeCount: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("load" | "click-like" | "click-reply" | "confirm-reply")[], "load" | "click-like" | "click-reply" | "confirm-reply", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<ICommentData>;
        default: () => ICommentData<any>;
    };
    config: {
        type: PropType<ICommentConfig>;
        default: () => {};
    };
    /**
     * 点击回复之前，如果返回false,则不会进行回复
     */
    beforeReply: {
        type: FunctionConstructor;
    };
    load: {
        type: PropType<CommentLoadFn>;
    };
}>> & {
    onLoad?: ((...args: any[]) => any) | undefined;
    "onClick-like"?: ((...args: any[]) => any) | undefined;
    "onClick-reply"?: ((...args: any[]) => any) | undefined;
    "onConfirm-reply"?: ((...args: any[]) => any) | undefined;
}, {
    data: ICommentData<any>;
    config: ICommentConfig;
}, SlotsType<ItemSlots>>;
export default _default;
