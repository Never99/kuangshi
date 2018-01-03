<template>
  <div class="header">
    <el-button
      style="float:right"
      type="primary"
      @click="logOut()">退出</el-button>
    <div class="userinfo">
      <h3>{{ $store.state.user.name }}</h3>
      <h3>{{ username.name }}</h3>
    </div>
    <div class="header-menu">
      <el-menu
        :router="true"
        class=""
        mode="horizontal">
        <el-menu-item index="/module1">
          <router-link
            class="head-menu-item"
            to="/module1">模块1</router-link>
        </el-menu-item>
        <el-menu-item index="/module2">
          <router-link
            class="head-menu-item"
            to="/module2">模块2</router-link>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    username() {
      return this.$store.getters.userinfo;
    }
  },
  methods: {
    logOut() {
      this.$router.push('../login');
    }
  }
};
</script>

<style scoped="scoped">
  .userinfo {
    height: 100%;
    float: left;
    max-width: 200px;
    overflow: hidden;
  }
  h3 {
    /* display: inline-block; */
    max-width: 200px;
    overflow: hidden;
  }
	.header{
    overflow: hidden;
	  height: 60px;
		background:#21539b;
		color:#fff;
	}
  .header-menu {
    height: 100%;
    display: inline-block;
  }
  .header-menu .head-menu-item {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .header-menu .el-menu {
    background-color: #21539b;
    /* color: #ffffff; */
  }
  .header-menu .el-menu .el-menu-item {
    padding: 0px;
  }
  .header-menu .router-link-active {
    background-color: #ffffff;
  }
  .header-menu ul {
    overflow: hidden;
    list-style-type: none;
  }
  .header-menu ul li {
    line-height: 60px;
    height: 60px;
    float: left;
    width: 100px;
    text-align: center;
  }
</style>
