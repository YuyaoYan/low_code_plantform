<template>
	<div class="table-field-setting-dialog-container">
		<el-dialog
			title="表格字段设置"
			top="50px"
			width="90%"
			:visible="visible"
			:show-close="false"
			@closed="onClosed"
		>
			<el-button
				size="small"
				class="add-column-btn"
				icon="el-icon-plus"
				@click="handleAddColumn"
			>
				增加一列
			</el-button>
			<el-button
				size="small"
				class="add-column-btn"
				icon="el-icon-setting"
				@click="handleSetOperateColumn"
			>
				配置操作列
			</el-button>
			<el-table
				border
				ref="tableFieldSettingRef"
				height="650px"
				:data="tableData"
				class="table-field-setting-dialog-table"
			>
				<el-table-column prop="label" label="列标题" width="160" align="center">
					<template slot-scope="{ row, $index }">
						<el-form
							:ref="`validateFormLabel${$index}`"
							:model="row"
							class="table-form-line"
							@submit.native.prevent
						>
							<el-form-item
								prop="label"
								:rules="[
									{ required: true, message: '列标题不能为空', trigger: 'blur' }
								]"
							>
								<el-input v-model="row.label" size="small"></el-input>
							</el-form-item>
						</el-form>
					</template>
				</el-table-column>
				<el-table-column
					prop="propName"
					label="字段名"
					width="160"
					align="center"
				>
					<template slot-scope="{ row, $index }">
						<el-form
							:ref="`validateFormProp${$index}`"
							:model="row"
							class="table-form-line"
							@submit.native.prevent
						>
							<el-form-item
								prop="propName"
								:rules="[
									{ required: true, message: '字段名不能为空', trigger: 'blur' }
								]"
							>
								<el-input v-model="row.propName" size="small"></el-input>
							</el-form-item>
						</el-form>
					</template>
				</el-table-column>
				<el-table-column prop="width" label="列宽度" align="center">
					<template slot-scope="{ row }">
						<el-input-number v-model="row.width" size="small"></el-input-number>
					</template>
				</el-table-column>
				<el-table-column prop="type" label="列类型" align="center">
					<template slot-scope="{ row }">
						<el-select v-model="row.type" placeholder="请选择" size="small">
							<el-option
								v-for="item in cloumnTypeOptions"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>
					</template>
				</el-table-column>
				<el-table-column prop="headerAlign" label="表头对齐方式" align="center">
					<template slot-scope="{ row }">
						<el-select
							v-model="row.tableColumnAttributes.headerAlign"
							placeholder="请选择"
							clearable
							size="small"
						>
							<el-option
								v-for="item in alignOptions"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>
					</template>
				</el-table-column>
				<el-table-column prop="align" label="列对齐方式" align="center">
					<template slot-scope="{ row }">
						<el-select
							v-model="row.tableColumnAttributes.align"
							placeholder="请选择"
							clearable
							size="small"
						>
							<el-option
								v-for="item in alignOptions"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>
					</template>
				</el-table-column>
				<el-table-column prop="fixed" label="列固定" align="center">
					<template slot-scope="{ row }">
						<el-select
							v-model="row.tableColumnAttributes.fixed"
							placeholder="请选择"
							clearable
							size="small"
						>
							<el-option
								v-for="item in cloumnFixedOptions"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>
					</template>
				</el-table-column>
				<el-table-column
					prop="showOverflowTooltip"
					label="内容过长显示"
					align="center"
				>
					<template slot-scope="{ row }">
						<el-select
							v-model="row.tableColumnAttributes.showOverflowTooltip"
							placeholder="请选择"
							clearable
							size="small"
						>
							<el-option
								v-for="item in tooltipOptions"
								:key="item.label"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>
					</template>
				</el-table-column>
				<el-table-column
					prop="move"
					label="排序"
					width="60"
					align="center"
					fixed="right"
				>
					<template slot-scope="{ row, $index }">
						<!-- <i class="el-icon-sort sortable-handle"></i> -->
						<i
							class="el-icon-sort-down"
							v-if="$index !== tableData.length - 1"
							@click="moveDown(row, $index)"
						></i>
						<i
							class="el-icon-sort-up"
							v-if="$index !== 0"
							@click="moveUp(row, $index)"
						></i>
					</template>
				</el-table-column>
				<el-table-column
					prop="operate"
					label="操作"
					fixed="right"
					width="120"
					align="center"
				>
					<template slot-scope="scope">
						<el-button
							type="text"
							size="small"
							@click="handleOperate(scope, 'clone')"
							>复制列</el-button
						>
						<el-button
							type="text"
							size="small"
							@click="handleOperate(scope, 'delete')"
							>删除列</el-button
						>
					</template>
				</el-table-column>
			</el-table>

			<span slot="footer" class="dialog-footer">
				<!-- <el-button @click="validateTable" size="small">验证</el-button> -->
				<el-button @click="handleClose(false)" size="small">取消</el-button>
				<el-button type="primary" @click="handleClose(true)" size="small">
					保存
				</el-button>
			</span>
		</el-dialog>
		<table-culomn-operate-dialog
			:operateList="operateList"
			:visible="showSetOperateColumn"
			@close="handleSetOperateColumnClose"
		>
		</table-culomn-operate-dialog>
	</div>
</template>
<script>
import _ from 'lodash'
import Sortable from 'sortablejs'
import tableCulomnOperateDialog from './TableFieldSettingOperateColumnDialog.vue'
// import { ReactiveFlags } from 'vue'

