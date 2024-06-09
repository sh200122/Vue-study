<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ $store.state.count }}</label>
    <br>
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="handleAdd(5)">值 + 5</button>
    <button @click="handleAdd(10)">值 + 10</button>
    <button @click="handleChange">一秒后修改成666</button>
    <button @click="changeFn">改标题</button>
    <hr>
    <div>{{ $store.state.list }}</div>
    <div>{{ $store.getters.filterList }}</div>
    <hr>
    <!-- 原生方法:直接通过模块名访问 -->
    <div>{{ $store.state.user.userInfo.name }}</div>
    <button @click="updateUser">更新个人信息</button>
    <button @click="updateUser2">一秒后更新个人信息</button>
    <div>{{ $store.state.setting.theme }}</div>
    <button @click="updateTheme">更新主题色</button>
    <hr>
    <!-- 通过模块名访问 -->
    <div>{{ $store.getters['user/UpperCaseName'] }}</div>
  </div>
</template>

<script>
export default {
  name: 'Son1Com',
  created () {

  },
  methods: {
    
    handleAdd (n) {
      // 错误代码(vue默认不会监测，监测需要成本)
      // this.$store.state.count++
      // console.log(this.$store.state.count)

      // 应该通过 mutation 核心概念，进行修改数据
      // 需要提交调用mutation
      // this.$store.commit('addCount')

      // console.log(n)
      // 调用带参数的mutation函数
      this.$store.commit('addCount', n)
    },
    changeFn () {
      this.$store.commit('changeTitle', '阿浩')
    },
    handleChange () {
      // 调用action
      // this.$store.dispatch('action名字', 额外参数)
      this.$store.dispatch('changeCountAction', 666)
    },
    updateUser(){
      // this.$route.commit('模块名/mutations名',额外参数)
      this.$store.commit('user/setUser',{
        name:'ls',
        age:20
      })
    },
    updateUser2(){
      // 调用action dispatch
      this.$store.dispatch('user/setUser2',{
        name:'ww',
        age:1000
      })
    },
    updateTheme(){
      this.$store.commit('setting/setTheme','green')
    }
  }
}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
