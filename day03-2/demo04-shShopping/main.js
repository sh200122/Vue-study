import Vue from 'vue'
import App from './App.vue'
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css' // 字体图标的样式
import BaseGoodsItem from './components/BaseGoodsItem.vue'
Vue.component('BaseGoodsItem', BaseGoodsItem)
import HotBrandItem from './components/HotBrandItem.vue'
Vue.component('HotBrandItem', HotBrandItem)
import TopicItem from './components/TopicItem.vue'
Vue.component('TopicItem', TopicItem)
import FooterServiceItem from './components/FooterServiceItem.vue'
Vue.component('FooterServiceItem', FooterServiceItem)
import FooterLeftItem from './components/FooterLeftItem.vue'
Vue.component('FooterLeftItem', FooterLeftItem)


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
