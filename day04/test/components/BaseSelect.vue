<template>
  <div>
    <input type="text" :value="value" @change="handleChange">
  </div>
</template>

<script>
export default {
  props:{
    value:String
  },
  methods:{
    handleChange(e){
      // console.log(e.target.value);
      this.$emit('input',e.target.value)
    }
  }
}
</script>

<style>
</style>