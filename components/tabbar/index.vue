<template>
	<view class="tabbar safe-area-inset-bottom">
		<view class="menus">
			<view class="menu" v-for="(item,index) in tabBarList" :key="index" @click="handleTabBar(index)">
				<view class="round" v-if="item.midButton">
					<view class="name">
						{{item.name}}
					</view>
				</view>
				<view v-else>
					<view class="u-flex u-row-center">
						<image mode="heightFix" class="icon" :src="current==index?item.selectedIconPath:item.iconPath"></image>
					</view>
					<view class="menu-name">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tabbar",
		data() {
			return {
				current:0,
			};
		},
		props:{
			tabBarList:{
				type:Array,
				default:[]
			}
		},
		methods:{
			handleTabBar(index){
				this.current = index;
				this.$emit('handleTabBar',index)
			}
		}
	}
</script>

<style lang="scss">
	.tabbar{
		width: 100vw;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #FFFFFF;
		box-shadow: 0px 18px 57px 0px rgba(231, 70, 64, 0.35);
		
		.menus{
			position: relative;
			height: 153rpx;
			display: flex;
			align-items: center;
			
			.menu{
				width: calc(100% / 3);
				display: flex;
				align-items: center;
				justify-content: center;
				
				.icon{
					height: 46rpx;
				}
				
				.menu-name{
					margin-top: 17rpx;
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: 800;
					color: #788494;
					text-align: center;
					line-height: 20rpx;
				}
			}
			
			.round{
				position: absolute;
				display: flex;
				align-items: center;
				justify-content: center;
				top: -50%;
				width: 174rpx;
				height: 174rpx;
				background: #9B70C2;
				box-shadow: 1rpx 2rpx 18rpx 1rpx rgba(155, 112, 194, 0.89);
				border-radius: 50%;
				.name{
					width: 84rpx;
					height: 84rpx;
					font-size: 42rpx;
					line-height: 42rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
		}
	}
</style>
