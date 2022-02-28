<template>
  <view class="dp-f jc-sa p-0-20 search">
    <dropdownScreen />
    <uni-search-bar
      radius="5"
      placeholder="按流程名称搜索"
      clearButton="always"
      bgColor="#ffffff"
      @confirm="search"
      @cancel="cancel"
    />
  </view>
  <view class="bg-fff f-1">
    <scroll-view scroll-y="true" class="chatList" @scrolltolower="lower">
      <uni-list>
        <uni-list-item clickable @click="toDetail">
          <template slot="header"> 自定义插槽 </template>
        </uni-list-item>
      </uni-list>
    </scroll-view>
  </view>
  <BottomButtons />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { queryTodoTasks } from "@/api/todoApi";
// 组件
import dropdownScreen from "@/components/dropdown-screen/dropdown-screen.vue";
import BottomButtons from "./components/bottom-buttons.vue";

// search
const searchValue: string = ref("");

// tabs
const tab = "待办";
const tabs = ["待办", "已办", "我发起的"];

// list
const lower = () => {
  console.log("刷新列表......");
};

queryTodoTasks(0, 10).then((res: any) => {
  console.log(res.data);
});

// toDetail
const toDetail = () => {
  console.log("toDetail...");
  uni.navigateTo({
    url: "/pages/todo/todoDetail?id=111",
  });
};
</script>

<style lang="scss">
.search {
  height: 100rpx;
}

.chatList {
  height: calc(100vh - 210rpx);
}
</style>
