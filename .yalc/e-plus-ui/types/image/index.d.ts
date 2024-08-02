export * from './type';
declare const EpImage: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        loading: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        width: {
            type: import("vue").PropType<string | number>;
            default: string;
        };
        round: {
            type: import("vue").PropType<boolean>;
        };
        height: {
            type: import("vue").PropType<string | number>;
            default: string;
        };
        url: {
            type: import("vue").PropType<string>;
            required: true;
            default: string;
        };
        scale: {
            type: import("vue").PropType<boolean>;
        };
        borderRadius: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
    }>> & {
        onError?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        error: (...args: any[]) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        loading: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        width: {
            type: import("vue").PropType<string | number>;
            default: string;
        };
        round: {
            type: import("vue").PropType<boolean>;
        };
        height: {
            type: import("vue").PropType<string | number>;
            default: string;
        };
        url: {
            type: import("vue").PropType<string>;
            required: true;
            default: string;
        };
        scale: {
            type: import("vue").PropType<boolean>;
        };
        borderRadius: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
    }>> & {
        onError?: ((...args: any[]) => any) | undefined;
    }, {
        loading: boolean;
        width: number | string;
        height: number | string;
        url: string;
        borderRadius: number | string;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        loading: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        width: {
            type: import("vue").PropType<string | number>;
            default: string;
        };
        round: {
            type: import("vue").PropType<boolean>;
        };
        height: {
            type: import("vue").PropType<string | number>;
            default: string;
        };
        url: {
            type: import("vue").PropType<string>;
            required: true;
            default: string;
        };
        scale: {
            type: import("vue").PropType<boolean>;
        };
        borderRadius: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
    }>> & {
        onError?: ((...args: any[]) => any) | undefined;
    }, {}, {}, {}, {}, {
        loading: boolean;
        width: number | string;
        height: number | string;
        url: string;
        borderRadius: number | string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    loading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    round: {
        type: import("vue").PropType<boolean>;
    };
    height: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    url: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    scale: {
        type: import("vue").PropType<boolean>;
    };
    borderRadius: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
}>> & {
    onError?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: (...args: any[]) => void;
}, string, {
    loading: boolean;
    width: number | string;
    height: number | string;
    url: string;
    borderRadius: number | string;
}, {}, string, {}> & (import("vue").VNodeProps & (import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import("vue").Plugin)));
export default EpImage;
