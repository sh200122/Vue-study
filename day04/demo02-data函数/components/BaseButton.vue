<template>
  <div>
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script>
export default {
  // data必须是一个函数 → 保证每个组件实例，维护独立的数据对象
data(){
return {
  count:999
}
}
}
</script>

<style>

</style>