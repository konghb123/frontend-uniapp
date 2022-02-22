"use strict";
var common_vendor = require("./vendor.js");
const BASE_URL = "http://192.168.10.189:31855";
const http = (options) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASE_URL + "/api" + options.url,
      method: options.method || "GET",
      data: options.data || {},
      header: { Authorization: common_vendor.index.getStorageSync("token") },
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        console.log("err", err);
        if (err.statusCode == 404) {
          return common_vendor.index.showToast({
            icon: "",
            title: "\u63A5\u53E3\u4E0D\u5B58\u5728!"
          });
        }
        reject(err);
      }
    });
  });
};
const get = (options) => {
  options.method = "GET";
  return http(options);
};
const post = (options) => {
  options.method = "POST";
  return http(options);
};
var request = {
  get,
  post,
  http
};
exports.request = request;
