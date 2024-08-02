import { w as _ } from "../utils/index2.js";
import { unref as h, defineComponent as D, computed as j, inject as H, h as b, toRef as T, ref as x, provide as L, onMounted as W, createVNode as z, reactive as G, nextTick as J, onUnmounted as Q } from "vue";
import { ElInput as X, ElCascader as Y, ElRadio as Z, ElSwitch as ee, ElCheckbox as te, ElTimePicker as se, ElTimeSelect as le, ElDatePicker as ae, ElSlider as re, ElRate as oe, ElInputNumber as ie, ElDivider as U, ElAutocomplete as ne, ElSelect as ce, ElCol as ue, ElFormItem as q, ElButton as $, ElForm as de, ElRow as pe } from "element-plus";
import { h as B, f as me, g as R, s as fe, U as O, d as A, y as N, W as C, l as ve, C as Fe } from "../_chunks/@eqian/index.js";
const he = (r, i) => {
  const { col: s = {} } = r;
  if (me(s))
    return { span: s };
  if (R(s)) {
    const t = h(i);
    return { span: fe(t) && +t > 0 && +t < 24 ? Math.floor(24 / +t) : 24 };
  }
  return O({}, { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }, s);
}, ye = (r, i, s) => {
  const { rules: t, prop: e, label: l } = r;
  if (s)
    return { prop: e, label: l };
  const v = (p) => N(p.validatorFn) ? { field: e, ...C(p, ["validator"]), validator: p.validatorFn(i) } : p;
  return typeof t == "boolean" ? { prop: e, label: l, rules: { required: t, message: `${l} 为必填项`, trigger: "blur" } } : A(t) ? { prop: e, label: l, rules: t.map((p) => v(p)) } : t ? { prop: e, label: l, rules: v(t) } : { rules: t, prop: e, label: l };
}, Ve = (r, i) => {
  const { placeholder: s, type: t, label: e, componentProps: l } = h(r), v = ["select", "date-picker", "time-select", "cascade", "time-picker"], p = ((F) => C(F, ["col", "slotKey", "type", "prop", "label", "componentProps", "rules"]))(h(r)), f = { placeholder: s || (t && v.includes(t) ? "请选择" + e : "请输入" + e), ...C(l ?? {}, ["slots"]) };
  if (l && !R(l)) {
    const { dynamicDisable: F } = l;
    return N(F) ? O(f, p, { disabled: F({ model: i(), item: h(r) }) }) : O(f, p);
  }
  return O(f, p);
}, d = /* @__PURE__ */ new Map();
d.set("input", X), d.set("cascade", Y), d.set("radio-group", Z), d.set("switch", ee), d.set("checkbox-group", te), d.set("time-picker", se), d.set("time-select", le), d.set("date-picker", ae), d.set("slider", re), d.set("rate", oe), d.set("input-number", ie), d.set("divider", U), d.set("divider", U), d.set("autocomplete", ne), d.set("select", ce);
const K = Symbol("FORM_SCHEMA_MODEL"), be = D({ name: "EpFormItem", props: { item: { type: Object, default: () => ({}) }, columns: { type: Number, default: 3 }, isSearch: { type: Boolean, default: !1 } }, setup(r, { slots: i }) {
  const s = j(() => r.item), t = j(() => r.isSearch), e = j(() => r.columns), { type: l, render: v, slotKey: p, ...f } = s.value, F = H(K, {}), M = () => F, I = () => b(ue, { ...he(s.value, e) }, { default: () => b(q, { ...ye(s.value, F, t.value) }, { default: () => (() => {
    var w, E, S, k, o;
    if (p || i[f == null ? void 0 : f.prop])
      return (w = i[p || (f == null ? void 0 : f.prop)]) == null ? void 0 : w.call(i, { item: s, model: F });
    if (N(v))
      return v({ item: h(s), model: F });
    if (B(l) && d.has(l)) {
      const m = d.get(l);
      return b(m, { modelValue: F.value[f.prop], "onUpdate:modelValue": (n) => {
        F.value[f.prop] = n;
      }, ...Ve(s, M) }, { ...(S = (E = s.value) == null ? void 0 : E.componentProps) != null && S.slots ? (o = (k = s.value) == null ? void 0 : k.componentProps) == null ? void 0 : o.slots : {} });
    }
    return null;
  })() }) });
  return () => I();
} });
function ge(r, i, s) {
  let t = r;
  const e = i.split(".");
  for (let l = 0; l < e.length - 1; l++) {
    const v = e[l];
    t[v] || (t[v] = {}), t = t[v];
  }
  t[e[e.length - 1]] = s;
}
const we = D({ name: "FilterButtons", emits: ["search", "reset"], setup: (r, { emit: i }) => () => b("div", null, [b($, { icon: "Search", type: "primary", onClick: () => {
  i("search");
} }, () => "搜索"), b($, { icon: "Refresh", onClick(s) {
  i("reset");
} }, () => "重置")]) }), Ie = () => {
  const r = x(null), i = x(!1), s = async () => {
    const t = h(r);
    return t ? (await J(), t) : (console.warn("获取表单示例失败~~"), null);
  };
  return { registry: async (t) => {
    Q(() => {
      r.value = null;
    }), h(r) === t && h(i) || (r.value = t, i.value = !0);
  }, validate: async (...t) => {
    const e = await s();
    return e == null ? void 0 : e.validate(...t);
  }, validateField: async (...t) => {
    const e = await s();
    return e == null ? void 0 : e.validateField(...t);
  }, resetFields: async (...t) => {
    const e = await s();
    return e == null ? void 0 : e.resetFields(...t);
  }, clearValidate: async (...t) => {
    const e = await s();
    return e == null ? void 0 : e.clearValidate(...t);
  }, scrollIntoView: async (...t) => {
    const e = await s();
    return e == null ? void 0 : e.scrollIntoView(...t);
  }, setFieldsValues: async (t) => {
    const e = await s();
    return e == null ? void 0 : e.setFieldsValues(t);
  }, getFieldsValues: (t = !0) => {
    const e = h(r);
    return e == null ? void 0 : e.getFieldsValues(t);
  }, appendFields: async (t, e) => {
    const l = await s();
    return l == null ? void 0 : l.appendFields(t, e);
  }, deleteField: async (t) => {
    const e = await s();
    return e == null ? void 0 : e.deleteField(t);
  }, getFormInstance: s };
}, je = (r) => r, Oe = _(D({ name: "EpFormSchema", props: { model: { type: Object, default: () => ({}) }, config: { type: Object, default: () => {
} } }, emits: ["registry", "search"], setup(r, { emit: i }) {
  const s = j(() => r.config), t = T(r.config.items), e = x(), l = T(R(r.model) ? (() => {
    const o = /* @__PURE__ */ Object.create(null);
    return t.value.forEach((m) => {
      B(m.prop) && (o[m.prop] = m.defaultValue ?? "");
    }), o;
  })() : r.model);
  L(K, l);
  const { validate: v, resetFields: p, clearValidate: f, validateField: F, scrollIntoView: M } = /* @__PURE__ */ ((o) => {
    const m = (n) => {
      var a, c, u;
      (u = (c = (a = o.value) == null ? void 0 : a.$el) == null ? void 0 : c.querySelector(`[field="${n}"]`)) == null || u.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    };
    return { validate: async (n, a) => {
      var c, u;
      if (n)
        try {
          return await ((c = o.value) == null ? void 0 : c.validate(a));
        } catch (y) {
          const V = y, g = Object.keys(V)[0];
          return m(g), Promise.reject(y);
        }
      return (u = o.value) == null ? void 0 : u.validate(a);
    }, resetFields: (...n) => {
      var a;
      return o.value ? (a = o.value) == null ? void 0 : a.resetFields(...n) : (console.warn("表单启用失败"), Promise.resolve(!0));
    }, clearValidate: (...n) => {
      var a;
      return (a = o.value) == null ? void 0 : a.clearValidate(...n);
    }, validateField: (...n) => {
      var a;
      return o.value ? (a = o.value) == null ? void 0 : a.validateField(...n) : (console.warn("表单启用失败"), Promise.resolve(!0));
    }, scrollIntoView: m };
  })(e), { appendFields: I, deleteField: w } = /* @__PURE__ */ ((o, m) => {
    const n = () => {
      const a = o();
      return Object.entries(h(a));
    };
    return { appendFields: (a, c) => {
      const u = o(), y = (V) => {
        A(a) ? u.value.splice(V, 0, ...a) : u.value.splice(V, 0, a);
      };
      if (B(c))
        for (const V of n()) {
          const [g, P] = V;
          if (P.prop && P.prop == c)
            return void y(+g + 1);
        }
      else
        y(typeof c != "boolean" || c ? u.value.length : 0);
      m(u.value);
    }, deleteField: (a) => {
      if (!a)
        return;
      const c = o();
      for (const u of n()) {
        const [y, V] = u;
        if (V.prop && V.prop == a)
          return c.value.splice(+y, 1), void m(c.value);
      }
    } };
  })(() => t, (o) => {
    t.value = o;
  }), { getFieldsValues: E, setFieldsValues: S, resetFieldsValues: k } = /* @__PURE__ */ ((o, m) => {
    const n = (a) => {
      if (!R(a))
        for (const c of Object.entries(a)) {
          const [u, y] = c;
          m(u, y);
        }
    };
    return { getFieldsValues: (a = !0) => {
      const c = h(o());
      if (!ve(c))
        return {};
      const u = {}, y = Object.entries(c);
      for (const V of y) {
        const [g, P] = V;
        a ? ge(u, g, P) : u[g] = P;
      }
      return u;
    }, setFieldsValues: n, resetFieldsValues: () => {
      const a = h(o());
      n(Fe(a));
    } };
  })(() => l, (o, m) => {
    (o in l.value || t.value.map((n) => n.prop).filter(Boolean).includes(o)) && (l.value[o] = m);
  });
  return W(() => {
    i("registry", { validate: v, resetFields: p, clearValidate: f, validateField: F, setFieldsValues: S, resetFieldsValues: k, scrollIntoView: M, deleteField: w, appendFields: I, getFieldsValues: E });
  }), { formModel: l, formProps: s, items: t, emit: i, epFormSchemaRef: e, appendFields: I, setFieldsValues: S, getFieldsValues: E, resetFieldsValues: k, validate: v, deleteField: w, resetFields: p, clearValidate: f, validateField: F };
}, render() {
  const r = () => b(pe, null, () => {
    const i = !!this.formProps.isSearch, s = this.formProps.columns, t = this.items.map((e) => b(be, { item: e, key: e.prop || e.label, isSearch: i, columns: s }));
    return i && t.push(b(q, null, () => b(we, { onSearch: () => this.emit("search", this.getFieldsValues()), onReset: () => {
      this.resetFieldsValues(), this.emit("search", {});
    } }))), t;
  });
  return z("div", null, [(() => {
    const i = C(this.formProps, ["items", "isSearch"]);
    return b(de, G({ model: this.formModel, ref: (s) => this.epFormSchemaRef = s, ...i }), () => r());
  })()]);
} }));
export {
  Oe as default,
  je as defineFormSchema,
  Ie as useFormSchema
};
