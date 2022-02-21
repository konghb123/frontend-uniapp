<script setup>
	import './node_modules/markrgba-css-rpx/index.css'
	import {
		onShow,
		onHide,
		onLaunch,
	} from '@dcloudio/uni-app'

	onLaunch(() => {
		console.log('App Launch')
		uni.login({
			provider: uni.getProvider({
				service: 'oauth'
			}),
			scopes: 'auth_user', //支付宝小程序需设置授权类型
			success: (loginRes) => {
				console.log('login 成功 获取code', loginRes.code);
			},
			fail: () => {}
		});
	})


	onShow(() => {
		console.log('App Show')
	})


	onHide(() => {
		console.log('App Hide')
	})
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/style/customicons.css';

	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
