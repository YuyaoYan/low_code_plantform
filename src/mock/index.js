// 模板模拟数据
export const modelMock = [
	{
		layout: 'rowFormItem',
		tagIcon: 'row',
		type: 'default',
		justify: 'start',
		align: 'top',
		layoutTree: true,
		children: [
			{
				label: '姓名',
				tag: 'el-input',
				tagIcon: 'input',
				placeholder: '请输入姓名',
				span: 6,
				labelWidth: null,
				style: { width: '100%' },
				clearable: true,
				prepend: '',
				append: '',
				'prefix-icon': '',
				'suffix-icon': '',
				maxlength: null,
				'show-word-limit': false,
				readonly: false,
				disabled: false,
				required: true,
				regList: [],
				changeTag: true,
				document: 'https://element.eleme.cn/#/zh-CN/component/input',
				formId: 107,
				renderKey: 1702965193606,
				layout: 'colFormItem',
				vModel: 'field107'
			},
			{
				label: '费别',
				tag: 'el-select',
				tagIcon: 'select',
				placeholder: '请选择费别',
				span: 6,
				labelWidth: null,
				style: { width: '100%' },
				clearable: true,
				disabled: false,
				required: true,
				filterable: false,
				multiple: false,
				options: [
					{ label: '自费', value: 1 },
					{ label: '市医保', value: 2 }
				],
				regList: [],
				changeTag: true,
				document: 'https://element.eleme.cn/#/zh-CN/component/select',
				formId: 105,
				renderKey: 1702965154638,
				layout: 'colFormItem',
				vModel: 'field105',
				defaultValue: '自费'
			},
			{
				label: '院区',
				tag: 'el-select',
				tagIcon: 'select',
				placeholder: '请选择院区',
				span: 6,
				labelWidth: null,
				style: { width: '100%' },
				clearable: true,
				disabled: false,
				required: true,
				filterable: false,
				multiple: false,
				options: [
					{ label: '总院', value: 1 },
					{ label: '分院1', value: 2 },
					{ label: '分院2', value: 3 }
				],
				regList: [],
				changeTag: true,
				document: 'https://element.eleme.cn/#/zh-CN/component/select',
				formId: 103,
				renderKey: 1702965139352,
				layout: 'colFormItem',
				vModel: 'field103',
				defaultValue: 1
			},
			{
				layout: 'colFormItem',
				label: '',
				changeTag: true,
				labelWidth: null,
				tag: 'el-button',
				tagIcon: 'button',
				span: 6,
				default: '主要按钮',
				type: 'primary',
				icon: 'el-icon-search',
				size: 'medium',
				disabled: false,
				document: 'https://element.eleme.cn/#/zh-CN/component/button',
				formId: 108,
				renderKey: 1702965201595,
				vModel: 'field108'
			}
		],
		document: 'https://element.eleme.cn/#/zh-CN/component/layout',
		formId: 104,
		span: 24,
		renderKey: 1702965142284,
		componentName: 'row104',
		gutter: 15
	},
	{
		ref: 'elTable',
		tableModel: 'tableData109',
		tag: 'el-table',
		span: 24,
		name: '表格',
		labelWidth: '0',
		width: '100%',
		stripe: false,
		border: true,
		fit: true,
		showHeader: true,
		emptyText: '暂无数据1',
		sumText: '合计1',
		tableEventsSetList: [
			{
				label: 'select',
				defaultValue: 'select',
				value: 'select1',
				param: 'selection, row'
			},
			{
				label: 'select-all',
				defaultValue: 'selectAll',
				value: 'selectAll1',
				param: 'selection'
			},
			{
				label: 'selection-change',
				defaultValue: 'selectionChange',
				value: 'selectionChange1',
				param: 'selection'
			},
			{
				label: 'cell-mouse-enter',
				defaultValue: 'cellMouseEnter',
				value: 'cellMouseEnter1',
				param: 'row, column, cell, event'
			},
			{
				label: 'cell-mouse-leave',
				defaultValue: 'cellMouseLeave',
				value: 'cellMouseLeave1',
				param: 'row, column, cell, event'
			},
			{
				label: 'cell-click',
				defaultValue: 'cellClick',
				value: 'cellClick1',
				param: 'row, column, cell, event'
			},
			{
				label: 'cell-dblclick',
				defaultValue: 'cellDblclick',
				value: 'cellDblclick1',
				param: 'row, column, cell, event'
			},
			{
				label: 'row-click',
				defaultValue: 'rowClick',
				value: 'rowClick1',
				param: 'row, column, event'
			},
			{
				label: 'row-contextmenu',
				defaultValue: 'rowContextmenu',
				value: 'rowContextmenu1',
				param: 'row, column, event'
			},
			{
				label: 'row-dblclick',
				defaultValue: 'rowDblclick',
				value: 'rowDblclick1',
				param: 'row, column, event'
			},
			{
				label: 'header-click',
				defaultValue: 'headerClick',
				value: 'headerClick1',
				param: 'column, event'
			},
			{
				label: 'header-contextmenu',
				defaultValue: 'headerContextmenu',
				value: 'headerContextm11111enu',
				param: 'column, event'
			},
			{
				label: 'sort-change',
				defaultValue: 'sortChange',
				value: 'sortChange1',
				param: '{ column, prop, order }'
			},
			{
				label: 'filter-change',
				defaultValue: 'filterChange',
				value: 'filterChange1',
				param: 'filters'
			},
			{
				label: 'current-change',
				defaultValue: 'currentChange',
				value: 'currentChange1',
				param: 'currentRow, oldCurrentRow'
			},
			{
				label: 'header-dragend',
				defaultValue: 'headerDragend',
				value: 'headerDragend1',
				param: 'newWidth, oldWidth, column, event'
			},
			{
				label: 'expand-change',
				defaultValue: 'expandChange',
				value: 'expandChange1',
				param: 'row, expandedRows'
			}
		],
		paginationEventsSetList: [],
		document: 'https://element.eleme.cn/#/zh-CN/component/table',
		formId: 109,
		vModel: 'tableData109',
		defaultValue: [],
		renderKey: 1702965297873,
		data: [{ prop: '数据' }, { prop: '数据' }, { prop: '数据' }],
		tableEventsShowList: [
			{
				label: 'select',
				defaultValue: 'select',
				value: 'select1',
				param: 'selection, row'
			},
			{
				label: 'select-all',
				defaultValue: 'selectAll',
				value: 'selectAll1',
				param: 'selection'
			},
			{
				label: 'selection-change',
				defaultValue: 'selectionChange',
				value: 'selectionChange1',
				param: 'selection'
			},
			{
				label: 'cell-mouse-enter',
				defaultValue: 'cellMouseEnter',
				value: 'cellMouseEnter1',
				param: 'row, column, cell, event'
			},
			{
				label: 'cell-mouse-leave',
				defaultValue: 'cellMouseLeave',
				value: 'cellMouseLeave1',
				param: 'row, column, cell, event'
			},
			{
				label: 'cell-click',
				defaultValue: 'cellClick',
				value: 'cellClick1',
				param: 'row, column, cell, event'
			},
			{
				label: 'cell-dblclick',
				defaultValue: 'cellDblclick',
				value: 'cellDblclick1',
				param: 'row, column, cell, event'
			},
			{
				label: 'row-click',
				defaultValue: 'rowClick',
				value: 'rowClick1',
				param: 'row, column, event'
			},
			{
				label: 'row-contextmenu',
				defaultValue: 'rowContextmenu',
				value: 'rowContextmenu1',
				param: 'row, column, event'
			},
			{
				label: 'row-dblclick',
				defaultValue: 'rowDblclick',
				value: 'rowDblclick1',
				param: 'row, column, event'
			},
			{
				label: 'header-click',
				defaultValue: 'headerClick',
				value: 'headerClick1',
				param: 'column, event'
			},
			{
				label: 'header-contextmenu',
				defaultValue: 'headerContextmenu',
				value: 'headerContextm11111enu',
				param: 'column, event'
			},
			{
				label: 'sort-change',
				defaultValue: 'sortChange',
				value: 'sortChange1',
				param: '{ column, prop, order }'
			},
			{
				label: 'filter-change',
				defaultValue: 'filterChange',
				value: 'filterChange1',
				param: 'filters'
			},
			{
				label: 'current-change',
				defaultValue: 'currentChange',
				value: 'currentChange1',
				param: 'currentRow, oldCurrentRow'
			},
			{
				label: 'header-dragend',
				defaultValue: 'headerDragend',
				value: 'headerDragend1',
				param: 'newWidth, oldWidth, column, event'
			},
			{
				label: 'expand-change',
				defaultValue: 'expandChange',
				value: 'expandChange1',
				param: 'row, expandedRows'
			}
		],
		paginationEventsShowList: [
			{
				label: 'size-change',
				defaultValue: 'sizeChange',
				value: '',
				param: 'val'
			},
			{
				label: 'current-change',
				defaultValue: 'currentChange',
				value: '',
				param: 'val'
			},
			{
				label: 'prev-click',
				defaultValue: 'prevClick',
				value: '',
				param: 'val'
			},
			{
				label: 'next-click',
				defaultValue: 'nextClick',
				value: '',
				param: 'val'
			}
		],
		tableHeader: [
			{
				label: '序号',
				prop: 'prop',
				propName: 'prop',
				type: 'index',
				tableColumnAttributes: {
					align: 'center',
					headerAlign: 'center',
					size: 'small'
				},
				key: 0.504403908751133,
				width: 40
			},
			{
				label: '新建列2',
				prop: 'prop',
				propName: 'prop',
				type: 'selection',
				tableColumnAttributes: {
					headerAlign: 'center',
					align: 'center',
					size: 'small'
				},
				key: 0.895447419798407,
				width: 50
			},
			{
				label: '订单编号',
				prop: 'prop',
				propName: 'prop',
				type: 'normal',
				tableColumnAttributes: { size: 'small' },
				key: 0.4441136732085271,
				width: 250
			},
			{
				label: '医嘱名称',
				prop: 'prop',
				propName: 'prop',
				type: 'normal',
				tableColumnAttributes: { size: 'small' },
				key: 3.892913666310907,
				width: 250
			},
			{
				label: '计量',
				prop: 'prop',
				propName: 'prop',
				type: 'normal',
				tableColumnAttributes: { size: 'small' },
				key: 2.583516446233748,
				width: 150
			},
			{
				label: '单价',
				prop: 'prop',
				propName: 'prop',
				type: 'normal',
				tableColumnAttributes: { size: 'small' },
				key: 5.212352969761477,
				width: 150
			},
			{
				label: '单位',
				prop: 'prop',
				propName: 'prop',
				type: 'normal',
				tableColumnAttributes: { size: 'small' },
				key: 4.4603649157476175,
				width: 150
			},
			{
				label: '可配送',
				prop: 'prop',
				propName: 'prop',
				type: 'normal',
				tableColumnAttributes: { size: 'small' },
				key: 4.6511801841802445,
				width: 150
			},
			{
				label: '手工单',
				prop: 'prop',
				propName: 'prop',
				type: 'normal',
				tableColumnAttributes: { fixed: 'right', size: 'small' },
				key: 6.938021722752126,
				width: 100
			},
			{
				label: '删除',
				prop: 'prop',
				propName: 'prop',
				type: 'normal',
				tableColumnAttributes: { fixed: 'right', size: 'small' },
				key: 7.736037483075215,
				width: 100
			}
		],
		layout: 'colFormItem',
		size: 'small',
		showSummary: true,
		defaultExpandAll: false
	},
	{
		layout: 'rowFormItem',
		tagIcon: 'row',
		type: 'default',
		justify: 'start',
		align: 'top',
		layoutTree: true,
		children: [],
		document: 'https://element.eleme.cn/#/zh-CN/component/layout',
		formId: 111,
		span: 12,
		renderKey: 1702965306107,
		componentName: 'row111',
		gutter: 15
	},
	{
		ref: 'pagination',
		name: '分页',
		tag: 'el-pagination',
		span: 12,
		total: 50,
		currentPage: 1,
		pageSize: 10,
		paginationLayout: 'sizes,pager,jumper',
		paginationLayoutList: ['sizes', 'pager', 'jumper'],
		pageSizes: '10,20',
		document: 'https://element.eleme.cn/#/zh-CN/component/pagination',
		formId: 110,
		tableModel: 'tableData110',
		vModel: 'tableData110',
		defaultValue: [],
		renderKey: 1702965301038,
		data: [{ prop: '数据' }, { prop: '数据' }, { prop: '数据' }],
		tableEventsShowList: [
			{
				label: 'select',
				defaultValue: 'select',
				value: '',
				param: 'selection, row'
			},
			{
				label: 'select-all',
				defaultValue: 'selectAll',
				value: '',
				param: 'selection'
			},
			{
				label: 'selection-change',
				defaultValue: 'selectionChange',
				value: '',
				param: 'selection'
			},
			{
				label: 'cell-mouse-enter',
				defaultValue: 'cellMouseEnter',
				value: '',
				param: 'row, column, cell, event'
			},
			{
				label: 'cell-mouse-leave',
				defaultValue: 'cellMouseLeave',
				value: '',
				param: 'row, column, cell, event'
			},
			{
				label: 'cell-click',
				defaultValue: 'cellClick',
				value: '',
				param: 'row, column, cell, event'
			},
			{
				label: 'cell-dblclick',
				defaultValue: 'cellDblclick',
				value: '',
				param: 'row, column, cell, event'
			},
			{
				label: 'row-click',
				defaultValue: 'rowClick',
				value: '',
				param: 'row, column, event'
			},
			{
				label: 'row-contextmenu',
				defaultValue: 'rowContextmenu',
				value: '',
				param: 'row, column, event'
			},
			{
				label: 'row-dblclick',
				defaultValue: 'rowDblclick',
				value: '',
				param: 'row, column, event'
			},
			{
				label: 'header-click',
				defaultValue: 'headerClick',
				value: '',
				param: 'column, event'
			},
			{
				label: 'header-contextmenu',
				defaultValue: 'headerContextmenu',
				value: '',
				param: 'column, event'
			},
			{
				label: 'sort-change',
				defaultValue: 'sortChange',
				value: '',
				param: '{ column, prop, order }'
			},
			{
				label: 'filter-change',
				defaultValue: 'filterChange',
				value: '',
				param: 'filters'
			},
			{
				label: 'current-change',
				defaultValue: 'currentChange',
				value: '',
				param: 'currentRow, oldCurrentRow'
			},
			{
				label: 'header-dragend',
				defaultValue: 'headerDragend',
				value: '',
				param: 'newWidth, oldWidth, column, event'
			},
			{
				label: 'expand-change',
				defaultValue: 'expandChange',
				value: '',
				param: 'row, expandedRows'
			}
		],
		tableEventsSetList: [],
		paginationEventsShowList: [
			{
				label: 'size-change',
				defaultValue: 'sizeChange',
				value: 'sizeChange1',
				param: 'val'
			},
			{
				label: 'current-change',
				defaultValue: 'currentChange',
				value: 'currentChange2',
				param: 'val'
			},
			{
				label: 'prev-click',
				defaultValue: 'prevClick',
				value: 'prevClick3',
				param: 'val'
			},
			{
				label: 'next-click',
				defaultValue: 'nextClick',
				value: 'nextClick4',
				param: 'val'
			}
		],
		paginationEventsSetList: [
			{
				label: 'size-change',
				defaultValue: 'sizeChange',
				value: 'sizeChange1',
				param: 'val'
			},
			{
				label: 'current-change',
				defaultValue: 'currentChange',
				value: 'currentChange2',
				param: 'val'
			},
			{
				label: 'prev-click',
				defaultValue: 'prevClick',
				value: 'prevClick3',
				param: 'val'
			},
			{
				label: 'next-click',
				defaultValue: 'nextClick',
				value: 'nextClick4',
				param: 'val'
			}
		],
		tableHeader: [
			{
				label: '新建列1',
				prop: 'prop',
				propName: 'prop',
				type: 'normal',
				tableColumnAttributes: {}
			},
			{
				label: '新建列2',
				prop: 'prop',
				propName: 'prop',
				type: 'normal',
				tableColumnAttributes: {}
			},
			{
				label: '新建列3',
				prop: 'prop',
				propName: 'prop',
				type: 'normal',
				tableColumnAttributes: {}
			},
			{
				label: '新建列4',
				prop: 'prop',
				propName: 'prop',
				type: 'normal',
				tableColumnAttributes: {}
			}
		],
		layout: 'colFormItem'
	}
]

