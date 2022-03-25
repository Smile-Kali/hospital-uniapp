<template>
	<view class="container">
		<view class="content">
			<view class="select-date">
				<view class="title u-flex u-row-between">
					<view class="label">请选择日期</view>
					<view class="tisp">可预约到最近一周的服务</view>
				</view>
				<view class="dates">
					<scroll-view scroll-x>
						<view class="scroll">
							<view :class="['day','u-flex','u-row-center',value==index?'day-active':'']"
								v-for="(item,index) in 20" :key="index" @click="handleUseDate(index)">
								<view class="u-flex-col u-col-center u-row-center">
									<view class="week">今天</view>
									<view class="date">12/20</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
				<view class="times">
					<u-row gutter="30">
						<u-col span="4" v-for="(item,index) in timeList" :key="index" >
							<view :class="['period',item.is?'period-prohibit':(item.status=='不可约'?'period-disabled':(index==time?'period-active':'')),'u-flex','u-row-center']" @click="handleUseTime(index)">
								<view class="u-flex-col u-col-center u-row-center">
									<view class="time">08:30-09:30</view>
									<view class="status">{{item.status}}</view>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view class="select-date">
				<view class="title u-flex u-row-between" @click="handleToMedical()">
					<view class="label">选择医护</view>
					<u-icon name="arrow-right" size="26" color="#333333"></u-icon>
				</view>
				<view class="">
					<medical-care></medical-care>
				</view>
			</view>
			<view class="operate button">
				<view class="reserve-info">已选择 12月20日(今天) 15:00-16:00(1小时)</view>
				<u-button @click="handleToOrder">确定</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import medicalCare from '@/components/medical-care/index'
	export default {
		components:{
			medicalCare
		},
		data() {
			return {
				value:0,
				time:4,
				timeList:[
					{
						tiem:'08:30-09:30',
						status:'不可约',
						is:true,
					},
					{
						tiem:'08:30-09:30',
						status:'不可约',
						is:true,
					},
					{
						tiem:'08:30-09:30',
						status:'可约',
						is:false,
					},
					{
						tiem:'08:30-09:30',
						status:'不可约',
						is:false,
					},
					{
						tiem:'08:30-09:30',
						status:'可约',
						is:false,
					},
					{
						tiem:'08:30-09:30',
						status:'不可约',
						is:false,
					},
				]
			};
		},
		methods: {
			handleUseDate(e) {
				this.value = e;
			},
			handleUseTime(e){
				this.time = e;
			},
			handleToMedical(){
				this.$Router.push('/pages/reserve/select/medicalCare/list/index')
			},
			handleToOrder(){
				this.$Router.push('/pages/reserve/order/form/index')
			}
		}
	}
</script>

<style lang="scss">
	.container {
		.content {
			background: #FFFFFF;
			
			.button{
				padding: 16rpx 0;
				padding-bottom: 60rpx;
				
				.reserve-info{
					line-height: 26rpx;
					font-size: 24rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #666666;
					margin-bottom: 20rpx;
					text-align: center;
				}
				
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

			.select-date {
				padding: 10rpx 30rpx 30rpx 30rpx;
				
				.times{
					padding-top: 60rpx;
					
					::v-deep .u-row{
						flex-wrap: wrap;
						
						.u-col{
							margin-bottom: 30rpx;
						}
					}
					
					.period{
						padding: 26rpx 0;
						border-radius: 1rpx;
						background: #F5EDFC;
						
						.time{
							line-height: 19rpx;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #333333;
						}
						
						.status{
							margin-top: 8rpx;
							line-height: 23rpx;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #333333;
						}
					}
					
					.period-prohibit{
						background: #F9F8F8;
						.time,.status{
							color: #999999;
						}
					}
					
					.period-active{
						background: #9B70C2;
						.time,.status{
							color: #FFFFFF;
						}
					}
					
					.period-disabled{
						background: #EEEEEE;
						.time,.status{
							color: #333333;
						}
					}
				}

				.dates {
					.scroll{
						display: inline-flex;
						
						.day {
							border-radius: 3rpx;
							background: #EEEEEE;
							margin-right: 10rpx;
							width: 96rpx;
							height: 96rpx;
							
							
							&:last-child{
								margin-right: 0;
							}
						
							.week {
								line-height: 23rpx;
								font-size: 24rpx;
								font-family: PingFang SC;
								font-weight: bold;
								color: #555555;
							}
						
							.date {
								margin-top: 10rpx;
								line-height: 23rpx;
								font-size: 24rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #555555;
							}
						}
						
						.day-active {
							background: #9B70C2;
							.week,.date{
								color: #FFFFFF;
							}
						}
						
					}
				}

				.title {
					padding: 30rpx 0;

					.label {
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #555555;
					}

					.tisp {
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #888888;
					}
				}
			}
		}
	}
</style>
