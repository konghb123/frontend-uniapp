<template>
  <view>
    <uni-popup ref="popup" background-color="#fff" @change="change">
      <view class="bg-fff dp-f fd-c jc-c" style="text-align: center">
        <view v-if="title" class="p-20-0">{{ title }}</view>
        <view
          class="p-20-0"
          v-for="select in selects"
          :key="select.value"
          @click="selected(select)"
          >{{ select.name }}</view
        >
        <view class="pt-40 pb-30" @click="cancelSelect">
          {{ cancel }}
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script setup lang='ts'>
import { ref, defineExpose, defineProps, PropType, defineEmits } from "vue";
export interface selectType {
  name: string;
  value: string;
}

const emit = defineEmits(["cancelSelect", "selected"]);

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  cancel: {
    type: String,
    default: "取消",
  },
  selects: {
    type: Array as PropType<selectType[]>,
    default: () => [],
  },
});

const popup = ref();

// 弹出
const show = () => {
  popup.value.open("bottom");
};
// 取消选择
const cancelSelect = () => {
  emit("cancelSelect");
  popup.value.close()
};
// 选择
const selected = (select: selectType) => {
  emit("selected", select);
};

defineExpose({
  show,
});
</script>
<style lang="scss" scoped>
</style>