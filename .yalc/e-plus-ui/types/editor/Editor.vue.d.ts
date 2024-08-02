import { type PropType } from 'vue';
import type { EmojiData } from './type';
declare const _default: import("vue").DefineComponent<{
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    emojis: {
        type: PropType<EmojiData[]>;
        default: () => never[];
    };
    useEmojis: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: PropType<any>;
    };
}, {
    focus: () => void;
    isShow: import("vue").Ref<boolean>;
    setEmojis: (list: EmojiData[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: any) => void;
    "click-submit": (v: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    emojis: {
        type: PropType<EmojiData[]>;
        default: () => never[];
    };
    useEmojis: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: PropType<any>;
    };
}>> & {
    "onUpdate:modelValue"?: ((modelValue: any) => any) | undefined;
    "onClick-submit"?: ((v: string) => any) | undefined;
}, {
    placeholder: string;
    emojis: EmojiData[];
    useEmojis: boolean;
    autoFocus: boolean;
}, {}>;
export default _default;
