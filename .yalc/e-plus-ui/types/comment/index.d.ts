export * from './type';
declare const EpComment: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<import("./type").ICommentData>;
            default: () => import("./type").ICommentData<any>;
        };
        config: {
            type: import("vue").PropType<import("./type").ICommentConfig>;
            default: () => {};
        };
        beforeReply: {
            type: FunctionConstructor;
        };
        load: {
            type: import("vue").PropType<import("./type").CommentLoadFn>;
        };
    }>> & {
        onLoad?: ((...args: any[]) => any) | undefined;
        "onClick-like"?: ((...args: any[]) => any) | undefined;
        "onClick-reply"?: ((...args: any[]) => any) | undefined;
        "onConfirm-reply"?: ((...args: any[]) => any) | undefined;
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
        appendComments: (items: import("./type").CommentDataRow[] | import("./type").CommentDataRow, recordItem?: import("./type").CommentDataRow, hasMore?: boolean) => void;
        getValueByKey: (key: string, isField?: boolean) => any;
        getParentComment: (recordItem: import("./type").CommentDataRow) => {
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
                subComment?: any | undefined;
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
                subComment?: any | undefined;
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
        getRecordComment: (recordItem: import("./type").CommentDataRow) => {
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
                    subComment?: any | undefined;
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
                    subComment?: any | undefined;
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
                    subComment?: any | undefined;
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
                    subComment?: any | undefined;
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
        getChildrenComments: (recordItem: import("./type").CommentDataRow) => {
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
                subComment?: any | undefined;
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
                subComment?: any | undefined;
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
        getMapValues: (item: import("./type").CommentDataRow) => {
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
                    subComment?: any | undefined;
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
                    subComment?: any | undefined;
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
                    subComment?: any | undefined;
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
                    subComment?: any | undefined;
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
        addMapValues: (item: import("./type").CommentDataRow, values: import("./hooks/useComment").CommentRecordMap) => void;
        getParentNodes: (recordItem: import("./type").CommentDataRow) => import("./type").CommentDataRow[] | undefined;
        clearMapValues: () => void;
        updateComment: (recordItem: import("./type").CommentDataRow, item: import("./type").CommentDataRow) => void;
        computedConfig: import("vue").ComputedRef<import("./type").ICommentConfig>;
        loadingMap: import("vue").Ref<{
            level1: boolean;
            level2: boolean;
        }>;
        loadingStatus: () => {
            isLoading: import("vue").Ref<boolean>;
            setStatus: (val: boolean) => void;
        };
        loadData: (data: import("./type").LoadData & {
            loadDone: any;
        }) => void;
        updateLikeCount: (recordItem: import("./type").CommentDataRow, likeCount: number) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("load" | "click-like" | "click-reply" | "confirm-reply")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<import("./type").ICommentData>;
            default: () => import("./type").ICommentData<any>;
        };
        config: {
            type: import("vue").PropType<import("./type").ICommentConfig>;
            default: () => {};
        };
        beforeReply: {
            type: FunctionConstructor;
        };
        load: {
            type: import("vue").PropType<import("./type").CommentLoadFn>;
        };
    }>> & {
        onLoad?: ((...args: any[]) => any) | undefined;
        "onClick-like"?: ((...args: any[]) => any) | undefined;
        "onClick-reply"?: ((...args: any[]) => any) | undefined;
        "onConfirm-reply"?: ((...args: any[]) => any) | undefined;
    }, {
        data: import("./type").ICommentData<any>;
        config: import("./type").ICommentConfig;
    }, true, {}, import("vue").SlotsType<import("./type").ItemSlots>, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<import("./type").ICommentData>;
            default: () => import("./type").ICommentData<any>;
        };
        config: {
            type: import("vue").PropType<import("./type").ICommentConfig>;
            default: () => {};
        };
        beforeReply: {
            type: FunctionConstructor;
        };
        load: {
            type: import("vue").PropType<import("./type").CommentLoadFn>;
        };
    }>> & {
        onLoad?: ((...args: any[]) => any) | undefined;
        "onClick-like"?: ((...args: any[]) => any) | undefined;
        "onClick-reply"?: ((...args: any[]) => any) | undefined;
        "onConfirm-reply"?: ((...args: any[]) => any) | undefined;
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
        appendComments: (items: import("./type").CommentDataRow[] | import("./type").CommentDataRow, recordItem?: import("./type").CommentDataRow, hasMore?: boolean) => void;
        getValueByKey: (key: string, isField?: boolean) => any;
        getParentComment: (recordItem: import("./type").CommentDataRow) => {
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
                subComment?: any | undefined;
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
                subComment?: any | undefined;
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
        getRecordComment: (recordItem: import("./type").CommentDataRow) => {
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
                    subComment?: any | undefined;
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
                    subComment?: any | undefined;
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
                    subComment?: any | undefined;
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
                    subComment?: any | undefined;
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
        getChildrenComments: (recordItem: import("./type").CommentDataRow) => {
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
                subComment?: any | undefined;
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
                subComment?: any | undefined;
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
        getMapValues: (item: import("./type").CommentDataRow) => {
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
                    subComment?: any | undefined;
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
                    subComment?: any | undefined;
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
                    subComment?: any | undefined;
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
                    subComment?: any | undefined;
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
        addMapValues: (item: import("./type").CommentDataRow, values: import("./hooks/useComment").CommentRecordMap) => void;
        getParentNodes: (recordItem: import("./type").CommentDataRow) => import("./type").CommentDataRow[] | undefined;
        clearMapValues: () => void;
        updateComment: (recordItem: import("./type").CommentDataRow, item: import("./type").CommentDataRow) => void;
        computedConfig: import("vue").ComputedRef<import("./type").ICommentConfig>;
        loadingMap: import("vue").Ref<{
            level1: boolean;
            level2: boolean;
        }>;
        loadingStatus: () => {
            isLoading: import("vue").Ref<boolean>;
            setStatus: (val: boolean) => void;
        };
        loadData: (data: import("./type").LoadData & {
            loadDone: any;
        }) => void;
        updateLikeCount: (recordItem: import("./type").CommentDataRow, likeCount: number) => void;
    }, {}, {}, {}, {
        data: import("./type").ICommentData<any>;
        config: import("./type").ICommentConfig;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<import("./type").ICommentData>;
        default: () => import("./type").ICommentData<any>;
    };
    config: {
        type: import("vue").PropType<import("./type").ICommentConfig>;
        default: () => {};
    };
    beforeReply: {
        type: FunctionConstructor;
    };
    load: {
        type: import("vue").PropType<import("./type").CommentLoadFn>;
    };
}>> & {
    onLoad?: ((...args: any[]) => any) | undefined;
    "onClick-like"?: ((...args: any[]) => any) | undefined;
    "onClick-reply"?: ((...args: any[]) => any) | undefined;
    "onConfirm-reply"?: ((...args: any[]) => any) | undefined;
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
    appendComments: (items: import("./type").CommentDataRow[] | import("./type").CommentDataRow, recordItem?: import("./type").CommentDataRow, hasMore?: boolean) => void;
    getValueByKey: (key: string, isField?: boolean) => any;
    getParentComment: (recordItem: import("./type").CommentDataRow) => {
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
    getRecordComment: (recordItem: import("./type").CommentDataRow) => {
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
    getChildrenComments: (recordItem: import("./type").CommentDataRow) => {
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
    getMapValues: (item: import("./type").CommentDataRow) => {
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
    addMapValues: (item: import("./type").CommentDataRow, values: import("./hooks/useComment").CommentRecordMap) => void;
    getParentNodes: (recordItem: import("./type").CommentDataRow) => import("./type").CommentDataRow[] | undefined;
    clearMapValues: () => void;
    updateComment: (recordItem: import("./type").CommentDataRow, item: import("./type").CommentDataRow) => void;
    computedConfig: import("vue").ComputedRef<import("./type").ICommentConfig>;
    loadingMap: import("vue").Ref<{
        level1: boolean;
        level2: boolean;
    }>;
    loadingStatus: () => {
        isLoading: import("vue").Ref<boolean>;
        setStatus: (val: boolean) => void;
    };
    loadData: (data: import("./type").LoadData & {
        loadDone: any;
    }) => void;
    updateLikeCount: (recordItem: import("./type").CommentDataRow, likeCount: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("load" | "click-like" | "click-reply" | "confirm-reply")[], "load" | "click-like" | "click-reply" | "confirm-reply", {
    data: import("./type").ICommentData<any>;
    config: import("./type").ICommentConfig;
}, {}, string, import("vue").SlotsType<import("./type").ItemSlots>> & (import("vue").VNodeProps & (import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin));
export default EpComment;
