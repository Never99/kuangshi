export default {
  install(Vue, options) {
    Vue.prototype.globalTest = () => 'globalTest is fun'; // eslint-disable-line
    console.log(options);
  }
};
