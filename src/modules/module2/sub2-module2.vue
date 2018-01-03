<template>
  <h3>module2-sub2</h3>
</template>

<script>
import Module2Srv from './module2.service';


export default {
  components: {

  },
  data() {
    return {

    };
  },
  computed: {

  },
  destroyed() {

  },
  created() {
    this.getDataList();
  },
  mounted() {

  },
  methods: {
    getDataList() {
      const params = {
        id: 123
      };
      Module2Srv.getDataList(params).then((res) => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped>

</style>
