<template>
	<view class="container safe-area-inset-bottom">
		<view class="content">
			<view class="card">
				<view class="u-flex u-line-1 u-m-b-40 logistics" v-if="status==3">
					<u-image width="60" height="60"></u-image>
					<view class="u-m-l-10">
						<view class="address">浙江省杭州市临安区锦城街道新民里42民...</view>
						<view class="time">2021-12-22  13:39:20</view>
					</view>
				</view>
				<view class="address u-flex u-row-between">
					<view class="left u-flex-1">
						<image src="../../../../../static/icon/position.png"></image>
						<view class="u-m-l-20 info u-flex-1" v-if="true">
							<view class="u-flex">
								<view class="name">小红</view>
								<view class="phone u-m-l-28">1586715759</view>
							</view>
							<view class="location u-line-2 u-m-t-20">
								浙江省杭州市临安区锦城街道新民里42民
								里42
							</view>
						</view>
						<view class="u-m-l-20 info u-m-r-20" v-else>
							<view class="placeholder">请选择收货地址</view>
						</view>
					</view>
					<view v-if="status==1">
						<u-icon name="arrow-right" size="32" color="#333333"></u-icon>
					</view>
				</view>
			</view>
			<view class="tisp u-text-center">
				*商城购买的耗材需上门服务的医护人员一并送往
			</view>
			<view class="card"> 
				<view class="head">
					商城产品
				</view>
				<view class="body">
					<view>
						<piggyback-goods></piggyback-goods>
					</view>
					<view class="u-flex u-row-right u-m-t-20">
						<u-button>联系客服</u-button>
					</view>
				</view>
			</view>
			<view v-if="status==1">
				<view class="card order" style="padding: 0;">
					<view class="u-border-bottom top">
						<view class="u-flex u-p-t-20 u-p-b-20">
							<view class="label">订单编号:</view>
							<view class="value">1212565635</view>
						</view>
						<view class="u-flex u-p-t-20 u-p-b-20">
							<view class="label">下单时间:</view>
							<view class="value">2020-07-08 10:05:48</view>
						</view>
					</view>
					<view class="bottom">
						<view class="u-flex u-row-between u-p-t-20 u-p-b-20">
							<view class="label">商品总额</view>
							<view class="value">￥579.00</view>
						</view>
						<view class="u-flex u-col-bottom u-row-right u-p-t-20 u-p-b-20">
							<view class="total-text">总计:</view>
							<view class="total-price">730.00</view>
						</view>
					</view>
				</view>
				<view class="card">
					<view class="head">
						订单备注
					</view>
					<view class="body">
						<view class="remark">
							<view class="remark-text">
								这些都是我世界第三大的就浪费了十分骄傲立法这些都是我世界第三大的就浪费了十分骄傲立法
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="status==3" class="card" style="padding: 0;">
				<view class="order-info">
					<view class="u-flex u-p-t-20 u-p-b-20">
						<view class="label">订单编号:</view>
						<view class="u-flex">
							<view class="value">1212565635</view>
							<view class="copy-btn">
								<text>复制</text>
							</view>
						</view>
					</view>
					<view class="u-flex u-p-t-20 u-p-b-20">
						<view class="label">下单时间:</view>
						<view class="u-flex">
							<view class="value">2020-07-08 10:05:48</view>
						</view>
					</view>
					<view class="u-flex u-p-t-20 u-p-b-20">
						<view class="label">发货时间:</view>
						<view class="u-flex">
							<view class="value">2020-07-08 10:05:48</view>
						</view>
					</view>
					<view class="u-flex u-p-t-20 u-p-b-20">
						<view class="label">快递公司:</view>
						<view class="u-flex">
							<view class="value">顺丰</view>
						</view>
					</view>
					<view class="u-flex u-p-t-20 u-p-b-20">
						<view class="label">快递单号:</view>
						<view class="u-flex">
							<view class="value">2586632541365</view>
							<view class="copy-btn">
								<text>复制</text>
							</view>
						</view>
					</view>
					<view class="u-flex u-p-t-20 u-p-b-20">
						<view class="label">成交时间:</view>
						<view class="u-flex">
							<view class="value">2021-12-19 14:09:23</view>
						</view>
					</view>
				</view>
			</view>
			<view class="operate safe-area-inset-bottom">
				<view class="bottom">
					<mall-btns :status="status"></mall-btns>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import piggybackGoods from "@/components/piggyback-goods/index"
	import mallBtns from "@/components/operate-btns/mall-btns"
	export default {
		components:{
			piggybackGoods,
			mallBtns
		},
		data() {
			return {
				status:3
			};
		},
		onLoad() {
			this.status = this.$Route.query.status||1;
		}
	}
