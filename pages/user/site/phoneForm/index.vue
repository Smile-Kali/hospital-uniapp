<template>
	<view class="container">
		<view class="content">
			<view class="form u-border-top">
				<u-form label-width="170" >
					<u-form-item label="手机号码" >
						<u-input placeholder="输入有效手机号" type="number"></u-input>
						<view slot="right">
							<view class="code" @click="handleGetCode">{{tisp}}</view>
							<u-verification-code 
								:seconds="60" 
								ref="uCode" 
								@change="codeChange">
							</u-verification-code>
						</view>
					</u-form-item>
					<u-form-item label="验证码" >
						<u-input placeholder="输入验证码" type="number"></u-input>
					</u-form-item>
					<u-form-item label="保存此号码供以后授权使用" label-width="370">
						<u-switch slot="right" v-model="switchVal" activeColor="#9B70C2" size="42"></u-switch>
					</u-form-item>
				</u-form>
			</view>
			<view class="button">
				<u-button type="primary">完成</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				switchVal:false,
				codeStatus:false,
				tisp:''
			};
		},
		methods:{
			codeChange(text) {
				this.tisp = text;
			},
			handleGetCode(){
				if(this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				}
			},
		}
	}
</script>

<style lang="scss">
.container{
	.content{
		
		.button{
			margin-top: 120rpx;
			padding: 0 22rpx;
			::v-deep .u-btn{
				font-size: 34rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #FFFFFF;
			}
		}
		
		.form{
			background-color: #FFFFFF
			
			::v-deep .u-form-item{
				padding: 15rpx 40rpx;
				
				.u-form-item--left__content__label{
					font-size: 30rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #333333;
				}
			}
			
			.code{
				font-size: 26rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #9B70C2;
			}
		}
		
	}
}
</style>
