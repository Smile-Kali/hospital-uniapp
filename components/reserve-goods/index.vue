<template>
	<view class="reserve-goods u-flex u-col-top">
		<view>
			<u-image width="142" height="142"></u-image>
		</view>
		<view class="u-m-l-26 right u-flex-1 u-flex-col u-row-between">
			<view class="u-flex u-row-between">
				<view class="name u-flex-1 u-line-1">一次性使用无菌换药包</view>
				<view class="label" v-if="showTag">
					捎带耗材
				</view>
			</view>
			<view>
				<view class="u-flex u-row-between">
					<view class="u-flex">
						<view class="sku u-line-1">护理名称</view>
						<view class="number">1</view>
					</view>
					<view class="u-flex">
						<view class="price">
							￥420/次
						</view>
						<view class="u-m-l-30" v-if="showRightIcon">
							<u-icon
								name="arrow-right"
								size="25"
								color="#000000">
							</u-icon>
						</view>
					</view>
				</view>
				<view class="total_price u-flex u-col-bottom">
					<view class="text">总价:</view>
					<view class="money">1.00</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "index",
		data() {
			return {
				
			};
		},
		props:{
			showRightIcon:{
				type:Boolean,
				default:false
			},
			showTag:{
				type:Boolean,
				default:true
			},
		}
	}
</script>

<style lang="scss">
	.reserve-goods {

		.right {
			height: 140rpx;

			.name {
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #333333;
			}

			.label {
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				width: 129rpx;
				line-height: 42rpx;
				background: #9B70C2;
				border-radius: 21rpx;
				text-align: center;
			}

			.sku {
				font-size: 26rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #333333;
				max-width: 320rpx;
			}

			.number {
				margin-left: 42rpx;
				font-size: 26rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #333333;

				&::before {
					content: 'x';
					font-size: 22rpx;
					font-weight: 500;
					color: #333333;
				}
			}

			.price {
				font-size: 26rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #333333;
			}

			.total_price {
				margin-top: 10rpx;

				.text {
					line-height: 24rpx;
					font-size: 24rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #333333;
				}

				.money {
					display: flex;
					align-items: flex-end;
					line-height: 32rpx;
					font-size: 36rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #FE3824;

					&::before {
						display: block;
						line-height: 24rpx;
						content: '￥';
						font-size: 26rpx;
						font-family: Source Han Sans CN;
						font-weight: 500;
						color: #FE3824;
					}
				}
			}
		}
	}
</style>
