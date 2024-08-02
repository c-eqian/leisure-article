import { h as a, s as N } from "../_chunks/@eqian/index.js";
const _ = (s) => {
  const n = s;
  return n.install = (o) => {
    o.component(n.name, s);
  }, n;
};
var e = ((s) => (s[s.ELEMENT = 1] = "ELEMENT", s[s.FUNCTIONAL_COMPONENT = 2] = "FUNCTIONAL_COMPONENT", s[s.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", s[s.COMPONENT = 6] = "COMPONENT", s[s.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", s[s.ARRAY_CHILDREN = 16] = "ARRAY_CHILDREN", s[s.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", s[s.TELEPORT = 64] = "TELEPORT", s[s.SUSPENSE = 128] = "SUSPENSE", s[s.COMPONENT_SHOULD_KEEP_ALIVE = 256] = "COMPONENT_SHOULD_KEEP_ALIVE", s[s.COMPONENT_KEPT_ALIVE = 512] = "COMPONENT_KEPT_ALIVE", s))(e || {});
const L = (s) => !!(s && 1 & s.shapeFlag), E = (s, n) => !!(s && 6 & s.shapeFlag), c = (s, n) => !!(s && 16 & s.shapeFlag);
function C(s, n) {
  const o = T(n), t = O(n);
  return s.slots[o] ? o : s.slots[t] ? t : n;
}
function T(s) {
  return s.replace(/-(\w)/g, (n, o) => o ? o.toUpperCase() : "");
}
function O(s) {
  return s.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
}
const l = (s) => typeof s == "function", P = (s) => s === void 0, i = (s) => typeof s == "number", p = (s) => typeof s == "string", S = (s) => s instanceof Date && !isNaN(s.valueOf());
function u() {
  const s = [], n = "0123456789abcdef";
  for (let o = 0; o < 36; o++)
    s[o] = n.substr(Math.floor(16 * Math.random()), 1);
  return s[14] = "4", s[19] = n.substr(3 & s[19] | 8, 1), s[8] = s[13] = s[18] = s[23] = "-", s.join("");
}
const f = (s) => a(s) && (s.includes("%") || s.includes("px")) ? s : N(s) ? +s + "px" : s, A = Symbol("__EP_INSTALLED_KEY__");
export {
  A as I,
  e as S,
  L as a,
  E as b,
  T as c,
  c as d,
  C as e,
  P as f,
  i as g,
  p as h,
  l as i,
  S as j,
  O as k,
  u as n,
  f as p,
  _ as w
};
