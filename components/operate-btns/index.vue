<template>
	<view>
		<view class="u-flex operate-btns u-row-right">
			<u-button plain>取消订单</u-button>
			<u-button type="primary" plain :loading="btnLoading1">立即支付</u-button>
			<u-button plain>退款</u-button>
			<u-button type="primary" plain :loading="btnLoading" >付款</u-button>
		</view>
		<u-toast ref="uToast" />
		<u-modal v-model="showModal" showCancelButton confirmColor="#DA291C" content="是否确认收货？" @confirm="confirmReceipt()"></u-modal>
	</view>
</template>

<script>
	export default {
		name:'operateBtns',
		props: {
			orderInfo: {
				type: Object,
				default: {}
			}
		},
		options: {
			styleIsolation: 'shared'
		},
		data() {
			return {
				show: false,
				showModal:false,
			}
		},
		methods: {
			handleOpenPay(){
				this.$store.commit('getUserInfo');
				this.show = true;
			},
			//查看订单详情
			handleOrderDetail() {
				this.$Router.push({
					path: '/pages/user/order/detail/index',
					query: {
						orderId: this.orderInfo.order_id
					}
				})
			},
			//确认收货
			confirmReceipt(){
				let _this = this;
				this.btnLoading1 = true;
				
				uni.showLoading({
					title:'请求中'
				})
				
				let params = {
					'order_id':this.orderInfo.order_id
				}
				
				this.$u.api.Order.confirmReceipt(params).then(res =>{
					uni.hideLoading()
					this.$refs.uToast.show({
						title: `确认收货成功`,
						type: 'success',
						callback(){
							_this.btnLoading1 = false;
							_this.$emit('paySuccess')
						}
					})
				}).catch(res =>{
					this.btnLoading1 = false;
					uni.hideLoading()
					this.$refs.uToast.show({
						title: err.msg,
						type: 'error',
					})
				})
			},
			//付款
			handlePay(){
				let _this = this;
				this.btnLoading = true;
				
				uni.showLoading({
					title:'支付中'
				})
				
				let params = {
					'order_id':this.orderInfo.order_id,
					'payType':this.payType
				}
				
				this.$u.api.Order.paymentOrder(params).then(res =>{
					if(res.data.pay_type=="10"){
						uni.hideLoading()
						this.$refs.uToast.show({
							title: `支付成功`,
							type: 'success',
							callback(){
								_this.btnLoading = false;
								_this.show = false;
								_this.$emit('paySuccess')
							}
						})
						
					}else{
						let { payment } = res.data;
						let paymentData = {
							"timeStamp": new Date().getTime().toString(), 
							"nonceStr":payment.nonceStr,
							"package": `prepay_id=${payment.prepay_id}`,
							"paySign":payment.paySign
						}
						
						this.$pay.wxPayment(paymentData,(res) =>{
							this.$refs.uToast.show({
								title: `支付成功`,
								type: 'success',
								callback(){
									_this.btnLoading = false;
									_this.show = false;
									_this.$emit('paySuccess')
								}
							})
						},(err) =>{
							this.$refs.uToast.show({
								title: `支付失败`,
								type: 'error',
								callback(){
									_this.btnLoading = false;
								}
							})
						},(res) =>{
							console.log(res)
						})
					}
				}).catch(err =>{
					this.btnLoading = false;
					uni.hideLoading()
					this.$refs.uToast.show({
						title: err.msg,
						type: 'error',
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.operate-btns {
		::v-deep .u-btn {
			background-color: #FFFFFF!important;
			width: 161rpx;
			height: 59rpx;
			border-radius: 8rpx;
			margin-left: 20rpx;
		}
	}
</style>
