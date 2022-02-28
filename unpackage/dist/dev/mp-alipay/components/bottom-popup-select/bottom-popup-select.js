"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    title: {
      type: String,
      default: ""
    },
    cancel: {
      type: String,
      default: "\u53D6\u6D88"
    },
    selects: {
      type: Array,
      default: () => []
    }
  },
  emits: ["cancelSelect", "selected"],
  setup(__props, { expose, emit }) {
    const popup = common_vendor.ref();
    const show = () => {
      popup.value.open("bottom");
    };
    const cancelSelect = () => {
      emit("cancelSelect");
      popup.value.close();
    };
    const selected = (select) => {
      emit("selected", select);
    };
    expose({
      show
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.title
      }, __props.title ? {
        b: common_vendor.t(__props.title)
      } : {}, {
        c: common_vendor.f(__props.selects, (select, k0, i0) => {
          return {
            a: common_vendor.t(select.name),
            b: select.value,
            c: common_vendor.o(($event) => selected(select))
          };
        }),
        d: common_vendor.t(__props.cancel),
        e: common_vendor.o(cancelSelect),
        f: () => ({
          r: popup,
          k: "popup"
        }),
        g: common_vendor.o(_ctx.change),
        h: common_vendor.p({
          ["background-color"]: "#fff"
        })
      });
    };
  }
});
my.createComponent(_sfc_main);
