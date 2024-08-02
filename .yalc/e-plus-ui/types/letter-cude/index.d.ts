declare const EpLetterLoading: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: NumberConstructor;
            default: number;
        };
        letters: {
            type: import("vue").PropType<string[]>;
            default: () => string[];
            validator: (letters: string[]) => boolean;
        };
        bgColor: {
            type: StringConstructor;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: NumberConstructor;
            default: number;
        };
        letters: {
            type: import("vue").PropType<string[]>;
            default: () => string[];
            validator: (letters: string[]) => boolean;
        };
        bgColor: {
            type: StringConstructor;
            default: string;
        };
    }>>, {
        size: number;
        letters: string[];
        bgColor: string;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: NumberConstructor;
            default: number;
        };
        letters: {
            type: import("vue").PropType<string[]>;
            default: () => string[];
            validator: (letters: string[]) => boolean;
        };
        bgColor: {
            type: StringConstructor;
            default: string;
        };
    }>>, {}, {}, {}, {}, {
        size: number;
        letters: string[];
        bgColor: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: NumberConstructor;
        default: number;
    };
    letters: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
        validator: (letters: string[]) => boolean;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: number;
    letters: string[];
    bgColor: string;
}, {}, string, {}> & (import("vue").VNodeProps & (import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin));
export default EpLetterLoading;
