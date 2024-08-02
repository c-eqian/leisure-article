import { IMenuProps } from './type';
export * from './type';
declare const EpMenu: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        menuConfig: {
            type: import("vue").PropType<IMenuProps>;
            default: () => {};
        };
    }>>, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        menuConfig: {
            type: import("vue").PropType<IMenuProps>;
            default: () => {};
        };
    }>>, {
        menuConfig: IMenuProps;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        menuConfig: {
            type: import("vue").PropType<IMenuProps>;
            default: () => {};
        };
    }>>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        menuConfig: IMenuProps;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    menuConfig: {
        type: import("vue").PropType<IMenuProps>;
        default: () => {};
    };
}>>, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    menuConfig: IMenuProps;
}, {}, string, {}> & (import("vue").VNodeProps & (import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin));
export default EpMenu;
/**
 * 定义方法
 * @param menus
 */
export declare const defineMenu: (menus: IMenuProps) => IMenuProps;
