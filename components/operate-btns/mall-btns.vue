<template>
	<view>
		<view class="u-flex operate-btns u-row-right">
			<template v-if="status==1">
				<button plain class="btn btn-grey u-reset-button">取消订单</button>
				<button plain class="btn btn-primary u-reset-button">立即支付</button>
			</template>
			<template v-if="status==3">
				<button plain class="btn btn-grey u-reset-button" @tap.stop="handleRefund">申请退款</button>
				<button plain class="btn btn-grey u-reset-button">查看物流</button>
				<button plain class="btn btn-primary u-reset-button" @click="showModel = true ">确认收货</button>
			</template>
			<button v-if="status==3" plain class="btn btn-grey u-reset-button" @tap.stop="handleEvaluate">评价</button>
		</view>
		<u-modal
			v-model="showModel" 
			show-cancel-button 
			:titleStyle="titleStyle" 
			:contentStyle="contentStyle"
			confirmColor="#9B70C2" 
			confirmText="确认收货"
			content="请在再次确认您的包裹是否收到" 
			@confirm="showModel = false">
		</u-modal>
	</view>
</template>

<script>
	export default{
		name:"mallBtns",
		options: {
			styleIsolation: 'shared'
		},
		data(){
			return {
				titleStyle: {
					'font-size': '44rpx',
					'font-family': 'Source Han Sans CN',
					'font-weight': 'bold',
					'color': '#333333',
					'line-height': '66rpx',
				},
				contentStyle: {
					'font-size': '28rpx',
					'font-family': 'Source Han Sans CN',
					'font-weight': '500',
					'color': '#616161',
					'line-height': '42rpx',
				},
				showModel:false,
				content:"",
			}
		},
		props:{
			status:{
				type:Number,
				default:0
			}
		},
		methods:{
			handleClick(index){
				
			},
			handleRefund(){
				this.$Router.push({path:'/pages/user/order/mall/refund/index'})
			},
			handleEvaluate(){
				this.$Router.push({path:'/pages/user/order/mall/evaluate/index'})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.operate-btns{
		.btn{
			margin: 0 0 0 20rpx;
			width: 161rpx;
			line-height: 59rpx;
			border-radius: 8rpx;
			font-size: 27rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
		}
		.btn-orange{
				border: 2rpx solid #D81E06;
				color: #D81E06;
		}
		
		.btn-grey{
				border: 2rpx solid #555555;
				color: #555555;
		}
		
		.btn-primary{
				border: 2rpx solid #9B70C2;
				color: #9B70C2;
		}
	}
</style>
