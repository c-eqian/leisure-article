declare const EpButton: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: import("vue").PropType<import("./interface").ButtonSize>;
        };
        type: {
            type: import("vue").PropType<import("./interface").ButtonType>;
        };
        prefixIcon: {
            type: import("vue").PropType<string>;
        };
        suffixIcon: {
            type: import("vue").PropType<string>;
        };
        loadingIcon: {
            type: import("vue").PropType<string>;
            default: string;
        };
        borderStyle: {
            type: import("vue").PropType<string>;
            default: string;
        };
        border: {
            type: import("vue").PropType<import("./interface").ButtonBorder>;
        };
        fluid: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        radius: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: import("vue").PropType<boolean>;
        };
        nativeType: {
            type: import("vue").PropType<import("./interface").ButtonNativeType>;
            default: string;
        };
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (evt: MouseEvent) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: import("vue").PropType<import("./interface").ButtonSize>;
        };
        type: {
            type: import("vue").PropType<import("./interface").ButtonType>;
        };
        prefixIcon: {
            type: import("vue").PropType<string>;
        };
        suffixIcon: {
            type: import("vue").PropType<string>;
        };
        loadingIcon: {
            type: import("vue").PropType<string>;
            default: string;
        };
        borderStyle: {
            type: import("vue").PropType<string>;
            default: string;
        };
        border: {
            type: import("vue").PropType<import("./interface").ButtonBorder>;
        };
        fluid: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        radius: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: import("vue").PropType<boolean>;
        };
        nativeType: {
            type: import("vue").PropType<import("./interface").ButtonNativeType>;
            default: string;
        };
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }, {
        loadingIcon: string;
        borderStyle: string;
        fluid: boolean;
        radius: boolean;
        loading: boolean;
        nativeType: import("./interface").ButtonNativeType;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: import("vue").PropType<import("./interface").ButtonSize>;
        };
        type: {
            type: import("vue").PropType<import("./interface").ButtonType>;
        };
        prefixIcon: {
            type: import("vue").PropType<string>;
        };
        suffixIcon: {
            type: import("vue").PropType<string>;
        };
        loadingIcon: {
            type: import("vue").PropType<string>;
            default: string;
        };
        borderStyle: {
            type: import("vue").PropType<string>;
            default: string;
        };
        border: {
            type: import("vue").PropType<import("./interface").ButtonBorder>;
        };
        fluid: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        radius: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: import("vue").PropType<boolean>;
        };
        nativeType: {
            type: import("vue").PropType<import("./interface").ButtonNativeType>;
            default: string;
        };
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }, {}, {}, {}, {}, {
        loadingIcon: string;
        borderStyle: string;
        fluid: boolean;
        radius: boolean;
        loading: boolean;
        nativeType: import("./interface").ButtonNativeType;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<import("./interface").ButtonSize>;
    };
    type: {
        type: import("vue").PropType<import("./interface").ButtonType>;
    };
    prefixIcon: {
        type: import("vue").PropType<string>;
    };
    suffixIcon: {
        type: import("vue").PropType<string>;
    };
    loadingIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    borderStyle: {
        type: import("vue").PropType<string>;
        default: string;
    };
    border: {
        type: import("vue").PropType<import("./interface").ButtonBorder>;
    };
    fluid: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    radius: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    nativeType: {
        type: import("vue").PropType<import("./interface").ButtonNativeType>;
        default: string;
    };
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
}, string, {
    loadingIcon: string;
    borderStyle: string;
    fluid: boolean;
    radius: boolean;
    loading: boolean;
    nativeType: import("./interface").ButtonNativeType;
}, {}, string, {}> & (import("vue").VNodeProps & (import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import("vue").Plugin)));
export default EpButton;
