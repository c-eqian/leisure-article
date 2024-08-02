import { w as i } from "../utils/index2.js";
import { defineComponent as r, ref as f, openBlock as t, createElementBlock as o, renderSlot as s, createCommentVNode as l, createElementVNode as c } from "vue";
import { _ as m } from "../_plugin-vue_export-helper/index.js";
const n = { class: "cz-flex cz-h-full cz-w-full cz-comment-box" }, z = { key: 0 }, v = { class: "cz-flex-1 cz-text-sm" }, p = { class: "cz-flex cz-text-[#945c5f] cz-text-sm" }, y = { key: 0, class: "cz-flex-1 cz-px-2 cz-text-sm" }, $ = { key: 1 }, x = { class: "cz-px-2 cz-py-2" }, u = { key: 0, class: "cz-w-full" }, k = { key: 0 }, _ = { key: 1 }, b = { key: 0, class: "cz-bg-[#f8f9fa] dark:cz-bg-[#181818] cz-mb-2 cz-p-2 cz-px-4 cz-rounded" }, B = i(m(r({ name: "EpCommentLayout", __name: "CommentLayout", setup(g, { expose: d }) {
  const a = f();
  return d({ replyRef: a }), (e, w) => (t(), o("div", n, [e.$slots.avatar ? (t(), o("div", z, [s(e.$slots, "avatar", {}, void 0, !0)])) : l("", !0), c("div", v, [c("div", p, [e.$slots.left ? (t(), o("div", y, [s(e.$slots, "left", {}, void 0, !0)])) : l("", !0), e.$slots.right ? (t(), o("div", $, [s(e.$slots, "right", {}, void 0, !0)])) : l("", !0)]), c("div", x, [e.$slots.content ? (t(), o("div", u, [s(e.$slots, "content", {}, void 0, !0)])) : l("", !0), c("div", { class: "cz-pt-2 cz-w-full", ref_key: "replyRef", ref: a }, [e.$slots.actions ? (t(), o("div", k, [s(e.$slots, "actions", {}, void 0, !0)])) : l("", !0), e.$slots["editor-reply"] ? (t(), o("div", _, [s(e.$slots, "editor-reply", {}, void 0, !0)])) : l("", !0)], 512)]), e.$slots.default && e.$slots.default() ? (t(), o("div", b, [s(e.$slots, "default", {}, void 0, !0)])) : l("", !0)])]));
} }), [["__scopeId", "data-v-1594f59e"]]));
export {
  B as default
};
