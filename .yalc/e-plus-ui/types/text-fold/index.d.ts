export * from './type';
declare const EpTextFold: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        position: {
            type: import("vue").PropType<"left" | "right">;
            default: string;
        };
        line: {
            type: import("vue").PropType<number>;
            default: number;
        };
        isFold: {
            type: import("vue").PropType<boolean>;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        position: {
            type: import("vue").PropType<"left" | "right">;
            default: string;
        };
        line: {
            type: import("vue").PropType<number>;
            default: number;
        };
        isFold: {
            type: import("vue").PropType<boolean>;
        };
    }>>, {
        position: "left" | "right";
        line: number;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        position: {
            type: import("vue").PropType<"left" | "right">;
            default: string;
        };
        line: {
            type: import("vue").PropType<number>;
            default: number;
        };
        isFold: {
            type: import("vue").PropType<boolean>;
        };
    }>>, {}, {}, {}, {}, {
        position: "left" | "right";
        line: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: import("vue").PropType<"left" | "right">;
        default: string;
    };
    line: {
        type: import("vue").PropType<number>;
        default: number;
    };
    isFold: {
        type: import("vue").PropType<boolean>;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    position: "left" | "right";
    line: number;
}, {}, string, {}> & (import("vue").VNodeProps & (import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((new () => {
    $slots: {
        default?(_: {}): any;
        expand?(_: {
            isFold: boolean;
        }): any;
    };
}) & import("vue").Plugin)));
export default EpTextFold;
