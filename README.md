# low_code_plantform
纯前端低代码平台demo，vue框架，nodejs，pm2纯前端部署实践

> 表单用了[若依的开源代码https://gitee.com/y_project/RuoYi-Vue](https://gitee.com/y_project/RuoYi-Vue)，由于这个没有表格等组件，所以在此基础上又开发了一些表格、分页等相关组件，并实现了代码导出的功能)。支持保存当前设计的配置代码，支持读取该配置重新渲染成预览表单。

具体说明见[传送门](https://blog.csdn.net/Learn_inCSDN/article/details/136147908) https://blog.csdn.net/Learn_inCSDN/article/details/136147908

### 目录结构说明
```
low_code_plantform
├─ .env
├─ babel.config.js
├─ jsconfig.json
├─ package.json
├─ README.md
├─ service   // node相关的文件夹，为了方便演示将node文件放在vue项目中了
│  ├─ ecosystem.config.js   // pm2管理文件
│  ├─ gulpfile.js
│  ├─ package.json
│  ├─ server.bundle.js
│  ├─ server.js   // node启动文件
│  └─ webpack.config.js
├─ service-files   // service-files文件夹是模拟服务器文件用来存放要保存的模板配置的文件
│  └─ templates.json
├─ src
│  ├─ api
│  │  └─ index.js
│  ├─ App.vue
│  ├─ assets
│  │  ├─ demo_edit.png
│  │  └─ demo_preview.png
│  ├─ components
│  │  ├─ build
│  │  └─ Index.vue
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  └─ utils
└─ vue.config.js
```
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
根目录下vue打包，将生成的 dist 文件夹
```
$ npm run build
```
service文件下node打包，将生成的 server.bundle.js 文件
```
$ npm run build
```

### 页面demo
![Alt text](./src/assets/demo_edit.png)
![Alt text](./src/assets/demo_preview.png)
