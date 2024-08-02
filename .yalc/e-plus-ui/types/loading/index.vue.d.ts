import { type PropType } from 'vue';
import type { LoadingType } from './type';
declare const _default: import("vue").DefineComponent<{
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingType: {
        type: PropType<LoadingType>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingType: {
        type: PropType<LoadingType>;
        default: string;
    };
}>>, {
    loading: boolean;
    loadingType: LoadingType;
}, {}>;
export default _default;
