const express = require('express')
const randomId = require('random-id')
const app = express(),
	bodyParser = require('body-parser')
port = 9001
const fs = require('fs')

app.use(bodyParser.json())
app.use(express.static(process.cwd() + '/my-app/dist'))

app.listen(port, () => {
	console.log(`Server listening on the port::${port}`)
})

app.post('/form-design/api/readfile', (req, res) => {
	try {
		// 使用 fs.readFile() 函数读取文件内容
		fs.readFile(req.body.filePath, 'utf8', (err, data) => {
			if (err) {
				console.error(err)
				res.status(500).send('读取文件时发生错误')
			}
			// 将文件内容作为响应返回给客户端
			res.send(data)
		})
	} catch (e) {}
})

app.post('/form-design/api/writefile', (req, res) => {
	try {
		fs.writeFile(req.body.filePath, JSON.stringify(req.body.data), (err) => {
			if (err) {
				console.error(err)
				res.status(500).send('写入文件时发生错误')
			} else {
				res.send('文件写入成功')
			}
		})
	} catch (e) {}
})
