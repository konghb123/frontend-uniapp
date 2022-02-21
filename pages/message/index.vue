<template>
	<view class="pt-20 pl-20 pr-40 pb-20">
		<input type="text" v-model="searchValue" class="w100" placeholder="搜索" placeholder-class="fs-22" />
	</view>
	<view class="bg-fff f-1">
		<view class="dp-f p-all-20 jc-sa">
			<button type="default" class="fs-24">全部</button>
			<button type="default" class="fs-24">未读</button>
			<button type="default" class="fs-24">@我的</button>
		</view>
		<scroll-view scroll-y="true">
			<uni-list>
				<uni-list :border="true">
					<!-- 显示圆形头像 -->
					<uni-list-chat :avatar-circle="true" title="超长的名字啊快点放假啊大放假啊的 啊附件啊手动阀就阿德撒法阿达放假啊的发啊士大夫立刻 阿道夫就爱上对方  "
						avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
						note="您收到一条新的消息" time="2020-02-02 20:20"></uni-list-chat>
					<!-- 右侧带角标 -->
					<uni-list-chat title="uni-app"
						avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
						note="您收到一条新的消息" time="2020-02-02 20:20" badge-text="12"></uni-list-chat>
					<!-- 头像显示圆点 -->
					<uni-list-chat title="uni-app"
						avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
						note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot">
					</uni-list-chat>
					<!-- 头像显示角标 -->
					<uni-list-chat title="uni-app"
						avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
						note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="99">
					</uni-list-chat>
					<!-- 显示多头像 -->
					<uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息" time="2020-02-02 20:20"
						badge-positon="left" badge-text="dot"></uni-list-chat>
					<!-- 自定义右侧内容 -->
					<uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息" time="2020-02-02 20:20"
						badge-positon="left" badge-text="dot">
						<view class="chat-custom-right">
							<text class="chat-custom-text">刚刚</text>
							<!-- 需要使用 uni-icons 请自行引入 -->
							<uni-icons type="star-filled" color="#999" size="18"></uni-icons>
						</view>
					</uni-list-chat><!-- 显示圆形头像 -->
					<uni-list-chat :avatar-circle="true" title="超长的名字啊快点放假啊大放假啊的 啊附件啊手动阀就阿德撒法阿达放假啊的发啊士大夫立刻 阿道夫就爱上对方  "
						avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
						note="您收到一条新的消息" time="2020-02-02 20:20"></uni-list-chat>
					<!-- 右侧带角标 -->
					<uni-list-chat title="uni-app"
						avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
						note="您收到一条新的消息" time="2020-02-02 20:20" badge-text="12"></uni-list-chat>
					<!-- 头像显示圆点 -->
					<uni-list-chat title="uni-app"
						avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
						note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot">
					</uni-list-chat>
					<!-- 头像显示角标 -->
					<uni-list-chat title="uni-app"
						avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
						note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="99">
					</uni-list-chat>
					<!-- 显示多头像 -->
					<uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息" time="2020-02-02 20:20"
						badge-positon="left" badge-text="dot"></uni-list-chat>
					<!-- 自定义右侧内容 -->
					<uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息" time="2020-02-02 20:20"
						badge-positon="left" badge-text="dot">
						<view class="chat-custom-right">
							<text class="chat-custom-text">刚刚</text>
							<!-- 需要使用 uni-icons 请自行引入 -->
							<uni-icons type="star-filled" color="#999" size="18"></uni-icons>
						</view>
					</uni-list-chat><!-- 显示圆形头像 -->
					<uni-list-chat :avatar-circle="true" title="超长的名字啊快点放假啊大放假啊的 啊附件啊手动阀就阿德撒法阿达放假啊的发啊士大夫立刻 阿道夫就爱上对方  "
						avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
						note="您收到一条新的消息" time="2020-02-02 20:20"></uni-list-chat>
					<!-- 右侧带角标 -->
					<uni-list-chat title="uni-app"
						avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
						note="您收到一条新的消息" time="2020-02-02 20:20" badge-text="12"></uni-list-chat>
					<!-- 头像显示圆点 -->
					<uni-list-chat title="uni-app"
						avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
						note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot">
					</uni-list-chat>
					<!-- 头像显示角标 -->
					<uni-list-chat title="uni-app"
						avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
						note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="99">
					</uni-list-chat>
					<!-- 显示多头像 -->
					<uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息" time="2020-02-02 20:20"
						badge-positon="left" badge-text="dot"></uni-list-chat>
					<!-- 自定义右侧内容 -->
					<uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息" time="2020-02-02 20:20"
						badge-positon="left" badge-text="dot">
						<view class="chat-custom-right">
							<text class="chat-custom-text">刚刚</text>
							<!-- 需要使用 uni-icons 请自行引入 -->
							<uni-icons type="star-filled" color="#999" size="18"></uni-icons>
						</view>
					</uni-list-chat>
				</uni-list>
			</uni-list>
		</scroll-view>
	</view>
</template>

<script setup lang="ts">
	import {
		ref
	} from "vue"
	import {
		onShow
	} from '@dcloudio/uni-app'
	const searchValue = ref('')
	console.log(searchValue)
</script>

<style lang="scss">
</style>
