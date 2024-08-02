import { defineComponent as h, computed as r, openBlock as o, createElementBlock as a, normalizeStyle as d, renderSlot as u, unref as i, createElementVNode as f } from "vue";
import { p as l, w as m } from "../utils/index2.js";
const p = ["width", "height"], g = ["xlink:href"], $ = m(h({ name: "EpIcon", inheritAttrs: !0, __name: "Icon", props: { prefix: { default: "icon" }, name: { default: "" }, color: { default: "currentColor" }, width: { default: "1rem" }, height: { default: "1rem" } }, setup(n) {
  const e = n, s = r(() => `#${e.prefix}-${e.name}`), c = r(() => {
    var t;
    return { color: (t = e.color) != null && t.startsWith("--") ? `var(${e.color})` : e.color, width: l(e.width), height: l(e.height) };
  });
  return (t, w) => (o(), a("i", { class: "cz-icon cz-inline-flex", style: d(c.value) }, [t.$slots.default ? u(t.$slots, "default", { key: 0 }) : (o(), a("svg", { key: 1, "aria-hidden": "true", class: "cz-fill-current", width: i(l)(e.width), height: i(l)(e.height) }, [f("use", { "xlink:href": s.value }, null, 8, g)], 8, p))], 4));
} }));
export {
  $ as default
};
