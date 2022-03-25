<template>
	<view class="container">
		<view class="content">
			<view class="list">
				<view class="item" v-for="(item,index) in 4" :key="index" @click="handleToDetail">
					<view class="time u-p-b-20">上门时间 20211-2-26 16:00-18:00</view>
					<view class="u-flex u-row-between u-p-t-20">
						<view class="u-flex">
							<view class="goods-name">头发护理</view>
							<view class="frequency u-m-l-60">护理次数</view>
							<view class="number u-m-l-30">x1</view>
						</view>
						<view class="price">￥420/次</view>
					</view>
					<view class="u-flex u-p-t-30 u-p-b-30">
						<u-image width="91" height="91" shape="circle"></u-image>
						<view class="u-m-l-22">
							<view class="name">蚂蚁护理</view>
							<view class="phone u-m-t-14">1586712718</view>
						</view>
					</view>
					<view>
						<view class="instruct-title u-m-b-20">医护建议或嘱咐：</view>
						<view class="instruct u-p-20">
							<view>
								嘱咐的内容嘱咐的内容嘱咐的内容嘱咐的内容嘱咐的嘱的
								嘱咐的内容嘱咐的内容嘱咐的内容嘱咐的内容内容容内容
								容内容容内容
							</view>
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
				
			};
		},
		methods:{
			handleToDetail(){
				this.$Router.push({path:"/pages/user/medical-records/detail/index"})
			}
		}
	}
</script>

<style lang="scss">
.container{
	.content{
		padding-top: 23rpx;
		
		.list{
			.item{
				background: #FFFFFF;
				box-shadow: -1rpx 0rpx 18rpx 0rpx rgba(0, 0, 0, 0.1);
				padding: 40rpx 30rpx;
				margin-bottom: 15rpx;
				
				.time{
					line-height: 26rpx;
					font-size: 27rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #999999;
				}
				
				.goods-name{
					line-height: 26rpx;
					font-size: 27rpx;
					font-family: PingFang SC;
					font-weight: 800;
					color: #333333;
				}
				
				.frequency{
					line-height: 26rpx;
					font-size: 27rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
				}
				
				.number{
					line-height: 20rpx;
					font-size: 27rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
				}
				
				.price{
					line-height: 26rpx;
					font-size: 27rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FE3824;
				}
				
				.name{
					line-height: 26rpx;
					font-size: 27rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #333333;
				}
				
				.phone{
					line-height: 19rpx;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #999999;
				}
				
				.instruct-title{
					line-height: 25rpx;
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
				}
				
				.instruct{
					min-height: 169rpx;
					background: #F4F8FB;
					border-radius: 6rpx;
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #555555;
					line-height: 39rpx;
				}
			}
		}
	}
}
</style>
