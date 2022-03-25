<template>
	<view>
		<view class="u-page">
			<mall v-show="current==0"></mall>
			<user v-show="current==2"></user>
		</view>
		<tabbar :tabBarList="tabBarList" @handleTabBar="handleTabBar"></tabbar>
	</view>
	
</template>

<script>
	import tabbar from "@/components/tabbar/index";
	import mall from "@/pages/mall/index/index";
	import user from "@/pages/user/index/index";
	export default {
		components:{
			tabbar,
			mall,
			user
		},
		data() {
			return {
				current:0,
				tabBarList:[
					{
						iconPath: require("../../static/tabBar/home.png"),
						selectedIconPath: require("../../static/tabBar/home-active.png"),
						name: '首页',
					},
					{
						midButton:true,
						name:"立即预约"
					},
					{
						iconPath: require("../../static/tabBar/user.png"),
						selectedIconPath: require("../../static/tabBar/user-active.png"),
						name: '我的',
					},
				],
			}
		},
		methods: {
			handleTabBar(e){
				
				if(e==1){
					// this.$Router.push({path:'/pages/user/site/index/index'})
					this.$Router.push('/pages/reserve/list/index');''
					return false;
				}
				
				uni.setNavigationBarTitle({
					title:this.tabBarList[e].name
				})
				this.current = e;
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
