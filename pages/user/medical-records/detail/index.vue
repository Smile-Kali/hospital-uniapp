<template>
	<view class="container">
		<view class="content">
			<view class="card">
				<view class="head">
					就诊人信息
				</view>
				<view class="body">
					<u-form labelWidth="170">
						<u-form-item label="姓名">
							<view class="value">小样</view>
						</u-form-item>
						<u-form-item label="地址">
							<view class="value">浙江省杭州市西湖区文三路某某区某某</view>
						</u-form-item>
						<u-form-item label="预约时间">
							<view class="u-flex">
								<text class="value">12-20(星期一) 17:00-18:00</text>
								<view class="u-flex u-row-center time-tag">
									<view>1小时</view>
								</view>
							</view>
						</u-form-item>
						<u-form-item label="症状描述" :borderBottom="false">
							<view class="value">就是这里不舒服那那你是读书吊我</view>
						</u-form-item>
					</u-form>
				</view>
			</view>
			<view class="card">
				<view class="service">
					<view class="u-flex u-p-b-30">
						<u-image width="91" height="91" shape="circle"></u-image>
						<view class="u-m-l-22">
							<view class="name">蚂蚁护理</view>
							<view class="phone u-m-t-14">1586712718</view>
						</view>
					</view>
					<view>
						<view class="instruct-title">医护建议或嘱咐：</view>
						<view class="instruct u-p-20">
							<view>
								嘱咐的内容嘱咐的内容嘱咐的内容嘱咐的内容嘱咐的嘱的
								嘱咐的内容嘱咐的内容嘱咐的内容嘱咐的内容内容容内容
								容内容容内容
							</view>
						</view>
					</view>
					<view class="time u-p-b-30 u-p-t-40">
						上门时间 20211-2-26 16:00-18:00
					</view>
					<view>
						<reserve-goods :showRightIcon="true"></reserve-goods>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import reserveGoods from "@/components/reserve-goods/index"
	export default {
		components:{
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
			box-shadow: 0px 3px 11px 0px rgba(174, 173, 173, 0.48);
			border-radius: 16px;
			padding: 30rpx;
			margin-bottom: 20rpx;
			
			.service{
				.name{
					line-height: 26rpx;
					font-size: 27rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #333333;
				}
				
				.phone{
					line-height: 19rpx;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #999999;
				}
				
				.instruct-title{
					line-height: 25rpx;
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
					padding: 20rpx 0;
				}
				
				.instruct{
					min-height: 169rpx;
					background: #F4F8FB;
					border-radius: 6rpx;
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #555555;
					line-height: 39rpx;
				}
				
				.time{
					line-height: 26rpx;
					font-size: 27rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #999999;
				}
			}
			
			.head {
				line-height: 35rpx;
				font-size: 36rpx;
				font-family: PingFang SC;
				font-weight: 800;
				color: #000000;
			}
			
			.body {
				margin-top: 7rpx;
				
				::v-deep .u-form-item {
					padding: 8rpx 0;
				
					.u-form-item--left__content__label {
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #000000;
					}
				}
				
				.time-tag{
					min-width: 121rpx;
					padding: 0 26rpx;
					height: 39rpx;
					background: #9B70C2;
					border-radius: 21rpx;
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
					margin-left: 10rpx;
				}
			}
		}
	}
}
</style>
