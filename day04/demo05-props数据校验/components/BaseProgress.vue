<template>
  <div class="base-progress">
    <div class="inner" :style="{ width: w + '%' }">
      <span>{{ w }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  // 1.基础写法（类型校验）
  // props:['w']
  props:{
    w:Number
  }
  // 2.完整写法（类型、是否必填、默认值、自定义校验） 
  // props:{
  //   w:{
  //     type:Number,
  //     required:true,//非空
  //     default:50,//默认值
  //     validator(value){//自定义
  //       if(value>=0&&value<=100){
  //         return true
  //       }else{
  //         return false
  //       }
  //     }
  //   }
  // }
}
</script>

<style scoped>
.base-progress {
  height: 26px;
  width: 400px;
  border-radius: 15px;
  background-color: #272425;
  border: 3px solid #272425;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.inner {
  position: relative;
  background: #379bff;
  border-radius: 15px;
  height: 25px;
  box-sizing: border-box;
  left: -3px;
  top: -2px;
}
.inner span {
  position: absolute;
  right: 0;
  top: 26px;
}
</style>