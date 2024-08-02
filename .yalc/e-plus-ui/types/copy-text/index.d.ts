declare const EpCopyText: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        text: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: import("vue").PropType<"flex">;
            default: string;
        };
        justify: {
            type: import("vue").PropType<"start" | "end" | "center" | "space-around" | "space-between">;
            default: string;
        };
        align: {
            type: import("vue").PropType<"top" | "middle" | "bottom">;
            default: string;
        };
    }>>, {
        textComputedRef: import("vue").ComputedRef<string>;
        textRef: import("vue").Ref<HTMLElement | undefined>;
        fromAttr: import("vue").ComputedRef<boolean>;
        val: import("vue").ComputedRef<string>;
        handleCopy: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        text: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: import("vue").PropType<"flex">;
            default: string;
        };
        justify: {
            type: import("vue").PropType<"start" | "end" | "center" | "space-around" | "space-between">;
            default: string;
        };
        align: {
            type: import("vue").PropType<"top" | "middle" | "bottom">;
            default: string;
        };
    }>>, {
        type: "flex";
        align: "top" | "middle" | "bottom";
        text: string;
        justify: "center" | "start" | "end" | "space-around" | "space-between";
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        text: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: import("vue").PropType<"flex">;
            default: string;
        };
        justify: {
            type: import("vue").PropType<"start" | "end" | "center" | "space-around" | "space-between">;
            default: string;
        };
        align: {
            type: import("vue").PropType<"top" | "middle" | "bottom">;
            default: string;
        };
    }>>, {
        textComputedRef: import("vue").ComputedRef<string>;
        textRef: import("vue").Ref<HTMLElement | undefined>;
        fromAttr: import("vue").ComputedRef<boolean>;
        val: import("vue").ComputedRef<string>;
        handleCopy: () => void;
    }, {}, {}, {}, {
        type: "flex";
        align: "top" | "middle" | "bottom";
        text: string;
        justify: "center" | "start" | "end" | "space-around" | "space-between";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: import("vue").PropType<"flex">;
        default: string;
    };
    justify: {
        type: import("vue").PropType<"start" | "end" | "center" | "space-around" | "space-between">;
        default: string;
    };
    align: {
        type: import("vue").PropType<"top" | "middle" | "bottom">;
        default: string;
    };
}>>, {
    textComputedRef: import("vue").ComputedRef<string>;
    textRef: import("vue").Ref<HTMLElement | undefined>;
    fromAttr: import("vue").ComputedRef<boolean>;
    val: import("vue").ComputedRef<string>;
    handleCopy: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    type: "flex";
    align: "top" | "middle" | "bottom";
    text: string;
    justify: "center" | "start" | "end" | "space-around" | "space-between";
}, {}, string, {}> & (import("vue").VNodeProps & (import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin));
export default EpCopyText;
