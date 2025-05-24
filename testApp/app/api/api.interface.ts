// src/api/request.ts
import axios from 'axios';

const request = axios.create({
  baseURL: 'https://loginSystem-api.com', // 你的后端 API 域名
  timeout: 10000,                   // 超时时间
});

// 请求拦截器：比如自动加 token
request.interceptors.request.use(
  config => {
    // 这里可以自动给每个请求加 token
    // config.headers.Authorization = 'Bearer ' + token;
    return config;
  },
  error => Promise.reject(error)
);

// 响应拦截器：统一处理返回和错误
request.interceptors.response.use(
  response => response.data, // 只返回 data，抛弃 headers/config
  error => {
    // 这里可以统一弹窗或 log
    // alert(error?.response?.data?.message || error.message || '请求失败');
    return Promise.reject(error);
  }
);

export default request;
