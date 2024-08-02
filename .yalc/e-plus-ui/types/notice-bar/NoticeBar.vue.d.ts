import { NoticeBarProps } from './type';
declare function __VLS_template(): {
    prefixIcon?(_: {}): any;
    suffixIcon?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<NoticeBarProps>, {
    fontSize: number;
    height: number;
    delay: number;
    speed: number;
    list: () => never[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<NoticeBarProps>, {
    fontSize: number;
    height: number;
    delay: number;
    speed: number;
    list: () => never[];
}>>>, {
    height: number | string;
    list: string[];
    fontSize: number | string;
    delay: number;
    speed: number;
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
