<template>
  <div>
    <MyDialog>
      <!-- 显示默认文本 -->
    </MyDialog>
    <MyDialog>
      <div>你确定要删除吗?</div>
    </MyDialog>
    <MyDialog>
      <div>
        你确定要退出吗？
      </div>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue"
export default {
  data() {
    return {}
  },
  components: {
    MyDialog,
  },
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>