<template>
  <div class="my-tag">
    <input 
      v-if="isEdit"
      ref="inp"
      v-focus
      class="input"
      type="text"
      :value="value"
      placeholder="输入标签"
      @blur="isEdit=false"
      @keyup.enter="handleEnter"
    />
    <div 
      v-else
      @dblclick="handleClick"
      class="text">
        {{value}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEdit:false
    }
  },
  props:{
    value:String
  },
  methods: {
    // 双击后，切换显示状态
    handleClick(){
      this.isEdit=true
      // // 等dom更新完了，再获取焦点
      // this.$nextTick(()=>{
      //   this.$refs.inp.focus()
      // })
    },
    
    handleEnter(e){
      // 非空处理
      if(e.target.value.trim()==='') return alert('输入标签不能为空')
      // 由于父组件是v-model，触发事件，需要触发input
      this.$emit('input',e.target.value)
      // 提交完成，关闭输入框
      this.isEdit=false
    }
  },
}
</script>

<style lang="less" scoped>
.my-tag {
    cursor: pointer;
    .input {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 100px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
      &::placeholder {
        color: #666;
      }
    }
  }
</style>