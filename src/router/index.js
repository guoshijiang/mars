import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:{name:"Home"}
    },
    {
      path: '/home',
      name:'Home',
      component:() => import('@/view/Home')
    },
    {
      path:'/detail',
      name:"Detail",
      component:() => import('@/view/home/detail')
    },
    {
      path: '/price',
      name:'Price',
      component:() => import('@/view/Price')
    },
    {
      path: '/findb',
      name:'Findb',
      component:() => import('@/view/price/Findb')
    },
    {
      path: '/history_type',
      name:'History_type',
      component:() => import('@/view/price/History_type')
    },
    {
      path: '/db_detail',
      name:'Db_detail',
      component:() => import('@/view/price/Db_detail')
    },
    {
      path:'/trade',
      name:"Trade",
      component:() => import('@/view/Trade'),

    },
    {
      path:'/history',
      name:"History",
      component:() => import('@/view/trade/History'),

    },
    {
      path:'/history_Da',
      name:"History_Da",
      component:() => import('@/view/trade/History_detail'),
    },
    {
      path:'/mine',
      name:"Mine",
      component:() => import('@/view/Mine'),
      children:[]
    },
    {
      path:'/real',
      name:"Real",
      component:() => import('@/view/mine/Real'),
    },
    {
      path:'/help',
      name:"Help",
      component:() => import('@/view/mine/Help.vue'),
    },
    {
      path:'/changePassword',
      name:"ChangePassword",
      component:() => import('@/view/mine/ChangePassword.vue'),
    },
    {
      path:'/custom',
      name:"Custom",
      component:() => import('@/view/mine/Custom.vue'),
    },
    {
      path:'/feedback',
      name:"Feedback",
      component:() => import('@/view/mine/Feedback.vue'),
    },
    //登陆页面
    {
      path:'/login',
      name:'Login',
      component:()=>import('@/view/common/Login')
    },
    //祖册
    {
      path:'/zhuce',
      name:'Zhuce',
      component:()=>import('@/view/common/Zhuce')
    },
    {
      path:'/setPassword',
      name:'setPassword',
      component:()=>import('@/view/common/SetPricePassword')
    },
    //重定向
    {
      path:'*',
      redirect:{
        name:'Home'
      }
    }

  ]
})
