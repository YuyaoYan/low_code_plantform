const defaultName = {
	label: 'label',
	prop: 'prop',
	icon: 'icon',
	width: 'width',
	type: 'type',
	tag: 'tag',
	tableColumnAttributes: 'tableColumnAttributes'
}

function grouping(array) {
	let groups = {
		default: []
	}
	let props = defaultName
	array.forEach((n) => {
		let key = n[props.group]
		if (key) {
			groups[key] = groups[key] || []
			groups[key].push(n)
		} else {
			groups['default'].push(n)
		}
	})
	return groups
}

function createTableColumn(h, item) {
	let props = defaultName
	return h('el-table-column', {
		props: {
			...item[props.tableColumnAttributes],
			prop: item[props.prop],
			label: item[props.label],
			width: item[props.width]
		}
	})
}

function createTableColumnSelect(h, item) {
	let props = defaultName
	return h('el-table-column', {
		props: {
			...item[props.tableColumnAttributes],
			width: item[props.width] || '60',
			type: 'selection'
		}
	})
}

function createTableColumnIndex(h, item) {
	let props = defaultName
	return h('el-table-column', {
		props: {
			...item[props.tableColumnAttributes],
			width: item[props.width] || '60',
			type: 'index'
		}
	})
}

function createTableColumnOperation(h, item) {
	let props = defaultName
	let tagItem = item[props.tag]
	let _this = this
	return h('el-table-column', {
		props: {
			...item[props.tableColumnAttributes],
			prop: item[props.prop],
			label: item[props.label],
			width: item[props.width]
		},
		scopedSlots: {
			default: function (props) {
				let nodes = []
				tagItem.forEach((items) => {
					nodes.push(
						h(
							items.tagType,
							{
								props: {
									...items.attributes
								},
								nativeOn: {
									click: (event) => {
										_this.operationCallback(event, props)
									}
								}
							},
							items.name
						)
					)
				})
				return nodes
			}
		}
	})
}

function createNodes(h, array) {
	let nodes = [],
		groups = grouping(array)
	let props = defaultName
	for (let key in groups) {
		let items = groups[key] || []
		items.forEach((item) => {
			// nodes.push(this.createTableColumn(h, item));
			if (item[props.type] === 'normal') {
				// 创建数据列
				nodes.push(createTableColumn(h, item))
			} else if (item[props.type].toLowerCase() == 'selection') {
				// 创建选择列
				nodes.push(createTableColumnSelect(h, item))
			} else if (item[props.type].toLowerCase() == 'index') {
				// 创建序号列
				nodes.push(createTableColumnIndex(h, item))
			} else if (item[props.type].toLowerCase() == 'operate') {
				// 创建操作列
				nodes.push(createTableColumnOperation(h, item))
			} else {
				// if (item[props.tag].length > 0 && item[props.tag] != undefined) {
				// 	//创建操作列
				// 	nodes.push(createTableColumnOperation(h, item))
				// }
			}
		})
	}
	return nodes
}

function createParams(h, conf) {
	let param = null
	switch (conf.tag) {
		case 'el-table':
			param = [
				conf.tag,
				{
					props: {
						...conf
					},
					nativeOn: {},
					class: 'custom-table',
					ref: 'table'
				},
				createNodes(h, conf.tableHeader)
			]
			break
		case 'el-pagination':
			param = [
				'div',
				{},
				[
					h('el-pagination', {
						props: {
							...conf,
							pageSizes: conf.pageSizes.split(','),
							layout: conf.paginationLayout
						},
						ref: 'pagination'
					})
				]
			]
			break

		default:
			break
	}

	return param
}

export default {
	render(h) {
		return h(...createParams(h, this.conf))
	},
	props: ['conf']
}
