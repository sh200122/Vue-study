<template>
  <div class="search">
    <p>搜索关键字:{{ $route.query.key }}</p>
    <p>搜索结果: </p>
    <ul>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MySearch',
  // 发请求
  created(){
    // 在created中获取路由参数
    // this.$route.query.参数名 获取
    console.log(this.$route.query.key)
  }
}
</script>

<style>
.search {
  width: 400px;
  height: 240px;
  padding: 0 20px;
  margin: 0 auto;
  border: 2px solid #c4c7ce;
  border-radius: 5px;
}
</style>