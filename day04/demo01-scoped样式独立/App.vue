<template>
  <div class="App">
    <BaseOne></BaseOne>
    <BaseTwo></BaseTwo>
  </div>
</template>

<script>
import BaseOne from './components/BaseOne.vue'
import BaseTwo from './components/BaseTwo.vue'
export default {
  components: {
    BaseOne,
    BaseTwo
  }
}
</script>

<style scoped>
.App{
  width:200px;
  border: green solid 3px;
  padding: 20px;
}
</style>