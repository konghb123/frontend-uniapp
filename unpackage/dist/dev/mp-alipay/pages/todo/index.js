"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const searchValue = common_vendor.ref("");
    const lower = () => {
      console.log("\u5237\u65B0\u5217\u8868......");
    };
    return (_ctx, _cache) => {
      return {
        a: searchValue.value,
        b: common_vendor.o(($event) => searchValue.value = $event.detail.value),
        c: common_vendor.o(lower)
      };
    };
  }
});
my.createPage(_sfc_main);
