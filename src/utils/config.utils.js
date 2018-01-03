(function (window) {
  const config = {
    apiPath: {
      v1: '',
      // v1: 'http://10.199.1.49/'
      // v1:window.location.origin + '/'
    },
    clientId: 'portal',
    clientSecret: '9dya6m'
  };
  window.globalConfig = window.globalConfig || config;
}(window));
// const config = {
//   apiPath: {
//     v1: '',
//     // v1: 'http://10.199.1.49/'
//     // v1:window.location.origin + '/'
//   },
//   clientId: 'portal',
//   clientSecret: '9dya6m'
// };

// // 完成一些其他初始化配置的操作后，赋值给config

// export default config;
