import { computed as p, defineComponent as h, openBlock as C, createBlock as M, unref as E, withCtx as x, resolveDynamicComponent as I, isVNode as w, createVNode as v, h as A, ref as k, getCurrentInstance as _, watchEffect as $, mergeProps as j } from "vue";
import { W as g, U as B, w as N, y as b, h as P, g as S } from "../_chunks/@eqian/index.js";
import { ElIcon as V, ElMenuItem as d, ElMenuItemGroup as q, ElSubMenu as D, ElMenu as G } from "element-plus";
import { w as O } from "../utils/index2.js";
const f = (t) => p(() => g(t, ["visible", "children", "subMenu", "group", "title", "icon", "index"])), U = { menuConfig: { type: Object, default: () => ({}) } }, W = h({ __name: "Icon", props: { icon: { type: String, default: "" } }, setup(t) {
  const l = t, s = p(() => l.icon);
  return (u, o) => (C(), M(E(V), null, { default: x(() => [(C(), M(I(s.value)))]), _: 1 }));
} }), z = h({ name: "EpMenuItem", props: { items: { type: Array, default: () => [] } }, setup() {
}, render() {
  const { items: t } = this.$props, l = (e) => {
    const { visible: n } = e;
    return N(n) ? n : !n;
  }, s = (e) => {
    const { children: n } = e;
    return n && n.length > 0;
  }, u = (e) => {
    const { group: n } = e;
    return !!n;
  }, o = (e) => b(e.icon) ? e.icon() : P(e.icon) || w(e.icon) ? v(W, { icon: e.icon }, null) : null, a = (e, n, r, c = null) => A(n, { key: e.path || e.title, ...r }, e.slots && b(e.slots) ? e.slots() : { ...c }), m = (e, n) => e.path ? { ...n, index: e.path } : n, y = (e) => {
    return s(e) && l(e) ? a(e, u(e) ? q : D, (n = e, p(() => B(g(n, ["visible", "children", "group", "icon", "title", "index"]), n.subMenu ?? {}))).value, s(e) ? { title: () => [o(e), e.title], default: () => {
      var c;
      return u(e) ? (r = e.children, r == null ? void 0 : r.map((i) => a(i, d, m(i, f(i).value), { default: () => [o(i), i.title] }))) : (c = e.children) == null ? void 0 : c.map((i) => y(i));
      var r;
    } } : a(e, d, m(e, f(e).value), { default: () => [o(e), e.title] })) : l(e) ? a(e, d, m(e, f(e).value), { default: () => [o(e), e.title] }) : null;
    var n;
  };
  return y(t);
} }), L = O(h({ name: "EpMenu", props: U, setup(t) {
  const l = p(() => t.menuConfig.items), s = k(t.menuConfig.defaultActive), u = _().appContext.config.globalProperties.$route;
  $(() => {
    u && "path" in u && (s.value = u.path);
  });
  const o = () => S(l) ? null : { default: () => l.value.map((a) => v(z, { items: a }, null)) };
  return () => v(G, j({ style: { "max-width": "100%" } }, ((a) => p(() => g(a, ["items", "level", "defaultActive"])))(t.menuConfig).value, { defaultActive: s.value }), o());
} })), Q = (t) => t;
export {
  L as default,
  Q as defineMenu,
  U as type
};
