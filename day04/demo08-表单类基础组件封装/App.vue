<template>
  <div class="app">
    <BaseSelect :cityId="selectId" @changeId="selectId=$event"></BaseSelect>
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