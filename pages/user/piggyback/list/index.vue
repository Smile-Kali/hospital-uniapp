<template>
	<view class="container safe-area-inset-bottom">
		<view class="tabs">
			<u-tabs :list="tabList" 
				:is-scroll="false" 
				activeColor="#9B70C2"
				name="label" 
				:current="current"
				@change="handleChange">
			</u-tabs>
		</view>
		<view class="content">
			<view class="list">
				<view class="order" v-for="(item,index) in 6" :key="index" @click="handleToDetail">
					<view class="u-flex u-row-between top">
						<view class="time">20211-2-26 16:00</view>
						<view class="status">医护已接单</view>
					</view>
					<view class="u-m-t-20">
						<piggyback-goods marginLeft="57"></piggyback-goods>
					</view>
				</view>
			</view>
			<view>
				<u-empty 
					:show="showEmpty" 
					marginTop="200" 
					iconSize="500" 
					fontSize="32" 
					:src="require('../../../../static/empty/order.png')" 
					text="暂无捎带记录">
				</u-empty>
			</view>
		</view>
	</view>
</template>

<script>
	import piggybackGoods from '@/components/piggyback-goods/index';
	export default {
		components:{
			piggybackGoods
		},
		data() {
			return {
				current: 0,
				tabList: [{
						label: "全部",
						value: ""
					},
					{
						label: "待捎带",
						value: ""
					},
					{
						label: "已捎带",
						value: ""
					},
					{
						label: "已拒绝",
						value: ""
					}
				],
				showEmpty: true
			};
		},
		methods:{
			handleChange(e){
				this.current = e;
			},
			handleToDetail(){
				if(this.current==3){
					this.$Router.push('/pages/user/piggyback/detail/index')
				}
			}
		}
	}
</script>

<style lang="scss">
	.container {
		.tabs {
			position: fixed;
			width: 100vw;
			top: 0;
			left: 0;
			z-index: 9;
		}
		
		.content{
			margin-top: 100rpx;
			
			.list{
				.order{
					padding: 30rpx;
					margin-bottom: 20rpx;
					background-color: #FFFFFF;
					
					.top{
						padding: 10rpx 0;
						
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
	}
</style>
