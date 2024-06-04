<template>
  <div class="App">
    <div @click="fn" class="box"></div>
  </div>
</template>


<script>
// 导出的是当前组建的配置项
// 里面可以提供data(特殊) methods computed watch 生命周期八大钩子
export default{
  methods:{
    fn(){
      alert('你好')
    }
  }
}
</script>
<style lang="less">
.App{
  width: 400px;
  height: 400px;
  background-color: skyblue;
  .box{
  width: 200px;
  height: 200px;
  background-color: hotpink;
}
}

</style>