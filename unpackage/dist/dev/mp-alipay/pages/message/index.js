"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_chat2 = common_vendor.resolveComponent("uni-list-chat");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_chat2 + _easycom_uni_icons2 + _easycom_uni_list2)();
}
const _easycom_uni_list_chat = () => "../../uni_modules/uni-list/components/uni-list-chat/uni-list-chat.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_chat + _easycom_uni_icons + _easycom_uni_list)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const searchValue = common_vendor.ref("");
    const tabs = [{
      name: "\u5168\u90E8",
      key: "all"
    }, {
      name: "\u672A\u8BFB",
      key: "unread"
    }, {
      name: "@\u6211\u7684",
      key: "toMe"
    }];
    const onRefresh = () => {
      console.log("\u4E0B\u62C9\u5237\u65B0......");
    };
    return (_ctx, _cache) => {
      return {
        a: searchValue.value,
        b: common_vendor.o(($event) => searchValue.value = $event.detail.value),
        c: common_vendor.f(tabs, (tab, k0, i0) => {
          return {
            a: common_vendor.t(tab.name),
            b: tab.key
          };
        }),
        d: common_vendor.p({
          ["avatar-circle"]: true,
          title: "\u8D85\u957F\u7684\u540D\u5B57\u554A\u5FEB\u70B9\u653E\u5047\u554A\u5927\u653E\u5047\u554A\u7684 \u554A\u9644\u4EF6\u554A\u624B\u52A8\u9600\u5C31\u963F\u5FB7\u6492\u6CD5\u963F\u8FBE\u653E\u5047\u554A\u7684\u53D1\u554A\u58EB\u5927\u592B\u7ACB\u523B \u963F\u9053\u592B\u5C31\u7231\u4E0A\u5BF9\u65B9  ",
          avatar: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20"
        }),
        e: common_vendor.p({
          title: "uni-app",
          avatar: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20",
          ["badge-text"]: "12"
        }),
        f: common_vendor.p({
          title: "uni-app",
          avatar: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "dot"
        }),
        g: common_vendor.p({
          title: "uni-app",
          avatar: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "99"
        }),
        h: common_vendor.p({
          title: "uni-app",
          ["avatar-list"]: _ctx.avatarList,
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "dot"
        }),
        i: common_vendor.p({
          type: "star-filled",
          color: "#999",
          size: "18"
        }),
        j: common_vendor.p({
          title: "uni-app",
          ["avatar-list"]: _ctx.avatarList,
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "dot"
        }),
        k: common_vendor.p({
          ["avatar-circle"]: true,
          title: "\u8D85\u957F\u7684\u540D\u5B57\u554A\u5FEB\u70B9\u653E\u5047\u554A\u5927\u653E\u5047\u554A\u7684 \u554A\u9644\u4EF6\u554A\u624B\u52A8\u9600\u5C31\u963F\u5FB7\u6492\u6CD5\u963F\u8FBE\u653E\u5047\u554A\u7684\u53D1\u554A\u58EB\u5927\u592B\u7ACB\u523B \u963F\u9053\u592B\u5C31\u7231\u4E0A\u5BF9\u65B9  ",
          avatar: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20"
        }),
        l: common_vendor.p({
          title: "uni-app",
          avatar: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20",
          ["badge-text"]: "12"
        }),
        m: common_vendor.p({
          title: "uni-app",
          avatar: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "dot"
        }),
        n: common_vendor.p({
          title: "uni-app",
          avatar: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "99"
        }),
        o: common_vendor.p({
          title: "uni-app",
          ["avatar-list"]: _ctx.avatarList,
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "dot"
        }),
        p: common_vendor.p({
          type: "star-filled",
          color: "#999",
          size: "18"
        }),
        q: common_vendor.p({
          title: "uni-app",
          ["avatar-list"]: _ctx.avatarList,
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "dot"
        }),
        r: common_vendor.p({
          ["avatar-circle"]: true,
          title: "\u8D85\u957F\u7684\u540D\u5B57\u554A\u5FEB\u70B9\u653E\u5047\u554A\u5927\u653E\u5047\u554A\u7684 \u554A\u9644\u4EF6\u554A\u624B\u52A8\u9600\u5C31\u963F\u5FB7\u6492\u6CD5\u963F\u8FBE\u653E\u5047\u554A\u7684\u53D1\u554A\u58EB\u5927\u592B\u7ACB\u523B \u963F\u9053\u592B\u5C31\u7231\u4E0A\u5BF9\u65B9  ",
          avatar: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20"
        }),
        s: common_vendor.p({
          title: "uni-app",
          avatar: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20",
          ["badge-text"]: "12"
        }),
        t: common_vendor.p({
          title: "uni-app",
          avatar: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "dot"
        }),
        v: common_vendor.p({
          title: "uni-app",
          avatar: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "99"
        }),
        w: common_vendor.p({
          title: "uni-app",
          ["avatar-list"]: _ctx.avatarList,
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "dot"
        }),
        x: common_vendor.p({
          type: "star-filled",
          color: "#999",
          size: "18"
        }),
        y: common_vendor.p({
          title: "uni-app",
          ["avatar-list"]: _ctx.avatarList,
          note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "dot"
        }),
        z: common_vendor.p({
          border: true
        }),
        A: common_vendor.o(onRefresh)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-191297be"]]);
my.createPage(MiniProgramPage);
