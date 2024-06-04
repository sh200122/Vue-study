// 导入vue
import Vue from 'vue'
// 导入App.vue
import App from './App.vue'

import ShButton from './components/ShButton.vue'
// 进行全局注册-在所有的组件范围内都可以使用
// Vue.component(组件名，组件对象)
Vue.component('ShButton', ShButton)

Vue.config.productionTip = false
// 实例化vue,将App.vue渲染到index.html中
new Vue({
  render: h => h(App),
}).$mount('#app')
