import '../index.less';
import { type FormValidateCallback } from 'element-plus';
import { type PropType } from 'vue';
import type { ITableColumnConfig, OperationType } from '../type';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<any[] /** 不知道数据的格式 */>;
        default: () => never[];
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    tooltipEffect: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightCurrentRow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 配置highlightCurrentRow时需要
     * 单选框
     */
    idKey: {
        type: StringConstructor;
        default: string;
    };
    column: {
        type: PropType<ITableColumnConfig[]>;
        default: () => never[];
    };
    /**
     * 是否使用表单验证
     */
    useFormValidation: {
        type: BooleanConstructor;
        default: boolean;
    };
    formModelExtender: {
        type: ObjectConstructor;
        default: () => {};
    };
    operationLabel: {
        type: PropType<Record<OperationType, string>>;
        default: () => {};
    };
}, {
    czFormRef: import("vue").Ref<import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly model: ObjectConstructor;
        readonly rules: {
            readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
        readonly requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
        readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
        readonly labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly inline: BooleanConstructor;
        readonly inlineMessage: BooleanConstructor;
        readonly statusIcon: BooleanConstructor;
        readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly hideRequiredAsterisk: BooleanConstructor;
        readonly scrollToError: BooleanConstructor;
        readonly scrollIntoViewOptions: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
    }>> & {
        onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
    }, {
        COMPONENT_NAME: string;
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly model: ObjectConstructor;
            readonly rules: {
                readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
            readonly requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
            readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly inline: BooleanConstructor;
            readonly inlineMessage: BooleanConstructor;
            readonly statusIcon: BooleanConstructor;
            readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly hideRequiredAsterisk: BooleanConstructor;
            readonly scrollToError: BooleanConstructor;
            readonly scrollIntoViewOptions: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
        }>> & {
            onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
        }>>;
        emit: (event: "validate", prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => void;
        fields: import("element-plus").FormItemContext[];
        formSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        formClasses: import("vue").ComputedRef<(string | {
            [x: string]: boolean | import("element-plus/es/utils").EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
        })[]>;
        getField: (prop: string) => import("element-plus").FormItemContext | undefined;
        addField: (field: import("element-plus").FormItemContext) => void;
        removeField: (field: import("element-plus").FormItemContext) => void;
        resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
        clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
        isValidatable: import("vue").ComputedRef<boolean>;
        obtainValidateFields: (props: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp>) => import("element-plus").FormItemContext[];
        validate: (callback?: FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        doValidateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp>) => Promise<boolean>;
        validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        scrollToField: (prop: import("element-plus").FormItemProp) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        validate: (prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => boolean;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly model: ObjectConstructor;
        readonly rules: {
            readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
        readonly requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
        readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
        readonly labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly inline: BooleanConstructor;
        readonly inlineMessage: BooleanConstructor;
        readonly statusIcon: BooleanConstructor;
        readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly hideRequiredAsterisk: BooleanConstructor;
        readonly scrollToError: BooleanConstructor;
        readonly scrollIntoViewOptions: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
    }>> & {
        onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
    }, {
        readonly disabled: boolean;
        readonly labelPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
        readonly requireAsteriskPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "left" | "right", unknown>;
        readonly labelWidth: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly labelSuffix: string;
        readonly showMessage: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly validateOnRuleChange: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly inline: boolean;
        readonly inlineMessage: boolean;
        readonly statusIcon: boolean;
        readonly hideRequiredAsterisk: boolean;
        readonly scrollToError: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly model: ObjectConstructor;
        readonly rules: {
            readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
        readonly requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
        readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
        readonly labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly inline: BooleanConstructor;
        readonly inlineMessage: BooleanConstructor;
        readonly statusIcon: BooleanConstructor;
        readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly hideRequiredAsterisk: BooleanConstructor;
        readonly scrollToError: BooleanConstructor;
        readonly scrollIntoViewOptions: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
    }>> & {
        onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
    }, {
        COMPONENT_NAME: string;
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly model: ObjectConstructor;
            readonly rules: {
                readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
            readonly requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
            readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly inline: BooleanConstructor;
            readonly inlineMessage: BooleanConstructor;
            readonly statusIcon: BooleanConstructor;
            readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly hideRequiredAsterisk: BooleanConstructor;
            readonly scrollToError: BooleanConstructor;
            readonly scrollIntoViewOptions: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
        }>> & {
            onValidate?: ((prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => any) | undefined;
        }>>;
        emit: (event: "validate", prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => void;
        fields: import("element-plus").FormItemContext[];
        formSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        formClasses: import("vue").ComputedRef<(string | {
            [x: string]: boolean | import("element-plus/es/utils").EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
        })[]>;
        getField: (prop: string) => import("element-plus").FormItemContext | undefined;
        addField: (field: import("element-plus").FormItemContext) => void;
        removeField: (field: import("element-plus").FormItemContext) => void;
        resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
        clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
        isValidatable: import("vue").ComputedRef<boolean>;
        obtainValidateFields: (props: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp>) => import("element-plus").FormItemContext[];
        validate: (callback?: FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        doValidateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp>) => Promise<boolean>;
        validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        scrollToField: (prop: import("element-plus").FormItemProp) => void;
    }, {}, {}, {}, {
        readonly disabled: boolean;
        readonly labelPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
        readonly requireAsteriskPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "left" | "right", unknown>;
        readonly labelWidth: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly labelSuffix: string;
        readonly showMessage: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly validateOnRuleChange: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly inline: boolean;
        readonly inlineMessage: boolean;
        readonly statusIcon: boolean;
        readonly hideRequiredAsterisk: boolean;
        readonly scrollToError: boolean;
    }> | undefined>;
    epTable: import("vue").Ref<import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
        size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        width: (NumberConstructor | StringConstructor)[];
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: import("vue").PropType<import("element-plus").SummaryMethod<any> | undefined>;
        rowClassName: import("vue").PropType<import("element-plus").ColumnCls<any> | undefined>;
        rowStyle: import("vue").PropType<import("element-plus").ColumnStyle<any> | undefined>;
        cellClassName: import("vue").PropType<import("element-plus").CellCls<any> | undefined>;
        cellStyle: import("vue").PropType<import("element-plus").CellStyle<any> | undefined>;
        headerRowClassName: import("vue").PropType<import("element-plus").ColumnCls<any> | undefined>;
        headerRowStyle: import("vue").PropType<import("element-plus").ColumnStyle<any> | undefined>;
        headerCellClassName: import("vue").PropType<import("element-plus").CellCls<any> | undefined>;
        headerCellStyle: import("vue").PropType<import("element-plus").CellStyle<any> | undefined>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (NumberConstructor | StringConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: import("vue").PropType<string[] | undefined>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: import("vue").PropType<import("element-plus").Sort | undefined>;
        tooltipEffect: StringConstructor;
        tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "effect" | "placement" | "popperClass" | "showAfter" | "hideAfter" | "popperOptions" | "enterable" | "appendTo" | "transition" | "showArrow">> | undefined>;
        spanMethod: import("vue").PropType<((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        } | undefined) | undefined>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: import("vue").PropType<{
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined>;
            default: () => {
                hasChildren: string;
                children: string;
            };
        };
        lazy: BooleanConstructor;
        load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
        style: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: import("vue").PropType<"auto" | "fixed">;
            default: string;
        };
        scrollbarAlwaysOn: BooleanConstructor;
        flexible: BooleanConstructor;
        showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "effect" | "placement" | "popperClass" | "showAfter" | "hideAfter" | "popperOptions" | "enterable" | "appendTo" | "transition" | "showArrow">> | undefined>;
    }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    }, {
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        layout: import("element-plus/es/components/table/src/table-layout").default<any>;
        store: any;
        columns: import("vue").ComputedRef<import("element-plus").TableColumnCtx<unknown>>;
        handleHeaderFooterMousewheel: (event: any, data: any) => void;
        handleMouseLeave: () => void;
        tableId: string;
        tableSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
        isHidden: import("vue").Ref<boolean>;
        isEmpty: import("vue").ComputedRef<boolean>;
        renderExpanded: import("vue").Ref<null>;
        resizeProxyVisible: import("vue" /** 不知道数据的格式 */).Ref<boolean>;
        resizeState: import("vue").Ref<{
            width: number | null;
            height: number | null;
            headerHeight: number | null;
        }>;
        isGroup: import("vue").Ref<boolean>;
        bodyWidth: import("vue").ComputedRef<string>;
        tableBodyStyles: import("vue").ComputedRef<{
            width: string;
        }>;
        emptyBlockStyle: import("vue").ComputedRef<{
            width: string;
            height: string;
        } | null>;
        debouncedUpdateLayout: import("lodash").DebouncedFunc<() => void>;
        handleFixedMousewheel: (event: any, data: any) => void;
        setCurrentRow: (row: any) => void;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected: boolean) => void;
        clearSelection: () => void;
        clearFilter: (columnKeys?: string[] | undefined) => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
        clearSort: () => void;
        doLayout: () => void;
        sort: (prop: string, order: string) => void;
        t: import("element-plus").Translator;
        setDragVisible: (visible: boolean) => void;
        context: import("element-plus").Table<any>;
        computedSumText: import("vue").ComputedRef<string>;
        computedEmptyText: import("vue").ComputedRef<string>;
        tableLayout: import("vue").ComputedRef<("auto" | "fixed") | undefined>;
        scrollbarViewStyle: {
            display: string;
            verticalAlign: string;
        };
        tableInnerStyle: import("vue").ComputedRef<{
            height: string | number;
            maxHeight?: undefined;
        } | {
            maxHeight: string | number;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollbarStyle: import("vue").ComputedRef<{
            height: string;
            maxHeight?: undefined;
        } | {
            maxHeight: string;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollBarRef: import("vue").Ref<any>;
        scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
        setScrollLeft: (left?: number | undefined) => void;
        setScrollTop: (top?: number | undefined) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "current-change" | "selection-change" | "select-all" | "expand-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
        size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        width: (NumberConstructor | StringConstructor)[];
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: import("vue").PropType<import("element-plus").SummaryMethod<any> | undefined>;
        rowClassName: import("vue").PropType<import("element-plus").ColumnCls<any> | undefined>;
        rowStyle: import("vue").PropType<import("element-plus").ColumnStyle<any> | undefined>;
        cellClassName: import("vue").PropType<import("element-plus").CellCls<any> | undefined>;
        cellStyle: import("vue").PropType<import("element-plus").CellStyle<any> | undefined>;
        headerRowClassName: import("vue").PropType<import("element-plus").ColumnCls<any> | undefined>;
        headerRowStyle: import("vue").PropType<import("element-plus").ColumnStyle<any> | undefined>;
        headerCellClassName: import("vue").PropType<import("element-plus").CellCls<any> | undefined>;
        headerCellStyle: import("vue").PropType<import("element-plus").CellStyle<any> | undefined>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (NumberConstructor | StringConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: import("vue").PropType<string[] | undefined>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: import("vue").PropType<import("element-plus").Sort | undefined>;
        tooltipEffect: StringConstructor;
        tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "effect" | "placement" | "popperClass" | "showAfter" | "hideAfter" | "popperOptions" | "enterable" | "appendTo" | "transition" | "showArrow">> | undefined>;
        spanMethod: import("vue").PropType<((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        } | undefined) | undefined>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: import("vue").PropType<{
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined>;
            default: () => {
                hasChildren: string;
                children: string;
            };
        };
        lazy: BooleanConstructor;
        load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
        style: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: import("vue").PropType<"auto" | "fixed">;
            default: string;
        };
        scrollbarAlwaysOn: BooleanConstructor;
        flexible: BooleanConstructor;
        showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "effect" | "placement" | "popperClass" | "showAfter" | "hideAfter" | "popperOptions" | "enterable" | "appendTo" | "transition" | "showArrow">> | undefined>;
    }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    }, {
        style: import("vue").CSSProperties;
        className: string;
        tableLayout: "auto" | "fixed";
        border: boolean;
        data: any[];
        fit: boolean;
        lazy: boolean;
        scrollbarAlwaysOn: boolean;
        stripe: boolean;
        treeProps: {
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined;
        showHeader: boolean;
        showSummary: boolean;
        highlightCurrentRow: boolean;
        defaultExpandAll: boolean;
        selectOnIndeterminate: boolean;
        indent: number;
        flexible: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
        size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        width: (NumberConstructor | StringConstructor)[];
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: import("vue").PropType<import("element-plus").SummaryMethod<any> | undefined>;
        rowClassName: import("vue").PropType<import("element-plus").ColumnCls<any> | undefined>;
        rowStyle: import("vue").PropType<import("element-plus").ColumnStyle<any> | undefined>;
        cellClassName: import("vue").PropType<import("element-plus").CellCls<any> | undefined>;
        cellStyle: import("vue").PropType<import("element-plus").CellStyle<any> | undefined>;
        headerRowClassName: import("vue").PropType<import("element-plus").ColumnCls<any> | undefined>;
        headerRowStyle: import("vue").PropType<import("element-plus").ColumnStyle<any> | undefined>;
        headerCellClassName: import("vue").PropType<import("element-plus").CellCls<any> | undefined>;
        headerCellStyle: import("vue").PropType<import("element-plus").CellStyle<any> | undefined>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (NumberConstructor | StringConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: import("vue").PropType<string[] | undefined>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: import("vue").PropType<import("element-plus").Sort | undefined>;
        tooltipEffect: StringConstructor;
        tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "effect" | "placement" | "popperClass" | "showAfter" | "hideAfter" | "popperOptions" | "enterable" | "appendTo" | "transition" | "showArrow">> | undefined>;
        spanMethod: import("vue").PropType<((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        } | undefined) | undefined>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: import("vue").PropType<{
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined>;
            default: () => {
                hasChildren: string;
                children: string;
            };
        };
        lazy: BooleanConstructor;
        load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
        style: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: import("vue").PropType<"auto" | "fixed">;
            default: string;
        };
        scrollbarAlwaysOn: BooleanConstructor;
        flexible: BooleanConstructor;
        showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "effect" | "placement" | "popperClass" | "showAfter" | "hideAfter" | "popperOptions" | "enterable" | "appendTo" | "transition" | "showArrow">> | undefined>;
    }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    }, {
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        layout: import("element-plus/es/components/table/src/table-layout").default<any>;
        store: any;
        columns: import("vue").ComputedRef<import("element-plus").TableColumnCtx<unknown>>;
        handleHeaderFooterMousewheel: (event: any, data: any) => void;
        handleMouseLeave: () => void;
        tableId: string;
        tableSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
        isHidden: import("vue").Ref<boolean>;
        isEmpty: import("vue").ComputedRef<boolean>;
        renderExpanded: import("vue").Ref<null>;
        resizeProxyVisible: import("vue").Ref<boolean>;
        resizeState: import("vue").Ref<{
            width: number | null;
            height: number | null;
            headerHeight: number | null;
        }>;
        isGroup: import("vue").Ref<boolean>;
        bodyWidth: import("vue").ComputedRef<string>;
        tableBodyStyles: import("vue").ComputedRef<{
            width: string;
        }>;
        emptyBlockStyle: import("vue").ComputedRef<{
            width: string;
            height: string;
        } | null>;
        debouncedUpdateLayout: import("lodash").DebouncedFunc<() => void>;
        handleFixedMousewheel: (event: any, data: any) => void;
        setCurrentRow: (row: any) => void;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected: boolean) => void;
        clearSelection: () => void;
        clearFilter: (columnKeys?: string[] | undefined) => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
        clearSort: () => void;
        doLayout: () => void;
        sort: (prop: string, order: string) => void;
        t: import("element-plus").Translator;
        setDragVisible: (visible: boolean) => void;
        context: import("element-plus").Table<any>;
        computedSumText: import("vue").ComputedRef<string>;
        computedEmptyText: import("vue").ComputedRef<string>;
        tableLayout: import("vue").ComputedRef<("auto" | "fixed") | undefined>;
        scrollbarViewStyle: {
            display: string;
            verticalAlign: string;
        };
        tableInnerStyle: import("vue").ComputedRef<{
            height: string | number;
            maxHeight?: undefined;
        } | {
            maxHeight: string | number;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollbarStyle: import("vue").ComputedRef<{
            height: string;
            maxHeight?: undefined;
        } | {
            maxHeight: string;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollBarRef: import("vue").Ref<any>;
        scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
        setScrollLeft: (left?: number | undefined) => void;
        setScrollTop: (top?: number | undefined) => void;
    }, {}, {}, {}, {
        style: import("vue").CSSProperties;
        className: string;
        tableLayout: "auto" | "fixed";
        border: boolean;
        data: any[];
        fit: boolean;
        lazy: boolean;
        scrollbarAlwaysOn: boolean;
        stripe: boolean;
        treeProps: {
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined;
        showHeader: boolean;
        showSummary: boolean;
        highlightCurrentRow: boolean;
        defaultExpandAll: boolean;
        selectOnIndeterminate: boolean;
        indent: number;
        flexible: boolean;
    }> | undefined>;
    dataComputed: import("vue").ComputedRef<any[]>;
    columnsComputed: import("vue").ComputedRef<ITableColumnConfig<any>[]>;
    formModels: import("vue").ComputedRef<{
        data: any[];
    } | undefined>;
    currentId: import("vue").Ref<string | number>;
    currentRow: import("vue").Ref<any>;
    resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
    clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
    validate: (isScrollToField?: boolean, callback?: FormValidateCallback) => Promise<boolean | undefined>;
    validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
    handleSelectionChange: (list: any[]) => void;
    handleRowDbClick: (row: any) => void;
    handleCurrentChange: (row: any) => void;
    setCurrentRow(row: any): void;
    toggleRowSelection(row: any, selected: boolean): void;
    clearSelection(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click-btn" | "click-row-view" | "current-change" | "selection-change" | "click-row" | "click-row-delete" | "click-row-add" | "click-row-edit" | "dbClick-row")[], "click-btn" | "click-row-view" | "current-change" | "selection-change" | "click-row" | "click-row-delete" | "click-row-add" | "click-row-edit" | "dbClick-row", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<any[] /** 不知道数据的格式 */>;
        default: () => never[];
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    tooltipEffect: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightCurrentRow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 配置highlightCurrentRow时需要
     * 单选框
     */
    idKey: {
        type: StringConstructor;
        default: string;
    };
    column: {
        type: PropType<ITableColumnConfig[]>;
        default: () => never[];
    };
    /**
     * 是否使用表单验证
     */
    useFormValidation: {
        type: BooleanConstructor;
        default: boolean;
    };
    formModelExtender: {
        type: ObjectConstructor;
        default: () => {};
    };
    operationLabel: {
        type: PropType<Record<OperationType, string>>;
        default: () => {};
    };
}>> & {
    "onClick-btn"?: ((...args: any[]) => any) | undefined;
    "onClick-row-view"?: ((...args: any[]) => any) | undefined;
    "onCurrent-change"?: ((...args: any[]) => any) | undefined;
    "onSelection-change"?: ((...args: any[]) => any) | undefined;
    "onClick-row"?: ((...args: any[]) => any) | undefined;
    "onClick-row-delete"?: ((...args: any[]) => any) | undefined;
    "onClick-row-add"?: ((...args: any[]) => any) | undefined;
    "onClick-row-edit"?: ((...args: any[]) => any) | undefined;
    "onDbClick-row"?: ((...args: any[]) => any) | undefined;
}, {
    border: boolean;
    data: any[];
    column: ITableColumnConfig<any>[];
    useFormValidation: boolean;
    height: string | number;
    tooltipEffect: string;
    highlightCurrentRow: boolean;
    idKey: string;
    formModelExtender: Record<string, any>;
    operationLabel: Record<OperationType, string>;
}, {}>;
export default _default;
