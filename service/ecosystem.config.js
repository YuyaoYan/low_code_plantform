module.exports = {
	apps: [
		// {
		// 	name: 'HisSharing', // 设置启动项目名称
		// 	exec_mode: 'cluster',
		// 	port: '9300', // 启动端口
		// 	// 注意这里的相对路径
		// 	script: './server/index.mjs',
		// 	instances: 'max', // 集群实例数
		// 	autorestart: true // 程序崩溃后自动重启
		// },
		{
			name: 'form-design', // 设置启动项目名称
			exec_mode: 'cluster',
			port: '9001', // 启动端口
			// 注意这里的相对路径
			script: './server.bundle.js',
			instances: 'max', // 集群实例数
			autorestart: true // 程序崩溃后自动重启
		}
	]
}
