# low_code_plantform
纯前端低代码平台demo，vue框架，nodejs，pm2纯前端部署实践

### 本地运行
根目录下启动vue：
```
$ npm run serve
```
service文件下启动node：
```
$ node server.js
```

### 打包
根目录下vue打包，将生成的 dist 文件复制到服务器`D:\winning-web\form-design`目录下
```
$ npm run build
```
service文件下node打包，将生成的 server.bundle.js 文件复制到服务器 `D:\winning-web\form-design\node`目录下
```
$ npm run build
```