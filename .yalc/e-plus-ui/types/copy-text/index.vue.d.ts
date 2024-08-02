import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"flex">;
        default: string;
    };
    justify: {
        type: PropType<"start" | "end" | "center" | "space-around" | "space-between">;
        default: string;
    };
    align: {
        type: PropType<"top" | "middle" | "bottom">;
        default: string;
    };
}, {
    textComputedRef: import("vue").ComputedRef<string>;
    textRef: import("vue").Ref<HTMLElement | undefined>;
    fromAttr: import("vue").ComputedRef<boolean>;
    val: import("vue").ComputedRef<string>;
    handleCopy: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"flex">;
        default: string;
    };
    justify: {
        type: PropType<"start" | "end" | "center" | "space-around" | "space-between">;
        default: string;
    };
    align: {
        type: PropType<"top" | "middle" | "bottom">;
        default: string;
    };
}>>, {
    type: "flex";
    align: "top" | "middle" | "bottom";
    text: string;
    justify: "center" | "start" | "end" | "space-around" | "space-between";
}, {}>;
export default _default;
