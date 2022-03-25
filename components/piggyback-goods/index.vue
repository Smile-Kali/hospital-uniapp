<template>
	<view class="piggyback-goods">
		<view class="u-flex u-col-top">
			<view>
				<u-image width="142" height="142" borderRadius="6"></u-image>
			</view>
			<view class="right u-flex-1" :style="{'margin-left': `${marginLeft}rpx`}">
				<view class="u-flex u-row-between u-col-top u-m-t-20">
					<view class="name u-line-2 u-flex-1">一次性使用无菌换药包</view>
				</view>
				<view class="u-flex u-row-between u-m-t-10">
					<view class="total_price u-flex u-col-bottom">
						<view class="text" v-if="showTotal">总价:</view>
						<view class="money">1.00</view>
					</view>
					<view class="number">1</view>
				</view>
			</view>
		</view>
		<view class="u-flex u-m-t-10 u-row-center match-tag" v-if="showTag">
			<view>搭配耗材</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:{
			marginLeft:{
				type:String,
				default:'25'
			},
			showTotal:{
				type:Boolean,
				default:false
			},
			showTag:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.piggyback-goods{
		
		.match-tag{
			width: 129rpx;
			height: 42rpx;
			background: #9B70C2;
			border-radius: 21rpx;
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
		}
		
		.right{
			width: calc(100% - 166rpx);
			
			.name{
				line-height: 34rpx;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #333333;
				height: 70rpx;
			}
			
			.label{
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
			
			.sku{
				font-size: 26rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #333333;
				max-width: 320rpx;
			}
			
			.number{
				margin-left: 42rpx;
				font-size: 26rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #333333;
				&::before{
					content: 'x';
					font-size: 22rpx;
					font-weight: 500;
					color: #333333;
				}
			}
			
			.price{
				font-size: 26rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #333333;
			}
			
			.total_price{
				.text{
					line-height: 24rpx;
					font-size: 24rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #333333;
				}
				
				.money{
					display: flex;
					align-items: flex-end;
					line-height: 32rpx;
					font-size: 36rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #FE3824;
					&::before{
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
