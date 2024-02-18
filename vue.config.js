const target =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:9001'
		: 'http://172.16.9.226:9001'

module.exports = {
	devServer: {
		proxy: {
			'^/form-design/api': {
				target: target,
				changeOrigin: true
			}
		}
	}
}
