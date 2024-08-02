import { w as p } from "../utils/index2.js";
import { defineComponent as v, computed as l, openBlock as o, createElementBlock as s, normalizeClass as m, createElementVNode as c, renderSlot as a, createTextVNode as h, toDisplayString as f, createCommentVNode as d } from "vue";
import { _ as $ } from "../_plugin-vue_export-helper/index.js";
const u = { key: 0, class: "cz-card-header" }, y = { class: "cz-card-header-title" }, k = { key: 0, class: "cz-card-header-extra" }, x = { class: "cz-card-body" }, z = { key: 1, class: "cz-card-footer" }, g = p($(v({ name: "EpCard", __name: "index", props: { title: {}, shadow: { default: "hover" } }, setup(i) {
  const t = i, r = l(() => t.title), n = l(() => ({ shadow: t.shadow === "always", "is-hover-shadow": t.shadow === "hover" }));
  return (e, w) => (o(), s("div", { class: m(["cz-card cz-bg-white dark:cz-bg-dark-2", n.value]) }, [e.$slots.title || r.value || e.$slots.extra ? (o(), s("div", u, [c("span", y, [a(e.$slots, "title", {}, () => [h(f(r.value), 1)], !0)]), e.$slots.extra ? (o(), s("span", k, [a(e.$slots, "extra", {}, void 0, !0)])) : d("", !0)])) : d("", !0), c("div", x, [e.$slots.body ? a(e.$slots, "body", { key: 0 }, void 0, !0) : a(e.$slots, "default", { key: 1 }, void 0, !0)]), e.$slots.footer ? (o(), s("div", z, [a(e.$slots, "footer", {}, void 0, !0)])) : d("", !0)], 2));
} }), [["__scopeId", "data-v-60e7aaeb"]]));
export {
  g as default
};
