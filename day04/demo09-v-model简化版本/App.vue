<template>
  <div class="app">
    <!-- 本质就是：:value和@input:的缩写 -->
    <BaseSelect v-model="selectId"></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'
export default {
  data() {
    return {
      selectId: '104',
    }
  },
  components: {
    BaseSelect,
  },
}
</script>

<style>
</style>