import { defineComponent as m, computed as o, openBlock as s, createElementBlock as a, normalizeClass as p, normalizeStyle as h, mergeProps as b, createCommentVNode as g, renderSlot as v } from "vue";
import { p as l } from "./utils/index2.js";
import { _ as y } from "./_plugin-vue_export-helper/index.js";
const x = ["src"], B = y(m({ name: "EpImage", __name: "index", props: { url: { default: "" }, width: { default: "100%" }, height: { default: "100%" }, scale: { type: Boolean }, round: { type: Boolean }, borderRadius: { default: 0 }, loading: { type: Boolean, default: !0 } }, emits: ["error"], setup(c, { emit: n }) {
  const e = c, d = o(() => e.url), u = n, i = o(() => ({ width: l(e.width), height: l(e.height), borderRadius: !e.round && l(e.borderRadius) })), f = o(() => ({ "hover:cz-scale-150": e.scale }));
  return (t, r) => (s(), a("span", { class: p(["cz-inline-flex cz-justify-center cz-items-center cz-text-center cz-text-sm cz-cursor-pointer cz-w-full cz-box-border cz-overflow-hidden cz-h-full", { "cz-rounded-full": e.round, "cz-bg-[#c0c4cc]": !!t.$slots.default, "cz-text-gray-50": !!t.$slots.default, "is-skeleton": e.loading && !t.$slots.default }]), style: h(i.value) }, [t.$slots.default ? g("", !0) : (s(), a("img", b({ key: 0, src: d.value, alt: "", class: [f.value, "cz-w-full cz-block cz-h-full cz-bg-cover cz-object-cover cz-bg-center cz-bg-no-repeat"], style: { transition: "all 0.5s ease 0.1s" } }, t.$attrs, { onError: r[0] || (r[0] = (z) => u("error", z)) }), null, 16, x)), v(t.$slots, "default", {}, void 0, !0)], 6));
} }), [["__scopeId", "data-v-ecbb80cf"]]);
export {
  B as I
};
