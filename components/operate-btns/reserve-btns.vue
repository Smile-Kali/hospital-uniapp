<template>
	<view>
		<view class="u-flex operate-btns u-row-right">
			<template v-if="isDetail&&status==3">
				<button plain class="btn btn-orange u-reset-button" @click="handleClick(1)">一键报警</button>
				<button plain class="btn btn-grey u-reset-button" @click="handleClick(2)">联系医护</button>
				<button plain class="btn btn-primary u-reset-button" @click="handleClick(3)">确认上门</button>
			</template>
			<button plain class="btn btn-grey u-reset-button" v-if="status==0">取消订单</button>
			<button plain class="btn btn-primary u-reset-button" v-if="status==0">立即支付</button>
			<button plain class="btn btn-grey u-reset-button" v-if="status==2" @tap.stop="handleRefund()">申请退款</button>
			<button plain class="btn btn-grey u-reset-button" v-if="status==4" @tap.stop="handleTo()">评价</button>
		</view>
		<u-modal 
			v-model="showModel" 
			show-cancel-button 
			:titleStyle="titleStyle" 
			:contentStyle="contentStyle"
			confirmColor="#9B70C2" 
			:content="content" 
			@confirm="handleConfirm">
		</u-modal>
	</view>
</template>

<script>
	export default{
		name:"reserveBtns",
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
				index:''
			}
		},
		props:{
			isDetail:{
				type:Boolean,
				default:false,
			},
			status:{
				type:Number,
				default:0
			}
		},
		methods:{
			handleRefund(){
				this.$Router.push({path:'/pages/user/order/reserve/refund/index'})
			},
			handleClick(index){
				this.index = index;
				if(index==1){
					this.content = "确定拨打电话：125684吗？"
				}else if(index==2){
					this.content = "确定拨打电话：********吗？"
				}else if(index==3){
					this.content = "确认医护人员已上门？"
				}
				
				this.showModel = true;
			},
			handleTo(){
				this.$Router.push({path:"/pages/user/order/reserve/evaluate/index"})
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
