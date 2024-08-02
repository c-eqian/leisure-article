import { w as z } from "../utils/index2.js";
import { computed as i, inject as b, defineComponent as y, openBlock as o, createElementBlock as t, normalizeClass as a, normalizeStyle as x, createCommentVNode as s, createElementVNode as k, renderSlot as I } from "vue";
const v = ["type"], g = z(y({ name: "EpButton", __name: "index", props: { type: {}, size: {}, prefixIcon: {}, suffixIcon: {}, loadingIcon: { default: "cz-icon-loading-one" }, borderStyle: { default: "soild" }, border: {}, fluid: { type: Boolean, default: !1 }, radius: { type: Boolean, default: !1 }, loading: { type: Boolean, default: !1 }, disabled: { type: Boolean }, nativeType: { default: "button" } }, emits: { click: (l) => l instanceof MouseEvent }, setup(l, { emit: r }) {
  const n = l, { size: c } = function(e) {
    return { size: i(() => {
      const d = b("EpForm", {});
      return e.size || d.size || "md";
    }) };
  }(n), u = r, p = (e) => {
    n.disabled || n.loading || u("click", e);
  }, f = i(() => ({ border: `1px ${n.borderStyle}` })), m = i(() => [{ "cz-btn-fluid": n.fluid, "cz-btn-radius": n.radius, "cz-btn-disabled": n.disabled }, n.type ? `cz-btn-${n.type}` : "", c.value ? `cz-btn-${c.value}` : "", n.border ? `cz-border-${n.border}` : ""]);
  return (e, d) => (o(), t("button", { class: a(["cz-btn", m.value]), style: x(f.value), type: e.nativeType, onClick: p }, [e.prefixIcon ? (o(), t("i", { key: 0, class: a(`cz-icon ${e.prefixIcon}`) }, null, 2)) : s("", !0), e.loading ? (o(), t("i", { key: 1, class: a([e.loadingIcon, "cz-icon cz-anim cz-anim-rotate cz-anim-loop"]) }, null, 2)) : s("", !0), k("span", null, [I(e.$slots, "default")]), e.suffixIcon ? (o(), t("i", { key: 2, class: a(`cz-icon ${e.suffixIcon}`) }, null, 2)) : s("", !0)], 14, v));
} }));
export {
  g as default
};
