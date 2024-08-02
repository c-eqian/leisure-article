import { Component, ComponentInternalInstance, VNode, VNodeTypes } from 'vue';
export declare enum ShapeFlags {
    ELEMENT = 1,
    FUNCTIONAL_COMPONENT = 2,
    STATEFUL_COMPONENT = 4,
    COMPONENT = 6,
    TEXT_CHILDREN = 8,
    ARRAY_CHILDREN = 16,
    SLOTS_CHILDREN = 32,
    TELEPORT = 64,
    SUSPENSE = 128,
    COMPONENT_SHOULD_KEEP_ALIVE = 256,
    COMPONENT_KEPT_ALIVE = 512
}
export declare const isElement: (vn: VNode) => boolean;
export declare const isComponent: (vn: VNode, type?: VNodeTypes) => type is Component;
export declare const isArrayChildren: (vn: VNode, children: VNode["children"]) => children is VNode[];
/**
 * 同时支持驼峰命名和破折号命名的插槽，示例：back-icon 和 backIcon
 * @param vm 组件实例
 * @param name 插槽名
 */
export declare function convertSlotName(vm: ComponentInternalInstance, name: string): string;
export declare function camelCase(str: string): string;
export declare function kebabCase(key: string): string;
export declare const isFunction: (val: unknown) => val is Function;
export declare const isUndefined: (val: any) => val is undefined;
export declare const isNumber: (val: any) => val is number;
export declare const isString: (val: any) => val is string;
export declare const isDate: (val: Date) => boolean;
