import { p as w, w as _ } from "../utils/index2.js";
import { defineComponent as $, reactive as S, ref as m, computed as u, onMounted as b, resolveComponent as g, openBlock as i, createElementBlock as n, normalizeStyle as p, unref as x, createVNode as B, withCtx as v, Fragment as I, renderList as A, createBlock as E, createTextVNode as N, toDisplayString as h, renderSlot as y, createElementVNode as z, nextTick as C } from "vue";
import { ElCarousel as R } from "element-plus";
import { _ as V } from "../_plugin-vue_export-helper/index.js";
const L = { key: 0 }, q = _(V($({ name: "EpNoticeBar", __name: "NoticeBar", props: { list: { default: () => [] }, fontSize: { default: 14 }, vertical: { type: Boolean }, height: { default: 40 }, delay: { default: 1e3 }, speed: { default: 100 }, suffixIcon: {}, prefixIcon: {}, color: {}, background: {} }, setup(k) {
  const o = k, e = S({ boxWidth: 0, textWidth: 0, oneTime: 0, twoTime: 0, order: 1 }), r = m(), a = m(), c = u(() => o.list), T = u(() => o.delay > 2e3 ? o.delay : 2e3), W = () => {
    e.oneTime = e.textWidth / o.speed, e.twoTime = (e.textWidth + e.boxWidth) / o.speed;
  }, d = () => {
    a.value && (e.order === 1 ? (a.value.style.cssText = `animation: oneAnimation ${e.oneTime}s linear; opactity: 1;}`, e.order = 2) : a.value.style.cssText = `animation: twoAnimation ${e.twoTime}s linear infinite; opacity: 1;`);
  };
  return b(() => {
    var t;
    o.vertical || (C(() => {
      var l, s;
      e.boxWidth = ((l = r.value) == null ? void 0 : l.offsetWidth) || 0, e.textWidth = ((s = a.value) == null ? void 0 : s.offsetWidth) || 0, document.styleSheets[0].insertRule(`@keyframes oneAnimation {0% {left: 0px;} 100% {left: -${e.textWidth}px;}}`), document.styleSheets[0].insertRule(`@keyframes twoAnimation {0% {left: ${e.boxWidth}px;} 100% {left: -${e.textWidth}px;}}`), W(), setTimeout(() => {
        d();
      }, o.delay);
    }), (t = a.value) == null || t.addEventListener("animationend", () => {
      d();
    }, !1));
  }), (t, l) => {
    const s = g("el-carousel-item");
    return i(), n("div", { class: "cz-px-4 cz-rounded cz-notice-bar", style: p({ height: `${x(w)(t.height)}` }) }, [t.vertical ? (i(), n("div", L, [B(x(R), { height: "40px", direction: "vertical", autoplay: !0, "indicator-position": "none", interval: T.value }, { default: v(() => [(i(!0), n(I, null, A(c.value, (f) => (i(), E(s, { key: f }, { default: v(() => [N(h(f), 1)]), _: 2 }, 1024))), 128))]), _: 1 }, 8, ["interval"])])) : (i(), n("div", { key: 1, style: p({ color: t.color, fontSize: `${t.fontSize}px` }), class: "cz-flex cz-items-center" }, [y(t.$slots, "prefixIcon", {}, void 0, !0), z("div", { ref_key: "noticeBoxRef", ref: r, class: "cz-flex-1 cz-flex cz-items-center cz-relative cz-overflow-hidden" }, [z("div", { ref_key: "textRef", ref: a, class: "cz-whitespace-nowrap cz-absolute cz-left-0" }, h(c.value), 513)], 512), y(t.$slots, "suffixIcon", {}, void 0, !0)], 4))], 4);
  };
} }), [["__scopeId", "data-v-6673f084"]]));
export {
  q as default
};
