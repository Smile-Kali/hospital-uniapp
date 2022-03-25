<template>
	<view class="container safe-area-inset-bottom">
		<view class="tabs">
			<u-tabs :list="tabList" :is-scroll="false" activeColor="#9B70C2" name="label" :current="current" @change="handleChange"></u-tabs>
		</view>
		<view class="content">
			<view class="list">
				<view class="order" v-for="(item,index) in 6" :key="index" @click="handleToDetail">
					<view class="u-p-b-30">
						<view class="u-flex u-row-between top">
							<view class="time">20211-2-26 16:00</view>
							<view class="status">待支付</view>
						</view>
						<view>
							<reserve-goods></reserve-goods>
						</view>
						<view class="u-m-t-30">
							<reserve-btns :status="current"></reserve-btns>
						</view>
					</view>
					<view class="u-p-t-30 u-p-b-30 u-border-top">
						<medical-care></medical-care>
					</view>
				</view>
			</view>
			<view>
				<u-empty :show="showEmpty" marginTop="200" iconSize="500" fontSize="32" :src="require('../../../../../static/empty/order.png')" text="暂无订单">
				</u-empty>
			</view>
		</view>
	</view>
</template>

<script>
	import reserveGoods from '@/components/reserve-goods/index'
	import reserveBtns from '@/components/operate-btns/reserve-btns'
	import medicalCare from "@/components/medical-care/index"
	export default {
		components:{
			reserveGoods,
			reserveBtns,
			medicalCare
		},
		data() {
			return {
				current:0,
				tabList:[
					{
						label:"全部",
						value:""
					},
					{
						label:"待支付",
						value:""
					},
					{
						label:"进行中",
						value:""
					},
					{
						label:"已拒绝",
						value:""
					},
					{
						label:"退款",
						value:""
					},
					{
						label:"评价",
						value:""
					}
				],
				showEmpty:false
			}
		},
		methods: {
			handleChange(e){
				this.current = e;
				if(e<4){
					this.showEmpty = true;
				}else{
					this.showEmpty = false;
				}
			},
			handleToDetail(){
				this.$Router.push({path:'/pages/user/order/reserve/detail/index',query:{status:this.current}});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		position: relative;
		
		.content{
			margin-top: 100rpx;
			
			.list{
				.order{
					padding: 30rpx 30rpx 0;
					margin-bottom: 20rpx;
					background-color: #FFFFFF;
					
					.top{
						padding: 10rpx 0 30rpx;
						
						.time{
							font-size: 27rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #999999;
						}
						
						.status{
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #9B70C2;
						}
					}
				}
			}
		}
		
		.tabs{
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			z-index: 10;
		}
	}
</style>
