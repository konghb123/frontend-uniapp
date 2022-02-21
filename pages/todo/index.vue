<template>
	<view class="dp-fc p-0-20 search">
		<input type="text" v-model="searchValue" class="w100" placeholder="搜索" placeholder-class="fs-22" />
	</view>
	<view class="bg-fff f-1">
		<scroll-view scroll-y="true" class="chatList" @scrolltolower="lower">
			<uni-list>
				<uni-list-item>
					<template slot="header">
						自定义插槽
					</template> 
				</uni-list-item>
			</uni-list>
		</scroll-view>
	</view>
	<view class="dp-f ac-c jc-sa bg-fff p-20-0">
		<button type="default">回退</button>
		<button type="default">确认</button>
		<button type="default">沟通</button>
		<button type="default">转办</button>
	</view>
</template>

<script setup lang="ts">
	import {
		ref
	} from "vue"

	// search
	const searchValue: string = ref('')

	// chat list
	const lower = () => {
		console.log('刷新列表......')
	}
</script>

<style lang="scss">
	.search {
		height: 100rpx;
	}

	.chatList {
		height: calc(100vh - 210rpx);
	}
</style>
