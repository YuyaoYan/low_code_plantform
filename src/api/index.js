const axios = require('axios')

export async function getTemplates() {
	const response = await axios.post(`/form-design/api/readfile`, {
		filePath: getFilePath()
	})
	return response.data
}

export async function writeTemplates(data) {
	const response = await axios.post(`/form-design/api/writefile`, {
		data,
		filePath: getFilePath()
	})
	return response.data
}

export function getFilePath() {
	const { NODE_ENV, VUE_APP_LOCAL_PATH, VUE_APP_ONLINE_PATH } = process.env
	return NODE_ENV === 'development' ? VUE_APP_LOCAL_PATH : VUE_APP_ONLINE_PATH
}
