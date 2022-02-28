"use strict";
var common_vendor = require("../../common/vendor.js");
var api_todoApi = require("../../api/todoApi.js");
require("../../common/request.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_search_bar2 + _easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (dropdownScreen + _easycom_uni_search_bar + _easycom_uni_list_item + _easycom_uni_list + BottomButtons)();
}
const dropdownScreen = () => "../../components/dropdown-screen/dropdown-screen.js";
const BottomButtons = () => "./components/bottom-buttons.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    common_vendor.ref("");
    const lower = () => {
      console.log("\u5237\u65B0\u5217\u8868......");
    };
    api_todoApi.queryTodoTasks(0, 10).then((res) => {
      console.log(res.data);
    });
    const toDetail = () => {
      console.log("toDetail...");
      common_vendor.index.navigateTo({
        url: "/pages/todo/todoDetail?id=111"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(_ctx.search),
        b: common_vendor.o(_ctx.cancel),
        c: common_vendor.p({
          radius: "5",
          placeholder: "\u6309\u6D41\u7A0B\u540D\u79F0\u641C\u7D22",
          clearButton: "always",
          bgColor: "#ffffff"
        }),
        d: common_vendor.o(toDetail),
        e: common_vendor.p({
          clickable: true
        }),
        f: common_vendor.o(lower)
      };
    };
  }
});
my.createPage(_sfc_main);
