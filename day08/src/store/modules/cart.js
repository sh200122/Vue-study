import axios from 'axios'
export default {
  namespaced: true,
  state () {
    return {
      // 购物车数据
      list: []
    }
  },
  mutations: {
    updateList (state, newList) {
      state.list = newList
    },
    updateCount (state, obj) {
      // 根据id找到对应的对象，更新count属性即可
      const goods = state.list.find(item => item.id === obj.id)
      goods.count = obj.newCount
    }
  },
  actions: {
    // 请求方式：get
    // 地址：http://localhost:3000/cart
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      console.log(res)
      context.commit('updateList', res.data)
    },
    async updateCountAsync (context, obj) {
      // 2.将修改更新同步到后台服务器
      await axios.patch(`http://localhost:3000/cart/${obj.id}`, {
        count: obj.newCount
      })
      // 1.将修改更新同步到vuex
      context.commit('updateCount', {
        id: obj.id,
        newCount: obj.newCount
      })
    }

  },
  getters: {
    // 商品总数量
    totalCount (state) {
      return state.list.reduce((sum, item) => sum + item.count, 0)
    },
    // 商品总价
    totalPrice (state) {
      return state.list.reduce((sum, item) => sum + item.price * item.count, 0)
    }
  }
}
