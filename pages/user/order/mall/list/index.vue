<template>
	<view class="container safe-area-inset-bottom">
		<view class="tabs">
			<u-tabs :list="tabList" :is-scroll="false" activeColor="#9B70C2" name="label" :current="current" @change="handleChange"></u-tabs>
		</view>
		<view class="content">
			<view class="list">
				<view v-show="current!=4" class="order u-p-30" v-for="(item,index) in 5" :key="index" @click="handleToDetail">
					<view class="u-flex u-row-between u-p-t-10 u-p-b-30">
						<view class="time">2021-12-26 16:00</view>
						<view class="status">待支付</view>
					</view>
					<view>
						<reserve-goods :showTag="false"></reserve-goods>
					</view>
					<view class="u-m-t-30">
						<mall-btns :status="current"></mall-btns>
					</view>
				</view>
				<view class="order u-p-30" v-show="current==4" v-for="(item,index) in 3" :key="index">
					<view class="u-flex info">
						<u-image width="105" height="105" shape="circle"></u-image>
						<view class="u-m-l-10">
							<view class="name">与君并</view>
							<view class="time u-m-t-20">2021.12.21评价</view>
						</view>
					</view>
					<view class="u-p-t-38 u-p-b-50 msg">
						哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
					</view>
					<view class="u-m-b-30">
						<view class="u-flex">
							<view class="rate">综合评分:</view>
							<u-rate activeColor="#9B70C2" disabled inactiveColor="#E1E1E1" value="3"></u-rate>
						</view>
						<view class="u-m-t-18 department">科室：看护</view>
					</view>
					<view class="goods">
						<view class="u-flex">
							<u-image width="155" height="155" borderRadius="6"></u-image>
							<view class="u-flex-1 u-flex u-row-between u-m-l-20 u-line-1">
								<view class="name u-line-1 u-flex-1">【Apple】AirPodsirPoir ...</view>
								<u-icon
									name="arrow-right"
									size="25"
									color="#9B70C2"
									label="再次购买"
									margin-right="6"
									labelSize="26"
									labelColor="#9B70C2"
									labelPos="left"
									>
								</u-icon>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import reserveGoods from "@/components/reserve-goods/index"
	import mallBtns from "@/components/operate-btns/mall-btns"
	export default {
		components:{
			reserveGoods,
			mallBtns
		},
		data() {
			return {
				current:0,
				tabList:[
					{
						label:"全部",
						value:""
					},
					{
						label:"待支付",
						value:""
					},
					{
						label:"待发货",
						value:""
					},
					{
						label:"待收货",
						value:""
					},
					{
						label:"评价",
						value:""
					}
				],
			};
		},
		methods: {
			handleChange(e){
				this.current = e;
			},
			handleToDetail(){
				this.$Router.push({path:"/pages/user/order/mall/detail/index",query:{status:this.current}})
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	position: relative;
	
	.tabs{
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		z-index: 10;
	}
	
	.content{
		padding-top: 80rpx;
		
		.list{
			margin-top: 20rpx;
			
			.order{
				background-color: #FFFFFF;
				margin-bottom: 20rpx;
				
				.info{
					.name{
						line-height: 28rpx;
						font-size: 29rpx;
						font-family: Source Han Sans CN;
						font-weight: 500;
						color: #333333;
					}
					
					.time{
						line-height: 23rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #999999;
					}
					
					.msg{
						line-height: 23rpx;
						font-size: 25rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #333333;
					}
					
					.rate{
						line-height: 26rpx;
						font-size: 27rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
					}
					
					.department{
						line-height: 23rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #999999;
					}
					
				}
				
				.goods{
					background: #F4F8FB;
					border-radius: 5rpx;
					padding: 20rpx;
					.name{
						line-height: 27rpx;
						font-size: 25rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #333333;
					}
				}
				
				.time{
					line-height: 21rpx;
					font-size: 27rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #999999;
				}
				
				.status{
					line-height: 23rpx;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #9B70C2;
				}
			}
		}
	}
}
</style>
