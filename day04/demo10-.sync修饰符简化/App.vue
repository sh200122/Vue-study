<template>
  <div class="app">
    <button @click="isShow=true" class="logout">退出按钮</button>
    <!-- :visible.sync本质就是：:属性名和@update:属性名的缩写 -->
    <BaseDialog
     :visible.sync="isShow"
     ></BaseDialog>
  </div>
</template>

<script>
import BaseDialog from "./components/BaseDialog.vue"
export default {
  data() {
    return {
      isShow:false
    }
  },
  methods: {
    
  },
  components: {
    BaseDialog,
  },
}
</script>

<style>
</style>