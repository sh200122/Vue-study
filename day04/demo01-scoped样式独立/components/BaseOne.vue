<template>
  <div>
    BaseOne
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 
1. 默认的style样式，会作用于全局→全局样式
2. 加上scoped属性的样式，只会作用于当前组件 → 局部样式
*/
div{
  width: 200px;
  border: 3px solid blue;
}
</style>