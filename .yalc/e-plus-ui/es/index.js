import t from "./form/index.js";
import { defineFormItem as _ } from "./form/index.js";
import e from "./form-schema/index.js";
import { defineFormSchema as oo, useFormSchema as mo } from "./form-schema/index.js";
import i from "./comment/index.js";
import E from "./comment-layout/index.js";
import n from "./pagination/index.js";
import s from "./icon/index.js";
import f from "./menu/index.js";
import { defineMenu as ro, type as ao } from "./menu/index.js";
import l from "./button/index.js";
import d from "./card/index.js";
import u from "./copy-text/index.js";
import L from "./line/index.js";
import C from "./image/index.js";
import c from "./editor/index.js";
import g from "./letter-cude/index.js";
import T from "./diamond/index.js";
import F from "./loading/index.js";
import b from "./text-fold/index.js";
import x from "./notice-bar/index.js";
import { EpTable as y, EpTableColumn as I } from "./table/index.js";
import h from "./virtual-list/index.js";
import { I as p } from "./utils/index2.js";
const W = (o) => o, r = { EpButton: l, EpCard: d, EpLine: L, EpCopyText: u, EpImage: C, EpMenu: f, EpLetterLoading: g, EpDiamondLoading: T, EpLoading: F, EpEditor: c, EpPagination: n, EpNoticeBar: x, EpIcon: s, EpTextFold: b, EpVirtualList: h, EpTable: y, EpTableColumn: I, EpFormSchema: e, EpForm: t, EpCommentLayout: E, EpComment: i }, B = (o, a) => {
  if (!o[p]) {
    o[p] = !0;
    for (const m of Object.keys(r))
      m && o.use(r[m], a);
  }
}, X = { install: B };
export {
  l as EpButton,
  d as EpCard,
  i as EpComment,
  E as EpCommentLayout,
  u as EpCopyText,
  T as EpDiamondLoading,
  c as EpEditor,
  t as EpForm,
  e as EpFormSchema,
  s as EpIcon,
  C as EpImage,
  g as EpLetterLoading,
  L as EpLine,
  F as EpLoading,
  f as EpMenu,
  x as EpNoticeBar,
  n as EpPagination,
  y as EpTable,
  I as EpTableColumn,
  b as EpTextFold,
  h as EpVirtualList,
  X as default,
  _ as defineFormItem,
  oo as defineFormSchema,
  ro as defineMenu,
  W as defineTableColumns,
  B as install,
  ao as type,
  mo as useFormSchema
};
