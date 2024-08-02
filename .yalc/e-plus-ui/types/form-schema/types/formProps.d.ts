import type { PropType } from 'vue';
import type { FormContext, FormSchema } from '../type';
export declare const FormSchemaProps: {
    model: {
        type: PropType<FormContext["model"]>;
        default: () => {};
    };
    config: {
        type: PropType<FormSchema>;
        default: () => void;
    };
};
