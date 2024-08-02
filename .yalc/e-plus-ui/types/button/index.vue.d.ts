import './index.less';
import { ButtonBorder, ButtonNativeType, ButtonSize, ButtonType } from './interface';
export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    prefixIcon?: string;
    suffixIcon?: string;
    loadingIcon?: string;
    borderStyle?: string;
    border?: ButtonBorder;
    fluid?: boolean;
    radius?: boolean;
    loading?: boolean;
    disabled?: boolean;
    nativeType?: ButtonNativeType;
}
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<ButtonProps>, {
    borderStyle: string;
    radius: boolean;
    loadingIcon: string;
    nativeType: string;
    fluid: boolean;
    loading: boolean;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ButtonProps>, {
    borderStyle: string;
    radius: boolean;
    loadingIcon: string;
    nativeType: string;
    fluid: boolean;
    loading: boolean;
}>>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    loadingIcon: string;
    borderStyle: string;
    fluid: boolean;
    radius: boolean;
    loading: boolean;
    nativeType: ButtonNativeType;
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
