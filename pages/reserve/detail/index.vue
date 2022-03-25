<template>
	<view class="container safe-area-inset-bottom">
		<view class="banner">
			<u-image width="100vw" mode="widthFix" src="https://cdn.uviewui.com/uview/swiper/1.jpg"></u-image>
			<view class="u-flex u-row-between address">
				<u-icon 
					size="18"
					labelColor="#FFFFFF"
					labelSize="24"
					:name="require('../../../static/reserve/address.png')"
					label="杭州未知医院">
				</u-icon>
				<u-icon
					size="24"
					labelColor="#FFFFFF"
					labelSize="24"
					:name="require('../../../static/reserve/distance.png')"
					label="距离您588千米">
				</u-icon>
			</view>
		</view>
		<view class="content">
			<view class="model">
				<view class="top">
					<view class="title">
						头发护理
					</view>
					<view class="describe">
						<view>
							秒死秒速描述秒死秒速描述秒死秒速描述秒死秒速描秒死秒 描述秒死秒速描述秒死秒速描述秒死秒速描述秒死秒速描秒 秒速描述秒死秒速描
						</view>
						<view class="u-flex u-row-between">
							<view class="price">
								￥420/次
							</view>
							<u-icon name="chat-fill" color="#9B70C2" size="30"></u-icon>
						</view>
					</view>
				</view>
				<view class="bottom">
					<view class="u-border-bottom">
						<u-tabs :list="tabList" :is-scroll="false" activeColor="#9B70C2" name="label" :current="current" @change="change"></u-tabs>
					</view>
					<view class="detail" v-show="current==0">
						<view style="background-color: #303133;height: 385rpx;">
						</view>
						<view class="model">
							<view class="top" style="padding-left: 0;">
								<view class="title">
									头发护理
								</view>
								<view class="describe">
									<view>
										秒死秒速描述秒死秒速描述秒死秒速描述秒死秒速描秒死秒 描述秒死秒速描述秒死秒速描述秒死秒速描述秒死秒速描秒 秒速描述秒死秒速描
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="match" v-show="current==1">
						<view class="goods u-flex u-border-bottom" v-for="(item,index) in 3" :key="index">
							<u-image width="142" height="139" borderRadius="6"></u-image>
							<view class="u-m-l-56 u-flex-1">
								<view class="name u-line-1">一次性使用无菌换药包</view>
								<view class="u-flex u-row-between u-m-t-52">
									<view class="u-flex">
										<view class="price">1.00</view>
										<view class="original-price">原价:<text class="line">￥5188</text></view>
									</view>
									<view class="number">1</view>
								</view>
							</view>
						</view>
					</view>
					<view class="evaluate-list" v-show="current==2">
						<view class="evaluate u-border-bottom" v-for="(item,index) in 4" :key="index">
							<view class="u-flex">
								<u-image width="90" height="90" shape="circle"></u-image>
								<view class="u-flex-1 u-flex u-row-between user">
									<view class="name">匿名用户</view>
									<view class="time">20211-2-26 16:00</view>
								</view>
							</view>
							<view class="info">
								<view class="service">服务：满意</view>
								<view class="u-flex">
									<view class="rate">综合评分:</view>
									<u-rate activeColor="#9b70c2" value="3" disabled inactiveColor="#e1e1e1"></u-rate>
								</view>
								<view class="message">
									服务内容距离是多少服务内容距离是多少服务内 容距离是多少服务内容距离是多少服务内容距离
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="operate button">
				<u-button @click="handleToPatient">开始预约</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current:0,
				tabList:[
					{
						label:'详情'
					},
					{
						label:'搭配耗材'
					},
					{
						label:'评价'
					}
				]
			};
		},
		methods:{
			change(e){
				this.current = e;
			},
			handleToPatient(){
				this.$Router.push({path:"/pages/user/patient/list/index",query:{isUse:true}})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #FFFFFF;
	}
	
	.container{
		padding-bottom: 156rpx;
		.content{
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
			.model{
				.top{
					padding: 20rpx;
					.title{
						display: flex;
						align-items: center;
						padding: 20rpx 0;
						line-height: 28rpx;
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #333333;
						&::before{
							display: block;
							content:" ";
							width: 5rpx;
							height: 30rpx;
							background-color: #9B70C2;
							color: #9B70C2;
							border-radius: 3rpx;
							margin-right: 20rpx;
						}
					}
					
					.describe{
						margin-top: 13rpx;
						padding: 0 20rpx;
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #555555;
						line-height: 33rpx;
						.price{
							margin-top: 26rpx;
							font-size: 27rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #FE3824;
						}
					}
				}
				
				.bottom{
					.detail{
						padding: 40rpx 26rpx 40rpx 27rpx;
					}
					
					.match{
						.goods{
							padding: 42rpx 30rpx 30rpx 32rpx;
							
							.name{
								font-size: 26rpx;
								font-family: PingFang SC;
								font-weight: bold;
								color: #555555;
							}
							
							.price{
								display: flex;
								align-items: flex-end;
								line-height: 30rpx;
								font-size: 30rpx;
								font-family: Source Han Sans CN;
								font-weight: 500;
								color: #FE3824;
								
								&::before{
									display: block;
									content: '￥';
									line-height: 21rpx;
									font-size: 21rpx;
									font-family: Source Han Sans CN;
									font-weight: 500;
									color: #FE3824;
								}
							}
							
							.original-price{
								font-size: 20rpx;
								font-family: Source Han Sans CN;
								font-weight: 500;
								color: #999999;
								.line{
									text-decoration: line-through;
								}
							}
							
							.number{
								font-size: 20rpx;
								font-family: Source Han Sans CN;
								font-weight: 500;
								color: #333333;
								&::before{
									content: 'x';
									font-size: 22rpx;
									font-family: Source Han Sans CN;
									font-weight: 500;
									color: #333333;
								}
							}
						}
					}
					
					.evaluate-list{
						.evaluate{
							padding: 30rpx 26rpx 31rpx 25rpx;
							
							.user{
								margin-left: 17rpx;
								
								.name{
									font-size: 27rpx;
									font-family: PingFang SC;
									font-weight: 500;
									color: #9B70C2;
								}
								
								.time{
									font-size: 27rpx;
									font-family: PingFang SC;
									font-weight: 500;
									color: #999999;
								}
							}
							
							.info{
								margin-left: 107rpx;
								.service{
									line-height: 26rpx;
									font-size: 27rpx;
									font-family: PingFang SC;
									font-weight: 500;
									color: #666666;
								}
								
								.rate{
									margin-top: 12rpx;
									line-height: 26rpx;
									font-size: 27rpx;
									font-family: PingFang SC;
									font-weight: 500;
									color: #333333;
								}
								
								.message{
									margin-top: 13rpx;
									line-height: 30rpx;
									font-size: 27rpx;
									font-family: PingFang SC;
									font-weight: bold;
									color: #1F1F1F;
								}
							}
						}
					}
				}
			}
		}
		
		.banner{
			position: relative;
			background: #FFFFFF;
			
			::v-deep .u-image image{
				display: block;
			}
			
			.address{
				position: absolute;
				left: 0;
				bottom: 0;
				width: 100%;
				background-color: rgba(0,0,0,.5);
				padding: 23rpx 30rpx 14rpx;
				border-radius: 8px 8px 0px 0px;
			}
		}
	}
</style>
