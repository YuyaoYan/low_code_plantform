<template>
	<div class="container">
		<div class="left-board">
			<div class="logo-wrapper">
				<div class="logo">
					<el-button
						plain
						type="primary"
						size="small"
						icon="el-icon-back"
						@click="handleRouterChange('back')"
						>取消</el-button
					>
					<el-button
						size="small"
						icon="el-icon-folder"
						@click="handleRouterChange('save')"
						>保存</el-button
					>
					<!-- <el-button
						size="small"
						icon="el-icon-folder-opened"
						@click="handleRouterChange('saveAs')"
						>另存为</el-button
					> -->
					<span>{{routerParams.breadcrumb}}</span>
				</div>
			</div>
			<el-scrollbar class="left-scrollbar">
				<div class="components-list">
					<div class="components-title">
						<i icon-class="component" />输入型组件
					</div>
					<draggable
						class="components-draggable"
						:list="inputComponents"
						:group="{ name: 'componentsGroup', pull: 'clone', put: false }"
						:clone="cloneComponent"
						draggable=".components-item"
						:sort="false"
						@end="onEnd"
					>
						<div
							v-for="(element, index) in inputComponents"
							:key="index"
							class="components-item"
							@click="addComponent(element)"
						>
							<div class="components-body">
								<i :icon-class="element.tagIcon" />
								{{ element.label }}
							</div>
						</div>
					</draggable>
					<div class="components-title">
						<i icon-class="component" />选择型组件
					</div>
					<draggable
						class="components-draggable"
						:list="selectComponents"
						:group="{ name: 'componentsGroup', pull: 'clone', put: false }"
						:clone="cloneComponent"
						draggable=".components-item"
						:sort="false"
						@end="onEnd"
					>
						<div
							v-for="(element, index) in selectComponents"
							:key="index"
							class="components-item"
							@click="addComponent(element)"
						>
							<div class="components-body">
								<i :icon-class="element.tagIcon" />
								{{ element.label }}
							</div>
						</div>
					</draggable>
					<div class="components-title">
						<i icon-class="component" /> 布局型组件
					</div>
					<draggable
						class="components-draggable"
						:list="layoutComponents"
						:group="{ name: 'componentsGroup', pull: 'clone', put: false }"
						:clone="cloneComponent"
						draggable=".components-item"
						:sort="false"
						@end="onEnd"
					>
						<div
							v-for="(element, index) in layoutComponents"
							:key="index"
							class="components-item"
							@click="addComponent(element)"
						>
							<div class="components-body">
								<i :icon-class="element.tagIcon" />
								{{ element.label || element.default }}
							</div>
						</div>
					</draggable>
					<div class="components-title">表格组件</div>
					<draggable
						class="components-draggable"
						:list="dataComponents"
						:group="{ name: 'componentsGroup', pull: 'clone', put: false }"
						:clone="cloneTableComponent"
						draggable=".components-item"
						:sort="false"
						@end="onEnd"
					>
						<div
							v-for="(element, index) in dataComponents"
							:key="index"
							class="components-item"
							@click="addTableComponent(element)"
						>
							<div class="components-body">
								<i :icon-class="element.tagIcon" />
								{{ element.name }}
							</div>
						</div>
					</draggable>
				</div>
			</el-scrollbar>
		</div>

		<div class="center-board">
			<div class="action-bar">
				<el-button icon="el-icon-download" type="text" @click="download">
					导出vue文件
				</el-button>
				<el-button
					class="copy-btn-main"
					icon="el-icon-document-copy"
					type="text"
					@click="copy"
				>
					复制代码
				</el-button>
				<el-button
					class="delete-btn"
					icon="el-icon-delete"
					type="text"
					@click="empty"
				>
					清空
				</el-button>
				<el-button icon="el-icon-preview" type="text" @click="preview">
					{{ showFormPreview ? '代码预览' : '表单预览' }}
				</el-button>
			</div>
			<el-scrollbar class="center-scrollbar" v-if="showFormPreview">
				<el-row class="center-board-row" :gutter="formConf.gutter">
					<el-form
						:size="formConf.size"
						:label-position="formConf.labelPosition"
						:disabled="formConf.disabled"
						:label-width="formConf.labelWidth + 'px'"
					>
						<draggable
							class="drawing-board"
							:list="drawingList"
							:animation="340"
							group="componentsGroup"
						>
							<draggable-item
								v-for="(element, index) in drawingList"
								:key="element.renderKey"
								:drawing-list="drawingList"
								:element="element"
								:index="index"
								:active-id="activeId"
								:form-conf="formConf"
								@activeItem="activeFormItem"
								@copyItem="drawingItemCopy"
								@deleteItem="drawingItemDelete"
							/>
						</draggable>
						<div v-show="!drawingList.length" class="empty-info">
							从左侧拖入或点选组件进行表单设计
						</div>
					</el-form>
				</el-row>
			</el-scrollbar>

			<!-- 代码预览 -->
			<el-scrollbar class="center-scrollbar" v-else>
				<pre
					v-if="copyTextStr"
					v-highlightjs="copyTextStr"
					class="highlight-container"
				><code class="html"></code></pre>
			</el-scrollbar>
		</div>

		<right-panel
			:active-data="activeData"
			:form-conf="formConf"
			:show-field="!!drawingList.length"
			@tag-change="tagChange"
		/>

		<code-type-dialog
			:visible.sync="dialogVisible"
			title="选择生成类型"
			:show-file-name="showFileName"
			@confirm="generate"
		/>

		<input id="copyNode" type="hidden" />

		<!-- 预览遮罩 -->
		<div></div>
	</div>
