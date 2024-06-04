<template>
  <div class="App">
    <!-- 头部组件 -->
    <ShHeader></ShHeader>
    <!-- 主体组件 -->
    <ShMain></ShMain>
    <!-- 底部组件 -->
    <ShFooter></ShFooter>
  </div>
</template>

<script>
import ShHeader from './components/ShHeader.vue'
import ShMain from './components/ShMain.vue'
import ShFooter from './components/ShFooter.vue'
export default {
 components:{
  // '组件名'：组件对象
  ShHeader,
  ShMain,
  ShFooter
 }
}
</script>

<style>
.App{
  width: 500px;
  height: 700px;
  background-color: #81c9ef;
  padding: 20px;
}
</style>