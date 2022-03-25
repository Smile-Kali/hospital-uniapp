<template>
	<view class="container safe-area-inset-bottom">
		<view class="content">
			<view class="list">
				<u-radio-group v-model="value" size="29">
					<view class="patient u-flex" v-for="(item,index) in 5" :key="index" @click="handleUsePatient(index)">
						<view class="left" v-if="isUse">
							<u-radio activeColor="#9B70C2" :name="index">
							</u-radio>
						</view>
						<view class="right u-flex-1">
							<view class="u-flex u-row-between">
								<view class="u-flex">
									<view class="name">小红</view>
									<view class="phone">15867597158</view>
									<view class="isDef">默认</view>
								</view>
								<u-icon size="28" :name="require('../../../../static/icon/edit.png')" color="#666666"
									labelColor="#666666" labelSize="26" label="编辑">
								</u-icon>
							</view>
							<view class="address u-lin-2">
								浙江省 杭州市 临安区 锦城街道 新民里<br /> 42号楼
							</view>
						</view>
					</view>
				</u-radio-group>
			</view>
			<view class="operate safe-area-inset-bottom">
				<view class="button u-flex u-row-center">
					<u-button type="primary" @click="handleToForm('')">新增就诊人</u-button>
				</view>
			</view>
		</view>
		<u-modal v-model="showModel" show-cancel-button confirmText="去添加" :titleStyle="titleStyle" :contentStyle="contentStyle"
			confirmColor="#9B70C2" content="请先新增就诊人信息，在进行预约" @confirm="handleToForm()"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 0,
				isUse: false,
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
		onLoad() {
			this.isUse = this.$Route.query.isUse||false;
			if(this.isUse){
				this.$nextTick(function(){
					this.showModel = true;
				})
			}
		},
		methods: {
			handleToForm() {
				this.$Router.push('/pages/user/patient/form/index')
			},
			handleUsePatient(e) {
				if(this.isUse){
					this.value = e;
					uni.setStorageSync('reserve-order', {})
					this.$Router.push('/pages/reserve/select/date/index')
				}else{
					this.handleToForm()
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.container {
		.content {
			padding: 20rpx 15rpx;

			.list {
				.patient {
					background: #FFFFFF;
					border-radius: 20rpx;
					padding: 30rpx 20rpx;
					margin-bottom: 10rpx;

					::v-deep .u-radio {
						display: block;
					}

					.left {
						margin-right: 17rpx;
					}

					.right {

						.name {
							font-size: 34rpx;
							font-family: Source Han Sans CN;
							font-weight: 500;
							color: #333333;
						}

						.phone {
							font-size: 26rpx;
							font-family: Source Han Sans CN;
							font-weight: 500;
							color: #999999;
							margin-left: 13rpx;
						}

						.isDef {
							background: #9B70C2;
							border-radius: 20rpx;
							padding: 8rpx 23rpx;
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #FFFFFF;
							margin-left: 10rpx;
							line-height: 24rpx;
						}

						.address {
							min-height: 80rpx;
							font-size: 30rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #555555;
						}
					}
				}
			}

			.button {
				padding: 16rpx 0;

				::v-deep .u-btn {
					width: 705rpx;
					height: 81rpx;
					background: #9B70C2;
					border-radius: 6rpx;
					font-size: 34rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
		}
	}
</style>
