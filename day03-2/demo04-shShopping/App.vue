<template>
  <div class="App">
    <AhShortCut></AhShortCut>
    <AhHeaderNav></AhHeaderNav>
    <AhBanner></AhBanner>
    <AhNewGoods></AhNewGoods>
    <AhHotBrand></AhHotBrand>
    <AhTopic></AhTopic>
    <AhFooter></AhFooter>
  </div>
</template>

<script>
import AhShortCut from './components/AhShortCut.vue'
import AhHeaderNav from './components/AhHeaderNav.vue'
import AhBanner from './components/AhBanner.vue'
import AhNewGoods from './components/AhNewGoods.vue'
import AhHotBrand from './components/AhHotBrand.vue'
import AhTopic from './components/AhTopic.vue'
import AhFooter from './components/AhFooter.vue'
export default {
  components: {
    AhShortCut,
    AhHeaderNav,
    AhBanner,
    AhNewGoods,
    AhHotBrand,
    AhTopic,
    AhFooter
  }
}
</script>

<style>

</style>