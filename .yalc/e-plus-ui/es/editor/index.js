import { w as T } from "../utils/index2.js";
import { defineComponent as N, mergeModels as k, useModel as P, ref as c, watchEffect as F, onBeforeUnmount as G, openBlock as n, createElementBlock as u, createElementVNode as e, normalizeClass as C, createVNode as h, withDirectives as R, vModelText as U, unref as w, withCtx as g, createCommentVNode as L, Fragment as A, renderList as H, createTextVNode as O, nextTick as W, pushScopeId as Y, popScopeId as q } from "vue";
import { I as J } from "../index3.js";
import { ElPopover as K, ElButton as Q } from "element-plus";
import { p as X } from "../_chunks/@e-plus-ui/index.js";
import { _ as Z } from "../_plugin-vue_export-helper/index.js";
const $ = { class: "cz-w-full cz-editor" }, e6 = { class: "cz-flex" }, a6 = { class: "avatar cz-pt-1.5" }, s6 = { class: "cz-ml-3 cz-w-full" }, t6 = { class: "editor-input cz-relative" }, l6 = ["placeholder"], o6 = { key: 0, class: "cz-cursor-pointer", title: "表情包" }, i6 = [((t) => (Y("data-v-18cc7d4b"), t = t(), q(), t))(() => e("img", { alt: "", class: "cz-w-6 cz-h-6", src: "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1693736075268'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='11721'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M512%20128a384%20384%200%201%200%200%20768%20384%20384%200%200%200%200-768zM42.666667%20512C42.666667%20252.8%20252.8%2042.666667%20512%2042.666667s469.333333%20210.133333%20469.333333%20469.333333-210.133333%20469.333333-469.333333%20469.333333S42.666667%20771.2%2042.666667%20512z%20m533.333333-64a42.666667%2042.666667%200%200%201%2042.666667-42.666667h85.333333a42.666667%2042.666667%200%201%201%200%2085.333334h-85.333333a42.666667%2042.666667%200%200%201-42.666667-42.666667z%20m-254.165333%20193.834667a42.666667%2042.666667%200%200%201%2060.330666%200%20183.594667%20183.594667%200%200%200%20259.669334%200%2042.666667%2042.666667%200%200%201%2060.330666%2060.330666%20268.928%20268.928%200%200%201-380.330666%200%2042.666667%2042.666667%200%200%201%200-60.330666z'%20fill='%2375C82B'%20p-id='11722'%3e%3c/path%3e%3cpath%20d='M362.666667%20362.666667a42.666667%2042.666667%200%200%201%2042.666666%2042.666666v80a42.666667%2042.666667%200%200%201-85.333333%200V405.333333a42.666667%2042.666667%200%200%201%2042.666667-42.666666z'%20fill='%2375C82B'%20p-id='11723'%3e%3c/path%3e%3c/svg%3e" }, null, -1))], c6 = ["onClick"], r6 = ["src", "title", "alt"], h6 = T(Z(N({ name: "EpEditor", __name: "Editor", props: k({ placeholder: { type: String, default: "留下点什么吧..." }, emojis: { type: Array, default: () => [] }, useEmojis: { type: Boolean, default: !1 }, autoFocus: { type: Boolean, default: !1 } }, { modelValue: { type: String, default: "" }, modelModifiers: {} }), emits: k(["click-submit"], ["update:modelValue"]), setup(t, { expose: b, emit: B }) {
  const S = B, a = P(t, "modelValue"), l = t, V = c(null), d = c(!1), o = c(null), z = c(!1), m = c(!1), p = c([]);
  F(() => {
    l.useEmojis && (p.value = l.emojis);
  });
  const _ = () => {
    z.value = !0, d.value = !0;
  }, D = () => {
    z.value = !!a.value.trim(), d.value = !1;
  }, M = () => {
    S("click-submit", a.value);
  };
  return G(() => {
    a.value = "";
  }), b({ focus: () => {
    var r;
    (r = o.value) == null || r.focus();
  }, isShow: m, setEmojis: (r) => {
    l.useEmojis && (p.value = r);
  } }), (r, i) => (n(), u("div", $, [e("div", { class: C(["editor-input-wrapper", [d.value ? "is-focus" : ""]]) }, [e("div", e6, [e("div", a6, [h(J, { width: "24", height: "24", round: "", url: "https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg" })]), e("div", s6, [e("div", t6, [R(e("textarea", { "onUpdate:modelValue": i[0] || (i[0] = (s) => a.value = s), ref_key: "textareaRef", ref: o, placeholder: l.placeholder, class: "editor-textarea", onBlur: D, onFocus: _ }, null, 40, l6), [[U, a.value, void 0, { trim: !0 }]])]), e("div", { class: C(["emoji-container cz-py-1.5 cz-items-center cz-flex", [l.useEmojis ? "cz-justify-between" : "cz-justify-end"]]) }, [h(w(K), { trigger: "click", width: "260px", onShow: i[1] || (i[1] = (s) => m.value = !0), onHide: i[2] || (i[2] = (s) => m.value = !1) }, { reference: g(() => [l.useEmojis ? (n(), u("div", o6, i6)) : L("", !0)]), default: g(() => [e("div", { ref_key: "emojiRef", ref: V, class: "emoji-wrapper cz-max-h-40 cz-overflow-y-auto animate__fadeInDown" }, [(n(!0), u(A, null, H(p.value, (s) => (n(), u("span", { key: s.name, class: "emoji-item cz-p-[5px]", onClick: (n6) => ((v) => {
    var x, j;
    const f = ((x = o.value) == null ? void 0 : x.selectionStart) ?? 0, I = ((j = o.value) == null ? void 0 : j.selectionEnd) ?? 0;
    a.value = a.value.substring(0, f) + v.name + a.value.substring(I), W(() => {
      var y, E;
      (y = o.value) == null || y.focus(), (E = o.value) == null || E.setSelectionRange(f + v.name.length, f + v.name.length);
    });
  })(s) }, [e("img", { src: s.url, title: s.name, alt: s.name, class: "cz-w-6 cz-h-6 emoji" }, null, 8, r6)], 8, c6))), 128))], 512)]), _: 1 }), e("div", null, [h(w(Q), { disabled: a.value.length === 0, size: "small", icon: w(X), type: "primary", onClick: M }, { default: g(() => [O("提交")]), _: 1 }, 8, ["disabled", "icon"])])], 2)])])], 2)]));
} }), [["__scopeId", "data-v-18cc7d4b"]]));
export {
  h6 as default
};
