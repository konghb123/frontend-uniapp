<script setup>
	import './node_modules/markrgba-css-rpx/index.css'
	import {
		onShow,
		onHide,
		onLaunch
	} from '@dcloudio/uni-app'

	onLaunch(() => {
		console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
		console.log('App Launch')
		// 判断是否登录
		// uni.redirectTo({
		// 	url:'../login/login'
		// })
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
