import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFound from '@/views/NotFound.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  //默认模式，有#
  // mode:'hash',
  // 注意：一旦采用了history模式，地址栏就没有#，要后台配合修改
  mode: 'history',
  routes: [
    // vue路由重定向->匹配path后，强制跳转path路径
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/search/:words', component: Search },
    // vue路由404->路径找不到匹配时，给一个提示页面
    { path: '*', component: NotFound }
  ]
})

export default router