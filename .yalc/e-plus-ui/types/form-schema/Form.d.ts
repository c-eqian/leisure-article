import { Ref } from 'vue';
import type { FormItemsSchema } from './type';
declare const _default: import("vue").DefineComponent<{
    model: {
        type: import("vue").PropType<import("./type").FormContext["model"]>;
        default: () => {};
    };
    config: {
        type: import("vue").PropType<import("./type").FormSchema>;
        default: () => void;
    };
}, {
    formModel: Ref<Record<string, any>>;
    formProps: import("vue").ComputedRef<import("./type").FormSchema<any>>;
    items: Ref<{
        prop: string;
        label: string;
        labelWidth?: string | undefined;
        defaultValue?: any;
        placeholder?: string | undefined;
        rules?: boolean | {
            validatorFn?: ((model: any) => import("element-plus").FormItemRule["validator"]) | undefined;
            trigger?: import("element-plus/es/utils").Arrayable<string> | undefined;
            type?: import("async-validator").RuleType | undefined;
            required?: boolean | undefined;
            pattern?: (RegExp | string) | undefined;
            min?: number | undefined;
            max?: number | undefined;
            len?: number | undefined;
            enum?: Array<string | number | boolean | null | undefined> | undefined;
            whitespace?: boolean | undefined;
            fields?: Record<string, import("async-validator").Rule> | undefined;
            options?: {
                suppressWarning?: boolean | undefined;
                suppressValidatorError?: boolean | undefined;
                first?: boolean | undefined;
                firstFields?: (boolean | string[]) | undefined;
                messages?: {
                    default?: (string | ((...args: unknown[]) => string)) | undefined;
                    required?: (string | ((args_0: string | undefined) => string)) | undefined;
                    enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                    whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                    date?: {
                        format?: (string | ((...args: unknown[]) => string)) | undefined;
                        parse?: (string | ((...args: unknown[]) => string)) | undefined;
                        invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                    } | undefined;
                    types?: {
                        string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                    } | undefined;
                    string?: {
                        len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                    } | undefined;
                    number?: {
                        len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                    } | undefined;
                    array?: {
                        len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                    } | undefined;
                    pattern?: {
                        mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                    } | undefined;
                } | undefined;
                keys?: string[] | undefined;
                error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
            } | undefined;
            defaultField?: {
                type?: import("async-validator").RuleType | undefined;
                required?: boolean | undefined;
                pattern?: (RegExp | string) | undefined;
                min?: number | undefined;
                max?: number | undefined;
                len?: number | undefined;
                enum?: Array<string | number | boolean | null | undefined> | undefined;
                whitespace?: boolean | undefined;
                fields?: Record<string, import("async-validator").Rule> | undefined;
                options?: {
                    suppressWarning?: boolean | undefined;
                    suppressValidatorError?: boolean | undefined;
                    first?: boolean | undefined;
                    firstFields?: (boolean | string[]) | undefined;
                    messages?: {
                        default?: (string | ((...args: unknown[]) => string)) | undefined;
                        required?: (string | ((args_0: string | undefined) => string)) | undefined;
                        enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                        date?: {
                            format?: (string | ((...args: unknown[]) => string)) | undefined;
                            parse?: (string | ((...args: unknown[]) => string)) | undefined;
                            invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                        } | undefined;
                        types?: {
                            string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        } | undefined;
                        string?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        number?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        array?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        pattern?: {
                            mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                        } | undefined;
                    } | undefined;
                    keys?: string[] | undefined;
                    error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                } | undefined;
                defaultField?: any | any[] | undefined;
                transform?: ((value: import("async-validator").Value) => import("async-validator").Value) | undefined;
                message?: (string | ((a?: string) => string)) | undefined;
                asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: import("async-validator").Value, callback: (error?: string | Error) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                validator?: ((rule: import("async-validator").InternalRuleItem, value: import("async-validator").Value, callback: (error?: string | Error) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => import("async-validator").SyncValidateResult | void) | undefined;
            } | {
                type?: import("async-validator").RuleType | undefined;
                required?: boolean | undefined;
                pattern?: (RegExp | string) | undefined;
                min?: number | undefined;
                max?: number | undefined;
                len?: number | undefined;
                enum?: Array<string | number | boolean | null | undefined> | undefined;
                whitespace?: boolean | undefined;
                fields?: Record<string, import("async-validator").Rule> | undefined;
                options?: {
                    suppressWarning?: boolean | undefined;
                    suppressValidatorError?: boolean | undefined;
                    first?: boolean | undefined;
                    firstFields?: (boolean | string[]) | undefined;
                    messages?: {
                        default?: (string | ((...args: unknown[]) => string)) | undefined;
                        required?: (string | ((args_0: string | undefined) => string)) | undefined;
                        enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                        date?: {
                            format?: (string | ((...args: unknown[]) => string)) | undefined;
                            parse?: (string | ((...args: unknown[]) => string)) | undefined;
                            invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                        } | undefined;
                        types?: {
                            string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        } | undefined;
                        string?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        number?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        array?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        pattern?: {
                            mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                        } | undefined;
                    } | undefined;
                    keys?: string[] | undefined;
                    error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                } | undefined;
                defaultField?: any | any[] | undefined;
                transform?: ((value: import("async-validator").Value) => import("async-validator").Value) | undefined;
                message?: (string | ((a?: string) => string)) | undefined;
                asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: import("async-validator").Value, callback: (error?: string | Error) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                validator?: ((rule: import("async-validator").InternalRuleItem, value: import("async-validator").Value, callback: (error?: string | Error) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => import("async-validator").SyncValidateResult | void) | undefined;
            }[] | undefined;
            transform?: ((value: import("async-validator").Value) => import("async-validator").Value) | undefined;
            message?: (string | ((a?: string) => string)) | undefined;
            asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: import("async-validator").Value, callback: (error?: string | Error) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
            validator?: ((rule: import("async-validator").InternalRuleItem, value: import("async-validator").Value, callback: (error?: string | Error) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => import("async-validator").SyncValidateResult | void) | undefined;
        } | {
            validatorFn?: ((model: any) => import("element-plus").FormItemRule["validator"]) | undefined;
            trigger?: import("element-plus/es/utils").Arrayable<string> | undefined;
            type?: import("async-validator").RuleType | undefined;
            required?: boolean | undefined;
            pattern?: (RegExp | string) | undefined;
            min?: number | undefined;
            max?: number | undefined;
            len?: number | undefined;
            enum?: Array<string | number | boolean | null | undefined> | undefined;
            whitespace?: boolean | undefined;
            fields?: Record<string, import("async-validator").Rule> | undefined;
            options?: {
                suppressWarning?: boolean | undefined;
                suppressValidatorError?: boolean | undefined;
                first?: boolean | undefined;
                firstFields?: (boolean | string[]) | undefined;
                messages?: {
                    default?: (string | ((...args: unknown[]) => string)) | undefined;
                    required?: (string | ((args_0: string | undefined) => string)) | undefined;
                    enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                    whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                    date?: {
                        format?: (string | ((...args: unknown[]) => string)) | undefined;
                        parse?: (string | ((...args: unknown[]) => string)) | undefined;
                        invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                    } | undefined;
                    types?: {
                        string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                    } | undefined;
                    string?: {
                        len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                    } | undefined;
                    number?: {
                        len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                    } | undefined;
                    array?: {
                        len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                        range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                    } | undefined;
                    pattern?: {
                        mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                    } | undefined;
                } | undefined;
                keys?: string[] | undefined;
                error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
            } | undefined;
            defaultField?: {
                type?: import("async-validator").RuleType | undefined;
                required?: boolean | undefined;
                pattern?: (RegExp | string) | undefined;
                min?: number | undefined;
                max?: number | undefined;
                len?: number | undefined;
                enum?: Array<string | number | boolean | null | undefined> | undefined;
                whitespace?: boolean | undefined;
                fields?: Record<string, import("async-validator").Rule> | undefined;
                options?: {
                    suppressWarning?: boolean | undefined;
                    suppressValidatorError?: boolean | undefined;
                    first?: boolean | undefined;
                    firstFields?: (boolean | string[]) | undefined;
                    messages?: {
                        default?: (string | ((...args: unknown[]) => string)) | undefined;
                        required?: (string | ((args_0: string | undefined) => string)) | undefined;
                        enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                        date?: {
                            format?: (string | ((...args: unknown[]) => string)) | undefined;
                            parse?: (string | ((...args: unknown[]) => string)) | undefined;
                            invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                        } | undefined;
                        types?: {
                            string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        } | undefined;
                        string?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        number?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        array?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        pattern?: {
                            mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                        } | undefined;
                    } | undefined;
                    keys?: string[] | undefined;
                    error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                } | undefined;
                defaultField?: any | any[] | undefined;
                transform?: ((value: import("async-validator").Value) => import("async-validator").Value) | undefined;
                message?: (string | ((a?: string) => string)) | undefined;
                asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: import("async-validator").Value, callback: (error?: string | Error) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                validator?: ((rule: import("async-validator").InternalRuleItem, value: import("async-validator").Value, callback: (error?: string | Error) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => import("async-validator").SyncValidateResult | void) | undefined;
            } | {
                type?: import("async-validator").RuleType | undefined;
                required?: boolean | undefined;
                pattern?: (RegExp | string) | undefined;
                min?: number | undefined;
                max?: number | undefined;
                len?: number | undefined;
                enum?: Array<string | number | boolean | null | undefined> | undefined;
                whitespace?: boolean | undefined;
                fields?: Record<string, import("async-validator").Rule> | undefined;
                options?: {
                    suppressWarning?: boolean | undefined;
                    suppressValidatorError?: boolean | undefined;
                    first?: boolean | undefined;
                    firstFields?: (boolean | string[]) | undefined;
                    messages?: {
                        default?: (string | ((...args: unknown[]) => string)) | undefined;
                        required?: (string | ((args_0: string | undefined) => string)) | undefined;
                        enum?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        whitespace?: (string | ((args_0: string | undefined) => string)) | undefined;
                        date?: {
                            format?: (string | ((...args: unknown[]) => string)) | undefined;
                            parse?: (string | ((...args: unknown[]) => string)) | undefined;
                            invalid?: (string | ((...args: unknown[]) => string)) | undefined;
                        } | undefined;
                        types?: {
                            string?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            method?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            array?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            object?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            number?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            date?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            boolean?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            integer?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            float?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            regexp?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            email?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            url?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                            hex?: (string | ((args_0: string | undefined, args_1: string | undefined) => string)) | undefined;
                        } | undefined;
                        string?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        number?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        array?: {
                            len?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            min?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            max?: (string | ((args_0: string | undefined, args_1: number | undefined) => string)) | undefined;
                            range?: (string | ((args_0: string | undefined, args_1: number | undefined, args_2: number | undefined) => string)) | undefined;
                        } | undefined;
                        pattern?: {
                            mismatch?: (string | ((args_0: string | undefined, args_1: any, args_2: string | RegExp | undefined) => string)) | undefined;
                        } | undefined;
                    } | undefined;
                    keys?: string[] | undefined;
                    error?: ((rule: import("async-validator").InternalRuleItem, message: string) => import("async-validator").ValidateError) | undefined;
                } | undefined;
                defaultField?: any | any[] | undefined;
                transform?: ((value: import("async-validator").Value) => import("async-validator").Value) | undefined;
                message?: (string | ((a?: string) => string)) | undefined;
                asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: import("async-validator").Value, callback: (error?: string | Error) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
                validator?: ((rule: import("async-validator").InternalRuleItem, value: import("async-validator").Value, callback: (error?: string | Error) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => import("async-validator").SyncValidateResult | void) | undefined;
            }[] | undefined;
            transform?: ((value: import("async-validator").Value) => import("async-validator").Value) | undefined;
            message?: (string | ((a?: string) => string)) | undefined;
            asyncValidator?: ((rule: import("async-validator").InternalRuleItem, value: import("async-validator").Value, callback: (error?: string | Error) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => void | Promise<void>) | undefined;
            validator?: ((rule: import("async-validator").InternalRuleItem, value: import("async-validator").Value, callback: (error?: string | Error) => void, source: import("async-validator").Values, options: import("async-validator").ValidateOption) => import("async-validator").SyncValidateResult | void) | undefined;
        }[] | undefined;
        slotKey?: string | undefined;
        type?: import("./type").FormSchemaType | undefined;
        render?: import("./types").Render<any, FormItemsSchema<any>> | undefined;
        col?: number | {
            readonly lg?: number | {
                span?: number | undefined;
                offset?: number | undefined;
                pull?: number | undefined;
                push?: number | undefined;
            } | undefined;
            readonly md?: number | {
                span?: number | undefined;
                offset?: number | undefined;
                pull?: number | undefined;
                push?: number | undefined;
            } | undefined;
            readonly sm?: number | {
                span?: number | undefined;
                offset?: number | undefined;
                pull?: number | undefined;
                push?: number | undefined;
            } | undefined;
            readonly xs?: number | {
                span?: number | undefined;
                offset?: number | undefined;
                pull?: number | undefined;
                push?: number | undefined;
            } | undefined;
            readonly span?: number | undefined;
            readonly xl?: number | {
                span?: number | undefined;
                offset?: number | undefined;
                pull?: number | undefined;
                push?: number | undefined;
            } | undefined;
        } | undefined;
        collapse?: boolean | undefined;
        enter?: ((value: any) => void) | undefined;
        change?: ((value: any) => void) | undefined;
        componentProps?: {
            [x: string]: any;
            slots?: {
                [name: string]: import("vue").Slot | undefined;
            } | undefined;
            dynamicDisable?: ((scoped: import("./types").Scoped<any, FormItemsSchema<any>>) => boolean) | undefined;
            dynamicShow?: ((scoped: import("./types").Scoped<any, FormItemsSchema<any>>) => boolean) | undefined;
        } | undefined;
    }[]>;
    emit: (event: "search" | "registry", ...args: any[]) => void;
    epFormSchemaRef: Ref<import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
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
        validate: (callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        doValidateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp>) => Promise<boolean>;
        validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
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
        validate: (callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        doValidateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp>) => Promise<boolean>;
        validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
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
    appendFields: (items: FormItemsSchema | FormItemsSchema[], to?: string | boolean) => void;
    setFieldsValues: (values: Record<string, any>) => void;
    getFieldsValues: <T extends Record<string, any>>(serialize?: boolean) => T;
    resetFieldsValues: () => void;
    validate: (isScrollToField?: boolean, callback?: import("element-plus").FormValidateCallback) => Promise<boolean>;
    deleteField: (prop: string) => void;
    resetFields: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
    clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
    validateField: (props?: import("element-plus/es/utils").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("search" | "registry")[], "search" | "registry", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    model: {
        type: import("vue").PropType<import("./type").FormContext["model"]>;
        default: () => {};
    };
    config: {
        type: import("vue").PropType<import("./type").FormSchema>;
        default: () => void;
    };
}>> & {
    onSearch?: ((...args: any[]) => any) | undefined;
    onRegistry?: ((...args: any[]) => any) | undefined;
}, {
    config: import("./type").FormSchema<any>;
    model: Record<string, any>;
}, {}>;
export default _default;
