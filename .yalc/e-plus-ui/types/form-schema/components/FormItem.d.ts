import { type DefineComponent, type PropType } from 'vue';
import type { FormItemsSchema } from '../type';
declare const _default: DefineComponent<{
    item: {
        type: PropType<FormItemsSchema>;
        default: () => {};
    };
    columns: {
        type: NumberConstructor;
        default: number;
    };
    isSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: PropType<FormItemsSchema>;
        default: () => {};
    };
    columns: {
        type: NumberConstructor;
        default: number;
    };
    isSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    columns: number;
    item: FormItemsSchema<any>;
    isSearch: boolean;
}, {}>;
export default _default;
