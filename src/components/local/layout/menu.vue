<template>
  <div style="height: 100%;">
    <!-- <el-menu
      :router="true"
      :unique-opened="true"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      style="height:900px;">
      <el-menu-item index="/module1/sub1">模块1-1</el-menu-item>
      <el-menu-item index="/module1/sub2">模块1-2</el-menu-item>
      <el-menu-item index="/module2/sub1">模块2-1</el-menu-item>
      <el-menu-item index="/module2/sub2">模块2-2</el-menu-item>
    </el-menu> -->
    <ul class="sub-menu">
      <router-link
        to="/module1/sub1"
        tag="li">模块1-1</router-link>
      <router-link
        to="/module1/sub2"
        tag="li">模块1-2</router-link>
      <router-link
        to="/module2/sub1"
        tag="li">模块2-1</router-link>
      <router-link
        to="/module2/sub2"
        tag="li">模块2-2</router-link>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
  }
  .sub-menu li {
    height: 50px;
    line-height: 50px;
    text-align: left;
    padding-left: 50px;
    cursor: pointer;
  }
  .sub-menu li.router-link-active {
    color:#21539b;
    background-color: #ecf5ff;
  }
</style>
