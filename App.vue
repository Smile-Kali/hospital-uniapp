<script>
	export default {
		onLaunch: function() {
			uni.hideTabBar({
				
			})
			//判断是否登录
			// if(this.$store.state.login){
			// 	//验证Session是否过期
			// 	uni.checkSession({
			// 		success: (res) => {
			// 			//判断是否已经获取了用户信息
			// 			if(!this.$store.state.userInfo){
			// 				this.$store.commit('getUserInfo')
			// 			}
			// 		},
			// 		fail: (err) => {
			// 			//注销登录
			// 			this.$store.commit('logout')
			// 			//注销配送登录
			// 			uni.removeStorageSync('delivery-Token')
			// 		}
			// 	})
			// }
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	.operate{
		position: fixed;
		width: 100vw;
		bottom: 0;
		left: 0;
		z-index: 10;
		background-color: #FFFFFF;
		box-shadow: 0px -2rpx 8rpx 0px rgba(184, 183, 183, 0.5);
	}
</style>
