/**
1.父传子
  父：
  1.1 给组件标签，添加属性的方式，传值
  子：
  1.2 通过props进行接收
  1.3 渲染使用
2.子传父
  子：
  2.1 通过$emit向父组件发送消息通知
  父：
  2.2 父组件对消息进行监听
  2.3 提供处理函数和逻辑
*/

<template>
  <div class="App" style="border: 3px solid black; margin: 10px; text-align: center;">
    我是App组件:
    <!-- 1.父传子 -->
    <!-- 1.1 给组件标签，添加属性的方式，传值 -->
    <!-- 2.2 父组件对消息进行监听 -->
    <AppSon :title="myTitle" @changeTitle="handleChange"></AppSon>
  </div>
</template>

<script>
import AppSon from './components/AppSon.vue'
export default {
  data(){
    return{
      myTitle:'阿浩爱睡觉'
    }
  },
  methods:{
    // 2.3 提供处理函数，提供逻辑
    handleChange(newTitle){
      this.myTitle=newTitle
    }
  },
  components:{
    AppSon
  }
}
</script>

<style>

</style>