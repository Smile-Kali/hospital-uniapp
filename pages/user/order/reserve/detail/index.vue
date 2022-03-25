<template>
	<view class="container safe-area-inset-bottom">
		<view class="content">
			<view class="card" v-if="status==2">
				<view class="head reason-title">
					拒绝原因
				</view>
				<view class="body">
					<view class="u-m-t-30 reason">
						拒绝原因绝原因绝原因绝原因绝原因绝原因绝原因绝 原因绝原因绝原因绝原因绝原因绝原因
					</view>
				</view>
			</view>
			<view class="card">
				<view class="head">
					就诊人信息
				</view>
				<view class="body">
					<u-form labelWidth="170" v-if="status!=2">
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
					<u-form labelWidth="170" v-if="status==2">
						<u-form-item label="姓名">
							<view class="value">小样</view>
						</u-form-item>
						<u-form-item label="身份证">
							<view class="value">522526599852485998</view>
						</u-form-item>
						<u-form-item label="性别">
							<view class="value">男</view>
						</u-form-item>
						<u-form-item label="预约时间">
							<view class="u-flex">
								<text class="value">12-20(星期一) 17:00-18:00</text>
								<view class="u-flex u-row-center time-tag">
									<view>1小时</view>
								</view>
							</view>
						</u-form-item>
						<u-form-item label="联系电话">
							<view class="value">15848977852</view>
						</u-form-item>
						<u-form-item label="紧急联系电话">
							<view class="value">15848977852</view>
						</u-form-item>
						<u-form-item label="症状描述">
							<view class="value">就是这里不舒服那那你是读书吊我</view>
						</u-form-item>
						<u-form-item label="下单者与被服务者关系" labelWidth="260">
							<view class="u-flex">
								<view class="u-flex u-row-center time-tag u-m-l-50">
									<view>本人</view>
								</view>
							</view>
						</u-form-item>
						<u-form-item label="被服务者居住环境"  labelWidth="205" :borderBottom="false">
							<view class="u-flex">
								<view class="u-flex u-row-center time-tag u-m-l-50">
									<view>与家人同居</view>
								</view>
							</view>
						</u-form-item>
					</u-form>
				</view>
			</view>
			<view class="card">
				<view class="u-p-b-20 u-border-bottom u-m-b-28" v-if="status==3">
					<medical-care></medical-care>
				</view>
				<view class="body">
					<view class="time u-flex u-row-between" v-if="status==1||status==3">
						<view>预计上门时间2021.10.20 19:00-20:00</view>
						<view class="status">待接单</view>
					</view>
					<view class="goods-list">
						<view class="goods u-flex u-col-top">
							<u-image width="142" height="139" borderRadius="6"></u-image>
							<view class="u-m-l-20 u-flex-1">
								<view class="goods-name">一次性使用无菌换药包</view>
								<view class="u-flex u-row-between u-m-t-25">
									<view class="u-flex">
										<view class="goods-sku">护理名称</view>
										<view class="goods-number">1</view>
									</view>
									<view class="goods-price">￥420/次</view>
								</view>
								<view class="u-flex u-row-right u-col-bottom u-m-t-30">
									<view class="total-text">总价:</view>
									<view class="total-price">1.00</view>
								</view>
							</view>
						</view>
						<view>
							<piggyback-goods :showTag="true" :showTotal="false"></piggyback-goods>
						</view>
						<view class="u-flex u-row-right button" v-if="status==1">
							<u-button >退款</u-button>
						</view>
					</view>
					<view class="map" v-if="status==3">
						<map></map>
					</view>
				</view>
			</view>
			<view class="card">
				<view class="body">					<view class="time u-flex u-row-between" v-if="status==1||status==3">						<view style="color: #333333;">捎带额外耗材</view>						<view class="status">待接单</view>					</view>
					<view class="goods-list">
						<view>
							<piggyback-goods :showTotal="false"></piggyback-goods>
						</view>
						<view class="u-flex u-row-right button" v-if="status==1">
							<u-button >取消捎带</u-button>
						</view>
					</view>
				</view>
			</view>
			<view class="operate safe-area-inset-bottom" v-if="status==3">
				<view class="u-p-16">
					<reserve-btns :isDetail="true" :status="status"></reserve-btns>
				</view>
			</view>
			<view class="operate button-pay" v-if="status==0">
				<u-button>立即支付</u-button>
			</view>
			<u-modal
				v-model="showModel" 
				:titleStyle="titleStyle" 
				:contentStyle="contentStyle"
				confirmColor="#9B70C2" 
				content="感谢您的支持与信任麻烦您对本次服务进行评价谢谢！" 
				@confirm="handleConfirm">
			</u-modal>
		</view>
	</view>
