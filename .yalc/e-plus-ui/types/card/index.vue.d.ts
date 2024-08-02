import type { CardProps } from './type';
declare function __VLS_template(): {
    title?(_: {}): any;
    extra?(_: {}): any;
    body?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<CardProps>, {
    shadow: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<CardProps>, {
    shadow: string;
}>>>, {
    shadow: import("./type").Shadow;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('@vue/runtime-core').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('@vue/runtime-core').PropType<T[K]>;
        required: true;
    };
};
