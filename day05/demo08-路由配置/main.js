import Vue from 'vue'
import App from './App.vue'
// 路由的使用步骤（5+2）
// 5个基础步骤
// 1.下载 3.6.5
// 2.引入
// 3.安装注册Vue.use(Vue插件)
// 4.创建路由对象
// 5.注入到new Vue中
// 2个核心步骤
// 1.建组件（views目录）,配规则
// 2.准备导航链接，配置路由出口，router-view（匹配的组件展示的位置）
import Find from './views/Find.vue'
import My from './views/My.vue'
import Friend from './views/Friend.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)//VueRouter插件初始化
const router = new VueRouter({
  // routes 路由规则们
  // route 一条路由规则{path:,component:}
  routes: [
    { path: '/friend', component: Friend },
    { path: '/find', component: Find },
    { path: '/my', component: My },
  ]
})

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
