<template>
  <el-container>
    <el-header>
      <meg-header></meg-header>
    </el-header>
    <el-container>
      <el-aside class="menu">
        <meg-menu></meg-menu>
      </el-aside>
      <el-main class="content">
        <transition
          name="el-zoom-in-center"
          mode="out-in">
          <router-view :key="key"></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>

</template>


<script>
import MegHeader from '@/components/local/layout/header';
import MegMenu from '@/components/local/layout/menu';

export default {
  name: 'Layout',
  components: {
    MegHeader,
    MegMenu
  },
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date();
    }
  }
};
</script>

<style>

</style>