</template>

<script>
import './index.scss'
import draggable from 'vuedraggable'
import beautifier from 'js-beautify'
import ClipboardJS from 'clipboard'
import render from '@/utils/generator/render'
import RightPanel from './RightPanel'
import {
	inputComponents,
	selectComponents,
	layoutComponents,
	dataComponents,
	formConf
} from '@/utils/generator/config'
import { beautifierConf, titleCase } from '@/utils/index'
import {
	makeUpHtml,
	vueTemplate,
	vueScript,
	cssStyle
} from '@/utils/generator/html'
import { makeUpJs } from '@/utils/generator/js'
import { makeUpCss } from '@/utils/generator/css'
import drawingDefault, {
	drawingTableColunmDefault,
	drawingTableDataDefault,
	tableEventsShowList,
	paginationEventsShowList,
	buttonEventsShowList
} from '@/utils/generator/drawingDefault'
import CodeTypeDialog from './CodeTypeDialog'
import DraggableItem from './DraggableItem'
import download from '@/utils/download'
import _ from 'lodash'
let oldActiveId
let tempActiveData

export default {
	components: {
		draggable,
		render,
		RightPanel,
		CodeTypeDialog,
		DraggableItem
	},
	data() {
		return {
			idGlobal: 100,
			formConf,
			inputComponents,
			selectComponents,
			layoutComponents,
			dataComponents,
			labelWidth: 100,
			drawingList: drawingDefault,
			activeId: drawingDefault[0].formId,
			drawerVisible: false,
			formData: {},
			dialogVisible: false,
			generateConf: null,
			showFileName: false,
			activeData: drawingDefault[0],
			showPreviewVisiable: false,
			copyTextStr: '',
			showFormPreview: true,

			// 表格相关变量
			drawingTableList: [],

			// 路由相关配置
			routerParams: {}
		}
	},
	watch: {
		// eslint-disable-next-line func-names
		'activeData.label': function (val, oldVal) {
			if (
				this.activeData.placeholder === undefined ||
				!this.activeData.tag ||
				oldActiveId !== this.activeId
			) {
				return
			}
			this.activeData.placeholder =
				this.activeData.placeholder.replace(oldVal, '') + val
		},
		activeId: {
			handler(val) {
				oldActiveId = val
			},
			immediate: true
		}
	},
	created() {
		// 获取当前路由参数，如果是编辑则导入配置
		this.routerParams = this.$route.query
		const { edit } = this.$route.query
		edit && (this.drawingList = JSON.parse(localStorage.getItem('editObj')) || [])

		// 防止 firefox 下 拖拽 会新打卡一个选项卡
		document.body.ondrop = (event) => {
			event.preventDefault()
			event.stopPropagation()
		}
	},
	mounted() {
		const clipboard = new ClipboardJS('#copyNode', {
			text: (trigger) => {
				const codeStr = this.generateCode()
				!this.showFormPreview &&
					this.$notify({
						title: '成功',
						message: '代码已复制到剪切板，可粘贴。',
						type: 'success'
					})
				return codeStr
			}
		})
		clipboard.on('error', (e) => {
			this.$message.error('代码复制失败')
		})
	},
	methods: {
		activeFormItem(element) {
			this.activeData = element
			this.activeId = element.formId
		},
		onEnd(obj, a) {
			if (obj.from !== obj.to) {
				this.activeData = tempActiveData
				this.activeId = this.idGlobal
			}
		},
		addComponent(item) {
			const clone = this.cloneComponent(item)
			this.drawingList.push(clone)
			this.activeFormItem(clone)
		},
		cloneComponent(origin) {
			const clone = JSON.parse(JSON.stringify(origin))
			clone.formId = ++this.idGlobal
			clone.span = clone.span || formConf.span
			clone.renderKey = +new Date() // 改变renderKey后可以实现强制更新组件
			// if(origin.contain) = formConf.ref + this.idGlobal
			if (!clone.layout) clone.layout = 'colFormItem'
			if (clone.tag === 'el-button') clone.buttonEventsShowList = _.cloneDeep(buttonEventsShowList) // 添加按钮展示的所有事件
			if (clone.layout === 'colFormItem') {
				clone.vModel = `field${this.idGlobal}`
				clone.placeholder !== undefined && (clone.placeholder += clone.label)
				tempActiveData = clone
			} else if (clone.layout === 'rowFormItem') {
				delete clone.label
				clone.componentName = `row${this.idGlobal}`
				clone.gutter = this.formConf.gutter
				tempActiveData = clone
			}
			return tempActiveData
		},
		// 添加表格/分页
		addTableComponent(element) {
			switch (element.tag) {
				case 'el-table':
					var clone = this.cloneTableComponent(element)
					this.drawingTableList.push(clone)
					this.drawingList.push(clone)
					this.activeFormItem(clone)
					break
				case 'el-pagination':
					var clone = this.cloneTableComponent(element)
					this.drawingList.push(clone)
					this.activeFormItem(clone)
					break

				default:
					break
			}
		},
		cloneTableComponent(origin) {
			const clone = JSON.parse(JSON.stringify(origin))
			clone.formId = ++this.idGlobal
			clone.span = origin.span
			clone.tableModel = `tableData${clone.formId}`
			clone.vModel = `tableData${clone.formId}`
			clone.defaultValue = []
			clone.renderKey = +new Date()
			if(origin.tag === 'el-table') {
				clone.data = _.cloneDeep(drawingTableDataDefault) // 添加表格的默认数据
				clone.tableEventsShowList = _.cloneDeep(tableEventsShowList) // 添加表格展示的所有事件
				clone.tableEventsSetList = [] // 添加表格的事件
				clone.tableHeader = _.cloneDeep(drawingTableColunmDefault) // 添加表格的默认表头数据
			}
			if(origin.tag === 'el-pagination') {
				clone.paginationEventsShowList = _.cloneDeep(paginationEventsShowList) // 添加分页展示的所有事件
				clone.paginationEventsSetList = [] // 添加分页的事件
			}
			clone.layout = 'colFormItem'
			tempActiveData = clone
			return tempActiveData
		},
		AssembleFormData() {
			this.formData = {
				fields: JSON.parse(JSON.stringify(this.drawingList)),
				...this.formConf
			}
		},
		generate(data) {
			const func = this[`exec${titleCase(this.operationType)}`]
			this.generateConf = data
			console.log('generate', data)
			func && func(data)
		},
		execRun(data) {
			this.AssembleFormData()
			this.drawerVisible = true
		},
		execDownload(data) {
			const codeStr = this.generateCode()
			console.log('execDownload', codeStr)
			const blob = new Blob([codeStr], { type: 'text/plain;charset=utf-8' })
			download.saveAs(blob, data.fileName)
		},
		execCopy(data) {
			document.getElementById('copyNode').click()
		},
		execPreview() {
			document.getElementById('copyNode').click()
		},
		empty() {
			this.$confirm('确定要清空所有组件吗？', '提示', { type: 'warning' }).then(
				() => {
					this.drawingList = []
					this.drawingTableList = []
					this.copyTextStr = ''
				}
			)
		},
		drawingItemCopy(item, parent) {
			let clone = JSON.parse(JSON.stringify(item))
			clone = this.createIdAndKey(clone)
			parent.push(clone)
			this.activeFormItem(clone)
		},
		createIdAndKey(item) {
			item.formId = ++this.idGlobal
			item.renderKey = +new Date()
			if (item.layout === 'colFormItem') {
				item.vModel = `field${this.idGlobal}`
			} else if (item.layout === 'rowFormItem') {
				item.componentName = `row${this.idGlobal}`
			}
			if (Array.isArray(item.children)) {
				item.children = item.children.map((childItem) =>
					this.createIdAndKey(childItem)
				)
			}
			return item
		},
		drawingItemDelete(index, parent) {
			parent.splice(index, 1)
			this.$nextTick(() => {
				const len = this.drawingList.length
				if (len) {
					this.activeFormItem(this.drawingList[len - 1])
				}
			})
		},
		generateCode() {
			const { type } = this.generateConf
			this.AssembleFormData()
			console.log(this.formData)
			const script = vueScript(makeUpJs(this.formData, type))
			const html = vueTemplate(makeUpHtml(this.formData, type))
			const css = cssStyle(makeUpCss(this.formData))
			return beautifier.html(html + script + css, beautifierConf.html)
		},
		download() {
			this.dialogVisible = true
			this.showFileName = true
			this.operationType = 'download'
		},
		run() {
			this.dialogVisible = true
			this.showFileName = false
			this.operationType = 'run'
		},
		copy() {
			this.dialogVisible = true
			this.showFileName = false
			this.operationType = 'copy'
		},
		tagChange(newTag) {
			newTag = this.cloneComponent(newTag)
			newTag.vModel = this.activeData.vModel
			newTag.formId = this.activeId
			newTag.span = this.activeData.span
			delete this.activeData.tag
			delete this.activeData.tagIcon
			delete this.activeData.document
			Object.keys(newTag).forEach((key) => {
				if (
					this.activeData[key] !== undefined &&
					typeof this.activeData[key] === typeof newTag[key]
				) {
					newTag[key] = this.activeData[key]
				}
			})
			this.activeData = newTag
			this.updateDrawingList(newTag, this.drawingList)
		},
		updateDrawingList(newTag, list) {
			const index = list.findIndex((item) => item.formId === this.activeId)
			if (index > -1) {
				list.splice(index, 1, newTag)
			} else {
				list.forEach((item) => {
					if (Array.isArray(item.children))
						this.updateDrawingList(newTag, item.children)
				})
			}
		},
		preview() {
			// this.showPreviewVisiable = true
			this.showFormPreview = !this.showFormPreview
			this.operationType = 'preview'
			this.generateConf = {
				fileName: '',
				type: 'file'
			}
			this.copyTextStr = this.generateCode()
		},
		previewDialogClose() {
			this.showPreviewVisiable = false
		},
		handleRouterChange(type) {
			switch (type) {
				case 'back':
					this.$router.replace({
						path: '/',
						query: {
							// activeFolderId: this.routerParams.activeFolderId
						}
					})
					localStorage.removeItem('editObj')
					break
				case 'save':
					localStorage.setItem('editObj', JSON.stringify(this.drawingList))
					this.$router.replace({
						path: '/',
						query: {
							activeFolderId: this.routerParams.activeFolderId,
							activeTemplateId: this.routerParams.activeTemplateId
						}
					})
					break
				default:
					break
			}
		}
	}
}
</script>
