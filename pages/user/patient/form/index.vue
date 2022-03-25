<template>
	<view class="container safe-area-inset-bottom">
		<view class="content">
			<u-form :labelStyle="labelStyle" labelWidth="230">
				<view class="card">
					<view class="u-flex u-row-between upload">
						<view>
							<u-upload maxCount="1" width="310" height="226"
								:uploadIcon="require('../../../../static/icon/card-portrait.png')" uploadIconSize="142"
								uploadText="上传身份证人像面">
							</u-upload>
						</view>
						<view>
							<u-upload maxCount="1" width="310" height="226"
								:uploadIcon="require('../../../../static/icon/card-national.png')" uploadIconSize="142"
								uploadText="上传身份证国徽面">
							</u-upload>
						</view>
					</view>
					<u-form-item label="姓名" required>
						<u-input input-align="right" clearable :customStyle="customStyle"
							:placeholderStyle="placeholderStyle" placeholder="请输入姓名"></u-input>
					</u-form-item>
					<u-form-item label="身份证" required>
						<u-input input-align="right" clearable :customStyle="customStyle"
							:placeholderStyle="placeholderStyle" placeholder="请输入身份证号码"></u-input>
					</u-form-item>
					<u-form-item label="性别" required :borderBottom="false">
						<u-input input-align="right" clearable :customStyle="customStyle"
							:placeholderStyle="placeholderStyle" placeholder="请选择性别" type="select"
							@click="genderShow = true"></u-input>
						<u-action-sheet safe-area-inset-bottom :list="genderList" v-model="genderShow"
							@click="handleGender"></u-action-sheet>
					</u-form-item>
				</view>
				<view class="card">
					<u-form-item label="年龄" required>
						<u-input input-align="right" type="number" maxlength="2" clearable :customStyle="customStyle"
							:placeholderStyle="placeholderStyle" placeholder="请输入年龄"></u-input>
					</u-form-item>
					<u-form-item label="联系电话" required>
						<u-input input-align="right" clearable :customStyle="customStyle"
							:placeholderStyle="placeholderStyle" placeholder="请输入联系电话"></u-input>
					</u-form-item>
					<u-form-item label="紧急联系电话" required>
						<u-input input-align="right" clearable :customStyle="customStyle"
							:placeholderStyle="placeholderStyle" placeholder="请输入紧急人联系电话"></u-input>
					</u-form-item>
					<u-form-item label="居住地址" required right-icon="map">
						<u-input input-align="right" disabled clearable :customStyle="customStyle"
							:placeholderStyle="placeholderStyle" placeholder="点击选取地址"></u-input>
					</u-form-item>
					<u-form-item label="信息地址（门牌号）" required :borderBottom="false">
						<u-input input-align="right" clearable :customStyle="customStyle"
							:placeholderStyle="placeholderStyle" placeholder="请输入具体地址和门牌号"></u-input>
					</u-form-item>
				</view>
				<view class="card u-flex u-row-between">
					<view class="label">设置默认就诊人</view>
					<u-switch v-model="checked" activeColor="#9B70C2" size="42"></u-switch>
				</view>
				<view class="tips">
					<view class="title">
						<u-icon name="info-circle-fill" size="24" color="#9B70C2" label="温馨提示" labelPos="left"
							labelColor="#000000" labelSize="26" margin-right="10">
						</u-icon>
					</view>
					<view class="u-m-t-30">
						<view class="row-text">1、根据相关政策，现需要提交就诊人实名认证信息并认证后方 可使用平台服务；</view>
						<view class="row-text">2、就诊人姓名，证件信息用于平台审核，不会外传，请正确输 入。</view>
					</view>
				</view>
			</u-form>
			<view class="operate safe-area-inset-bottom">
				<view class="button u-flex u-row-center">
					<u-button type="primary" @click="handleSubmit">{{false?'修改':'保存'}}</u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: '',
				labelStyle: {
					'font-size': '26rpx',
					'font-family': 'PingFang SC',
					'font-weight': 'bold',
					'color': '#000000',
				},
				customStyle: {
					'min-height': '63rpx',
				},
				placeholderStyle: `font-size: 26rpx;font-family: PingFang SC;font-weight: 500;color: #555555;`,
				genderList: [{
						text: '男'
					},
					{
						text: '女'
					}
				],
				genderShow: false,
			};
		},
		methods: {
			handleGender(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
	.container {
		.content {
			padding: 20rpx 15rpx 112rpx;

			.operate {

				.button {
					padding: 8px 0;

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

			.tips {
				margin-top: 30rpx;
				padding: 0 30rpx;

				.row-text {
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #000000;
					margin-bottom: 20rpx;
				}
			}

			.card {
				background: #FFFFFF;
				box-shadow: 3rpx 0rpx 11rpx 0rpx rgba(171, 171, 171, 0.48);
				border-radius: 16rpx;
				padding: 30rpx 30rpx 30rpx 38rpx;
				margin-bottom: 15rpx;

				.upload {
					margin-bottom: 11rpx;

					::v-deep .u-add-tips {
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #999999;
					}

					::v-deep .u-list-item {
						margin: 0;
					}
				}

				::v-deep .u-form-item {
					padding: 8rpx 0;
				}

				.label {
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #000000;
				}
			}
		}
	}
</style>
