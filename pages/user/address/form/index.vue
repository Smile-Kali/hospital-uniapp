<template>
	<view class="content">
		<view class="card">
			<u-form 
				:model="form" 
				labelWidth="144" 
				:labelStyle="labelStyle" 
				ref="form">
				<u-form-item label="收货人" prop="name">
					<u-input v-model="form.name" maxlength="20" :placeholderStyle="placeholderStyle" placeholder="名字"/>
				</u-form-item>
				<u-form-item label="手机号码" prop="phone">
					<u-input v-model="form.phone" maxlength="11" :placeholderStyle="placeholderStyle" placeholder="手机号"/>
				</u-form-item>
				<u-form-item label="选择地区" prop="region">
					<u-input 
						v-model="form.region" 
						type="select" 
						:select-open="pickerShow" 
						:clearable="false" 
						:placeholderStyle="placeholderStyle" 
						placeholder="省、市、区"
						 @click="pickerShow = true"/>
				</u-form-item>
				<u-form-item label="详细地址" labelPosition="top" :borderBottom="false" prop="detail">
					<u-input 
						class="textarea"
						v-model="form.detail" 
						type="textarea"
						:placeholderStyle="textareaPlaceholder" 
						placeholder="请输入"/>
				</u-form-item>
			</u-form>
		</view>
		<view class="card u-flex u-row-between u-p-t-30 u-p-b-30 u-m-t-20">
			<view class="tisp">设置为默认地址</view>
			<u-checkbox v-model="form.setDefault"  shape="circle" activeColor="#9B70C2">
			</u-checkbox>
		</view>
		<view class="operate safe-area-inset-bottom">
			<view class="button u-flex u-row-center">
				<u-button type="primary" @click="handleSubmit">{{form.address_id?'修改':'保存'}}</u-button>
			</view>
		</view>
		<u-picker 
			mode="region" 
			confirmColor="#9B70C2" 
			cancelColor="#9B70C2" 
			:defaultRegion="region"
			v-model="pickerShow" 
			@confirm="regionConfirm">
		</u-picker>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pickerShow: false,
				labelStyle:{
					'font-size': '15px',
					'font-family': 'Source Han Sans CN',
					'font-weight': '500',
					'color': '#333333',
				},
				placeholderStyle:"font-size: 13px;font-family: Source Han Sans CN;font-weight: 500;color: #999999;",
				textareaPlaceholder:"font-size: 15px;font-family: Source Han Sans CN;font-weight: 400;color: #C3C2C2;",
				form:{
					address_id:'',
					name:'',
					phone:'',
					detail:'',
					region:'',
					setDefault:'',
				},
				region:[],
				rules:{
					name: [
						{ 
							required: true, 
							message: '请输入姓名', 
							trigger: ['change','blur'],
						}
					],
					phone: [
						{
							required: true, 
							message: '请输入手机号',
							trigger: ['change','blur'],
						},
						{
							validator: (rule, value, callback) => {
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							trigger: ['change','blur'],
						}
					],
					region:[
						{
							required: true, 
							message: '请选择地区', 
							trigger: ['change','blur'],
						}
					],
					detail: [
						{
							min: 5,
							message: '详细地址不能少于5个字',
							trigger: 'change'
						},
						{
							required: true,
							message: '请填写详细地址',
							trigger: ['change','blur']
						},
					]
				}
			};
		},
		onLoad:function(){
			
			this.form.address_id = this.$Route.query.addressId||"";
			
			uni.setNavigationBarTitle({
				title:this.form.address_id?'修改地址':'新建地址'
			})
			
			if(this.form.address_id){
				this.getUserAddressDetail()
			}
			
		},
		onReady(){
			this.$refs.form.setRules(this.rules);
		},
		methods:{
			//获取地址详情
			getUserAddressDetail(){
				this.$u.api.User.getUserAddressDetail(this.form.address_id).then(res =>{
					let { name, phone, detail } = res.data.detail;
					this.region = res.data.region;
					this.form.name = name;
					this.form.phone = phone;
					this.form.detail = detail;
					this.form.region = this.region.toString()
				})
			},
			// 选择地区回调
			regionConfirm(e) {
				this.form.region = e.province.label + ',' + e.city.label + ',' + e.area.label;
			},
			handleSubmit(){
				this.$refs.form.validate(valid => {
					if (valid) {
						if(this.form.address_id){
							this.$u.api.User.updateAddress(this.form).then(res =>{
								this.$refs.uToast.show({
									title: '修改成功',
									type: 'success',
									back:true
								})
							}).catch(err =>{
								this.$refs.uToast.show({
									title: err.msg,
									type: 'error',
								})
							})
						}else{
							this.$u.api.User.addAddress(this.form).then(res =>{
								this.$refs.uToast.show({
									title: '保存成功',
									type: 'success',
									back:true
								})
							}).catch(err =>{
								this.$refs.uToast.show({
									title: err.msg,
									type: 'error',
								})
							})
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.content{
		padding: 10px 8px;
		.card{
			background: #FFFFFF;
			border-radius: 10px;
			padding: 0 15px;
			
			.location-icon{
				::v-deep .u-icon{
					margin-left: 10px;
				}
			}
			
			.textarea{
				::v-deep .u-input{
					background: #F5F6F6;
					border-radius: 10px;
					padding: 11px 16px!important;
				}
			}
			
			.tisp{
				font-size: 15px;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #333333;
			}
			
			::v-deep .u-checkbox{
				width: 34rpx!important;
			}
		}
		
		.operate{
			
			.button{
				padding: 8px 0;
				
				::v-deep .u-btn{
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
