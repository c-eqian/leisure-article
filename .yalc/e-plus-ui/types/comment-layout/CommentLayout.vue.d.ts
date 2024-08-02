declare function __VLS_template(): {
    avatar?(_: {}): any;
    left?(_: {}): any;
    right?(_: {}): any;
    content?(_: {}): any;
    actions?(_: {}): any;
    "editor-reply"?(_: {}): any;
    default?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<{}, {
    replyRef: import("vue").Ref<HTMLDivElement | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