</template>

<script>
	import medicalCare from "@/components/medical-care/index"
	import piggybackGoods from "@/components/piggyback-goods/index"
	import reserveBtns from "@/components/operate-btns/reserve-btns"
	export default {
		components:{
			medicalCare,
			piggybackGoods,
			reserveBtns
		},
		data() {
			return {
				status:3,
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
			};
		},
		onLoad(){
			let status = this.$Route.query.status;
			
			this.status = status>0?(status-1):0;
			
			if(this.status==4){
				this.$nextTick(function(){
					this.showModel = true;
				})
			}
		},
		methods:{
			handleConfirm(){
				this.$Router.push({path:"/pages/user/order/reserve/evaluate/index"})
			}
		}
	}
</script>

<style lang="scss">
.container{
	.content{
		padding: 20rpx 15rpx;
		margin-bottom: 100rpx;
		
		.button-pay{
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
			background: #FFFFFF;
			box-shadow: 0px 3px 11px 0px rgba(174, 173, 173, 0.48);
			border-radius: 16px;
			padding: 30rpx;
			margin-bottom: 20rpx;
			
			.reason-title{
				height: 28rpx;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 800;
				color: #333333;
			}
			
			.reason{
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #555555;
				line-height: 36rpx;
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
				
				.map{
					margin-top: 40rpx;
					height: 300rpx;
					border-radius: 8rpx;
					map{
						width: 100%;
						height: 100%;
						border-radius: 8rpx;
					}
				}
				
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
				
				.value {
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #555555;
				}
				
				.goods-list {
					
					.button{
						::v-deep .u-btn{
							width: 161rpx;
							height: 59rpx;
							border-radius: 8rpx;
							font-size: 27rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #555555;
						}
					}
				
					.tisp-consume {
						line-height: 24rpx;
						font-size: 24rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #9B70C2;
						margin: 30rpx 0;
					}
				
					.goods {
						margin-bottom: 60rpx;
				
						.goods-name {
							margin-top: 10rpx;
							line-height: 28rpx;
							font-size: 30rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #333333;
						}
				
						.goods-sku {
							line-height: 25rpx;
							font-size: 26rpx;
							font-family: Source Han Sans CN;
							font-weight: 500;
							color: #333333;
						}
				
						.goods-number {
							margin-left: 39rpx;
							line-height: 20rpx;
							font-size: 26rpx;
							font-family: Source Han Sans CN;
							font-weight: 500;
							color: #333333;
				
							&::before {
								content: 'x';
								line-height: 22rpx;
								font-size: 22rpx;
								font-family: Source Han Sans CN;
								font-weight: 500;
								color: #333333;
							}
						}
				
						.goods-price {
							line-height: 28rpx;
							font-size: 26rpx;
							font-family: Source Han Sans CN;
							font-weight: 500;
							color: #333333;
						}
				
						.total-text {
							line-height: 22rpx;
							font-size: 24rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #333333;
						}
				
						.total-price {
							display: flex;
							align-items: flex-end;
							line-height: 32rpx;
							font-size: 35rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FE3824;
				
							&::before {
								content: '￥';
								line-height: 26rpx;
								font-size: 26rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #FE3824;
							}
						}
					}
				}
				
				.time {
					margin-bottom: 27rpx;
					line-height: 26rpx;
					font-size: 27rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #999999;
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
}
</style>
