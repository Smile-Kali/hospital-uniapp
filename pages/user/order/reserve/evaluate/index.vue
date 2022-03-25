<template>
	<view class="container">
		<view class="content">
			<view class="card">
				<view class="head u-flex u-row-between u-col-bottom">
					<view class="title">
						您对医护人员满意吗
					</view>
					<view class="tisp">
						已对医护人员匿名
					</view>
				</view>
				<view class="body">
					<view class="nurse u-flex">
						<u-image shape="circle" width="90" height="90"></u-image>
						<view class="u-flex-1 u-flex u-row-between u-m-l-20">
							<view class="name">
								医护小红
							</view>
							<view class=" u-flex">
								<view class="rate">综合评分:</view>
								<u-rate activeColor="#9B70C2" inactiveColor="#E1E1E1" size="25" disabled value="3"></u-rate>
							</view>
						</view>
					</view>
					<view class="u-flex u-row-between u-p-l-20 u-p-r-20 buttons">
						<u-button>不满意</u-button>
						<u-button type="primary">满意</u-button>
					</view>
					<view class="remark">
						<view class="remark-title u-m-b-20">
							订单备注
						</view>
						<view class="remark-model">
							<view class="remark-text">
								<u-input 
									type="textarea"
									autoHeight
									height="200"
									placeholder="给与医护评价，激励我们做的更好">
								</u-input>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="operate button">
				<u-button>提交评价</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
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
		
		.button{
			padding: 16rpx 0;
			padding-bottom: 60rpx;
			::v-deep .u-btn{
				font-size: 34rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #FFFFFF;
				width: 705rpx;
				height: 81rpx;
				background: #9B70C2;
				border-radius: 9rpx;
			}
		}
		
		.card{
			background: #FFFFFF;
			box-shadow: 0px 3rpx 11rpx 0px rgba(221, 221, 221, 0.78);
			border-radius: 16rpx;
			padding: 30rpx;
			
			.head{
				padding: 8rpx 0;
				
				.title{
					line-height: 35rpx;
					font-size: 36rpx;
					font-family: PingFang SC;
					font-weight: 800;
					color: #000000;
				}
				
				.tisp{
					line-height: 23rpx;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #999999;
				}
			}
			
			.body{
				.nurse{
					padding: 30rpx 0 20rpx;
					.name{
						line-height: 26rpx;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #333333;
					}
					
					.rate{
						line-height: 26rpx;
						font-size: 27rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #333333;
					}
				}
				
				.buttons{
					::v-deep .u-btn{
						width: 283rpx;
						height: 59rpx;
						font-size: 27rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
					}
				}
				
				.remark{
					margin-top: 80rpx;
					
					.remark-title{
						line-height: 25rpx;
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
					}
					
					.remark-model{
						background: #F4F8FB;
						border-radius: 11rpx;
						padding: 30rpx;
					}
				}
			}
		}
	}
}
</style>
