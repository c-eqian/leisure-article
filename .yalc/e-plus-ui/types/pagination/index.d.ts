declare const EpPagination: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: import("vue").PropType<"default" | "small" | "large">;
            default: string;
        };
        layout: {
            type: import("vue").PropType<string>;
            default: string;
        };
        total: {
            type: import("vue").PropType<number>;
            required: true;
        };
        page: {
            type: import("vue").PropType<number>;
            default: number;
        };
        limit: {
            type: import("vue").PropType<number>;
            default: number;
        };
        pageSizes: {
            type: import("vue").PropType<number[]>;
            default: () => number[];
        };
        pagerCount: {
            type: import("vue").PropType<number>;
            default: number;
        };
        background: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        hidden: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }>> & {
        "onUpdate:page"?: ((...args: any[]) => any) | undefined;
        onPagination?: ((...args: any[]) => any) | undefined;
        "onUpdate:limit"?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:page": (...args: any[]) => void;
        pagination: (...args: any[]) => void;
        "update:limit": (...args: any[]) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: import("vue").PropType<"default" | "small" | "large">;
            default: string;
        };
        layout: {
            type: import("vue").PropType<string>;
            default: string;
        };
        total: {
            type: import("vue").PropType<number>;
            required: true;
        };
        page: {
            type: import("vue").PropType<number>;
            default: number;
        };
        limit: {
            type: import("vue").PropType<number>;
            default: number;
        };
        pageSizes: {
            type: import("vue").PropType<number[]>;
            default: () => number[];
        };
        pagerCount: {
            type: import("vue").PropType<number>;
            default: number;
        };
        background: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        hidden: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }>> & {
        "onUpdate:page"?: ((...args: any[]) => any) | undefined;
        onPagination?: ((...args: any[]) => any) | undefined;
        "onUpdate:limit"?: ((...args: any[]) => any) | undefined;
    }, {
        size: "large" | "default" | "small";
        layout: string;
        page: number;
        limit: number;
        pageSizes: number[];
        pagerCount: number;
        background: boolean;
        hidden: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: import("vue").PropType<"default" | "small" | "large">;
            default: string;
        };
        layout: {
            type: import("vue").PropType<string>;
            default: string;
        };
        total: {
            type: import("vue").PropType<number>;
            required: true;
        };
        page: {
            type: import("vue").PropType<number>;
            default: number;
        };
        limit: {
            type: import("vue").PropType<number>;
            default: number;
        };
        pageSizes: {
            type: import("vue").PropType<number[]>;
            default: () => number[];
        };
        pagerCount: {
            type: import("vue").PropType<number>;
            default: number;
        };
        background: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        hidden: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }>> & {
        "onUpdate:page"?: ((...args: any[]) => any) | undefined;
        onPagination?: ((...args: any[]) => any) | undefined;
        "onUpdate:limit"?: ((...args: any[]) => any) | undefined;
    }, {}, {}, {}, {}, {
        size: "large" | "default" | "small";
        layout: string;
        page: number;
        limit: number;
        pageSizes: number[];
        pagerCount: number;
        background: boolean;
        hidden: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<"default" | "small" | "large">;
        default: string;
    };
    layout: {
        type: import("vue").PropType<string>;
        default: string;
    };
    total: {
        type: import("vue").PropType<number>;
        required: true;
    };
    page: {
        type: import("vue").PropType<number>;
        default: number;
    };
    limit: {
        type: import("vue").PropType<number>;
        default: number;
    };
    pageSizes: {
        type: import("vue").PropType<number[]>;
        default: () => number[];
    };
    pagerCount: {
        type: import("vue").PropType<number>;
        default: number;
    };
    background: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hidden: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:page"?: ((...args: any[]) => any) | undefined;
    onPagination?: ((...args: any[]) => any) | undefined;
    "onUpdate:limit"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:page": (...args: any[]) => void;
    pagination: (...args: any[]) => void;
    "update:limit": (...args: any[]) => void;
}, string, {
    size: "large" | "default" | "small";
    layout: string;
    page: number;
    limit: number;
    pageSizes: number[];
    pagerCount: number;
    background: boolean;
    hidden: boolean;
}, {}, string, {}> & (import("vue").VNodeProps & (import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin));
export * from './type';
export default EpPagination;
