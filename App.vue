<script setup>
import "./node_modules/markrgba-css-rpx/index.css";
import { onShow, onHide, onLaunch } from "@dcloudio/uni-app";

onLaunch(() => {

  //  获取code
  uni.login({
    provider: uni.getProvider({
      service: "oauth",
    }),
    scopes: "auth_user", //支付宝小程序需设置授权类型
    success: (loginRes) => {
      console.log("login 成功 获取code", loginRes.code);
      // 请求后端接口 获取token
      uni.setStorageSync(
        "token",
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpblJvbGUiOnsidWlkIjoiNjFhZGEyY2Y2Nzk2YmM4NDI1OGVmNjc5IiwibmFtZSI6IueuoeeQhuWRmOe7hC3ns7vnu5_nrqHnkIblkZgiLCJ0eXBlIjoiT3JnYW5pemF0aW9uUm9sZSJ9LCJ1c2VyTmFtZSI6ImFkbWluIiwidXNlclVpZCI6IjYxODRkZjU0OTJmODQxMWE2YTFmMGRmNSIsImlzcyI6InBpcHJvamVjdC5jbiIsImlhdCI6MTY0NTQwODMwMCwiZXhwIjoxNjQ1NjY3NTAwfQ.N8XQNRYwzbI4XZJfBHrGVDsm3xHoBqhgBfVSI37LEmNME4XYg9OyDRBiTXhEQSSnNdXYSSwZNfICOgRN5LbkNg"
      );
      console.log("获取toekn", uni.getStorageSync("token"));
    },
    fail: () => {},
  });
});

onShow(() => {
  console.log("App Show");
});

onHide(() => {
  console.log("App Hide");
});
</script>

<style lang="scss">
/*每个页面公共css */
@import "@/uni_modules/uni-scss/index.scss";
/* #ifndef APP-NVUE */
@import "@/static/style/customicons.css";

// 设置整个项目的背景色
page {
  // background-color: #f5f5f5;
}

/* #endif */
.example-info {
  font-size: 14px;
  color: #333;
  padding: 10px;
}
</style>
