// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router/index'
import store from './store'
import filter from './filter/index'
import factory from './until/factory/index'

FastClick.attach(document.body)
filter.init(Vue) 

Vue.config.productionTip = false

//全局路由守卫
router.beforeEach((to,from,next)=>{
	if(to.path=='/login'){
		if(factory.Storage.get('userInfo').id){
			next('/home')
		}else {
			next()
		}
	}else{
		if(factory.Storage.get('userInfo').id){
			next()
		}else {
			next('/login')
		}
	}
  
})


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
