<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @add="handleAdd"></TodoHeader>
    <TodoMain @del="handleDel" :list="list"></TodoMain>
    <TodoFooter @clear="handleClear" :list="list"></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
// 渲染功能
// 1.提供数据-提供在公共的父组件
// 2.通过父组件将数据传递给TodoMain
// 3.利用v-for渲染

// 添加功能
// 1.收集表单数据，v-model
// 2.监听事件（回车，点击）
// 3.子传父将任务名称传递给父组件App.vue
// 4.进行添加，unshift（自己的数据自己负责）

// 删除功能
// 1.监听事件（监听删除的点击）携带id
// 2.子传父，将删除的id传递给父组件
// 3.进行删除filter（自己的数据自己负责）

// 底部合计：父传子，传list，渲染
// 清空功能：子传父 通知到父组件 父组件进行清除
// 持久化存储：watch深度监听list的变化-往本地存储-进入页面优先读取本地
export default {
  data () {
    return {
      list: JSON.parse(localStorage.getItem('list'))||[
        {id:1,name:'打篮球'},
        {id:2,name:'吃饭'},
        {id:3,name:'看电影'},
        {id:4,name:'睡觉'},
      ]
    }
  },
  components:{
    TodoFooter,
    TodoHeader,
    TodoMain
  },
  methods:{
    handleAdd(todoName){
      this.list.unshift({
        id:+new Date(),
        name:todoName
      })
    },
    handleDel(id){
      // console.log(id);
      this.list=this.list.filter(item=>item.id!==id)
    },
    handleClear(){
      this.list=[]
    }
  },
  watch:{
    list:{
      deep:true,
      handler(newValue){
        localStorage.setItem('list',JSON.stringify(newValue))
      }
    }
  },
}
</script>

<style>

</style>
