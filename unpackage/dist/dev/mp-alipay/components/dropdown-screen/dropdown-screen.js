"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "com-dropdown-screen",
  data() {
    return {
      currentIndex: 0,
      currentSubIndex: 0,
      show: false,
      updateArr: [],
      arrBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAGfklEQVR4Xu2aXWhcRRTH5+xuWIs+pOiDlTxY6YMWfVD0waIPFnywktVWE7/ws1RNwmbmZlNFrbJq/SDZZM4kIaJWxVoVm6rYCCIWRKqISFHwgz5o6YMpPkjNg1+F3T0y4aaU7Z3Zu7uT3U069ymQmf8557f/e2funAvMXw0TgIYVvADzEB2YwEP0EB0QcCDhneghOiDgQMI70UN0QMCBhHeih+iAgAMJ70QP0QEBBxLeiR6iAwIOJLwTPUQHBBxIeCd6iA4IOJDwTmwGRCHEOzoOIt7pIN6yktC1A0BJSnm3LXGrE4UQrzHGHtACRPSGUmrh7zPh4py/DgD3h7W+hIj9prqNEIUQE4yxbMVEq9hKgSuEmGaM9Z1aDwCMSSmHo2qMhCiEeJ4x9ljUBCKSSqmhlQKssg7O+TgABIb6nkPEHZX/M0HcyRh7wgLqBUR8fKWBtJlH1woAO6WUT8aCqAdxzgsAkLOAegoRn10pIIUQGs4zlnoKiLg99u28OFAIMcUYGzA+UAEekVKOLneQQRBsJ6IRS51TUsrK9eHk8Kr7xCAIdhHRVguoQUScXK4ghRAajl5ETdcuRNxmq68qRD1ZCLGHMXaXSYiIHlRKvbrcQHLOtwHAK5a69iilrHvEhWdlzMIhCIIZIrrFMv4eRHwrpl7LhwkhNJzdlkT2IWKv3iJXSzYuRBYEwSoimmGM3Wj55XqVUnpMW1+c8x4A2GtJcrazs7M3n8//F6eQ2BC1WF9f3+p0Or2PMbbR8hDOSCln4wRvxZggCLqJaL8l9meMsV5EnI+bX00Qw+fjGiLaBwAbooIQkf71MkopnUxbXZzz6xlj+wHgLENiBzs6OnpHR0d/ryXxmiFq8eHh4bXFYlE78gpDsHkA0I48WEsySzk2CIJrQwd2GuJ8GzrwaK151AVRB8lms+tTqZRebNYbHKl/Te1InVxLL875VaEDzzck8mOxWOyZmpo6XE+idUMMb23tRL2QXGQIfjR05A/1JOdiThAEl4UOvNDwY/8KALci4vf1xmsIog46ODi4IZFIaJAXGJI8nEgkuqWUv9SbZL3zgiBYVy6XZwHgYoPGnN62KaW+qTeGntcwxNCRG8PFZnVUMgDwXbFYzExOTv7WSLK1zM1ms12pVGo/EV1umHccALZIKb+oRTeyvkYFFucPDQ1tKpfLerFZZdD8OplMZsbGxv5wFdOkk8vlziuVSnobc7VhzD9EtEUp9amLXJw4cTERzrl+o5kBgEhdAPj8xIkTmenp6b9cJB+l0d/ff046ndYOvM7weKFEIrFZSvmRqxycQgxvbf2Ord+1TdcnnZ2dmXw+X3RVxKJOPp9Pzc/PawfeYNImotuVUu+5jO0cok4uCIKtRLTLUsiHSqktLgvRWpzzDwBgs0kXAO6TUr7pOu6SQAwdqc8h9Xmk6XrXZQcx7EreYQH4kJTSeGLTCNglgxg6MkdEBYsjnXQQKzpzp4UjIq6Usp0ZNsLQzRbHlgHnfAcA2NoIDXUQozpzFfk8iojGU+uG6IWTl9SJiwkKIayNr3o7iFU6czp8HhGfdgHKptEUiOGtXSAiW+Orpg5itc4cEb2olIps+7qG2jSI4WJjbXwxxmJ1EGN05hQiCtewjItWswKdcmuf/DQlKjZU6SBW68wxxl5GxIebWVdTnbhYGOf8bQCwfSAV2UGM0ZnbjYj3NhOgjtUSiOGt/T5jzLjhruwgVuvMMcb2IuJtzQbYUog9PT3Jrq4u/Y67yVL4QgcxRmdudm5ubvPMzEzpjIKoix0eHj67WCzqd11j44uIeqt05g6kUqmbC4XC360A2FInLhY8MDBwbkdHh+4Omo6tbGy+BICbpJTHWwWwLSDqJPQBaiKR0F040wHqaYyI6FA6nc6MjIwcayXAtoEYbsbXhb2QS2JA+Sns3RyJMXbJh7RsdY6qbHBw8NJkMqkXm7WWyo8kk8nusbGxn5ecTswAbQUxdOSVoSPXRNRwrFwuZyYmJg7FrK8pw9oOoq46l8tdUyqV9GJzstFORH8CQDciftUUMjUEaUuIOv+KTz7+DZ+BB2qorWlD2xZieGsvfHyk+9bj4+MfN41KjYHaGmLoyJ52/1yv7SHWaIqWDPcQHWD3ED1EBwQcSHgneogOCDiQ8E70EB0QcCDhneghOiDgQMI70UN0QMCBhHeih+iAgAMJ70QP0QEBBxLeiR6iAwIOJLwTHUD8H6jEM3DI2mUkAAAAAElFTkSuQmCC"
    };
  },
  computed: {
    maxDropdownLength() {
      return this.itemArr[this.currentIndex].length > this.maxItemCount ? this.maxItemCount : this.itemArr[this.currentIndex].length;
    }
  },
  props: {
    height: {
      type: Number,
      default: 88
    },
    itemHeight: {
      type: Number,
      default: 70
    },
    activeColor: {
      type: String,
      default: "#0377fc"
    },
    bgcolor: {
      type: String,
      default: "#fff"
    },
    listArr: {
      type: Array,
      default: () => {
        return ["\u51B0\u5EA6", "\u751C\u5EA6", "\u52A0\u6599", "\u914D\u9001\u8DDD\u79BB"];
      }
    },
    maxItemCount: {
      type: Number,
      default: 5
    },
    itemArr: {
      type: Array,
      default: () => {
        return [
          [{
            text: "\u52A0\u51B0",
            value: 1
          }, {
            text: "\u53BB\u51B0",
            value: 2
          }],
          [{
            text: "\u4E09\u5206\u7CD6",
            value: 3
          }, {
            text: "\u4E94\u5206\u7CD6",
            value: 4
          }, {
            text: "\u4E03\u5206\u7CD6",
            value: 5
          }, {
            text: "\u5168\u7CD6",
            value: 6
          }],
          [{
            text: "\u73CD\u73E0",
            value: 7
          }, {
            text: "\u6930\u679C",
            value: 8
          }, {
            text: "\u5E03\u4E01",
            value: 9
          }, {
            text: "\u6C34",
            value: 10
          }],
          [{
            text: "1KM",
            value: 11
          }, {
            text: "10KM\u4EE5\u5185",
            value: 12
          }]
        ];
      }
    },
    itemPadding: {
      type: Number,
      default: 24
    },
    maskTouch: {
      type: Boolean,
      default: true
    },
    isNeedChangeTitle: {
      type: Boolean,
      default: true
    },
    barFontSize: {
      type: Number,
      default: 28
    },
    barTextColor: {
      type: String,
      default: "#666"
    },
    itemFontSize: {
      type: Number,
      default: 28
    },
    itemTextColor: {
      type: String,
      default: "#666"
    },
    showTag: {
      type: String,
      default: "text"
    },
    isTouchPrevent: {
      type: Boolean,
      default: true
    },
    customIndexArr: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  mounted() {
    this.updateArr = [...new Set(this.listArr)];
  },
  methods: {
    itemClick(index) {
      if (this.customIndexArr.includes(index)) {
        this.show = false;
        this.$emit("customClick", {
          "$index": index
        });
        return;
      }
      if (this.currentIndex == index) {
        this.show = !this.show;
      } else {
        this.currentIndex = index;
        this.show = true;
      }
    },
    subItemClick(index) {
      this.currentSubIndex = index;
      if (this.isNeedChangeTitle) {
        this.updateArr.splice(this.currentIndex, 1, this.itemArr[this.currentIndex][this.currentSubIndex][this.showTag]);
      }
      this.$emit("finish", __spreadValues({
        "$index": this.currentIndex
      }, this.itemArr[this.currentIndex][this.currentSubIndex]));
      this.show = false;
    },
    maskClose() {
      if (!this.maskTouch)
        return;
      this.show = false;
    },
    touchControl() {
      if (this.isTouchPrevent) {
        this.maskClose();
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.updateArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: $data.show ? $data.currentIndex == index ? "rotate(180deg)" : "rotate(0)" : "rotate(0)",
        c: common_vendor.o(($event) => $options.itemClick(index)),
        d: index,
        e: $data.currentIndex == index && $data.show ? $props.activeColor : $props.barTextColor
      };
    }),
    b: $data.arrBase64,
    c: 100 / $props.listArr.length + "%",
    d: $props.barFontSize + "rpx",
    e: common_vendor.f($props.itemArr[$data.currentIndex], (item, index, i0) => {
      return {
        a: common_vendor.t(item[$props.showTag]),
        b: index,
        c: common_vendor.o(($event) => $options.subItemClick(index))
      };
    }),
    f: $props.itemHeight + "rpx",
    g: $props.itemPadding + "rpx",
    h: $props.itemFontSize + "rpx",
    i: $props.itemTextColor,
    j: "-" + $props.itemHeight * $options.maxDropdownLength + "rpx",
    k: $props.itemHeight * $options.maxDropdownLength + "rpx",
    l: $props.bgcolor,
    m: $data.show ? "1" : "0",
    n: $data.show ? "block" : "none",
    o: $props.height + "rpx",
    p: $props.bgcolor,
    q: common_vendor.n($data.show ? "bg-mask-show" : ""),
    r: common_vendor.o((...args) => $options.maskClose && $options.maskClose(...args)),
    s: common_vendor.o((...args) => $options.touchControl && $options.touchControl(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createComponent(Component);
