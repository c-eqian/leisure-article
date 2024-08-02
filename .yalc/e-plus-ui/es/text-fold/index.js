import { w as C } from "../utils/index2.js";
import { defineComponent as g, useCssVars as N, computed as v, ref as t, onMounted as V, onUnmounted as w, openBlock as u, createElementBlock as p, createElementVNode as d, normalizeClass as f, createBlock as E, unref as m, withCtx as x, createTextVNode as _, toDisplayString as k, createCommentVNode as y, renderSlot as h, createVNode as R } from "vue";
import { ElButton as b } from "element-plus";
import { _ as T } from "../_plugin-vue_export-helper/index.js";
const H = { class: "cz-text-fold" }, M = { class: "cz-text__action cz-select-none" }, I = C(T(g({ name: "EpTextFold", __name: "TextFold", props: { line: { default: 3 }, isFold: { type: Boolean }, position: { default: "right" } }, setup(z) {
  N((a) => ({ "4bb15c80": F.value }));
  const l = z, F = v(() => {
    const a = Math.trunc(Number(l.line));
    return a > 0 ? a : 1;
  }), c = v(() => l.isFold), e = t(!0), n = t(!1), o = t(), r = t(), i = t();
  return V(() => {
    i.value = new ResizeObserver((a) => {
      e.value && o.value && r.value && (n.value = r.value.clientHeight < o.value.scrollHeight);
    }), i.value.observe(o.value);
  }), w(() => {
    var a;
    (a = i.value) == null || a.disconnect();
  }), (a, s) => (u(), p("div", H, [d("div", { ref_key: "textFoldRef", ref: r, class: f(["cz-text-box", { "over-hidden": e.value }]) }, [d("div", { ref_key: "textBoxRef", ref: o }, [n.value && c.value && l.position === "right" ? (u(), E(m(b), { key: 0, onClick: s[0] || (s[0] = (B) => e.value = !e.value), class: f({ "over-hidden": e.value, "end-btn": 1 }), type: "primary", plain: "", link: "" }, { default: x(() => [_(k(e.value ? "展开" : "收起"), 1)]), _: 1 }, 8, ["class"])) : y("", !0), h(a.$slots, "default", {}, void 0, !0)], 512)], 2), d("div", M, [n.value && c.value && l.position === "left" ? (u(), p("div", { key: 0, class: "cz-text__btn", onClick: s[1] || (s[1] = (B) => e.value = !e.value) }, [h(a.$slots, "expand", { isFold: e.value }, () => [R(m(b), { type: "primary", plain: "", link: "" }, { default: x(() => [_(k(e.value ? "展开" : "收起"), 1)]), _: 1 })], !0)])) : y("", !0)])]));
} }), [["__scopeId", "data-v-0cf605cd"]]));
export {
  I as default
};
