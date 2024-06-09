// Vue绝对路径查找@相当于src
import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)//VueRouter插件初始化
const router = new VueRouter({
  // routes 路由规则们
  // route 一条路由规则{path:,component:}
  routes: [
    { path: '/friend', component: Friend },
    { path: '/find', component: Find },
    { path: '/my', component: My },
  ],
  // 自定义高亮类名
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})
export default router