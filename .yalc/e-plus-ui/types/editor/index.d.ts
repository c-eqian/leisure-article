declare const EpEditor: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        emojis: {
            type: import("vue").PropType<import("./type").EmojiData[]>;
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
            type: import("vue").PropType<any>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((modelValue: any) => any) | undefined;
        "onClick-submit"?: ((v: string) => any) | undefined;
    }, {
        focus: () => void;
        isShow: import("vue").Ref<boolean>;
        setEmojis: (list: import("./type").EmojiData[]) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (modelValue: any) => void;
        "click-submit": (v: string) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        emojis: {
            type: import("vue").PropType<import("./type").EmojiData[]>;
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
            type: import("vue").PropType<any>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((modelValue: any) => any) | undefined;
        "onClick-submit"?: ((v: string) => any) | undefined;
    }, {
        placeholder: string;
        emojis: import("./type").EmojiData[];
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
            type: import("vue").PropType<import("./type").EmojiData[]>;
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
            type: import("vue").PropType<any>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((modelValue: any) => any) | undefined;
        "onClick-submit"?: ((v: string) => any) | undefined;
    }, {
        focus: () => void;
        isShow: import("vue").Ref<boolean>;
        setEmojis: (list: import("./type").EmojiData[]) => void;
    }, {}, {}, {}, {
        placeholder: string;
        emojis: import("./type").EmojiData[];
        useEmojis: boolean;
        autoFocus: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    emojis: {
        type: import("vue").PropType<import("./type").EmojiData[]>;
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
        type: import("vue").PropType<any>;
    };
}>> & {
    "onUpdate:modelValue"?: ((modelValue: any) => any) | undefined;
    "onClick-submit"?: ((v: string) => any) | undefined;
}, {
    focus: () => void;
    isShow: import("vue").Ref<boolean>;
    setEmojis: (list: import("./type").EmojiData[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: any) => void;
    "click-submit": (v: string) => void;
}, string, {
    placeholder: string;
    emojis: import("./type").EmojiData[];
    useEmojis: boolean;
    autoFocus: boolean;
}, {}, string, {}> & (import("vue").VNodeProps & (import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin));
export default EpEditor;
