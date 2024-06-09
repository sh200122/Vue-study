<template>
 <div>
  <h1 v-color="color1">自定义指令1</h1>
  <h1 v-color="color2">自定义指令2</h1>
 </div>
</template>

<script>
export default {
  data() {
    return {
      color1:'red',
      color2:'green'
    }
  },
  directives:{
    // 1.inserted提供的是元素被添加到页面中时的逻辑
    color:{
      inserted(el,binding){
        // binding.vslue就是指令的值
        el.style.color=binding.value
      },
      // 2.update指令的值修改的时候触发，提供值变化后，dom更新的逻辑
      update(el,binding){
        el.style.color=binding.value
      }
    }
  }
}
</script>

<style>

</style>