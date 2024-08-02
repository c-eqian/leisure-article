declare const EpVirtualList: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        width: {
            type: import("vue").PropType<string | number>;
            default: string;
        };
        data: {
            type: import("vue").PropType<any[]>;
            required: true;
            default: () => never[];
        };
        className: {
            type: import("vue").PropType<string>;
        };
        height: {
            type: import("vue").PropType<number>;
            default: number;
        };
        itemHeight: {
            type: import("vue").PropType<number>;
            default: number;
        };
        isDynamic: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        cache: {
            type: import("vue").PropType<number>;
            default: number;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        width: {
            type: import("vue").PropType<string | number>;
            default: string;
        };
        data: {
            type: import("vue").PropType<any[]>;
            required: true;
            default: () => never[];
        };
        className: {
            type: import("vue").PropType<string>;
        };
        height: {
            type: import("vue").PropType<number>;
            default: number;
        };
        itemHeight: {
            type: import("vue").PropType<number>;
            default: number;
        };
        isDynamic: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        cache: {
            type: import("vue").PropType<number>;
            default: number;
        };
    }>>, {
        width: number | string;
        data: any[];
        height: number;
        itemHeight: number;
        isDynamic: boolean;
        cache: number;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        width: {
            type: import("vue").PropType<string | number>;
            default: string;
        };
        data: {
            type: import("vue").PropType<any[]>;
            required: true;
            default: () => never[];
        };
        className: {
            type: import("vue").PropType<string>;
        };
        height: {
            type: import("vue").PropType<number>;
            default: number;
        };
        itemHeight: {
            type: import("vue").PropType<number>;
            default: number;
        };
        isDynamic: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        cache: {
            type: import("vue").PropType<number>;
            default: number;
        };
    }>>, {}, {}, {}, {}, {
        width: number | string;
        data: any[];
        height: number;
        itemHeight: number;
        isDynamic: boolean;
        cache: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    data: {
        type: import("vue").PropType<any[]>;
        required: true;
        default: () => never[];
    };
    className: {
        type: import("vue").PropType<string>;
    };
    height: {
        type: import("vue").PropType<number>;
        default: number;
    };
    itemHeight: {
        type: import("vue").PropType<number>;
        default: number;
    };
    isDynamic: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    cache: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    width: number | string;
    data: any[];
    height: number;
    itemHeight: number;
    isDynamic: boolean;
    cache: number;
}, {}, string, {}> & (import("vue").VNodeProps & (import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((new () => {
    $slots: {
        default?(_: {
            item: any;
        }): any;
    };
}) & import("vue").Plugin)));
export default EpVirtualList;
