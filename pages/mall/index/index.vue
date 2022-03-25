<template>
	<view class="container">
		<view class="top">
			<view class="search">
				<u-search
					bgColor="#FFFFFF"
					inputAlign="center"
					borderColor="#9B70C2"
					:showAction="false"
					placeholder="搜索商品" 
					v-model="keyword">
				</u-search>
			</view>
			<view class="swiper">
				<u-swiper :list="list"></u-swiper>
			</view>
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
							<view class="class-item u-flex" v-for="(item1, index1) in item.foods" :key="index1">
								<image class="item-menu-image" :src="item1.icon" mode=""></image>
								<view class="u-flex-col u-row-between u-m-l-18 u-flex-1 right">
									<view class="u-line-2 name">上门采样-核酸检测</view>
									<view class="u-flex u-row-between">
										<view class="price">￥256.00</view>
										<u-icon @click="handleOpen" size="44" :name="require('../../../static/icon/add.png')"></u-icon>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</block>
			</view>
		</view>
		<u-popup borderRadius="20" safeAreaInsetBottom closeable mode="bottom" v-model="show">
			<view class="popup">
				<view class="goods u-flex">
					<u-image width="163" height="163" borderRadius="9"></u-image>
					<view class="u-m-l-20 u-flex-1 info u-flex-col u-row-between">
						<view class="name u-line-2"> 
							上门采样-核酸检测
						</view>
						<view class="u-flex u-row-between">
							<view class="price">￥256.00</view>
							<u-number-box v-model="value"></u-number-box>
						</view>
					</view>
				</view>
				<view class="bottom u-flex u-row-between">
					<view class="u-flex u-col-bottom">
						<view class="total">总计:</view>
						<view class="price">730.00</view>
					</view>
					<view class="button">
						<u-button type="primary" @click="handleToDetail">立即购买</u-button>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import classifyData from "@/common/classify.data.js";
	export default {
		data() {
			return {
				value:0,
				show:false,
				tabbar: classifyData,
				scrollTop: 0, //tab标题的滚动条位置
				current: 0, // 预设当前项的值
				menuHeight: 0, // 左边菜单的高度
				menuItemHeight: 0, // 左边菜单item的高度
				keyword:"",
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				tabList: [{
					name: '服务项目'
				}, {
					name: '服务项目'
				}, {
					name: '服务项目'
				}, {
					name: '服务项目'
				}],
				current: 0
			};
		},
		methods:{
			handleOpen(){
				this.show = true;
			},
			handleChange(e){
				this.current = e;
			},
			handleToDetail(){
				this.$Router.push({path:"/pages/mall/detail/index"})
			},
			getImg() {
				return Math.floor(Math.random() * 35);
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
	.popup{
		padding: 90rpx 20rpx 50rpx 15rpx;
		
		.bottom{
			margin-top: 50rpx;
			
			.total{
				line-height: 34rpx;
				font-size: 34rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #333333;
			}
			
			.price{
				display: flex;
				align-items: flex-end;
				line-height: 40rpx;
				font-size: 48rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #FE3824;
				
				&::before{
					display: block;
					content: '￥';
					line-height: 24rpx;
					font-size: 28rpx;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #FE3824;
				}
			}
			
			.button{
				::v-deep .u-btn{
					width: 216rpx;
					height: 62rpx;
					border-radius: 5rpx;
					font-size: 30rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
				}
			}
		}
		
		.goods{
			padding-left: 16rpx;
			
			.info{
				height: 163rpx;
				.name{
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #333333;
				}
				
				.price{
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FE3824;
				}
			}
		}
	}
	
	.content{
		.tabs{
			padding: 0 30rpx;
			background-color: #FFFFFF;
			margin-bottom: 5rpx;
		}
		height: 100vh;
		.u-menu-wrap {
			flex: 1;
			display: flex;
			overflow: hidden;
			height: calc(100% - 232rpx - env(safe-area-inset-bottom));
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
						
						height: 162rpx;
						
						.name{
							font-size: 30rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #333333;
						}
						
						.price{
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FE6C5D;
						}
					}
				}
			}
		}
	}
	
	.top{
		background-color: #FFFFFF;
		.search{
			padding: 15rpx 30rpx;
		}
		.swiper{
			padding: 0 30rpx;
		}
	}
}
</style>
