<template>
  <div>
    <MyDialog>
      <!-- template配合v-slot：插槽名分发内容 -->
      <template v-slot:header>
        <h3>
          我是大标签
        </h3>
      </template>
      <template v-slot:content>
        <p>
          我是文本内容
        </p>
      </template>
      <template #footer>
        <button>确认</button>
        <button>取消</button>
      </template>
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