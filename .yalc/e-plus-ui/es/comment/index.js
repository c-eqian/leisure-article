import { defineComponent as _, openBlock as F, createBlock as G, resolveDynamicComponent as se, mergeModels as J, useModel as oe, computed as L, ref as M, createElementBlock as Y, createElementVNode as A, normalizeClass as Z, createVNode as x, unref as j, withCtx as q, toDisplayString as T, inject as ae, h as Q, mergeProps as ie, nextTick as ne, isVNode as re, resolveComponent as ue, Fragment as ce, createTextVNode as U, getCurrentInstance as de, watchEffect as pe, provide as me, onUnmounted as ye } from "vue";
import ve from "../comment-layout/index.js";
import fe from "../image/index.js";
import { w as P, a as I, y as w, K as he, g as R, d as xe, U as be } from "../_chunks/@eqian/index.js";
import { c as Ce, a as ge, b as ke, d as Se } from "../_chunks/@e-plus-ui/index.js";
import W from "../icon/index.js";
import $e from "../editor/index.js";
import { o as Re } from "../_chunks/@vueuse/index.js";
import ze from "../text-fold/index.js";
import { ElButton as De } from "element-plus";
import { w as Ve } from "../utils/index2.js";
const Me = _({ __name: "Component", props: { is: { type: String } }, setup(s) {
  const i = s;
  return (g, k) => (F(), G(se(i.is)));
} }), ee = Symbol("COMMENT-FIELD-CONFIG"), X = { 1: { type: "Level1", color: "#c1bfc1" }, 2: { type: "Level2", color: "#ffd66c" }, 3: { type: "Level3", color: "#ff6f15" }, 4: { type: "Level4", color: "#c268ff" }, 5: { type: "Level5", color: "#ff2423" }, 6: { type: "Level6", color: "#95d475" } }, te = { commentFields: { commentId: "commentId", content: "content", createDate: "createDate", publisher: "publisher", likeCount: "likeCount", like: "like", updateDate: "updateDate", username: "userInfo.username", avatar: "userInfo.avatar", userId: "userInfo.userId", children: "children", subComment: "subComment", parentId: "parentId", replyId: "replyId", reply: "reply", formatTime: !0, replyRender: !0, likeRender: !0, ipAddress: "ipAddress", level: "level" }, dataLevel: 2, actions: !0, useEmojis: !1, emojis: [], list: "list", hasMore: "hasMore", foldBtnPosition: "left", lines: 3 }, Ee = { class: "cz-flex cz-space-x-10 cz-py-2 dark:cz-text-gray-400 cz-text-gray-600 cz-text-xs" }, Ie = _({ __name: "Action", props: J({ likeCount: { type: Number, default: 0 } }, { modelValue: {}, modelModifiers: {} }), emits: J(["click-like", "click-reply"], ["update:modelValue"]), setup(s, { expose: i, emit: g }) {
  const k = g, v = oe(s, "modelValue"), C = s, $ = L(() => C.likeCount), u = (e) => {
    P(e) ? v.value = e : v.value = !!e;
  }, n = (e) => {
    P(e) ? c.value.reply = e : c.value.reply = !!e;
  }, r = () => {
    k("click-like", { isLike: v.value, likeDone: u });
  }, o = () => {
    c.value.reply = !c.value.reply, k("click-reply", { reply: c.value.reply, replyDone: n });
  }, c = M({ reply: !1 });
  i({ likeDone: u, replyDone: n });
  const b = L(() => v.value ? "--global-checked-color" : "currentColor");
  return (e, l) => (F(), Y("div", Ee, [A("div", { class: Z(["cz-flex cz-items-center cz-cursor-pointer cz-space-x-1", { "cz-text-[--global-checked-color]": v.value }]), onClick: r }, [x(j(W), { color: b.value }, { default: q(() => [v.value ? (F(), G(j(Ce), { key: 0 })) : (F(), G(j(ge), { key: 1 }))]), _: 1 }, 8, ["color"]), A("span", null, T(v.value ? "已赞" : "点赞") + " " + T($.value > 0 ? `${$.value}` : ""), 1)], 2), A("div", { class: "cz-flex cz-select-none cz-cursor-pointer cz-items-center cz-space-x-1", onClick: o }, [x(j(W), null, { default: q(() => [x(j(ke))]), _: 1 }), A("span", null, T(c.value.reply ? "取消回复" : "回复"), 1)])]));
} }), Le = _({ name: "CommentItem", props: { data: { type: Object, default: () => ({}) }, isSubReply: { type: Boolean, default: !1 }, beforeReply: { type: Function }, reply: { type: Object, default: () => ({}) }, level1: { type: Object, default: () => ({}) } }, slots: Object, emits: ["click-reply", "click-like", "confirm-reply"], setup(s) {
  const i = L(() => s.data), g = L(() => s.reply), k = L(() => s.isSubReply), v = L(() => s.level1), C = M(null), $ = M(), u = M(), n = M({ isCustomEditor: !1, value: "", placeholder: "输入点什么", isEditable: !1, replyDone: void 0 }), r = ae(ee, te);
  return Re($, () => {
    var o, c;
    (o = C.value) != null && o.isShow || (n.value.isEditable = !1, (c = u.value) == null || c.replyDone(!1));
  }), { computedData: i, computedReply: g, getValueByKey: (o, c = 1, b, e = !1) => {
    const l = e ? `commentFields.${o}` : o;
    return P(c) || b ? I(r.value, l) : I(c == 1 ? i.value : g.value, I(r.value, l) ?? l);
  }, commentRef: $, actionRef: u, replyState: n, computedIsSubReply: k, computedLevel1: v, editorInputRef: C, getSlotsParameter: () => ({ item: i.value, isSubReply: k.value, level1: v.value, reply: v.value }) };
}, render() {
  const { getValueByKey: s } = this, i = (e) => this.$slots[e] ? this.$slots[e]() : null, g = () => {
    const e = i("avatar");
    if (e)
      return e;
    const l = s("avatar", 1, !1, !0) || s("defaultAvatar", !0);
    return l ? x(fe, ie({ url: l }, (() => {
      const t = this.$props.isSubReply ? 24 : 36;
      return { width: t, height: t, round: !0 };
    })()), null) : void 0;
  }, k = (e = 1) => {
    const l = s("showIpAddress", !0);
    if (P(l)) {
      const t = s("ipAddress", e, !1, !0);
      return t ? x("span", { class: "cz-inline-block cz-px-2 cz-text-[10px]" }, [`${t}`]) : void 0;
    }
    return w(l) ? l(this.getSlotsParameter()) : void 0;
  }, v = (e) => {
    const l = i("level");
    if (l)
      return l;
    const t = s("showLevel", !0);
    if (w(t))
      return t(this.getSlotsParameter());
    if (t) {
      const a = s("level", e, !1, !0), y = X[a] ?? X[6];
      return x(ue("ep-icon"), { width: "20", height: "20", color: y.color }, { default: () => [x(Me, { is: y.type }, null)] });
    }
  }, C = () => {
    const { computedReply: e } = this;
    return e && !R(e) ? x(ce, null, [x("strong", { class: "cz-px-1" }, [U("回复")]), s("username", 2, !1, !0), v(2), k(2)]) : null;
  }, $ = () => {
    const { computedReply: e } = this;
    return e && !R(e) ? x("div", { class: "cz-border cz-my-1 cz-text-[12px] cz-text-gray-600" }, [x("div", { class: "cz-p-2" }, [U("“"), s("content", 2, !1, !0), U("”")])]) : null;
  }, u = ({ reply: e, replyDone: l }) => {
    const { beforeReply: t } = this.$props;
    if (w(t)) {
      const a = t(e);
      if (P(a) && !a)
        return;
    }
    this.replyState.isEditable = e, this.replyState.replyDone = l, this.replyState.isEditable && ne(() => {
      var a;
      (a = this.editorInputRef) == null || a.focus(), this.replyState.placeholder = `回复 @${s("username", 1, !1, !0)}`;
    });
  }, n = (e = !1) => {
    if (this.replyState.value = "", e) {
      const { replyDone: l } = this.replyState;
      this.replyState.isEditable = !1, w(l) && l(!e);
    }
  }, r = (e) => {
    this.$emit("confirm-reply", { value: e, clear: n });
  }, o = () => {
    const e = i("actions");
    if (e)
      return this.replyState.isEditable = !1, this.replyState.isCustomEditor = !0, e;
    const l = s("actions", !0);
    return P(l) ? l ? Q(Ie, { ref: (t) => this.actionRef = t, likeCount: this.computedData[s("likeCount", !0, !0, !0)], modelValue: this.computedData[s("like", !0, !0, !0)], "onUpdate:modelValue": (t) => this.computedData[s("like", !0, !0, !0)] = t, onClickLike: (t) => this.$emit("click-like", t), onClickReply: u }) : void 0 : w(l) ? (this.replyState.isEditable = !1, this.replyState.isCustomEditor = !0, l(this.getSlotsParameter())) : void 0;
  }, c = () => i("editor") || (this.replyState.isEditable ? Q($e, { placeholder: this.replyState.placeholder, ref: (l) => this.editorInputRef = l, modelValue: this.replyState.value, useEmojis: s("useEmojis", !0), emojis: s("emojis", !0), "onUpdate:modelValue": (l) => this.replyState.value = l, "onClick-submit": r }) : void 0);
  return x(ve, { ref: "commentRef" }, (() => {
    const e = { avatar: () => g(), right: () => (() => {
      const a = i("right");
      if (a)
        return a;
      const y = s("createDate", 1, !1, !0);
      return y ? x("time", null, [he(y)]) : void 0;
    })(), left: () => i("left") || x("div", { class: "cz-flex cz-items-center" }, [x("div", { class: "cz-relative cz-w-fit" }, [x("span", { class: "cz-pr-1" }, [s("username", 1, !1, !0)])]), v(1), k(), C()]), content: () => (() => {
      const a = i("content");
      if (a)
        return a;
      const y = s("content", 1, !1, !0);
      return y ? x("div", null, [x(ze, { line: s("lines", !0), "is-fold": !0, position: s("foldBtnPosition", !0) }, (z = y, typeof z == "function" || Object.prototype.toString.call(z) === "[object Object]" && !re(z) ? y : { default: () => [y] })), $()]) : null;
      var z;
    })() }, l = i("default"), t = o();
    if (t) {
      e.actions = () => t;
      const a = c();
      a && (e["editor-reply"] = () => a);
    }
    return l ? { ...e, default: () => i("default") } : e;
  })());
} }), Be = _({ __name: "LoadMore", props: { isReply: { type: Boolean, default: !1 } }, emits: ["load"], setup(s, { emit: i }) {
  const g = s, k = L(() => ({ "cz-ml-10": !g.isReply, "cz-ml-6": g.isReply })), v = i, C = M(!1), $ = (n = !0) => {
    P(n) ? C.value = !n : C.value = !1;
  }, u = () => {
    C.value = !0, v("load", $);
  };
  return (n, r) => (F(), Y("div", { class: Z(["cz-text-xs cz-flex cz-items-center cz-cursor-pointer cz-space-x-1 cz-text-[--global-primary-color]", k.value]) }, [x(j(De), { type: "primary", plain: "", loading: C.value, link: "", icon: j(Se), onClick: u }, { default: q(() => [U(T(C.value ? "加载中" : "加载更多"), 1)]), _: 1 }, 8, ["loading", "icon"])], 2));
} }), Ge = Ve(_({ name: "EpComment", props: { data: { type: Object, default: () => ({}) }, config: { type: Object, default: () => ({}) }, beforeReply: { type: Function }, load: { type: Function } }, emits: ["click-reply", "click-like", "confirm-reply", "load"], slots: Object, setup: (s) => {
  const i = M(s.data), g = L(() => be({}, te, s.config)), k = M({ level1: !1, level2: !1 });
  pe(() => {
    i.value = s.data;
  }), me(ee, g);
  const { getMapValues: v, addMapValues: C, clearMapValues: $, getRecordComment: u, getChildrenComments: n, getParentComment: r, getParentNodes: o, appendComments: c, updateComment: b, updateLikeCount: e, loadData: l } = ((t) => {
    var H;
    const a = M(/* @__PURE__ */ new Map()), y = (H = de()) == null ? void 0 : H.proxy, z = (d, p, f) => {
      if (!xe(d))
        throw new TypeError("[resolve] list must be an array");
      const { isSubReply: h, loadDone: m, item: S } = p;
      E(d, h ? S : {}, f), m();
    }, D = (d) => {
      const p = y.getValueByKey("commentId", !0);
      return a.value.get(d[p]);
    }, B = (d) => D(d), E = (d, p, f) => {
      const { list: h = [] } = t.data.value, { getValueByKey: m } = y;
      if (!p || R(p))
        return t.data.value.list = h == null ? void 0 : h.concat(d), void (t.data.value[m("hasMore")] = !!f);
      if (m("dataLevel") < 3) {
        const S = D(p);
        if (!S)
          return;
        const { $index: V, index: K } = S;
        if (V === -1 && K > -1 || V > -1) {
          const O = V > -1 ? V : K, N = m("subComment", !0);
          h[O][N] || (h[O][N] = { total: 1, list: [] });
          const le = h[O][N].list ?? [];
          return t.data.value.list[O][N].list = le.concat(d), void (t.data.value.list[O][N][m("hasMore")] = !!f);
        }
      }
    };
    return { resolve: z, getMapValues: D, addMapValues: (d, p) => {
      const f = y.getValueByKey("commentId", !0);
      a.value.set(d[f], p);
    }, recordsDataMap: a, updateComment: (d, p) => {
      if (!d || R(d))
        return;
      const { getValueByKey: f } = y;
      if (f("dataLevel") < 3) {
        const h = D(d);
        if (!h)
          return;
        const { $index: m, index: S } = h;
        if (S < 0)
          return;
        const { list: V = [] } = t.data.value;
        if (R(V))
          return;
        if (m < 0)
          return void (t.data.value.list[S] = p);
        const K = f("subComment", !0);
        t.data.value.list[m][K].list[S] = p;
      }
    }, deleteComment: (d) => {
      if (!d || !R(d))
        return;
      const { getValueByKey: p } = y;
      if (p("dataLevel") < 3) {
        const f = D(d);
        if (!f)
          return;
        const { $index: h, index: m } = f;
        if (m < 0)
          return;
        const { list: S = [] } = t.data.value;
        if (R(S))
          return;
        if (h < 0)
          return void t.data.value.list.splice(m, 1);
        const V = p("subComment", !0);
        t.data.value.list[h][V].list.splice(m, 1);
      }
    }, clearMapValues: () => {
      a.value.clear();
    }, getRecordComment: B, getChildrenComments: (d) => {
      var p;
      return ((p = B(d)) == null ? void 0 : p.children) ?? [];
    }, getParentComment: (d) => {
      var p;
      return (p = B(d)) == null ? void 0 : p.parent;
    }, getParentNodes: (d) => {
      const p = [], f = (h) => {
        const m = B(d);
        return m ? (p.unshift(m), m && m.parent !== void 0 || m != null && m.parent ? void f(m == null ? void 0 : m.parent) : p) : p;
      };
      return f();
    }, appendComments: E, updateLikeCount: (d, p) => {
      if (!d || R(d))
        return;
      const { getValueByKey: f } = y;
      if (f("dataLevel") < 3) {
        const h = D(d);
        if (!h)
          return;
        const { $index: m, index: S } = h;
        if (S < 0)
          return;
        const { list: V = [] } = t.data.value;
        if (R(V))
          return;
        if (m < 0)
          return void (t.data.value.list[S][f("likeCount", !0)] = p);
        const K = f("subComment", !0);
        t.data.value.list[m][K].list[S][f("likeCount", !0)] = p;
      }
    }, loadData: (d) => {
      const { item: p, isSubReply: f } = d, { load: h } = y;
      w(h) && h.call(null, { isSubReply: f, item: p, resolve: (m, S) => z(m, d, S) });
    } };
  })({ data: i });
  return ye(() => {
    $();
  }), { computedData: i, appendComments: c, getValueByKey: (t, a = !1) => {
    const y = a ? `commentFields.${t}` : t;
    return I(g.value, y) ?? y;
  }, getParentComment: r, getRecordComment: u, getChildrenComments: n, getMapValues: v, addMapValues: C, getParentNodes: o, clearMapValues: $, updateComment: b, computedConfig: g, loadingMap: k, loadingStatus: () => {
    const t = M(!1);
    return { isLoading: t, setStatus: (a) => {
      t.value = a;
    } };
  }, loadData: l, updateLikeCount: e };
}, render() {
  const { addMapValues: s, getValueByKey: i } = this, g = (u) => {
    const { slots: n, ...r } = u, o = {};
    return this.$slots.avatar && (o.avatar = () => this.$slots.avatar(r)), this.$slots.level && (o.level = () => this.$slots.level(r)), this.$slots.content && (o.content = () => this.$slots.content(r)), this.$slots.left && (o.left = () => this.$slots.left(r)), this.$slots.right && (o.right = () => this.$slots.right(r)), this.$slots.actions && (o.actions = () => this.$slots.actions(r)), this.$slots.editor && (o.editor = () => this.$slots.editor(r)), o;
  }, k = (u = !1, n) => x(Be, { isReply: u, onLoad: (r) => this.loadData({ loadDone: r, isSubReply: u, ...n }) }, null), v = (u) => {
    const { item: n, isSubReply: r = !1, level1: o = {}, reply: c, slots: b, $index: e = -1, index: l = -1 } = u;
    return x(Le, { data: n, level1: o, isSubReply: r, reply: c, "onClick-like": (t) => {
      this.$emit("click-like", { ...t, item: n, isSubReply: r, level1: o, reply: c, $index: e, index: l });
    }, beforeReply: this.$props.beforeReply, "onConfirm-reply": (t) => {
      this.$emit("confirm-reply", { ...t, item: n, isSubReply: r, level1: o, reply: c, $index: e, index: l, resolve: (a) => {
        this.appendComments(a, n);
      } });
    }, key: I(n, i("commentId", !0)) }, { ...g({ item: n, isSubReply: r, level1: o, reply: c, $index: e, index: l }), ...w(b) ? b() : null });
  }, C = (u, n, r, o = [], c, b = -1, e = -1) => {
    s(u, { parent: c, children: n ?? [], $index: b, index: e }), c !== void 0 ? o.push(v({ item: u, isSubReply: !0, level1: r, reply: c, $index: b, index: e })) : o.push(v({ item: u, isSubReply: !0, level1: r, $index: b, index: e })), n == null || n.forEach((l, t) => {
      const a = I(l, i("children", !0));
      a && !R(a) ? C(l, a, r, o, u, b, t) : o.push(v({ item: l, isSubReply: !0, level1: r, reply: u, $index: b, index: e }));
    });
  }, $ = (u, n) => {
    const r = I(u, i("subComment", !0));
    if (((o) => {
      const c = I(o, i("subComment", !0));
      return c && !R(c) && !R(c[i("list")]);
    })(u)) {
      const o = r[i("hasMore")], c = r[i("list")];
      return s(u, { parent: void 0, children: c, $index: -1, index: n }), { default: () => {
        const b = c == null ? void 0 : c.map((e, l) => ((t, a, y, z) => {
          const D = [], B = i("dataLevel");
          if (B === 2) {
            const E = t[i("reply", !0)] ?? {};
            s(t, { parent: a, children: [], $index: y, index: z }), R(E) ? D.push(v({ item: t, isSubReply: !0, level1: a, $index: y, index: z })) : D.push(v({ item: t, isSubReply: !0, level1: a, reply: E, $index: y, index: z }));
          } else if (B > 2) {
            const E = I(t, i("children", !0));
            if (!E || R(E))
              return v({ item: t, isSubReply: !0, level1: a, $index: y });
            C(t, E, a, D, {}, y);
          }
          return D;
        })(e, u, n, l));
        return o && b.push(k(!0, { item: u })), b;
      } };
    }
    return s(u, { parent: void 0, children: [], $index: -1, index: n }), null;
  };
  return (() => {
    var n;
    const u = (n = this.computedData[i("list")]) == null ? void 0 : n.map((r, o) => v({ item: r, isSubReply: !1, level1: {}, reply: {}, $index: o, slots: () => $(r, o) }));
    return this.computedData[i("hasMore")] && u.push(k(!1)), u;
  })();
} }));
export {
  Ge as default
};
