import axios from 'axios';
import { message } from 'antd';
import store from './store';
import getSsoUrl from './ssourl';
import env from './env';

function getCurrentHost() {
  return `${window.location.protocol}//${window.location.host}`;
}

message.config({
  maxCount: 1,
});
axios.defaults.withCredentials = true;
axios.defaults.baseURL = '';

// 等保
axios.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    // return Promise.reject(error);
  },
);
function redirectLogin() {
  window.location.href = `/login`;
}


export default (url, params) => {
  console.log('url', url);
  // test
  const extraHeaders = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    token: localStorage.getItem('token'),
  };
  const headers = { ...extraHeaders, ...params.headers };

  return new Promise((resolve, reject) => {
    axios({
      method: params.method,
      url,
      headers,
      params: params.params,
      data: params.data,
      timeout: params.timeout ? params.timeout : 0,
      responseType: params.responseType || 'json',
    })
      .then((resp) => {
        console.log('resp.data.code',resp.data.code === '80000', typeof(resp.data.code))
        if (resp.data && resp.data.code === "80000") {
          console.log('1')
          redirectLogin();
        }
        if (params.allResponse) {
          resolve(resp);
        } else {
          resolve(resp.data);
        }
      })

      .catch((e) => {
        console.log('except', e.toString(), url.toString());
        if (
          e.toString().indexOf('302') > -1
          // && url.toString().indexOf('/api/checkLogin') > -1
        ) {
          // todo 防止账号冲突被T
          if (env() !== 'local') {
            redirectLogin();
          }
        }
      });
  });
};
