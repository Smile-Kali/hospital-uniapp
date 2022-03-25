<template>
	<view class="container">
		<view class="content">
			<view class="card">
				<view class="head u-m-b-20">
					商城产品
				</view>
				<view class="body">
					<view>
						<piggyback-goods></piggyback-goods>
					</view>
				</view>
			</view>
			<view class="card">
				<view class="head u-m-b-20">
					订单备注
				</view>
				<view class="body">
					<view class="remark">
						<u-input 
							type="textarea"
							autoHeight
							height="200"
							maxlength="150"
							placeholder="请详细填写申请说明">
						</u-input>
					</view>
				</view>
			</view>
			<view class="card">
				<view class="phone">联系电话：15869857894</view>
			</view>
			<view class="operate button">
				<u-button @click="handleToPatient">开始预约</u-button>
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
			padding: 30rpx;
			background: #FFFFFF;
			box-shadow: 0px 3rpx 11rpx 0px rgba(221, 221, 221, 0.78);
			border-radius: 16rpx;
			margin-bottom: 20rpx;
			
			.phone{
				line-height: 25rpx;
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
			
			.head{
				line-height: 25rpx;
				font-size: 26rpx;
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
			
			.title{
				line-height: 29rpx;
				font-size: 30rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #333333;
			}
			
			.price{
				padding: 20rpx 0;
				line-height: 45rpx;
				font-size: 58rpx;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #333333;
				&::before{
					content: '￥';
					line-height: 45rpx;
					font-size: 33rpx;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #333333;
				}
			}
		}
	}
}
</style>
