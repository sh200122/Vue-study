<template>
  <div class="h5-wrapper">
    <!-- 包裹了keep-alive以及路由匹配的组件都会被缓存
          LayoutPage组件（被缓存了）-多两个生命周期钩子
            -actived 激活时，组件被看到时触发
            -deactived 失活时，离开页面组件看不见
          ArticleDetailPage组件(未被缓存)

          需求：只希望LayoutPage被缓存，include配置
          :include="组件名数组"

          组件缓存了就不会执行组件的created,mounted,destorye
          所以提供了actived和deactived
    -->
    <keep-alive :include="['LayoutPage']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "h5-wrapper",
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
<style lang="less" scoped>
.h5-wrapper {
  .content {
    margin-bottom: 51px;
  }
  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    a {
      flex: 1;
      text-decoration: none;
      font-size: 14px;
      color: #333;
      -webkit-tap-highlight-color: transparent;
      &.router-link-active {
        color: #fa0;
      }
    }
  }
}
</style>