</script>

<style lang="scss">
.container{
	.content{
		padding: 20rpx 15rpx 106rpx;
		
		.operate{
			.bottom{
				padding: 32rpx 45rpx 14rpx 0;
			}
		}
		
		.tisp{
			margin: 40rpx 0 30rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #9B70C2;
		}
		
		.order{
			.top{
				padding: 30rpx 25rpx 20rpx;
			}
			
			.bottom{
				padding: 30rpx 25rpx 35rpx 20rpx;
				
				.total-text{
					line-height: 24rpx;
					font-size: 24rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #333333;
				}
				
				.total-price{
					display: flex;
					align-items: flex-end;
					line-height: 34rpx;
					font-size: 38rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FE3824;
					
					&::before{
						content: '￥';
						line-height: 24rpx;
						font-size: 24rpx;
						font-family: Source Han Sans CN;
						font-weight: bold;
						color: #FE3824;
					}
				}
			}
			
			.label{
				min-width: 180rpx;
				line-height: 24rpx;
				font-size: 26rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #999999;
			}
			
			.value{
				line-height: 21rpx;
				font-size: 26rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #555555;
			}
		}
		
		.card{
			background: #FFFFFF;
			box-shadow: 0rpx -1rpx 11rpx 0rpx rgba(147, 147, 147, 0.48);
			border-radius: 20rpx;
			padding: 30rpx;
			margin-bottom: 20rpx;
			
			.order-info{
				padding: 30rpx 20rpx 25rpx;
				.label{
					min-width: 180rpx;
					font-size: 26rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #999999;
				}
				
				.value{
					font-size: 26rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #555555;
				}
				
				.copy-btn{
					margin-left: 37rpx;
					width: 66rpx;
					line-height: 35rpx;
					background: #EEEEEE;
					border-radius: 18rpx;
					font-size: 20rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #555555;
					text-align: center;
				}
				
			}
			
			.logistics{
				.address{
					line-height: 27rpx;
					font-size: 28rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #333333;
				}
				
				.time{
					margin-top: 9rpx;
					line-height: 19rpx;
					font-size: 24rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #999999;
				}
			}
			
			.head{
				padding: 10rpx 0 27rpx;
				line-height: 26rpx;
				font-size: 27rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
			
			.body{
				
				::v-deep .u-btn{
					width: 161rpx;
					height: 59rpx;
					border-radius: 8rpx;
					font-size: 27rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #555555;
				}
				
				.remark{
					background: #F4F8FB;
					border-radius: 11rpx;
					padding: 30rpx;
					
					.remark-text{
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #555555;
						line-height: 36rpx;
					}
				}
			}
			
			.address{
				.left{
					display: flex;
					align-items: center;
					justify-content: space-between;
					
					.info{
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						justify-content: center;
					}
					
					image{
						width: 45rpx;
						height: 45rpx;
						display: block;
					}
					
					.name{
						line-height: 30rpx;
						font-size: 30rpx;
						font-family: Source Han Sans CN;
						font-weight: bold;
						color: #333333;
					}
					
					.phone{
						line-height: 20rpx;
						font-size: 26rpx;
						font-family: Source Han Sans CN;
						font-weight: 500;
						color: #999999;
					}
					
					.location{
						font-size: 30rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #333333;
					}
					
					.placeholder{
						line-height: 32rpx;
						color: rgb(192, 196, 204);
						font-size: 32rpx;
					}
					
				}
			}
		}
	}
}
</style>
