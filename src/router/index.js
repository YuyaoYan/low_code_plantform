import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import HomePage from '@/components/Index.vue'
import DesignPage from '@/components/build/index.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/', component: HomePage },
		{ path: '/edit', component: DesignPage }
	]
})
