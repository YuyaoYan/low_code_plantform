import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import VueHighlightJS from 'vue-highlightjs'
import 'element-ui/lib/theme-chalk/index.css'
import 'highlight.js/styles/atom-one-dark.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueHighlightJS)
new Vue({
	render: (h) => h(App),
  router
}).$mount('#app')
