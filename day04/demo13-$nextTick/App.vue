<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input type="text" v-model="editValue" ref="inp" />
      <button>确认</button>
    </div>
    <div v-else>
      <span>{{ title }}</span>
      <button @click="handleEdit">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '大标题',
      isShowEdit: false,
      editValue: '',
    }
  },
  methods: {
   handleEdit(){
    // 1.显示输入框
    this.isShowEdit=true
    // 2.让输入框获取焦点($nextTick等dom更新完，立即执行)
    this.$nextTick(()=>{
      this.$refs.inp.focus()
    })
    // setTimeout(()=>{
    //   this.$refs.inp.focus()
    // },1000)
   }
  },
}
</script>

<style>
</style>