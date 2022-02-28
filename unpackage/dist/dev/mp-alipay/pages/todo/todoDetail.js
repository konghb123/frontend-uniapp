"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  BottomPopupSelect();
}
const BottomPopupSelect = () => "../../components/bottom-popup-select/bottom-popup-select.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const popupSelect = common_vendor.ref();
    const selects = common_vendor.ref([
      {
        name: "\u9009\u62E9\u4E0B\u4E00\u8282\u70B9",
        value: "next"
      },
      {
        name: "\u5BA1\u6279",
        value: "approval"
      },
      {
        name: "\u6279\u51C6",
        value: "ratify"
      }
    ]);
    const click = () => {
      popupSelect.value.show();
    };
    const selected = (select) => {
      console.log("\u9009\u4E2D", select);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(click),
        b: () => ({
          r: popupSelect,
          k: "popupSelect"
        }),
        c: common_vendor.o(selected),
        d: common_vendor.p({
          selects: selects.value
        })
      };
    };
  }
});
my.createPage(_sfc_main);
