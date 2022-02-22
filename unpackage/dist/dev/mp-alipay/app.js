"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/todo/index.js";
  "./pages/todo/todoDetail.js";
  "./pages/message/index.js";
  "./pages/login/login.js";
  "./pages/login/logo.js";
  "./pages/project/index.js";
  "./pages/detail/index.js";
}
const _sfc_main = {
  setup(__props) {
    common_vendor.onLaunch(() => {
      common_vendor.index.login({
        provider: common_vendor.index.getProvider({
          service: "oauth"
        }),
        scopes: "auth_user",
        success: (loginRes) => {
          console.log("login \u6210\u529F \u83B7\u53D6code", loginRes.code);
          common_vendor.index.setStorageSync("token", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpblJvbGUiOnsidWlkIjoiNjFhZGEyY2Y2Nzk2YmM4NDI1OGVmNjc5IiwibmFtZSI6IueuoeeQhuWRmOe7hC3ns7vnu5_nrqHnkIblkZgiLCJ0eXBlIjoiT3JnYW5pemF0aW9uUm9sZSJ9LCJ1c2VyTmFtZSI6ImFkbWluIiwidXNlclVpZCI6IjYxODRkZjU0OTJmODQxMWE2YTFmMGRmNSIsImlzcyI6InBpcHJvamVjdC5jbiIsImlhdCI6MTY0NTQwODMwMCwiZXhwIjoxNjQ1NjY3NTAwfQ.N8XQNRYwzbI4XZJfBHrGVDsm3xHoBqhgBfVSI37LEmNME4XYg9OyDRBiTXhEQSSnNdXYSSwZNfICOgRN5LbkNg");
          console.log("\u83B7\u53D6toekn", common_vendor.index.getStorageSync("token"));
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
