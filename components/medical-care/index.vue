<template>
	<view class="medical-care">
		<view class="info u-flex">
			<view class="u-flex">
				<u-image shape="circle" width="90" height="90"></u-image>
			</view>
			<view class="u-m-l-18 u-flex-1 u-flex" @click="handleToDetail">
				<view class="u-flex-1">
					<u-row gutter="0">
						<u-col span="4">
							<view class="name u-line-1">医护小红</view>
						</u-col>
						<u-col span="8">
							<view class="u-flex">
								<view class="label">综合评分:</view>
								<u-rate activeColor="#9b70c2" size="25" value="3" disabled inactiveColor="#e1e1e1"></u-rate>
							</view>
						</u-col>
					</u-row>
					<view class="u-m-t-15">
						<u-row gutter="0">
							<u-col span="4">
								<view class="position">职称：看护</view>
							</u-col>
							<u-col span="8">
								<view class="position">科室：看护</view>
							</u-col>
						</u-row>
					</view>
				</view>
				<view class="u-m-l-20" v-if="isUse">
					<u-icon name="arrow-right" size="37" color="#999999"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"medicalCare",
		data() {
			return {
				value:''
			};
		},
		options: {
			styleIsolation: 'shared'
		},
		props:{
			isUse:{
				type:Boolean,
				default:false
			},
			isTo:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			handleToDetail(){
				if(!this.isTo)
					return;
				this.$Router.push({path:"/pages/reserve/select/medicalCare/detail/index"})
			}
		}
	}
</script>

<style lang="scss">
.medical-care{
	.info{
		
		.name{
			line-height: 32rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #333333;
		}
		
		.label{
			line-height: 26rpx;
			font-size: 27rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #333333;
		}
		
		.position{
			line-height: 23rpx;
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #555555;
		}
	}
}
</style>
