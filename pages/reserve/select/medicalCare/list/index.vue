<template>
	<view class="container safe-area-inset-bottom">
		<view class="content">
			<view class="list">
				<u-radio-group v-model="current">
					<view class="medicalCare u-flex" v-for="(item,index) in 6" :key="index">
						<view class="u-m-r-20">
							<u-radio :name="index" size="29" activeColor="#9B70C2">
							</u-radio>
						</view>
						<view class="u-flex-1">
							<medical-care :isUse="true" :isTo="true"></medical-care>
						</view>
					</view>
				</u-radio-group>
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
				current:0,
			};
		},
		methods:{
		}
	}
</script>

<style lang="scss">
.container{
	.content{
		padding: 10rpx 15rpx;
		
		.medicalCare{
			background: #FFFFFF;
			box-shadow: 0px 3rpx 11rpx 0rpx rgba(221, 221, 221, 0.78);
			border-radius: 16rpx;
			padding: 30rpx 20rpx;
			margin-bottom: 10rpx;
			
			::v-deep .u-radio{
				display: block;
			}
		}
	}
}
</style>
