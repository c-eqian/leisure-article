import { w as d } from "../utils/index2.js";
import { defineComponent as m, computed as u, openBlock as c, createBlock as f, unref as z, mergeProps as v } from "vue";
import { ElPagination as k } from "element-plus";
import { _ as y } from "../_plugin-vue_export-helper/index.js";
const P = d(y(m({ __name: "Pagination", props: { size: { default: "small" }, total: {}, page: { default: 1 }, limit: { default: 20 }, pageSizes: { default: () => [10, 20, 30, 50] }, pagerCount: { default: 5 }, layout: { default: "total, sizes, prev, pager, next, jumper" }, background: { type: Boolean, default: !0 }, hidden: { type: Boolean, default: !1 } }, emits: ["update:page", "pagination", "update:limit"], setup(l, { emit: g }) {
  const n = l, t = g, e = u({ get: () => n.page, set(a) {
    t("update:page", a);
  } }), p = u({ get: () => n.limit, set(a) {
    t("update:limit", a);
  } });
  function r(a) {
    e.value * a > n.total && (e.value = 1), t("pagination", { page: e.value, limit: a });
  }
  function s(a) {
    t("pagination", { page: a, limit: p.value });
  }
  return (a, o) => (c(), f(z(k), v({ "current-page": e.value, "onUpdate:currentPage": o[0] || (o[0] = (i) => e.value = i), "page-size": p.value, "onUpdate:pageSize": o[1] || (o[1] = (i) => p.value = i), size: a.size, background: a.background, layout: a.layout, "page-sizes": a.pageSizes, "pager-count": a.pagerCount, total: a.total }, a.$attrs, { onSizeChange: r, onCurrentChange: s }), null, 16, ["current-page", "page-size", "size", "background", "layout", "page-sizes", "pager-count", "total"]));
} }), [["__scopeId", "data-v-ba86cf17"]]));
export {
  P as default
};
