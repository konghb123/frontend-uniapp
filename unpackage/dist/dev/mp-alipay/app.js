"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/todo/index.js";
  "./pages/message/index.js";
  "./pages/login/login.js";
  "./pages/login/logo.js";
  "./pages/project/index.js";
  "./pages/detail/index.js";
}
const _sfc_main = {
  setup(__props) {
    common_vendor.onLaunch(() => {
      console.log("App Launch");
      common_vendor.index.login({
        provider: common_vendor.index.getProvider({
          service: "oauth"
        }),
        scopes: "auth_user",
        success: (loginRes) => {
          console.log("login \u6210\u529F \u83B7\u53D6code", loginRes.code);
        },
        fail: () => {
        }
      });
    });
    common_vendor.onShow(() => {
      console.log("App Show");
    });
    common_vendor.onHide(() => {
      console.log("App Hide");
    });
    return () => {
    };
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
