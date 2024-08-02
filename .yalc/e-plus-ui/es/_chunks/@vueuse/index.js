import { getCurrentScope as L, onScopeDispose as j, unref as M, watch as T } from "vue";
function E(o) {
  return typeof o == "function" ? o() : M(o);
}
const b = typeof window < "u" && typeof document < "u";
const x = Object.prototype.toString, G = (o) => x.call(o) === "[object Object]", m = () => {
}, I = O();
function O() {
  var o, r;
  return b && ((o = window == null ? void 0 : window.navigator) == null ? void 0 : o.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((r = window == null ? void 0 : window.navigator) == null ? void 0 : r.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function l(o) {
  var r;
  const i = E(o);
  return (r = i == null ? void 0 : i.$el) != null ? r : i;
}
const P = b ? window : void 0;
function v(...o) {
  let r, i, n, d;
  if (typeof o[0] == "string" || Array.isArray(o[0]) ? ([i, n, d] = o, r = P) : [r, i, n, d] = o, !r)
    return m;
  Array.isArray(i) || (i = [i]), Array.isArray(n) || (n = [n]);
  const s = [], f = () => {
    s.forEach((e) => e()), s.length = 0;
  }, c = T(() => [l(r), E(d)], ([e, t]) => {
    if (f(), !e)
      return;
    const a = G(t) ? { ...t } : t;
    s.push(...i.flatMap((S) => n.map((k) => ((w, g, y, h) => (w.addEventListener(g, y, h), () => w.removeEventListener(g, y, h)))(e, S, k, a))));
  }, { immediate: !0, flush: "post" }), u = () => {
    c(), f();
  };
  var p;
  return p = u, L() && j(p), u;
}
let A = !1;
function q(o, r, i = {}) {
  const { window: n = P, ignore: d = [], capture: s = !0, detectIframe: f = !1 } = i;
  if (!n)
    return m;
  I && !A && (A = !0, Array.from(n.document.body.children).forEach((e) => e.addEventListener("click", m)), n.document.documentElement.addEventListener("click", m));
  let c = !0;
  const u = (e) => d.some((t) => {
    if (typeof t == "string")
      return Array.from(n.document.querySelectorAll(t)).some((a) => a === e.target || e.composedPath().includes(a));
    {
      const a = l(t);
      return a && (e.target === a || e.composedPath().includes(a));
    }
  }), p = [v(n, "click", (e) => {
    const t = l(o);
    t && t !== e.target && !e.composedPath().includes(t) && (e.detail === 0 && (c = !u(e)), c ? r(e) : c = !0);
  }, { passive: !0, capture: s }), v(n, "pointerdown", (e) => {
    const t = l(o);
    c = !u(e) && !(!t || e.composedPath().includes(t));
  }, { passive: !0 }), f && v(n, "blur", (e) => {
    setTimeout(() => {
      var t;
      const a = l(o);
      ((t = n.document.activeElement) == null ? void 0 : t.tagName) !== "IFRAME" || a != null && a.contains(n.document.activeElement) || r(e);
    }, 0);
  })].filter(Boolean);
  return () => p.forEach((e) => e());
}
export {
  q as o
};
