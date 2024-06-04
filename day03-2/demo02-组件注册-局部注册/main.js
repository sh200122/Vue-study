// 导入vue
import Vue from 'vue'
// 导入App.vue
import App from './App.vue'

Vue.config.productionTip = false
// 实例化vue,将App.vue渲染到index.html中
new Vue({
  render: h => h(App),
}).$mount('#app')