export default {
	components: { tableCulomnOperateDialog },
	props: {
		visible: {
			type: Boolean
		},
		activeData: {
			default: () => []
		}
	},
	watch: {
		visible: {
			handler(val) {
				this.tableData =
					this.activeData &&
					this.activeData.tableHeader.length &&
					this.activeData.tableHeader.map((i, index) => {
						i.key = Math.random() * (index + 1)
						return _.cloneDeep(i)
					})
				// 操作列按钮初始化
				const operateObj = this.tableData.find((i) => i.type === 'operate')
				this.operateList = operateObj ? operateObj.tag || [] : []
			}
		}
	},
	data() {
		return {
			tableData: [],
			cloumnTypeOptions: [
				{
					value: 'index',
					label: '序号列'
				},
				{
					value: 'selection',
					label: '多选列'
				},
				{
					value: 'normal',
					label: '普通列'
				},
				{
					value: 'operate',
					label: '操作列'
				}
			],
			cloumnFixedOptions: [
				{
					value: 'left',
					label: '左固定'
				},
				{
					value: 'right',
					label: '右固定'
				}
			],
			alignOptions: [
				{
					value: 'left',
					label: '左对齐'
				},
				{
					value: 'center',
					label: '居中'
				},
				{
					value: 'right',
					label: '右对齐'
				}
			],
			tooltipOptions: [
				{
					value: true,
					// value: { type: Boolean, default: true },
					label: 'show-overflow-tooltip'
				}
			],
			// 排序后的数据列表
			newIndexList: [],
			showSetOperateColumn: false,
			operateList: []
		}
	},
	methods: {
		handleClose(flag) {
			if (flag) {
				let valid = this.validateTable()
				// !valid && this.$message.warning('【列标题】和【字段名】为必填字段')
				valid &&
					this.$emit(
						'close',
						false,
						_.cloneDeep(this.tableData) || [],
						_.cloneDeep(this.operateList) || []
					)
			} else {
				this.$emit('close', false)
			}
		},
		onClosed() {
			this.tableData = []
		},
		handleSetOperateColumnClose(flag, operateList) {
			this.showSetOperateColumn = flag
			this.operateList = operateList
		},
		// 表格必填校验
		validateTable() {
			let arr = Object.keys(this.$refs).filter((i) =>
				i.includes('validateForm')
			)
			let flagList = []
			arr.forEach((i) => {
				this.$refs[i] &&
					this.$refs[i].validate((valid) => {
						flagList.push(valid)
					})
			})

			// 操作列存在数量校验
			let operateColumnCount = 0
			this.tableData.forEach((i) => {
				if (i.type === 'operate') {
					operateColumnCount++
				}
			})

			if (!flagList.every((i) => i)) {
				this.$message.warning('【列标题】和【字段名】为必填字段，请补充后保存')
				return false
			} else if (operateColumnCount > 1) {
				this.$message.warning('至多存在一列【操作列】，请修改')
				return false
			} else if (operateColumnCount === 1 && this.operateList < 1) {
				this.$message.warning('请配置【操作列】按钮')
				return false
			} else {
				return true
			}
		},
		// 增加列
		handleAddColumn() {
			this.tableData.push({
				type: 'normal',
				label: `新建列${this.tableData.length + 1}`,
				propName: 'prop',
				tableColumnAttributes: {}
			})
		},
		// 操作列配置
		handleSetOperateColumn() {
			this.showSetOperateColumn = true
		},
		// 上移
		moveUp(item, index) {
			this.tableData.splice(index - 1, 0, item) // 定位到点击位置的上一行，0即不删除如何元素，在此位置插入item
			this.tableData.splice(index + 1, 1) // 此时数组中有重复元素，把原来被挤下去的元素删除
			// this.moveUpdateSort(this.tableData);//更新数组对象到后端
		},
		// 下移
		moveDown(item, index) {
			console.log(index)
			this.tableData.splice(index + 2, 0, item)
			this.tableData.splice(index, 1)
			// this.moveUpdateSort(this.tableData);//更新数组对象到后端
		},
		handleOperate({ row, $index }, type) {
			if (type === 'clone') {
				let cloneRow = _.cloneDeep(row)
				cloneRow.key = Math.random() * ($index + 1)
				this.tableData.push(cloneRow)
			} else if (type === 'delete') {
				this.tableData.splice($index, 1)
			}
		},
		// 实现拖动排序
		// 创建sortable实例
		initSortableList() {
			let el = this.$refs.tableFieldSettingRef.$el.querySelector(
				'.el-table__body-wrapper tbody'
			)
			// let el = document.querySelector('.sortable-handle');
			//设置配置
			let _this = this
			Sortable.create(el, {
				animation: 150,
				sort: true,
				// handle: '.sortable-handle',
				// draggable: '.sortable-handle', // 设置可拖拽行的类名(el-table自带的类名)
				draggable: '.el-table__row', // 设置可拖拽行的类名(el-table自带的类名)
				forceFallback: true,
				onEnd({ newIndex, oldIndex }) {
					let currRow = _this.tableData.splice(oldIndex, 1)[0]
					_this.tableData.splice(newIndex, 0, currRow)
				}
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.table-field-setting-dialog-container {
	::v-deep .el-dialog__body {
		text-align: left;
		padding: 0 20px 0px;
		height: 700px;
		overflow: auto;

		.add-column-btn {
			margin-bottom: 10px;
		}
	}

	.table-field-setting-dialog-table {
		::v-deep .el-table__cell {
			padding: 13px 0;
		}
	}

	.table-form-line {
		position: absolute;
		top: 8px;
		left: 11px;
		width: 88%;
	}

	::v-deep .el-form-item {
		margin-bottom: 10px;
	}

	::v-deep .el-form-item__error {
		padding-top: unset;
		position: absolute;
		bottom: -9px;
		top: unset;
	}

	.el-icon-sort {
		cursor: move;
	}

	.el-icon-sort-up,
	.el-icon-sort-down {
		cursor: pointer;
	}
}
</style>
