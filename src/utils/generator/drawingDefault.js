export default [
	{
		layout: 'colFormItem',
		tagIcon: 'input',
		label: '手机号',
		vModel: 'mobile',
		renderKey: +new Date(),
		formId: 6,
		tag: 'el-input',
		placeholder: '请输入手机号',
		defaultValue: '',
		span: 24,
		style: { width: '100%' },
		clearable: true,
		prepend: '',
		append: '',
		'prefix-icon': 'el-icon-mobile',
		'suffix-icon': '',
		maxlength: 11,
		'show-word-limit': true,
		readonly: false,
		disabled: false,
		required: true,
		changeTag: true,
		regList: [
			{
				pattern: '/^1(3|4|5|7|8|9)\\d{9}$/',
				message: '手机号格式错误'
			}
		]
	}
]

// 表格 - 表头默认值
export const drawingTableColunmDefault = [
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
	// {
	//   label: "编辑",
	//   prop: "1",
	//   type: "button",
	//   width: "100",
	//   tag: [
	//     {
	//       name: "删除",
	//       tagType: "el-button",
	//       attributes: {
	//         size: "mini",
	//         type: "danger",
	//       },
	//     },
	//   ],
	// },
]

// 表格 - 数据默认值
export const drawingTableDataDefault = [
	{ prop: '数据' },
	{ prop: '数据' },
	{ prop: '数据' }
]

// 表格绑定事件字典
export const tableEventsShowList = [
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
]

// 分页绑定事件字典
export const paginationEventsShowList = [
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
]

// 
export const buttonEventsShowList = [
	{
		label: 'click',
		defaultValue: 'handleClick',
		value: '',
		param: ''
	},
]