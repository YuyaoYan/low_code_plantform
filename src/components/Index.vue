<template>
	<div class="platform-container">
		<el-container>
			<el-header style="height: 40px">Low Code Platform</el-header>
			<el-container>
				<!-- left -->
				<el-aside width="350px">
					<div class="search">
						<el-input
							clearable
							style="width: 260px"
							placeholder="请输入要检索的模板名称"
							v-model="folderModel"
							@change="handleSearchFolder"
						></el-input>
						<el-tooltip
							class="item"
							content="点击新建文件夹"
							placement="top-start"
						>
							<el-button
								size="small"
								icon="el-icon-plus"
								circle
								@click="handleAddNewFolder"
							></el-button>
						</el-tooltip>
					</div>
					<div class="file-list-container">
						<div
							v-for="(item, index) in folderList"
							:key="index"
							:class="`file-list-item ${item.active ? 'active' : ''}`"
							@click="handleSelectFile(item)"
						>
							<el-input
								clearable
								v-if="item.edit"
								v-model="item.label"
								size="mini"
								style="width: 260px"
								placeholder="请输入文件夹名称"
							></el-input>
							<span v-else>{{ item.label }}</span>
							<span class="operate-icon" v-if="item.active">
								<i
									class="el-icon-edit"
									v-if="!item.edit"
									@click="
										() => {
											item.edit = true
										}
									"
								></i>
								<i
									class="el-icon-delete"
									v-if="!item.edit"
									@click="handleDeleteFold(index)"
								></i>
								<i
									class="el-icon-finished"
									v-if="item.edit"
									@click="handleEditFileName(item)"
								></i>
							</span>
						</div>
					</div>
				</el-aside>
				<!-- right -->
				<el-main>
					<div class="operate">
						<el-button
							size="small"
							icon="el-icon-plus"
							type="primary"
							plain
							@click="handleEditDesign('new')"
							>新建设计</el-button
						>
					</div>
					<div class="template-content">
						<div
							class="content-item"
							v-for="(item, index) in activeFold.children"
							:key="index"
							@mouseenter="handleMouseEvent('enter', item)"
							@mouseleave="handleMouseEvent('leave', item)"
						>
							<i v-if="!item.active" class="el-icon-data-analysis"></i>
							<div v-if="item.active" class="content-item-hover">
								<div class="icon-content">
									<!-- 编辑icon -->
									<i
										class="el-icon-edit-outline"
										@click="handleEditDesign('edit', item, index)"
									></i>
									<!-- 删除icon -->
									<i
										class="el-icon-delete"
										@click="handleEditDesign('delete', item, index)"
									></i>
									<!-- 预览icon -->
									<el-tooltip class="item" content="预览" placement="left">
										<i
											class="el-icon-monitor"
											@click="handleEditDesign('preview', item, index)"
										></i>
									</el-tooltip>
									<!-- 复制icon -->
									<el-tooltip class="item" content="复制" placement="right">
										<i
											class="el-icon-copy-document"
											@click="handleEditDesign('copy', item)"
										></i>
									</el-tooltip>
								</div>
							</div>
							<div class="content-item-label">
								<span
									v-if="!item.labelEdit"
									@mouseenter="
										() => {
											item.showEdit = true
										}
									"
									@mouseleave="
										() => {
											item.showEdit = false
										}
									"
									>{{ item.label }}
									<i
										v-if="item.showEdit"
										class="el-icon-edit"
										@click="
											() => {
												item.labelEdit = true
											}
										"
									></i>
								</span>
								<el-input
									v-if="item.labelEdit"
									size="mini"
									clearable
									v-model="item.label"
									placeholder="请输入模板名称"
									@keyup.enter.native="() => handleChangeLabel(item, index)"
									@blur="() => handleChangeLabel(item, index)"
								></el-input>
							</div>
						</div>
					</div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import _ from 'lodash'
