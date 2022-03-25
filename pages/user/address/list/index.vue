<template>
	<view class="content">
		<view class="list">
			<u-radio-group>
				<view class="card" v-for="(item,index) in 5" :key="index">
					<view class="top" @click="handleAddress(index)">
						<view class="u-flex u-col-bottom">
							<view class="name">小红</view>
							<view class="phone">15867597158</view>
						</view>
						<view class="location u-line-2">
							浙江省 杭州市 临安区 锦城街道 新民里</br>
							42号楼
						</view>
					</view>
					<view class="bottom">
						<u-radio activeColor="#9B70C2" :name="index">
							默认地址
						</u-radio>
						<view class="u-flex">
							<view class="btn u-flex" @tap.stop="handleToForm(index)">
								<image src="../../../../static/icon/edit.png"></image>
								<view>编辑</view>
							</view>
							<view class="btn u-flex" @tap.stop="handleDel(index)">
								<image src="../../../../static/icon/del.png"></image>
								<view>删除</view>
							</view>
						</view>
					</view>
				</view>
			</u-radio-group>
			<view v-if="(!addressInfo.list)||addressInfo.list.length==0" style="margin-top: 40vw;">
				<u-empty text="暂无收货地址" iconSize="500" fontSize="32" :src="require('../../../../static/empty/address.png')"></u-empty>
			</view>
		</view>
		<view class="operate safe-area-inset-bottom">
			<view class="button u-flex u-row-center">
				<u-button type="primary" @click="handleToForm('')">新增地址</u-button>
			</view>
		</view>
		<u-popup v-model="show" borderRadius="22" :maskCloseAble="false" mode="center">
			<view class="popup">
				<view class="msg">确定删除收货地址吗？</view>
				<view class="u-flex u-row-between btns">
					<u-button class="cancel" @click="show = false" plain type="primary">取消</u-button>
					<u-button type="primary" @click="handleDelAddress">确定</u-button>
				</view>
			</view>
		</u-popup>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				isUse:false,
				addressInfo:{},
				delIndex:"",
			}
		},
		onShow:function(){
			this.isUse = this.$Route.query.isUse;
		},
		methods: {
			//获取用户地址列表
			getUserAddressList(){
				this.$u.api.User.getUserAddressList().then(res =>{
					this.addressInfo = res.data;
				})
			},
			//修改默认地址
			radioGroupChange(e){
				this.$u.api.User.updateDefaultAddress({'address_id':e}).then(res =>{
					this.$refs.uToast.show({
						title: `${this.isUse?'选择':'修改默认'}地址成功`,
						type: 'success',
						back:this.isUse
					})
				}).catch(err =>{
					this.$refs.uToast.show({
						title: err.msg,
						type: 'error',
					})
				})
			},
			//点击地址
			handleAddress(addressId){
				if(this.isUse){
					this.radioGroupChange(addressId);
				}else{
					this.handleToForm(addressId);
				}
			},
			handleDel(index){
				this.delIndex = index;
				this.show = true;
			},
			//删除地址
			handleDelAddress(){
				let address = this.addressInfo.list[this.delIndex];
				
				this.$u.api.User.deleteAddress({"address_id":address.address_id}).then(res =>{
					this.addressInfo.list.splice(this.delIndex,1);
					this.show = false;
					this.$refs.uToast.show({
						title: '删除地址成功',
						type: 'success'
					})
				}).catch(err =>{
					this.$refs.uToast.show({
						title: err.msg,
						type: 'error',
					})
				})
			},
			handleToForm(addressId){
				this.$Router.push({path:'/pages/user/address/form/index',query:{"addressId":addressId}})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.popup{
			padding: 0 5px 10px;
			
			.msg{
				padding: 40px 0;
				font-size: 15px;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #DA291C;
				text-align: center;
			}
			
			.btns{
				::v-deep .u-btn{
					width: 152px;
					height: 39px;
					border-radius: 20px;
					margin: 0 5px;
					font-size: 15px;
					font-family: Source Han Sans CN;
					font-weight: 500;
					border: 1px solid #DA291C;
					&::after {
					   border: none;
					}
				}
				
				.cancel{
					::v-deep .u-btn{
						background-color: #FFFFFF!important;
					}
				}
			}
			
		}
		
		.list{
			padding: 0 8px 100px;
			.card{
				margin-top: 10px;
				background: #FFFFFF;
				border-radius: 10px;
				padding: 0 15px;
				
				.top{
					padding: 20px 0 15px;
					border-bottom: 1px solid #CCCCCC;
					.name{
						font-size: 17px;
						font-family: Source Han Sans CN;
						font-weight: 500;
						color: #333333;
					}
					
					.phone{
						margin-left: 7px;
						font-size: 13px;
						font-family: Source Han Sans CN;
						font-weight: 500;
						color: #999999;
					}
					
					.location{
						margin-top: 10px;
						font-size: 15px;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #555555;
					}
				}
				
				.bottom{
					padding: 10px 0;
					display: flex;
					justify-content: space-between;
					align-items: center;
					
					.btn{
						height: 12px;
						font-size: 13px;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #666666;
						margin-right: 14px;
						
						image{
							width: 15px;
							height: 15px;
							display: block;
							margin-right: 5px;
						}
					}
				}
			}
		}
		.operate{
			
			.button{
				padding: 16rpx 0;
				
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
