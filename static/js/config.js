

(function (window) {
  const _config = {
    apiPath: {
      v1: '',
      // v1: 'http://10.199.1.49/'
      // v1:window.location.origin + '/'
    },
    clientId: 'portal',
    clientSecret: '9dya6m'
  };
  window.globalConfig = window.globalConfig || _config;
}(window));