import { folderMock } from '../mock/index'
import { getTemplates, writeTemplates } from '@/api/index'

export default {
	name: 'HelloWorld',
	data() {
		return {
			folderModel: '',
			// folderList: folderMock,
			// folderListAll: folderMock, // 存放检索前的全量文件列表
			folderList: [],
			folderListAll: [], // 存放检索前的全量文件列表
			activeFold: {} // 当前选中的文件夹
		}
	},
	async created() {
		await this.getTemplates()

		// 从编辑页切换回来后的保存逻辑
		const { activeFolderId, activeTemplateId } = this.$route.query
		if (activeFolderId && activeTemplateId && this.folderList.length) {
			this.folderList.forEach((i) => {
				if (i.id === activeFolderId) {
					i.children.forEach((j) => {
						if (j.subId === activeTemplateId) {
							j.param = JSON.parse(localStorage.getItem('editObj')) || []
						}
					})
				}
			})
			await this.writeTemplates(this.folderList)
			localStorage.removeItem('editObj')
			this.$router.push({
				path: '/',
				query: {}
			})
			// if (activeFolderId) {
			// 	// 高亮进入编辑页面前选中的文件夹
			// 	let index = _.findIndex(this.folderListAll, ['id', activeFolderId])
			// 	if (index > -1) {
			// 		this.folderListAll[index].active = true
			// 		this.activeFold = this.folderListAll[index]
			// 	}
			// } else {
			// 	// 否则高亮第一条
			// 	this.handleSelectFile(this.folderList[0])
			// }
		}
	},
	methods: {
		// 向服务器请求文件列表
		async getTemplates() {
			await getTemplates().then((res) => {
				this.folderList = res
				this.folderListAll = res
				this.activeFold = res.find((i) => i.active) || {}
			})
			this.$forceUpdate()
		},
		// 保存模板
		async writeTemplates(data) {
			await writeTemplates(data).then((res) => {
				this.$message.success('操作成功')
			})
			await this.getTemplates()
		},
		// 左侧 - 检索文件列表
		handleSearchFolder(val) {
			this.folderListAll.forEach((i) => (i.active = false))
			let arr = this.folderListAll.filter((i) => i.label.includes(val))
			this.folderList = arr
		},
		// 左侧 - 新增文件夹icon
		handleAddNewFolder() {
			this.folderList.forEach((i) => (i.active = false))
			this.folderList.push({
				id: `${+new Date()}`,
				label: '新建文件夹',
				edit: true,
				active: true,
				children: []
			})
			this.folderListAll = this.folderList
			this.activeFold = this.folderList[this.folderList.length - 1]
		},
		// 左侧 - 保存文件夹
		handleEditFileName(item) {
			if (item.label) {
				item.edit = false
				this.writeTemplates(this.folderList)
			}
		},
		// 左侧 - 删除文件夹
		handleDeleteFold(index) {
			this.folderList.forEach((i) => (i.active = false))
			this.$nextTick(() => {
				this.folderList.splice(index, 1)
				this.activeFold = {}
				this.writeTemplates(this.folderList)
			})
		},
		// 左侧 - 选中文件夹
		handleSelectFile(item) {
			this.folderList.forEach((i) => (i.active = false))
			this.$set(item, 'active', true)
			this.activeFold = item
			// item.active = true
		},
		// 右侧 - 鼠标事件
		handleMouseEvent(type, item) {
			if (type === 'enter') {
				item.active = true
			} else if (type === 'leave') {
				item.active = false
			}
		},
		// 右侧 - 修改label回调
		async handleChangeLabel(item, index) {
			if (item.label) {
				item.labelEdit = false
			}
			this.folderList.forEach((i) => {
				i.active &&
					i.children.forEach((j) => {
						if (j.key === index) {
							j = item
						}
					})
			})
			await this.writeTemplates(this.folderList)
		},
		// 右侧 - 操作模板
		async handleEditDesign(type, item, index) {
			switch (type) {
				case 'new':
					// 保存一下
					this.folderList.forEach((i) => {
						i.active &&
							i.children.push({
								subId: `${+new Date()}`,
								label: '新建设计',
								active: false,
								labelEdit: false,
								showEdit: false,
								param: []
							})
					})
					await this.writeTemplates(this.folderList)
					break
				case 'edit':
					localStorage.setItem('editObj', JSON.stringify(item.param))
					this.$router.push({
						path: 'edit',
						query: {
							edit: true,
							activeFolderId: this.activeFold.id,
							activeTemplateId: item.subId,
							breadcrumb: `${this.activeFold.label} / ${item.label}` // 面包屑
						}
					})
					break
				case 'delete':
					// this.activeFold.children.splice(index, 1)

					// 保存一下
					this.folderList.forEach((i) => {
						i.children.splice(index, 1)
					})
					await this.writeTemplates(this.folderList)
					break
				case 'preview':
					break
				case 'copy':
					var _item = _.cloneDeep(item)
					_item.subId = `${+new Date()}`
					_item.label = `${_item.label}-副本`
					_item.active = false
					_item.edit = false
					// this.activeFold.children.push(_item)

					// 保存一下
					this.folderList.forEach((i) => {
						i.active && i.children.push(_item)
					})
					await this.writeTemplates(this.folderList)
					break
				default:
					break
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.platform-container {
	padding: 8px;
	width: 100%;
	height: 100%;
	background-color: #f6f7ff;
}
.el-container {
	width: 100%;
	height: calc(100% - 24px);
	text-align: left;
	font-size: 14px;
}
.el-header {
	// background-color: rgb(217, 236, 255);
	color: #333;
	text-align: center;
	line-height: 40px;
	border-radius: 8px;
	font-weight: 600;
	margin-bottom: 8px;
}

.el-aside {
	background-color: #fff;
	color: #333;
	height: 100%;
	border-radius: 8px;
	margin-right: 8px;
	padding: 20px;
}

.el-main {
	background-color: #fff;
	color: #333;
	text-align: center;
	height: 100%;
	border-radius: 8px;
}
.search {
	display: flex;
	justify-content: space-between;
	text-align: left;
	margin-bottom: 28px;
	align-items: center;
}
.file-list-container {
	line-height: 36px;
	cursor: pointer;
	.file-list-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 8px;
		border-radius: 8px;
	}
	.active {
		background: rgb(255 255 255);
		box-shadow: 0px 0px 7px 2px #e5e8ff;
	}
}
.operate {
	text-align: right;
}
.template-content {
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	flex-direction: row;
	.content-item {
		position: relative;
		width: 120px;
		background: rgb(255 255 255);
		height: 120px;
		border-radius: 16px;
		margin: 36px 22px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0px 0px 7px 2px #e5e8ff;
		cursor: pointer;
		.el-icon-data-analysis {
			font-size: 44px;
			color: #e2e5ff;
		}
		.content-item-hover {
			position: absolute;
			top: 0;
			left: 0;
			font-size: 18px;
			color: #409eff;
			font-weight: 600;
			background: #f4faff;
			width: 100%;
			height: 100%;
			border-radius: 8px;
			box-shadow: 0px 0px 6px 2px #c3d5e7;
			.icon-content {
				display: flex;
				flex-direction: row;
				height: 100%;
				flex-wrap: wrap;
				justify-content: center;
				align-content: center;
				align-items: center;

				.el-icon-edit-outline,
				.el-icon-delete,
				.el-icon-monitor,
				.el-icon-copy-document {
					padding: 14px;
				}
			}
		}
		.content-item-label {
			position: absolute;
			top: 130px;
			left: 0;
			text-align: center;
			width: 100%;
		}
	}
}
.el-icon-edit,
.el-icon-delete,
.el-icon-finished {
	color: #409eff;
	font-weight: 400;
	padding-left: 6px;
}
</style>
