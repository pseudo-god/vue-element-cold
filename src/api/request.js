import axios from 'axios';
import { MessageBox, Message } from 'element-ui';
import store from '@/store';

// create an axios instance
const service = axios.create({
  baseURL:  process.env.VUE_APP_BASE_API,
  timeout: 10000 // request timeout
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    const filterUrl = ['/login'];
    if (!filterUrl.includes(config.url.split(config.baseURL)[0])) {
      config.headers['Authorization'] = store.getters.token;
    }

    return config;
  },
  (error) => {
    console.log('error', error);
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;

    if (res.code === 2001) {
      // to re-login
      MessageBox.confirm('已注销，请重新登录', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('user/resetToken').then(() => {
          location.reload();
        });
      });
    } else if (res.code !== 2000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    Message({
      message: error,
      type: 'error',
      duration: 5 * 1000
    });

    
    return Promise.reject(error.response);
  }
);

export default service;
