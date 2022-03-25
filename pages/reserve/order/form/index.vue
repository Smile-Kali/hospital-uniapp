<template>
	<view class="container safe-area-inset-bottom">
		<view class="content">
			<u-form labelWidth="170">
				<view class="card">
					<view class="head">
						就诊人信息
					</view>
					<view class="body">
						<u-form-item label="姓名">
							<view class="value">小样</view>
						</u-form-item>
						<u-form-item label="身份证">
							<view class="value">5888955956236515889</view>
						</u-form-item>
						<u-form-item label="预约时间">
							<view class="u-flex">
								<text class="value">12-20(星期一) 17:00-18:00</text>
								<view class="u-flex u-row-center time-tag">
									<view>1小时</view>
								</view>
							</view>
						</u-form-item>
						<u-form-item label="联系电话">
							<view class="value">15789563284</view>
						</u-form-item>
						<u-form-item label="紧急联系电话">
							<view class="value">15789563284</view>
						</u-form-item>
						<u-form-item label="症状描述">
							<u-input placeholder="请填写"></u-input>
						</u-form-item>
						<u-form-item label="就诊人体温" rightIcon="arrow-right">
							<u-input disabled placeholder=" "></u-input>
						</u-form-item>
						<u-form-item label="皮肤情况" rightIcon="arrow-right">
							<u-input disabled placeholder=" "></u-input>
						</u-form-item>
						<u-form-item label="是否月经期">
							<view class="u-flex u-row-right">
								<u-switch v-model="checked" size="42" activeColor="#9B70C2"></u-switch>
							</view>
						</u-form-item>
						<view class="form-item">
							<view class="u-flex u-col-bottom">
								<view class="label">上传病史信息</view>
								<view class="tisp">(最多上传3张)</view>
							</view>
							<view class="u-m-t-30">
								<u-upload width="180" height="180" max-count="3"></u-upload>
							</view>
						</view>
						<view class="form-item">
							<view class="u-flex u-col-bottom">
								<view class="label">上传病史信息</view>
								<view class="tisp">(舌象、伤口等，最多上传3张)</view>
							</view>
							<view class="u-m-t-30">
								<u-upload width="180" height="180" max-count="3"></u-upload>
							</view>
						</view>
						<view class="form-item">
							<view class="u-flex u-col-bottom">
								<view class="label">下单者与就诊人关系</view>
							</view>
							<view class="u-m-t-20">
								<view class="u-flex u-flex-wrap">
									<view :class="['tag',relation==index?'tag-active':'' ]"
										v-for="(item,index) in relationList" :key="index"
										@click="handleUseRelation(index)">
										<text>{{item.label}}</text>
									</view>
								</view>
							</view>
						</view>
						<view class="form-item">
							<view class="u-flex u-col-bottom">
								<view class="label">就诊人居住环境</view>
							</view>
							<view class="u-m-t-20">
								<view class="u-flex u-flex-wrap">
									<view :class="['tag',environment==index?'tag-active':'' ]"
										v-for="(item,index) in environmentList" :key="index"
										@click="handleUseEnvironment(index)">
										<text>{{item.label}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="card">
					<view class="head">
						下单人信息
					</view>
					<view class="body">
						<u-form-item label="姓名">
							<u-input placeholder="请输入姓名"></u-input>
						</u-form-item>
						<u-form-item label="联系电话">
							<u-input placeholder="请输入联系电话"></u-input>
						</u-form-item>
					</view>
				</view>
				<view class="card">
					<view class="head">
						项目信息
					</view>
					<view class="body">
						<view class="time">
							预计上门时间2021.10.20 19:00-20:00
						</view>
						<view class="goods-list">
							<view class="goods u-flex u-col-top">
								<u-image width="142" height="139" borderRadius="6"></u-image>
								<view class="u-m-l-20 u-flex-1">
									<view class="goods-name">一次性使用无菌换药包</view>
									<view class="u-flex u-row-between u-m-t-25">
										<view class="u-flex">
											<view class="goods-sku">护理名称</view>
											<view class="goods-number">1</view>
										</view>
										<view class="goods-price">￥420/次</view>
									</view>
									<view class="u-flex u-row-right u-col-bottom u-m-t-30">
										<view class="total-text">总价:</view>
										<view class="total-price">1.00</view>
									</view>
								</view>
							</view>
							<view>
								<piggyback-goods :showTag="true"></piggyback-goods>
							</view>
							<view class="tisp-consume">
								*消耗的耗材费用需根据实际用量收取，实行多退少补原则
							</view>
						</view>
						<view class="u-border-top u-p-t-20">
							<medical-care></medical-care>
						</view>
					</view>
				</view>
			</u-form>
			<view class="operate button">
				<u-button @click="handleSubmit">提交订单</u-button>
			</view>
		</view>
		<u-popup mode="center" v-model="show" closeable borderRadius="30">
			<view class="informed-letter">
				<view class="title">
					知情同意书
				</view>
				<scroll-view scroll-y>
					<view class="informed-content">
						甲方：XXX医院
						<br />
						乙方：用户或法定监护人
						<br />
						<br />
						<br />
						甲乙双方本着平等、尊重和自愿的原则签订此协议，接受以下条款的约定：
						<br />
						1.甲方作为服务的提供者，主要根据乙方的提供的由三级甲等以上医院出具证明（包括但不限于病历、检查检验证明等）及情况描述，判断上门医疗护理服务的可行性和安全性（上门抽血检验、检查等无需提供病历资料）。乙方保证其提供证明的真实性。由于乙方提供的证明不真实、不全面而导致的所以后续问题由乙方自行承担。
						<br />
						2.医院出具的证明需予以上传，上传内容包括但不限于出院记录、处置医嘱、检查检验证明等。乙方保证此次服务项目已经在前期住院时实施过，或者医嘱中注明可在院外实施该服务。
						<br />
						3.乙方需保确保服务对象不处于危重或紧急状态，因乙方隐瞒服务对象身体任何不稳定因素而导致服务过程中出现问题，由乙方承担全部责任。
						<br />
						4.某些服务项目存在一定的风险性（包括但不限于胃管更换护理、导尿管更换护理等），乙方应在服务前签署风险知情同意书。如不签署，甲方有权利拒绝进行服务。
						<br />
						5.乙方进行预约后，如服务对象病情加重请立刻送往上级医院就诊，同时通知平台取消服务。
						<br />
						6.乙方需积极配合甲方进行电话或上门回访，并如实告之甲方服务对象的身体健康状况，因乙方隐瞒情况导致服务对象病情加重的，由乙方自行承担全部责任。
						<br /><br /><br />


						乙方已阅读并遵守上述内容。
					</view>
				</scroll-view>
				<view class="u-flex-col u-col-center u-row-center u-m-t-60">
					<u-checkbox size="28" v-model="checked1" activeColor="#9B70C2">我已阅读并同意签署《知情同意书》</u-checkbox>
					<view class="u-m-t-30">
						<u-button :disabled="!checked1" size="medium" type="primary" shape="circle"
							@click="handleSubmit()">确定</u-button>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import piggybackGoods from "@/components/piggyback-goods/index"
	import medicalCare from "@/components/medical-care/index"
	export default {
		components: {
			medicalCare,
			piggybackGoods
		},
		data() {
			return {
				checked: false,
				checked1: false,
				relationList: [{
						label: "本人"
					},
					{
						label: "子女"
					},
					{
						label: "父母"
					},
					{
						label: "配偶"
					},
					{
						label: "其他"
					}
				],
				relation: 0,
				environmentList: [{
						label: "与家人同居"
					},
					{
						label: "独居"
					},
					{
						label: "养老机构"
					},
					{
						label: "其他"
					}
				],
				environment: 0,
				show: false,
			};
		},
		methods: {
			handleUseRelation(index) {
				this.relation = index;
			},
			handleUseEnvironment(index) {
				this.environment = index;
			},
			handleSubmit() {
				let _this = this;
				if (!this.checked1) {
					this.show = true;
					return false;
				} else {
					this.show = false;
					uni.showModal({
						title: "温馨提示",
						content: '是否确认提交订单？',
						success(res) {
							if (res.confirm) {
								_this.$Router.replace({
									path: '/pages/reserve/order/result/index'
								})
							}
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.container {

		.informed-letter {
			width: 650rpx;
			background-color: #FFFFFF;
			padding: 65rpx 25rpx 38rpx;

			.title {
				text-align: center;
				font-size: 34rpx;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #333333;
				padding-bottom: 58rpx;
			}

			.informed-content {
				height: 600rpx;
				font-size: 28rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #616161;
				line-height: 42rpx;
			}

			::v-deep .u-checkbox {
				.u-checkbox__icon-wrap {
					border-color: #9B70C2;
				}

				.u-checkbox__label {
					font-size: 24rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #616161;
					line-height: 42rpx;
				}
			}

		}

		.content {
			padding: 20rpx 15rpx;
			margin-bottom: 156rpx;

			.button {
				padding: 16rpx 0;
				padding-bottom: 60rpx;

				::v-deep .u-btn {
					font-size: 34rpx;
					font-family: Source Han Sans CN;
					font-weight: 500;
					color: #FFFFFF;
					width: 705rpx;
					height: 81rpx;
					background: #9B70C2;
					border-radius: 9rpx;
				}
			}

			.card {
				background: #FFFFFF;
				box-shadow: 0px 3rpx 11rpx 0rpx rgba(147, 147, 147, 0.48);
				border-radius: 16rpx;
				padding: 30rpx;
				margin-bottom: 20rpx;

				.head {
					line-height: 35rpx;
					font-size: 36rpx;
					font-family: PingFang SC;
					font-weight: 800;
					color: #000000;
				}

				.body {

					.time-tag {
						width: 121rpx;
						height: 39rpx;
						background: #9B70C2;
						border-radius: 21rpx;
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #FFFFFF;
						margin-left: 10rpx;
					}

					.goods-list {
						margin-top: 7rpx;

						.tisp-consume {
							line-height: 24rpx;
							font-size: 24rpx;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #9B70C2;
							margin: 30rpx 0;
						}

						.goods {
							margin-bottom: 60rpx;

							.goods-name {
								margin-top: 10rpx;
								line-height: 28rpx;
								font-size: 30rpx;
								font-family: PingFang SC;
								font-weight: bold;
								color: #333333;
							}

							.goods-sku {
								line-height: 25rpx;
								font-size: 26rpx;
								font-family: Source Han Sans CN;
								font-weight: 500;
								color: #333333;
							}

							.goods-number {
								margin-left: 39rpx;
								line-height: 20rpx;
								font-size: 26rpx;
								font-family: Source Han Sans CN;
								font-weight: 500;
								color: #333333;

								&::before {
									content: 'x';
									line-height: 22rpx;
									font-size: 22rpx;
									font-family: Source Han Sans CN;
									font-weight: 500;
									color: #333333;
								}
							}

							.goods-price {
								line-height: 28rpx;
								font-size: 26rpx;
								font-family: Source Han Sans CN;
								font-weight: 500;
								color: #333333;
							}

							.total-text {
								line-height: 22rpx;
								font-size: 24rpx;
								font-family: Source Han Sans CN;
								font-weight: 400;
								color: #333333;
							}

							.total-price {
								display: flex;
								align-items: flex-end;
								line-height: 32rpx;
								font-size: 35rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #FE3824;

								&::before {
									content: '￥';
									line-height: 26rpx;
									font-size: 26rpx;
									font-family: PingFang SC;
									font-weight: 500;
									color: #FE3824;
								}
							}
						}
					}

					.time {
						padding: 48rpx 0 27rpx;
						line-height: 26rpx;
						font-size: 27rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #999999;
					}

					::v-deep .u-form-item {
						padding: 7rpx 0;

						::v-deep .u-form-item--left__content__label {
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}
					}

					.value {
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #555555;
					}

					.form-item {
						padding: 30rpx 0 0;

						.label {
							line-height: 25rpx;
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #000000;
						}

						.tisp {
							line-height: 20rpx;
							font-size: 20rpx;
							font-family: PingFang SC;
							font-weight: Medium;
							color: #999999;
						}

						.tag {
							width: 143rpx;
							height: 54rpx;
							border: 1rpx solid #999999;
							border-radius: 6rpx;
							text-align: center;
							line-height: 54rpx;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #333333;
							margin: 0 20rpx 20rpx 0;
						}

						.tag-active {
							background: #9B70C2;
							border-color: #9B70C2;
							color: #FFFFFF;
						}
					}
				}
			}
		}
	}
</style>
