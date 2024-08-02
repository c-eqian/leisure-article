import { i as r } from "../utils/index2.js";
const v = 100, c = 600, p = { beforeMount(s, d) {
  const e = d.value, { interval: i = v, delay: l = c } = r(e) ? {} : e;
  let t, o;
  const n = () => r(e) ? e() : e.handler(), a = () => {
    o && (clearTimeout(o), o = void 0), t && (clearInterval(t), t = void 0);
  };
  s.addEventListener("mousedown", (u) => {
    u.button === 0 && (a(), n(), document.addEventListener("mouseup", () => a(), { once: !0 }), o = setTimeout(() => {
      t = setInterval(() => {
        n();
      }, i);
    }, l));
  });
} };
export {
  p as vRepeatClick
};
