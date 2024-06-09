<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label>{{ count }}</label>
    <br />
    <button @click="subCount(1)">值 - 1</button>
    <button @click="subCount(5)">值 - 5</button>
    <button @click="subCount(10)">值 - 10</button>
    <button @click="changeCountAction(888)">1秒后改成888</button>
    <button @click="changeTitle('帅哥')">改标题</button>
    <hr>
    <div>{{ filterList }}</div>
    <hr>
    <!-- 访问模块中的state -->
    <!-- 辅助函数 ：通过mapState映射-->
    <div>{{ user.userInfo.name }}</div>
    <div>{{ setting.theme }}</div>
    <hr>
    <div>user模块的数据:{{ userInfo }}</div>
    <button @click="setUser({name:'ls',age:100})">更新个人信息</button>
    <button @click="setUser2({name:'ww',age:1000})">一秒后更新个人信息</button>
    <div>setting模块的数据:{{ theme }} - {{ desc }}</div>
    <button @click="setTheme('green')">更新主题色</button>
    <hr>
    <!-- 通过mapGetters映射 -->
    <div>{{ UpperCaseName }}</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions,mapGetters } from 'vuex'
export default {
  name: 'Son2Com',
  computed: {
    // mapState 和 mapGetters 都是映射属性
    ...mapState(['count', 'user', 'setting']),
    ...mapState('user',['userInfo']),
    ...mapState('setting',['theme','desc']),
    ...mapGetters(['filterList']),
    ...mapGetters('user',['UpperCaseName'])
  },
  methods: {
    // mapMutations 和 mapActions 都是映射方法
    // 全局级别的映射
    ...mapMutations(['subCount', 'changeTitle']),
    ...mapActions(['changeCountAction']),

    // 分模块的映射
    ...mapMutations('user',['setUser']),
    ...mapMutations('setting',['setTheme']),
    ...mapActions('user',['setUser2'])
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
