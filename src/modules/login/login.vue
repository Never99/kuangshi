<template>
  <div>
    <h1>登录页面</h1>
    <el-form
      label-width="80px"
      :model="userinfo">
      <el-form-item label="用户名">
        <el-input v-model="userinfo.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="userinfo.password"></el-input>
      </el-form-item>
      <el-button
        type="primary"
        @click="login()">登录</el-button>
    </el-form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      userinfo: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      this.$router.push('./');
    }
  }
};
</script>

<style>

</style>
