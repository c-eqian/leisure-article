import type { FormItemsSchema, FormItemRules } from '../type';
import { ComputedRef, type Ref } from 'vue';
/**
 * 参数过滤，获取组件参数
 * @param props
 */
export declare const useFilterProps: (props: FormItemsSchema) => Omit<FormItemsSchema<any>, keyof FormItemsSchema<any>>;
/**
 * 获取表单参数
 * @param props
 * @param columns
 */
export declare const useColProps: (props: FormItemsSchema, columns: ComputedRef<number>) => {};
/**
 * 获取表单参数
 * @param props
 * @param model
 * @param isSearch
 */
export declare const useFormItemProps: (props: FormItemsSchema, model: any, isSearch?: boolean) => {
    prop: string;
    label: string;
    rules?: undefined;
} | {
    prop: string;
    label: string;
    rules: (FormItemRules<any> | {
        validator: ((rule: import("async-validator").InternalRuleItem, value: import("async-validator").Value, callback: (error?: string | Error) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => import("async-validator").SyncValidateResult | void) | undefined;
        type?: import("async-validator").RuleType | undefined;
        required?: boolean | undefined;
        message?: (string | ((a?: string) => string)) | undefined;
        trigger?: import("element-plus/es/utils").Arrayable<string> | undefined;
        fields?: Record<string, import("async-validator").Rule> | undefined;
        pattern?: (RegExp | string) | undefined;
        transform?: ((value: import("async-validator").Value) => import("async-validator").Value) | undefined;
        validatorFn?: ((model: any) => import("element-plus").FormItemRule["validator"]) | undefined;
        options?: import("async-validator").ValidateOption | undefined;
        max?: number | undefined;
        min?: number | undefined;
        len?: number | undefined;
        enum?: Array<string | number | boolean | null | undefined> | undefined;
        whitespace?: boolean | undefined;
        defaultField?: import("async-validator").Rule | undefined;
        asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: import("async-validator").Value, callback: (error?: string | Error) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
        field: string;
    })[];
} | {
    prop: string;
    label: string;
    rules: FormItemRules<any> | {
        validator: ((rule: import("async-validator").InternalRuleItem, value: import("async-validator").Value, callback: (error?: string | Error) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => import("async-validator").SyncValidateResult | void) | undefined;
        type?: import("async-validator").RuleType | undefined;
        required?: boolean | undefined;
        message?: (string | ((a?: string) => string)) | undefined;
        trigger?: import("element-plus/es/utils").Arrayable<string> | undefined;
        fields?: Record<string, import("async-validator").Rule> | undefined;
        pattern?: (RegExp | string) | undefined;
        transform?: ((value: import("async-validator").Value) => import("async-validator").Value) | undefined;
        validatorFn?: ((model: any) => import("element-plus").FormItemRule["validator"]) | undefined;
        options?: import("async-validator").ValidateOption | undefined;
        max?: number | undefined;
        min?: number | undefined;
        len?: number | undefined;
        enum?: Array<string | number | boolean | null | undefined> | undefined;
        whitespace?: boolean | undefined;
        defaultField?: import("async-validator").Rule | undefined;
        asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: import("async-validator").Value, callback: (error?: string | Error) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
        field: string;
    };
} | {
    rules: undefined;
    prop: string;
    label: string;
};
/**
 * 获取组件参数
 * @param props
 * @param getModel
 */
export declare const useFormProps: (props: ComputedRef<FormItemsSchema>, getModel: () => Ref<any>) => Record<string, any>;
export declare const useFormItem: (getFormSchema: () => Ref<FormItemsSchema[]>, updateFormSchema: (_items: FormItemsSchema[]) => void) => {
    appendFields: (items: FormItemsSchema | FormItemsSchema[], to?: string | boolean) => void;
    deleteField: (prop: string) => void;
};