export const modelMock1 = [
	{
		label: '滑块',
		tag: 'el-slider',
		tagIcon: 'slider',
		defaultValue: 0,
		span: 12,
		labelWidth: null,
		disabled: false,
		required: true,
		min: 0,
		max: 100,
		step: 1,
		'show-stops': false,
		range: false,
		regList: [],
		changeTag: true,
		document: 'https://element.eleme.cn/#/zh-CN/component/slider',
		formId: 120,
		renderKey: 1702975441567,
		layout: 'colFormItem',
		vModel: 'field120'
	},
	{
		label: '时间范围',
		tag: 'el-time-picker',
		tagIcon: 'time-range',
		defaultValue: ['16:44:17', '17:44:17'],
		span: 12,
		labelWidth: null,
		style: { width: '100%' },
		disabled: false,
		clearable: true,
		required: true,
		'is-range': true,
		'range-separator': '至',
		'start-placeholder': '开始时间',
		'end-placeholder': '结束时间',
		format: 'HH:mm:ss',
		'value-format': 'HH:mm:ss',
		regList: [],
		changeTag: true,
		document: 'https://element.eleme.cn/#/zh-CN/component/time-picker',
		formId: 121,
		renderKey: 1702975442187,
		layout: 'colFormItem',
		vModel: 'field121'
	},
	{
		label: '日期选择',
		tag: 'el-date-picker',
		tagIcon: 'date',
		placeholder: '请选择日期选择',
		defaultValue: null,
		type: 'date',
		span: 12,
		labelWidth: null,
		style: { width: '100%' },
		disabled: false,
		clearable: true,
		required: true,
		format: 'yyyy-MM-dd',
		'value-format': 'yyyy-MM-dd',
		readonly: false,
		regList: [],
		changeTag: true,
		document: 'https://element.eleme.cn/#/zh-CN/component/date-picker',
		formId: 122,
		renderKey: 1702975443605,
		layout: 'colFormItem',
		vModel: 'field122'
	},
	{
		label: '评分',
		tag: 'el-rate',
		tagIcon: 'rate',
		defaultValue: 0,
		span: 12,
		labelWidth: null,
		style: {},
		max: 5,
		'allow-half': false,
		'show-text': false,
		'show-score': false,
		disabled: false,
		required: true,
		regList: [],
		changeTag: true,
		document: 'https://element.eleme.cn/#/zh-CN/component/rate',
		formId: 123,
		renderKey: 1702975443854,
		layout: 'colFormItem',
		vModel: 'field123'
	},
	{
		label: '上传',
		tag: 'el-upload',
		tagIcon: 'upload',
		action: 'https://jsonplaceholder.typicode.com/posts/',
		defaultValue: null,
		labelWidth: null,
		disabled: false,
		required: true,
		accept: '',
		name: 'file',
		'auto-upload': true,
		showTip: false,
		buttonText: '点击上传',
		fileSize: 2,
		sizeUnit: 'MB',
		'list-type': 'text',
		multiple: false,
		regList: [],
		changeTag: true,
		document: 'https://element.eleme.cn/#/zh-CN/component/upload',
		formId: 124,
		span: 12,
		renderKey: 1702975444107,
		layout: 'colFormItem',
		vModel: 'field124'
	},
	{
		layout: 'colFormItem',
		label: '按钮',
		changeTag: true,
		labelWidth: null,
		tag: 'el-button',
		tagIcon: 'button',
		span: 12,
		default: '主要按钮',
		type: 'primary',
		icon: 'el-icon-search',
		size: 'medium',
		disabled: false,
		document: 'https://element.eleme.cn/#/zh-CN/component/button',
		formId: 126,
		renderKey: 1702975446658,
		vModel: 'field126'
	},
	{
		layout: 'rowFormItem',
		tagIcon: 'row',
		type: 'default',
		justify: 'start',
		align: 'top',
		layoutTree: true,
		children: [],
		document: 'https://element.eleme.cn/#/zh-CN/component/layout',
		formId: 125,
		span: 12,
		renderKey: 1702975445549,
		componentName: 'row125',
		gutter: 15
	},
	{
		layout: 'rowFormItem',
		tagIcon: 'row',
		type: 'default',
		justify: 'start',
		align: 'top',
		layoutTree: true,
		children: [],
		document: 'https://element.eleme.cn/#/zh-CN/component/layout',
		formId: 129,
		span: 12,
		renderKey: 1702975473223,
		componentName: 'row129',
		gutter: 15
	},
	{
		label: '评分',
		tag: 'el-rate',
		tagIcon: 'rate',
		defaultValue: 0,
		span: 12,
		labelWidth: null,
		style: {},
		max: 5,
		'allow-half': false,
		'show-text': false,
		'show-score': false,
		disabled: false,
		required: true,
		regList: [],
		changeTag: true,
		document: 'https://element.eleme.cn/#/zh-CN/component/rate',
		formId: 127,
		renderKey: 1702975448398,
		layout: 'colFormItem',
		vModel: 'field127'
	}
]

// 文件列表模拟数据
export const folderMock = [
	{
		id: '1',
		label: '测试模板文件夹1',
		active: false, // 左侧是否处于选中状态
		edit: false, // 左侧文件名是否编辑状态
		children: [
			{
				label: '设计1',
				active: false, // 鼠标是否hover
				labelEdit: false, // label输入框是否处于编辑状态
				showEdit: false, // 展示label旁边的编辑icon
				param: modelMock // 当前模板的配置参数
			},
			{
				label: '模板',
				active: false, // 鼠标是否hover
				labelEdit: false, // label输入框是否处于编辑状态
				showEdit: false, // 展示label旁边的编辑icon
				param: modelMock1 // 当前模板的配置参数
			}
		]
	},
	{
		id: '2',
		label: '现场XX场景模板文件夹',
		edit: false,
		active: false,
		children: [
			{
				label: '模板2',
				active: false, // 鼠标是否hover
				labelEdit: false, // label输入框是否处于编辑状态
				showEdit: false, // 展示label旁边的编辑icon
				param: modelMock // 当前模板的配置参数
			}
		]
	},
	{
		id: '3',
		label: 'test',
		edit: false,
		active: false,
		children: []
	}
]
