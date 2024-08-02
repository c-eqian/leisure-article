import { w as z } from "../utils/index2.js";
import { defineComponent as v, ref as b, computed as a, openBlock as s, createElementBlock as r, normalizeStyle as i, createElementVNode as c, Fragment as g, renderList as y, normalizeClass as C, toDisplayString as h } from "vue";
import { _ as k } from "../_plugin-vue_export-helper/index.js";
const _ = { class: "cz-cube cz-panelLoad" }, E = z(k(v({ name: "EpLetterLoading", __name: "index", props: { size: { type: Number, default: 60 }, letters: { type: Array, default: () => ["Q", "C", "Y", "C", "M", "M"], validator: (t) => t.length === 6 }, bgColor: { type: String, default: "#41b883" } }, setup(t) {
  const e = t, p = b({ transform: `scale(${e.size / 2 / 75})`, "--cz-letter-bg-color": e.bgColor }), d = a(() => p.value), m = a(() => ({ width: `${e.size}px`, height: `${e.size}px` })), u = a(() => ["front", "back", "left", "right", "bottom", "top"].map((l, o) => ({ side: l, letter: e.letters[o] })));
  return (l, o) => (s(), r("div", { style: i(m.value), class: "cz-spinner cz-spinner--socker" }, [c("div", { style: i(d.value), class: "cz-spinner-inner" }, [c("div", _, [(s(!0), r(g, null, y(u.value, ({ side: n, letter: f }) => (s(), r("div", { key: n, class: C(`cz-cube-face cz-cube-face-${n}`) }, h(f), 3))), 128))])], 4)], 4));
} }), [["__scopeId", "data-v-9e916ed2"]]));
export {
  E as default
};
