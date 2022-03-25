<template>
	<view class="container safe-area-inset-bottom">
		<view class="u-flex u-row-between address">
			<view class="u-flex">
				<u-icon
					size="18"
					labelColor="#666666"
					labelSize="24"
					:name="require('../../../static/icon/address-active.png')"
					label="杭州未知医院">
				</u-icon>
				<view class="u-m-l-10">
					<u-icon
						name="arrow-down"
						size="25"
						labelColor="#666666">
					</u-icon>
				</view>
			</view>
			<u-icon
				size="24"
				labelColor="#666666"
				labelSize="24"
				:name="require('../../../static/icon/distance-active.png')"
				label="距离您588千米">
			</u-icon>
		</view>
		<view class="content">
			<u-sticky>
				<view class="tabs">
					<u-tabs :list="tabList" activeColor="#9B70C2" :isScroll="false" :current="current" @change="handleChange"></u-tabs>
				</view>
			</u-sticky>
			<view class="u-menu-wrap">
				<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop">
					<view v-for="(item,index) in tabbar" :key="index" class="u-tab-item" :class="[current==index ? 'u-tab-item-active' : '']"
					 :data-current="index" @tap.stop="swichMenu(index)">
						<view class="tab-item-name">
							<text class="u-line-1">{{item.name}}</text>
						</view>
					</view>
				</scroll-view>
				<block v-for="(item,index) in tabbar" :key="index">
					<scroll-view scroll-y class="right-box" v-if="current==index">
						<view class="page-view">
							<view class="class-item" v-for="(item1, index1) in item.foods" :key="index1">
								<view class="u-flex u-col-top">
									<image class="item-menu-image" :src="item1.icon" mode=""></image>
									<view class="u-flex-col u-row-between u-flex-1 right">
										<view class="name u-line-1">上门采样-核酸检测</view>
										<view class="tisp u-line-2">护理描述理描述理描述 理描述</view>
										<view class="price">￥256.00</view>
									</view>
								</view>
								<view class="u-flex u-row-right reserve-btn">
									<view class="u-m-r-10">25人预约过</view>
									<u-button type="primary" plain @click="handleToDetail()">预约</u-button>
								</view>
							</view>
						</view>
					</scroll-view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import classifyData from "@/common/classify.data.js";
	export default {
		data() {
			return {
				tabbar: classifyData,
				scrollTop: 0, //tab标题的滚动条位置
				current: 0, // 预设当前项的值
				menuHeight: 0, // 左边菜单的高度
				menuItemHeight: 0, // 左边菜单item的高度
			};
		},
		methods:{
			handleToDetail(){
				this.$Router.push('/pages/reserve/detail/index')
			},
			// 点击左边的栏目切换
			async swichMenu(index) {
				if(index == this.current) return ;
				this.current = index;
				// 如果为0，意味着尚未初始化
				if(this.menuHeight == 0 || this.menuItemHeight == 0) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
					await this.getElRect('u-tab-item', 'menuItemHeight');
				}
				// 将菜单菜单活动item垂直居中
				this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
			},
			// 获取一个目标元素的高度
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({size: true},res => {
						// 如果节点尚未生成，res值为null，循环调用执行
						if(!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return ;
						}
						this[dataVal] = res.height;
					}).exec();
				})
			}
		}
	}
</script>

<style lang="scss">
.container{
	.address{
		background-color: #FFFFFF;
		height: 50rpx;
		padding: 0 30rpx;
		margin-bottom: 5rpx;
	}
	
	.content{
		height: calc(100vh - 50rpx - env(safe-area-inset-bottom));
		.u-menu-wrap {
			flex: 1;
			display: flex;
			overflow: hidden;
			height: 100%;
			.u-tab-view {
				width: 221rpx;
				height: 100%;
				
				.u-tab-item {
					width: 221rpx;
					height: 99rpx;
					background: #FFFFFF;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #666666;
					line-height: 1;
				}
				
				.u-tab-item-active {
					color: #FFFFFF;
					.tab-item-name{
						background: #9B70C2;
						border-radius: 21rpx;
						width: 185rpx;
						height: 42rpx;
						text-align: center;
						line-height: 42rpx;
					}
				}
			}
		}
		
		.right-box {
			padding-bottom: 20rpx;
			.page-view {
				padding: 0 12rpx 0 14rpx;
				
				.class-item {
					margin-top: 10rpx;
					background-color: #fff;
					padding: 18rpx 18rpx 20rpx 20rpx;
					border-radius: 15rpx;
					box-shadow: 0rpx 2rpx 12rpx 0rpx rgba(0, 0, 0, 0.13);
					
					.item-menu-image {
						width: 163rpx;
						height: 163rpx;
						border-radius: 9rpx;
					}
					
					.right{
						height: 163rpx;
						margin-left: 18rpx;
						
						.name{
							font-size: 30rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #333333;
						}
						
						.tisp{
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: 400;
							color: #666666;
						}
						
						.price{
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FE6C5D;
						}
					}
					
					.reserve-btn{
						font-size: 20rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #999999;
						
						::v-deep .u-btn{
							width: 92rpx;
							height: 43rpx;
							border-radius: 6rpx;
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: 500;
							background-color: #FFFFFF!important;
						}
					}
				}
			}
		}
	}
}
</style>
