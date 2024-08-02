declare const EpLine: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        direction: {
            type: import("vue").PropType<"horizontal" | "vertical">;
            default: string;
        };
        position: {
            type: import("vue").PropType<import("./type.js").ILineTextPos>;
            default: string;
        };
        borderWidth: {
            type: import("vue").PropType<string>;
            default: string;
        };
        dashed: {
            type: import("vue").PropType<boolean>;
        };
        offset: {
            type: import("vue").PropType<string | number>;
        };
        color: {
            type: import("vue").PropType<string>;
        };
        margin: {
            type: import("vue").PropType<string>;
            default: string;
        };
        linear: {
            type: import("vue").PropType<boolean>;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        direction: {
            type: import("vue").PropType<"horizontal" | "vertical">;
            default: string;
        };
        position: {
            type: import("vue").PropType<import("./type.js").ILineTextPos>;
            default: string;
        };
        borderWidth: {
            type: import("vue").PropType<string>;
            default: string;
        };
        dashed: {
            type: import("vue").PropType<boolean>;
        };
        offset: {
            type: import("vue").PropType<string | number>;
        };
        color: {
            type: import("vue").PropType<string>;
        };
        margin: {
            type: import("vue").PropType<string>;
            default: string;
        };
        linear: {
            type: import("vue").PropType<boolean>;
        };
    }>>, {
        direction: "horizontal" | "vertical";
        position: import("./type.js").ILineTextPos;
        borderWidth: string;
        margin: string;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        direction: {
            type: import("vue").PropType<"horizontal" | "vertical">;
            default: string;
        };
        position: {
            type: import("vue").PropType<import("./type.js").ILineTextPos>;
            default: string;
        };
        borderWidth: {
            type: import("vue").PropType<string>;
            default: string;
        };
        dashed: {
            type: import("vue").PropType<boolean>;
        };
        offset: {
            type: import("vue").PropType<string | number>;
        };
        color: {
            type: import("vue").PropType<string>;
        };
        margin: {
            type: import("vue").PropType<string>;
            default: string;
        };
        linear: {
            type: import("vue").PropType<boolean>;
        };
    }>>, {}, {}, {}, {}, {
        direction: "horizontal" | "vertical";
        position: import("./type.js").ILineTextPos;
        borderWidth: string;
        margin: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    position: {
        type: import("vue").PropType<import("./type.js").ILineTextPos>;
        default: string;
    };
    borderWidth: {
        type: import("vue").PropType<string>;
        default: string;
    };
    dashed: {
        type: import("vue").PropType<boolean>;
    };
    offset: {
        type: import("vue").PropType<string | number>;
    };
    color: {
        type: import("vue").PropType<string>;
    };
    margin: {
        type: import("vue").PropType<string>;
        default: string;
    };
    linear: {
        type: import("vue").PropType<boolean>;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    direction: "horizontal" | "vertical";
    position: import("./type.js").ILineTextPos;
    borderWidth: string;
    margin: string;
}, {}, string, {}> & (import("vue").VNodeProps & (import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import("vue").Plugin)));
export default EpLine;
