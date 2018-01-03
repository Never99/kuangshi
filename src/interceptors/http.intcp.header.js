let req = {};

/**
 * 设置http请求headers，添加token
 */
const setToken = () => {
  try {
    req.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`;
  } catch (e) {
    console.log(e);
  }
};

/**
 * 给请求的url添加随机参数，避免在IE10下本地缓存的问题
 */
const setRParams = () => {
  try {
    let joinStr = '?r=';
    if (req.url.indexOf('&') > -1) {
      joinStr = '&r=';
    }
    joinStr += new Date().getTime();
    // mock模式下不添加随机参数
    if (req.url.indexOf('http://') < 0) {
      joinStr = '';
    }
    req.url += joinStr;
  } catch (e) {
    console.log(e);
  }
};
export default {
  setHeader: (request) => {
    req = request || {};
    setToken();
    setRParams();
  }
};
