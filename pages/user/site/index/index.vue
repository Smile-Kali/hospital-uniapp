<template>
	<view class="container">
		<view class="content">
			<view class="cell-group">
				<view class="cell u-border-bottom u-flex u-row-between" @click="showModel = true">
					<view class="left">
						手机
					</view>
					<view class="right u-flex-1 u-flex u-row-right">
						<view class="phone">158****7895</view>
						<view class="tisp">换号登录</view>
					</view>
				</view>
				<view class="cell u-border-bottom u-flex u-row-between" @click="showNameForm = true">
					<view class="left">
						姓名
					</view>
					<view class="right u-flex-1 u-flex u-row-right">
						<view class="tisp">未完善</view>
						<view class="u-m-l-30">
							<u-icon
								name="arrow-right"
								color="#000000"
								size="28"
								>
							</u-icon>
						</view>
					</view>
				</view>
				<view class="cell u-border-bottom u-flex u-row-between" @click="showGender = true">
					<view class="left">
						性别
					</view>
					<view class="right u-flex-1 u-flex u-row-right">
						<view class="tisp">未完善</view>
						<view class="u-m-l-30">
							<u-icon
								name="arrow-right"
								color="#000000"
								size="28"
								>
							</u-icon>
						</view>
					</view>
				</view>
				<view class="cell u-border-bottom u-flex u-row-between" @click="showTime = true">
					<view class="left">
						生日
					</view>
					<view class="right u-flex-1 u-flex u-row-right">
						<view class="tisp">未完善</view>
						<view class="u-m-l-30">
							<u-icon
								name="arrow-right"
								color="#000000"
								size="28"
								>
							</u-icon>
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-modal
			v-model="showModel" 
			show-cancel-button 
			:titleStyle="titleStyle" 
			:contentStyle="contentStyle"
			confirmColor="#9B70C2" 
			confirmText="继续切换登录"
			content="资产和数据基于手机号，换手机号登录后资产和数据会随之切换" 
			@confirm="handleEdit">
		</u-modal>
		<u-picker v-model="showTime" safe-area-inset-bottom confirmColor="#9B70C2" title="出生日期" mode="time"></u-picker>
		<u-picker  v-model="showGender" safe-area-inset-bottom confirmColor="#9B70C2" title="性别" mode="selector" :range="gender" range-key="label" ></u-picker>
		<u-popup v-model="showNameForm" borderRadius="32" mode="center">
			<view class="name-form">
				<view class="top">
					<view class="title">
						修改姓名	
					</view>
					<view class="content">
						<u-input placeholderStyle="text-align: center;" placeholder="只能输入中文/字母组合"></u-input>
					</view>
				</view>
				<view class="bottom u-border-top u-flex">
					<view class="btn u-border-right" @click="showNameForm = false">
						取消
					</view>
					<view class="btn" @click="showNameForm = false">
						确定
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
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
				gender:[
					{
						label:'男',
						value:''
					},
					{
						label:'女',
						value:''
					}
				],
				showModel:false,
				showNameForm:false,
				showTime:false,
				showGender:false,
			}
		},
		methods:{
			handleEdit(){
				this.$Router.push({path:'/pages/user/site/phoneForm/index'})
				this.showModel = false;
			}
		}
	}
</script>

<style lang="scss">
.container{
	
	.name-form{
		
		.top{
			padding: 43rpx 30rpx 20rpx;
			
			.title{
				line-height: 33rpx;
				font-size: 34rpx;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #333333;
				text-align: center;
			}
			
			.content{
				width: 480rpx;
				margin-top: 46rpx;
				background: #EEEEEE;
				border-radius: 14rpx;
				padding: 0 20rpx;
			}
		}
		
		.bottom{
			.btn{
				font-size: 34rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #333333;
				width: 50%;
				line-height: 88rpx;
				text-align: center;
			}
		}
		
	}
	
	.content{
		.cell-group{
			.cell{
				padding: 35rpx 30rpx;
				background-color: #FFFFFF;
				
				.left{
					font-size: 30rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #333333;
				}
				
				.right{
					.phone{
						font-size: 26rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #333333;
						margin-right: 30rpx;
					}
					
					.tisp{
						font-size: 26rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #999999;
					}
				}
			}
		}
	}
}
</style>
