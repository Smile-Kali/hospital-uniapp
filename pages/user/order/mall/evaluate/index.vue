<template>
	<view class="container">
		<view class="content">
			<view class="card">
				<view class="head u-flex u-row-between u-col-bottom">
					<view class="title">
						请您对本次服务进行评价
					</view>
				</view>
				<view class="body">
					<view class="u-m-t-30">
						<view class="u-flex u-p-t-15 u-p-b-15">
							<view class="rate">描述相符</view>
							<u-rate activeColor="#9B70C2" gutter="40" inactiveColor="#E1E1E1" size="41" value="2">
							</u-rate>
						</view>
						<view class="u-flex u-p-t-15 u-p-b-15">
							<view class="rate">物流服务</view>
							<u-rate activeColor="#9B70C2" gutter="40" inactiveColor="#E1E1E1" size="41" value="2">
							</u-rate>
						</view>
						<view class="u-flex u-p-t-15 u-p-b-15">
							<view class="rate">服务态度</view>
							<u-rate activeColor="#9B70C2" gutter="40" inactiveColor="#E1E1E1" size="41" value="2">
							</u-rate>
						</view>
					</view>
					<view class="remark">
						<view class="remark-title u-m-b-20">
							编辑您的评价
						</view>
						<view class="remark-model">
							<view class="remark-text">
								<u-input type="textarea" autoHeight height="200" placeholder="给与医护评价，激励我们做的更好">
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
	.container {
		.content {
			padding: 20rpx 15rpx;

			.button {
				padding: 16rpx 0;
				padding-bottom: 60rpx;

				::v-deep .u-btn {
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

			.card {
				background: #FFFFFF;
				box-shadow: 0px 3rpx 11rpx 0px rgba(221, 221, 221, 0.78);
				border-radius: 16rpx;
				padding: 30rpx;

				.head {
					padding: 8rpx 0;

					.title {
						line-height: 35rpx;
						font-size: 36rpx;
						font-family: PingFang SC;
						font-weight: 800;
						color: #000000;
					}

				}

				.body {

					.rate {
						line-height: 26rpx;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #666666;
						padding-right: 15rpx;
					}

					.buttons {
						::v-deep .u-btn {
							width: 283rpx;
							height: 59rpx;
							font-size: 27rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
						}
					}

					.remark {
						margin-top: 70rpx;

						.remark-title {
							line-height: 25rpx;
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #333333;
						}

						.remark-model {
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
