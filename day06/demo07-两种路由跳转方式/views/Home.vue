<template>
  <div class="home">
    <div class="search-box">
      <input v-model="inpValue" type="text">
      <button @click="goSearch">搜索一下</button>
    </div>
    <div class="hot-link">
      热门搜索：
      <router-link to="/search/吃饭">吃饭</router-link>
      <router-link to="/search/睡觉">睡觉</router-link>
      <router-link to="/search/打篮球">打篮球</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHome',
  data() {
    return {
      inpValue:''
    }
  },
  methods:{
    goSearch(){
      // 1.通过路径的方式跳转
      //    a.this.$router.push('路由路径')[简写]
      //      this.$router.push('路由路径?参数名=参数值') 
      // this.$router.push('/search')
      // query传参
      // this.$router.push(`/search?key=${this.inpValue}`)
      // 动态路由传参
      // this.$router.push(`/search/${this.inpValue}`)
      //    b.this.$router.push({path:'路由路径'})[完整写法]更适合传参
      // this.$router.push({
      //   path:'路由路径'
      // })
      // query传参
      // this.$router.push({
      //   path:'search',
      //   query:{
      //     key:this.inpValue
      //   }
      // })
      // 动态路由传参
      // this.$router.push({
      //   path:`/search/${this.inpValue}`
      // })
      // 2.通过命名路由的方式跳转（需要给路由起名字）
      // this.$router.push({
      //   name:'search'
      // })
      // query传参
      // this.$router.push({
      //   name:'search',
      //   query:{
      //     key:this.inpValue
      //   }
      // })
      // 动态路由传参
      this.$router.push({
        name:'search',
        params:{
          words:this.inpValue
        }
      })
    }
  }
}
</script>

<style>
.search-box {
  display: flex;
  justify-content: center;
}
.search-box input {
  width: 400px;
  height: 30px;
  line-height: 30px;
  border: 2px solid #c4c7ce;
  border-radius: 4px 0 0 4px;
  outline: none;
}
.search-box input:focus {
  border: 2px solid #ad2a26;
}
.search-box button {
  width: 100px;
  height: 36px;
  border: none;
  background-color: #ad2a26;
  color: #fff;
  position: relative;
  left: -2px;
  border-radius: 0 4px 4px 0;
}
.hot-link {
  width: 508px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}
.hot-link a {
  margin: 0 5px;
}
</style>