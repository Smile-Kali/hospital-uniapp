<template>
	<view class="container safe-area-inset-bottom">
		<view class="tabs">
			<u-tabs 
				:list="tabList" 
				:is-scroll="false" 
				inactiveColor="#999999"
				activeColor="#9B70C2" 
				name="label" 
				:current="current" 
				@change="handleChange">
			</u-tabs>
		</view>
		<view class="content">
			<view class="list">
				<view class="message u-flex u-row-between" v-for="(item,index) in 5" :key="index">
					<u-image shape="circle" width="110" height="110"></u-image>
					<view class="u-flex-1 u-m-l-28 u-flex u-row-between u-border-bottom detail">
						<view>
							<view class="name">小羊</view>
							<view class="msg">您好：有啥问题吗</view>
						</view>
						<view class="u-flex-col u-col-bottom">
							<view class="time">09:05</view>
							<view class="number u-m-t-20">1</view>
						</view>
					</view>
				</view>
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
						label:"聊天记录",
						value:""
					},
					{
						label:"系统通知",
						value:""
					}
				]
			};
		},
		methods:{
			handleChange(e){
				this.current = e;
			}
		}
	}
</script>

<style lang="scss">
	.container{
		.tabs{
			width: 100vw;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 10;
		}
		
		.content{
			margin-top: 100rpx;
			
			.list{
				.message{
					background-color: #FFFFFF;
					padding: 0 20rpx 0 34rpx;
					
					.detail{
						padding: 40rpx 0 27rpx;
					}
					.name{
						font-size: 30rpx;
						font-family: Source Han Sans CN;
						font-weight: bold;
						color: #333333;
						line-height: 26rpx;
					}
					
					.msg{
						margin-top: 18rpx;
						font-size: 26rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #999999;
						line-height: 26rpx;
					}
					
					.time{
						font-size: 26rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #999999;
						line-height: 26rpx;
					}
					
					.number{
						width: 41rpx;
						height: 41rpx;
						background: #E42925;
						border-radius: 50%;
						font-size: 20rpx;
						text-align: center;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #FFFFFF;
						line-height: 41rpx;
					}
				}
			}
		}
	}
</style>
