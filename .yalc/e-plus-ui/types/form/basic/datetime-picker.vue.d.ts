import type { IFormItemConfig } from '../type';
interface IPropsItem {
    item: IFormItemConfig;
}
declare const _default_1: import("@vue/runtime-core").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<IPropsItem>, {
    item: () => IFormItemConfig<any>;
}>, {
    handleChange: (v: string | number | boolean) => void | undefined;
}, unknown, {}, {}, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").ComponentOptionsMixin, {}, string, import("@vue/runtime-core").PublicProps, Readonly<import("@vue/runtime-core").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<IPropsItem>, {
    item: () => IFormItemConfig<any>;
}>>>, {
    item: IFormItemConfig;
}, {}>;
export default _default_1;
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
