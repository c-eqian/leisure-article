import { w as l } from "../utils/index2.js";
import { defineComponent as d, computed as r, openBlock as o, createElementBlock as n, Fragment as i, renderList as p, createElementVNode as m, normalizeClass as c, createCommentVNode as g } from "vue";
import { _ as u } from "../_plugin-vue_export-helper/index.js";
const f = { key: 0, class: "cz-loading-container" }, b = l(u(d({ name: "EpLoading", __name: "index", props: { loading: { type: Boolean, default: !1 }, loadingType: { type: String, default: "wave" } }, setup(t) {
  const e = t, s = r(() => e.loading);
  return (y, v) => s.value ? (o(), n("div", f, [(o(), n(i, null, p([1, 2, 3, 4], (a) => m("div", { key: a, class: c(["cz-loading-bar", `cz-loading-bar-${a} ${e.loadingType}`]) }, null, 2)), 64))])) : g("", !0);
} }), [["__scopeId", "data-v-6fdb71a2"]]));
export {
  b as default
};
