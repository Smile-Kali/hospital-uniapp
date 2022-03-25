<template>
	<view class="container">
		<view class="content">
			<view class="detail">
				<medical-care></medical-care>
				<view class="hospital">
					杭州市萧山区第一人民医院
				</view>
				<view class="remark">
					请输入您需要备注的信息请输入您需要备注的信息请输入
					您需要备注的信息请输入您需要备注的信息请输入您需要
					备注的信息
				</view>
			</view>
			<view class="evaluate">
				<view class="title">
					患者评价
				</view>
				<view class="list">
					<view class="evaluate-item u-flex u-col-top u-border-bottom" v-for="(item,index) in 3" :key="index">
						<u-image shape="circle" width="105" height="105"></u-image>
						<view class="right u-flex-1">
							<view class="u-flex u-row-between u-m-t-38">
								<view class="nick-name">与君并</view>
								<view class="time">2021.12.21 17:35</view>
							</view>
							<view class="u-flex u-m-t-30">
								<view class="rate">综合评分:</view>
								<u-rate activeColor="#9b70c2" size="25" value="3" disabled inactiveColor="#e1e1e1"></u-rate>
							</view>
							<view class="service">
								服务：满意
							</view>
							<view class="message u-line-3">
								哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import medicalCare from '@/components/medical-care/index'
	export default {
		components:{
			medicalCare
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #FFFFFF;
	}
	
	.container{
		.content{
			padding: 12rpx 15rpx;
			
			.evaluate{
				padding: 40rpx 14rpx;
				
				.title{
					padding: 10rpx 0;
					font-size: 26rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #333333;
				}
				
				.list{
					
					.evaluate-item{
						padding: 31rpx 17rpx 31rpx 19rpx;
						
						::v-deep .u-image image{
							display: block;
						}
						
						.right{
							margin-left: 9rpx;
							
							.nick-name{
								line-height: 28rpx;
								font-size: 29rpx;
								font-family: Source Han Sans CN;
								font-weight: 500;
								color: #333333;
							}
							
							.time{
								line-height: 19rpx;
								font-size: 24rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #999999;
							}
							
							.rate{
								line-height: 26rpx;
								font-size: 27rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #333333;
							}
							
							.service{
								margin-top: 15rpx;
								line-height: 24rpx;
								font-size: 24rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #999999;
							}
							
							.message{
								margin-top: 40rpx;
								line-height: 23rpx;
								font-size: 25rpx;
								font-family: Source Han Sans CN;
								font-weight: 400;
								color: #333333;
							}
						}
					}
					
				}
			}
			
			.detail{
				background: #FFFFFF;
				box-shadow: 0px 3rpx 11rpx 0px rgba(221, 221, 221, 0.78);
				border-radius: 16rpx;
				padding: 32rpx 28rpx 27rpx;
				
				.hospital{
					padding: 6rpx 0 0 107rpx;
					line-height: 23rpx;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #555555;
				}
				
				.remark{
					margin-top: 37rpx;
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: #333333;
					line-height: 36rpx;
				}
			}
		}
	}
</style>
