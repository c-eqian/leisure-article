import { ComputedRef, type PropType, type SlotsType } from 'vue';
import type { CommentDataRow, ItemSlots } from '../type';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<CommentDataRow>;
        default: () => {};
    };
    isSubReply: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 点击回复之前，如果返回false,则不会进行回复
     */
    beforeReply: {
        type: FunctionConstructor;
    };
    reply: {
        type: PropType<CommentDataRow>;
        default: () => {};
    };
    level1: {
        type: PropType<CommentDataRow>;
        default: () => {};
    };
}, {
    computedData: ComputedRef<CommentDataRow>;
    computedReply: ComputedRef<CommentDataRow>;
    getValueByKey: (key: string, level?: 1 | 2 | boolean, configValue?: boolean, isField?: boolean) => any;
    commentRef: import("vue").Ref<any>;
    actionRef: import("vue").Ref<any>;
    replyState: import("vue").Ref<{
        isCustomEditor: boolean;
        value: string;
        placeholder: string;
        isEditable: boolean;
        replyDone: any;
    }>;
    computedIsSubReply: ComputedRef<boolean>;
    computedLevel1: ComputedRef<CommentDataRow>;
    editorInputRef: import("vue").Ref<import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        emojis: {
            type: PropType<import("../../editor/type").EmojiData[]>;
            default: () => never[];
        };
        useEmojis: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoFocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: PropType<any>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((modelValue: any) => any) | undefined;
        "onClick-submit"?: ((v: string) => any) | undefined;
    }, {
        focus: () => void;
        isShow: import("vue").Ref<boolean>;
        setEmojis: (list: import("../../editor/type").EmojiData[]) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (modelValue: any) => void;
        "click-submit": (v: string) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        emojis: {
            type: PropType<import("../../editor/type").EmojiData[]>;
            default: () => never[];
        };
        useEmojis: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoFocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: PropType<any>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((modelValue: any) => any) | undefined;
        "onClick-submit"?: ((v: string) => any) | undefined;
    }, {
        placeholder: string;
        emojis: import("../../editor/type").EmojiData[];
        useEmojis: boolean;
        autoFocus: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        emojis: {
            type: PropType<import("../../editor/type").EmojiData[]>;
            default: () => never[];
        };
        useEmojis: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoFocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: PropType<any>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((modelValue: any) => any) | undefined;
        "onClick-submit"?: ((v: string) => any) | undefined;
    }, {
        focus: () => void;
        isShow: import("vue").Ref<boolean>;
        setEmojis: (list: import("../../editor/type").EmojiData[]) => void;
    }, {}, {}, {}, {
        placeholder: string;
        emojis: import("../../editor/type").EmojiData[];
        useEmojis: boolean;
        autoFocus: boolean;
    }> | null>;
    getSlotsParameter: () => {
        item: CommentDataRow;
        isSubReply: boolean;
        level1: CommentDataRow;
        reply: CommentDataRow;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click-like" | "click-reply" | "confirm-reply")[], "click-like" | "click-reply" | "confirm-reply", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<CommentDataRow>;
        default: () => {};
    };
    isSubReply: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 点击回复之前，如果返回false,则不会进行回复
     */
    beforeReply: {
        type: FunctionConstructor;
    };
    reply: {
        type: PropType<CommentDataRow>;
        default: () => {};
    };
    level1: {
        type: PropType<CommentDataRow>;
        default: () => {};
    };
}>> & {
    "onClick-like"?: ((...args: any[]) => any) | undefined;
    "onClick-reply"?: ((...args: any[]) => any) | undefined;
    "onConfirm-reply"?: ((...args: any[]) => any) | undefined;
}, {
    data: CommentDataRow;
    reply: CommentDataRow;
    isSubReply: boolean;
    level1: CommentDataRow;
}, SlotsType<ItemSlots>>;
export default _default;
