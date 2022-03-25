<template>
	<view class="container">
		<view class="userInfo u-flex u-row-between" @click="handleToSite">
			<view class="u-flex">
				<u-avatar size="132"></u-avatar>
				<view class="u-m-l-28">
					<view class="name">Smile</view>
					<view class="phone">18888888888</view>
				</view>
			</view>
			<view>
				<view class="level-btn">
					<view class="u-flex">
						<u-icon
							color="#9B70C2"
							labelColor="#9B70C2"
							size="26"
							label="普通用户" 
							name="arrow-right"
							labelPos="left">
						</u-icon>
					</view>
				</view>
			</view>
		</view>
		<view class="content">
			<view>
				<u-row>
					<u-col span="3" v-for="(item,index) in rowMenuList" :key="index">
						<view class="u-flex-col u-flex menu" @click="handleTo(index)">
							<u-badge type="error" count="7"></u-badge>
							<u-icon size="59" :name="item.icon"></u-icon>
							<view class="name">{{item.name}}</view>
						</view>
					</u-col>
				</u-row>
			</view>
			<view>
				<u-cell-group>
					<u-cell-item :title="item.name" v-for="(item,index) in cellList" :key="index"  @click="handleToMenu(index)">
						<view slot="icon" class="u-flex u-m-r-20">
							<u-icon size="46" :name="item.icon"></u-icon>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rowMenuList:[
					{
						name:"预约订单",
						icon:require("../../../static/user/reserve-order.png"),
						url:"/pages/user/order/reserve/list/index"
					},
					{
						name:"商城订单",
						icon:require("../../../static/user/mall-order.png"),
						url:"/pages/user/order/mall/list/index"
					},
					{
						name:"捎带记录",
						icon:require("../../../static/user/piggyback-record.png"),
						url:"/pages/user/piggyback/list/index"
					},
					{
						name:"我的消息",
						icon:require("../../../static/user/message.png"),
						url:"/pages/user/message/list/index"
					}
				],
				cellList:[
					{
						name:"诊疗记录",
						icon:require("../../../static/user/medical-records.png"),
						url:"/pages/user/medical-records/list/index"
					},
					{
						name:"就诊人管理",
						icon:require("../../../static/user/patient.png"),
						url:"/pages/user/patient/list/index"
					},
					{
						name:"地址管理",
						icon:require("../../../static/user/address.png"),
						url:"/pages/user/address/list/index"
					},
					{
						name:"联系客服",
						icon:require("../../../static/user/customer-service.png"),
						url:""
					},
					{
						name:"用户协议",
						icon:require("../../../static/user/user-agreement.png"),
						url:"/pages/user/protocol/index"
					}
				]
			}
		},
		methods: {
			handleToSite(){
				this.$Router.push({path:'/pages/user/site/index/index'})
			},
			handleTo(index){
				let url = this.rowMenuList[index].url;
				
				if(!url)
					return;
				
				this.$Router.push(url)
			},
			handleToMenu(index){
				let url = this.cellList[index].url;
				
				if(!url)
					return;
				
				this.$Router.push(url)
			}
		}
	}
</script>

<style>
	
</style>
<style lang="scss" scoped>
	
	.container{
		position: fixed;
		width: 100vw;
		.content{
			margin-top: 10rpx;
			background-color: #FFFFFF;
			
			.menu{
				position: relative;
				padding: 31rpx 0 21rpx;
				.name{
					margin-top: 21rpx;
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 100;
					color: #333333;
				}
			}
			
			::v-deep .u-cell{
				padding: 26rpx 30rpx 29rpx 28rpx;
			}
		}
		
		.userInfo{
			background-color: #FFFFFF;
			padding: 31rpx 36rpx 47rpx 26rpx;
			
			.name{
				line-height: 33rpx;
				font-size: 34rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #000000;
				margin-bottom: 19rpx;
			}
			
			.phone{
				line-height: 20rpx;
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999999;
			}
			
			.level-btn{
				padding: 11rpx 10rpx 11rpx 12rpx;
				border: 2rpx solid #9B70C2;
				border-radius: 100rpx;
				
				::v-deep .u-icon{
					font-family: PingFang SC;
					font-weight: 500;
				}
			}
		}
	}
</style>
