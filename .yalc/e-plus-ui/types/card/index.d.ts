declare const EpCard: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        title: {
            type: import("vue").PropType<string>;
        };
        shadow: {
            type: import("vue").PropType<import("./type").Shadow>;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        title: {
            type: import("vue").PropType<string>;
        };
        shadow: {
            type: import("vue").PropType<import("./type").Shadow>;
            default: string;
        };
    }>>, {
        shadow: import("./type").Shadow;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        title: {
            type: import("vue").PropType<string>;
        };
        shadow: {
            type: import("vue").PropType<import("./type").Shadow>;
            default: string;
        };
    }>>, {}, {}, {}, {}, {
        shadow: import("./type").Shadow;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: import("vue").PropType<string>;
    };
    shadow: {
        type: import("vue").PropType<import("./type").Shadow>;
        default: string;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    shadow: import("./type").Shadow;
}, {}, string, {}> & (import("vue").VNodeProps & (import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((new () => {
    $slots: {
        title?(_: {}): any;
        extra?(_: {}): any;
        body?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
}) & import("vue").Plugin)));
export default EpCard;
