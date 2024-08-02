import type { IPaginationProps } from './type';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<IPaginationProps>, {
    page: number;
    limit: number;
    size: string;
    pageSizes: () => number[];
    pagerCount: number;
    layout: string;
    background: boolean;
    hidden: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:page": (...args: any[]) => void;
    pagination: (...args: any[]) => void;
    "update:limit": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<IPaginationProps>, {
    page: number;
    limit: number;
    size: string;
    pageSizes: () => number[];
    pagerCount: number;
    layout: string;
    background: boolean;
    hidden: boolean;
}>>> & {
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
}, {}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('@vue/runtime-core').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('@vue/runtime-core').PropType<T[K]>;
        required: true;
    };
};
