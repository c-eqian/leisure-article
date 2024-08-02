export * from './type';
declare const EpNoticeBar: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        prefixIcon: {
            type: import("vue").PropType<string>;
        };
        suffixIcon: {
            type: import("vue").PropType<string>;
        };
        vertical: {
            type: import("vue").PropType<boolean>;
        };
        color: {
            type: import("vue").PropType<string>;
        };
        height: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        list: {
            type: import("vue").PropType<string[]>;
            required: true;
            default: () => never[];
        };
        background: {
            type: import("vue").PropType<string>;
        };
        fontSize: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        delay: {
            type: import("vue").PropType<number>;
            default: number;
        };
        speed: {
            type: import("vue").PropType<number>;
            default: number;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        prefixIcon: {
            type: import("vue").PropType<string>;
        };
        suffixIcon: {
            type: import("vue").PropType<string>;
        };
        vertical: {
            type: import("vue").PropType<boolean>;
        };
        color: {
            type: import("vue").PropType<string>;
        };
        height: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        list: {
            type: import("vue").PropType<string[]>;
            required: true;
            default: () => never[];
        };
        background: {
            type: import("vue").PropType<string>;
        };
        fontSize: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        delay: {
            type: import("vue").PropType<number>;
            default: number;
        };
        speed: {
            type: import("vue").PropType<number>;
            default: number;
        };
    }>>, {
        height: number | string;
        list: string[];
        fontSize: number | string;
        delay: number;
        speed: number;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        prefixIcon: {
            type: import("vue").PropType<string>;
        };
        suffixIcon: {
            type: import("vue").PropType<string>;
        };
        vertical: {
            type: import("vue").PropType<boolean>;
        };
        color: {
            type: import("vue").PropType<string>;
        };
        height: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        list: {
            type: import("vue").PropType<string[]>;
            required: true;
            default: () => never[];
        };
        background: {
            type: import("vue").PropType<string>;
        };
        fontSize: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        delay: {
            type: import("vue").PropType<number>;
            default: number;
        };
        speed: {
            type: import("vue").PropType<number>;
            default: number;
        };
    }>>, {}, {}, {}, {}, {
        height: number | string;
        list: string[];
        fontSize: number | string;
        delay: number;
        speed: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixIcon: {
        type: import("vue").PropType<string>;
    };
    suffixIcon: {
        type: import("vue").PropType<string>;
    };
    vertical: {
        type: import("vue").PropType<boolean>;
    };
    color: {
        type: import("vue").PropType<string>;
    };
    height: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    list: {
        type: import("vue").PropType<string[]>;
        required: true;
        default: () => never[];
    };
    background: {
        type: import("vue").PropType<string>;
    };
    fontSize: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    delay: {
        type: import("vue").PropType<number>;
        default: number;
    };
    speed: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    height: number | string;
    list: string[];
    fontSize: number | string;
    delay: number;
    speed: number;
}, {}, string, {}> & (import("vue").VNodeProps & (import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((new () => {
    $slots: {
        prefixIcon?(_: {}): any;
        suffixIcon?(_: {}): any;
    };
}) & import("vue").Plugin)));
export default EpNoticeBar;
