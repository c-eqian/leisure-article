import { w as d } from "../utils/index2.js";
import { defineComponent as r, ref as p, computed as t, openBlock as m, createElementBlock as c, normalizeStyle as a, createElementVNode as s } from "vue";
import { _ as u } from "../_plugin-vue_export-helper/index.js";
const b = d(u(r({ name: "EpDiamondLoading", __name: "index", props: { size: { type: Number, default: 40 }, bgColor: { type: String, default: "#41b883" } }, setup(l) {
  const e = l, n = p({ width: `${parseInt("" + e.size / 4, 10)}px`, height: `${parseInt("" + e.size / 4, 10)}px`, "--cz-diamond-bg-color": e.bgColor }), o = t(() => n.value), i = t(() => ({ width: `${e.size}px`, height: `${parseInt("" + e.size / 4, 10)}px` }));
  return (g, z) => (m(), c("div", { style: a(i.value), class: "cz-spinner-loading spinner--rotate-diamond" }, [s("div", { style: a(o.value), class: "cz-diamond-loading" }, null, 4), s("div", { style: a(o.value), class: "cz-diamond-loading" }, null, 4), s("div", { style: a(o.value), class: "cz-diamond-loading" }, null, 4)], 4));
} }), [["__scopeId", "data-v-a3a3c4ab"]]));
export {
  b as default
};
