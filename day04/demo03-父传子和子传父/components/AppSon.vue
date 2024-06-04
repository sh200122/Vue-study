<template>
  <div style="border: 3px solid black; margin: 10px;">
    <!-- 1.3渲染使用 -->
    我是AppSon组件:{{ title }}
    <button @click="changeFn">修改title</button>
  </div>
</template>

<script>
export default {
  // 1.2 通过props进行接收
  props:['title'],
  methods:{
    changeFn(){
      // 2.子传父
      // 2.1 通过$emit,向父组件发送消息通知
      this.$emit('changeTitle','阿浩爱吃饭')
    }
  }
}
</script>

<style>

</style>