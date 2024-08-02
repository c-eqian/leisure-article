declare const _default: import("vue").DefineComponent<{
    likeCount: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: import("vue").PropType<any>;
    };
}, {
    likeDone: (val: boolean) => void;
    replyDone: (val: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: any) => void;
    "click-like": (...args: any[]) => void;
    "click-reply": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    likeCount: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: import("vue").PropType<any>;
    };
}>> & {
    "onUpdate:modelValue"?: ((modelValue: any) => any) | undefined;
    "onClick-like"?: ((...args: any[]) => any) | undefined;
    "onClick-reply"?: ((...args: any[]) => any) | undefined;
}, {
    likeCount: number;
}, {}>;
export default _default;
