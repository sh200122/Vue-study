<template>
    <form action="">
      账号: <input v-model="account" type="text"><br>
      密码: <input v-model="password" type="password">
    </form>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: '',
    }
  },
  methods: {
    getValues(){
      return{
        account:this.account,
        password:this.password
      }
    },
    resetValues(){
      this.account=''
      this.password=''
    }
  }
}
</script>

<style scoped>

</style>