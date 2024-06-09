import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// // 全局注册指令
// Vue.directive('focus', {
//   // inserted会在 指令所在的元素被插入到页面中时触发
//   inserted(el) {
//     // el就是指令所绑定的元素
//     el.focus()
//   }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
