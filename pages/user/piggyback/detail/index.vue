<template>
	<view class="container safe-area-inset-bottom">
		<view class="content">
			<view class="card">
				<view class="head">
					<view class="left-label">2021.12.19  17:25</view>
					<view class="right-label">医护取消捎带</view>
				</view>
				<view class="body">
					<piggyback-goods marginLeft="20"></piggyback-goods>
					<view class="reason">
						<view class="title">取消原因</view>
						<view class="reason-text">
							<view class="message">
								这些都是我世界第三大的就浪费了十分骄傲立法这些 都是我世界第三大的就浪费了十分骄傲立法
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="card">
				<view class="top">
					<view class="title">
						捎带人
					</view>
					<view class="u-p-l-28 u-p-r-26">
						<medical-care></medical-care>
					</view>
				</view>
				<view class="bottom">
					<view class="title">关联服务项目</view>
					<view class="u-flex u-row-between u-m-t-35 u-m-b-20">
						<view class="left-label">预计上门时间2021.10.20  19:00-20:00</view>
						<view class="right-label">已接单</view>
					</view>
					<view class="u-m-t-27">
						<view class="u-m-b-60">
							<reserve-goods></reserve-goods>
						</view>
						<view>
							<piggyback-goods :showTag="true"></piggyback-goods>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import medicalCare from '@/components/medical-care/index'
	import piggybackGoods from '@/components/piggyback-goods/index';
	import reserveGoods from '@/components/reserve-goods/index'
	export default {
		components:{
			medicalCare,
			piggybackGoods,
			reserveGoods
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
			
			.card{
				background: #FFFFFF;
				box-shadow: 0rpx 3rpx 11rpx 0rpx rgba(221, 221, 221, 0.78);
				border-radius: 16rpx;
				margin-bottom: 10rpx;
				
				.left-label{
					font-size: 27rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #999999;
				}
				
				.right-label{
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #9B70C2;
				}
				
				.bottom{
					margin-top: 51rpx;
					padding: 0 28rpx 30rpx 26rpx;
					
					.title{
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
					}
					
					.btn{
						width: 129rpx;
						height: 42rpx;
						background: #9B70C2;
						border-radius: 21rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #FFFFFF;
					}
				}
				
				.top{
					.title{
						padding: 51rpx 28rpx 41rpx 28rpx;
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
					}
				}
				
				.head{
					padding: 31rpx 29rpx 31rpx 27rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					
				}
				
				.body{
					padding: 0 27rpx 30rpx 29rpx;
					
					.reason{
						margin-top: 30rpx;
						
						.title{
							padding: 20rpx 0;
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #333333;
						}
						
						.reason-text{
							width: 100%;
							padding: 29rpx 28rpx 29rpx 26rpx;
							background: #F4F8FB;
							border-radius: 11px;
							.message{
								font-size: 26rpx;
								font-family: PingFang SC;
								font-weight: 400;
								color: #555555;
								line-height: 36rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
