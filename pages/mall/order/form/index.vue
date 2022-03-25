<template>
	<view class="container">
		<view class="content">
			<view class="card">
				<view class="address u-flex u-row-between">
					<view class="left u-flex-1">
						<image src="../../../../static/icon/position.png"></image>
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
					<view>
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
				</view>
			</view>
			<view class="card">
				<view class="head">
					订单备注
				</view>
				<view class="body">
					<view class="remark">
						<u-input 
							type="textarea"
							autoHeight
							height="200"
							placeholder="请输入您需要备注的信息">
						</u-input>
					</view>
				</view>
			</view>
			<view class="operate safe-area-inset-bottom">
				<view class="bottom">
					<view class="u-flex u-row-between">
						<view class="left u-flex u-col-bottom">
							<view class="total-text">总计:</view>
							<view class="total-price">730.00</view>
						</view>
						<view class="right">
							<u-button type="primary">提交订单</u-button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import piggybackGoods from "@/components/piggyback-goods/index"
	export default {
		components:{
			piggybackGoods
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.container{
	.content{
		padding: 20rpx 15rpx;
		
		.operate{
			
			.bottom{
				padding: 8rpx 34rpx 20rpx;
				
				.left{
					.total-text{
						line-height: 33rpx;
						font-size: 34rpx;
						font-family: Source Han Sans CN;
						font-weight: 500;
						color: #333333;
					}
					
					.total-price{
						display: flex;
						align-items: flex-end;
						line-height: 37rpx;
						font-size: 48rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FE3824;
						
						&::before{
							content: '￥';
							line-height: 21rpx;
							font-size: 28rpx;
							font-family: Source Han Sans CN;
							font-weight: bold;
							color: #FE3824;
						}
					}
				}
				
				.right{
					::v-deep .u-btn{
						width: 240rpx;
						height: 77rpx;
						border-radius: 8rpx;
						font-size: 30rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #FFFFFF;
					}
				}
			}
		}
		
		.tisp{
			margin: 40rpx 0 30rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #9B70C2;
		}
		
		.card{
			background: #FFFFFF;
			box-shadow: 0rpx -1rpx 11rpx 0rpx rgba(147, 147, 147, 0.48);
			border-radius: 20rpx;
			padding: 30rpx;
			margin-bottom: 20rpx;
			
			.head{
				padding: 10rpx 0 27rpx;
				line-height: 26rpx;
				font-size: 27rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
			
			.body{
				.remark{
					background: #F4F8FB;
					border-radius: 11rpx;
					padding: 30rpx;
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
