import axios from 'axios';
import Intcp from '../interceptors';

function interceptors() {
  // http请求拦截器
  axios.interceptors.request.use((req) => {
    Intcp.ReqHeader.setHeader(req);
    return req;
  }, error => Promise.reject(error));
  // http响应拦截器
  axios.interceptors.response.use((res) => {
    Intcp.ResCode.doCode(res);
    return res;
  }, (error) => {
    Intcp.ResError.doError(error);
    return Promise.reject(error);
  });
}

export default {
  interceptors
};
