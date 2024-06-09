// user模块
const state = {
  userInfo: {
    name: 'zs',
    age: 18
  },
  score: 80
}
const mutations = {
  setUser(state,newUser){
    state.userInfo=newUser
  },
}
const actions = {
  setUser2(context,newUser){
    // 将异步在action中进行封装
    setTimeout(()=>{
      // 调用mutation
      context.commit('setUser',newUser)
    },1000)
  }
}
const getters = {
  UpperCaseName(state){
    return state.userInfo.name.toUpperCase()
  }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}
