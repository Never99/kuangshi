<template>
  <div>
    <h3>module1-sub1</h3>
    <p>{{ glotest }}</p>
    <p>{{ active }}</p>
    <el-form
      ref="form"
      :model="form"
      label-width="80px">
      <el-form-item label="背景色">
        <el-input v-model="form.color.bgcolor"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <h1>{{ username }}</h1><h1>{{ myname }}</h1>
    <div
      style="width:100px;height:100px;border:1px solid chartreuse;"
      v-bg-color="form"></div>
    <el-button
      type="primary"
      @click="getUserName()">获取用户名</el-button>
  </div>

</template>

<script>
import Module1Srv from './module1.service';

export default {
  components: {
  },
  data() {
    return {
      myname: '',
      form: {
        name: '马兆海',
        color: {
          bgcolor: '#ff0000'
        }
      },
      glotest: '',
      active: this.$t('domlang.ACTIVE_NAME')
    };
  },
  computed: {
    username() {
      return this.$store.getters.userinfo.name;
    }
  },
  watch: {
    'form.name': {
      handler(val, oldval) {
        console.log(`${val}====${oldval}`);
        // const s = this.$store.commit('SET_USERNAME', val);
        // console.log(s);
        this.$store.dispatch('CHANGE_NAME', val);
      },
      deep: true// 对象内部的属性监听，也叫深度监听
    }
  },
  mounted() {
  },
  destroyed() {

  },
  created() {
    this.myname = this.$store.getters.userinfo.name;

    this.glotest = this.globalTest();
    this.getDataList();
  },
  methods: {
    getUserName() {
      alert(this.$store.getters.userinfo.name);
    },
    /**
			 * 获取数据列表
			 */
    getDataList() {
      const params = {
        id: 123
      };
      Module1Srv.getDataList(params).then((res) => {
        console.log(res);
      });
    },
    /**
			 * 获取用户信息
			 * @id 用户id
			 * @return 用户信息
			 */
    userInfo() {
      const userinfo = {};
      return userinfo;
    }
  }
};
</script>

<style scoped>

</style>
