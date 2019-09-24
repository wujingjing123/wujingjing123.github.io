import Vue from 'vue'
import Router from 'vue-router'
import a from './a.vue'
import b from './b.vue'
import index from './routes/index.vue'
import about from './routes/about.vue'
import base from './routes/base.vue'
import news from './routes/news.vue'
import contact from './routes/contact.vue'
import mine from './routes/mine.vue'
import read from './routes/read.vue'
import fd from './routes/fd.vue'
import cxq from './routes/cxq.vue'

Vue.use(Router)

export default new Router({
	routes:[
	 {path:'/a',name:'a',component:a},
	 {path:'/b',name:'b',component:b},
	 {path:'/',name:'index',component:index},
	 {path:'/about',name:'about',component:about},
	 {path:'/base',name:'base',component:base},
	 {path:'/news',name:'news',component:news},
	 {path:'/contact',name:'contact',component:contact},
	 {path:'/mine',name:'mine',component:mine},
	 {path:'/read',name:'read',component:read},
	 {path:'/fd',name:'fd',component:fd},
	 {path:'/cxq',name:'cxq',component:cxq},
	]
})




