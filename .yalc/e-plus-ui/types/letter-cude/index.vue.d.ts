import { type PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: NumberConstructor;
        default: number;
    };
    letters: {
        type: PropType<string[]>;
        default: () => string[];
        validator: (letters: string[]) => boolean;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: NumberConstructor;
        default: number;
    };
    letters: {
        type: PropType<string[]>;
        default: () => string[];
        validator: (letters: string[]) => boolean;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    size: number;
    letters: string[];
    bgColor: string;
}, {}>;
export default _default;
