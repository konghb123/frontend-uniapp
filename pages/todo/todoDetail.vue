<template>
  <view @click="click">待办详情</view>
  <BottomPopupSelect
    ref="popupSelect"
    :selects="selects"
    @selected="selected"
  />
</template>

<script setup lang='ts'>
import { ref } from "vue";
import BottomPopupSelect, {
  selectType,
} from "@/components/bottom-popup-select/bottom-popup-select.vue";

const popupSelect = ref();

const selects = ref([
  {
    name: "选择下一节点",
    value: "next",
  },
  {
    name: "审批",
    value: "approval",
  },
  {
    name: "批准",
    value: "ratify",
  },
]);
const click = () => {
  popupSelect.value.show();
};
const selected = (select: selectType) => {
  console.log("选中", select);
};
</script>
<style>
</style>