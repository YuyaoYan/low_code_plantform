<template>
	<el-dialog
		title="操作列设置"
		top="100px"
		width="400px"
		class="table-field-setting-operate-column-dialog-container"
		:visible="visible"
		:show-close="false"
	>
		<div class="operate-container">
			<p v-for="(item, index) in localOperateList" :key="index">
				<span>{{ item.name }}</span>
				<i
					class="el-icon-remove-outline"
					@click="handleChange(item, 'remove')"
				></i>
			</p>
			<el-input
				placeholder="请输入要增加的按钮名称"
				v-model="value"
				size="small"
				class="input-with-select"
			>
				<el-button
					slot="append"
					icon="el-icon-plus"
					@click="handleChange(value, 'plus')"
				></el-button>
			</el-input>
		</div>
		<span slot="footer" class="dialog-footer">
			<el-button @click="handleClose(false)" size="small">取消</el-button>
			<el-button type="primary" @click="handleClose(true)" size="small">
				保存
			</el-button>
		</span>
	</el-dialog>
</template>
<script>
import _ from 'lodash'
export default {
	name: '',
	props: {
		operateList: {
			type: Array,
			default: () => []
		},
		visible: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			value: '',
			localOperateList: []
		}
	},
	watch: {
		visible(val) {
			if (val) {
				this.localOperateList = _.cloneDeep(this.operateList || [])
			}
		}
	},
	methods: {
		handleClose(flag) {
			if (this.value) {
				this.$message.warning('请点击【+】以保存当前内容')
				return
			}
			if (flag) {
				this.$emit('close', false, this.localOperateList)
			} else {
				this.$emit('close', false, this.operateList)
			}
		},
		handleChange(item, type) {
			if (type === 'remove') {
				this.localOperateList[
					this.localOperateList.findIndex((i) => i.name === item.name)
				] = null
				this.localOperateList = this.localOperateList.filter((i) => !!i)
			} else if (type === 'plus') {
				item &&
					this.localOperateList.push({
						name: item,
						tagType: 'el-button',
						attributes: {
							type: 'text'
						}
					})
				this.value = ''
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.table-field-setting-operate-column-dialog-container {
	::v-deep .el-dialog__body {
		text-align: left;
		padding: 20px 55px !important;
		height: 400px !important;
		overflow: auto;
	}
	.operate-container {
		> p {
			font-size: 16px;
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
			> span {
				display: inline-block;
				// width: 70%;
				// margin-top: 10px;
				// margin-right: 16px;
				color: #409eff;
			}
			.el-icon-remove-outline,
			.el-icon-circle-plus-outline {
				padding-right: 6px;
				cursor: pointer;
			}
		}
		::v-deep .el-input-group__append,
		.el-input-group__prepend {
			padding: 0 10px;
		}
	}
}
</style>
