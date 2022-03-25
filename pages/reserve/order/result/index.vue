<template>
	<view class="container">
		<view class="content">
			<view class="u-flex u-row-center">
				<u-icon
					name="checkmark-circle-fill" 
					color="#BE97D8" 
					size="58" 
					label="预约完成" 
					labelColor="#333333"
					labelSize="26"
					margin-left="11">
				</u-icon>
			</view>
			<view class="incidentally u-text-center">
				是否需要医护人员捎带额外耗材?
			</view>
			<view class="mall u-text-center">
				查看耗材商城
			</view>
			<view class="u-flex-1 u-flex u-row-between button">
				<u-button>否</u-button>
				<u-button type="primary">是</u-button>
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
	page {
		background-color: #FFFFFF;
	}

	.container {
		.content {
			padding: 164rpx 83rpx 0;
			
			.incidentally{
				margin-top: 43rpx;
				font-size: 34rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #333333;
				line-height: 32rpx;
			}
			
			.mall{
				margin-top: 10rpx;
				font-size: 26rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #BE97D8;
				line-height: 32rpx;
			}
			
			.button{
				margin-top: 70rpx;
				
				::v-deep .u-btn{
					width: 252rpx;
					height: 85rpx;
					border-radius: 8rpx;
					font-size: 30rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
				}
			}
		}
	}
</style>
