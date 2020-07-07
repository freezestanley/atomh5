import axios from 'axios';
import { v4 } from 'uuid';
import getEnv from './getEnv';
import getSsourl from './ssourl';

function getCurrentHost() {
  return window.location.protocol + '//' + window.location.host;
}

axios.defaults.baseURL = '';

export default (type, opts = {
}) => {
  const { headers, source, extension, ...rest } = opts;
  const ceId = v4();
  let ext = {};
  if (extension) ext['ce-my-extension'] = extension;
  // const _type = Array.isArray(type) && !typeof type !== 'string' ? JSON.stringify(type) : JSON.stringify([type])
  return axios({
    url: '/anlink-node-proxy/node/getEvent',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'ce-type': type,
      'ce-specversion': '0.2',
      'ce-source': source || window.location.href,
      'ce-id': ceId,
      // 'ce-time': `${new Date().getTime().toString()}`,
      ...ext,
      ...headers,
    },
    ...rest,
  })
    .then(res => res)
    .catch(err => {
      if (err.toString().indexOf('302') > -1) {
        // setEnvUrl();
        //获取server name
        // let serverName = store.getKey('serverName');
        let serverName = '';
        if (getEnv() == 'local') {
          serverName = 'test';
          return;
        } else {
          serverName = 'console';
        }
        // message.loading('用户信息过期，请重新登录...')
        console.log(getSsourl(), 666);
        // window.open(loginURL+'?service='+getCurrentHost()+'/'+serverName)
        window.location.href = getSsourl() + '?service=' + getCurrentHost() + '/' + serverName + '/';
      }
    })
}


// import { v4 } from 'uuid';

// export default (type, opts = {}) => {
//   const { headers, source, extension, ...rest } = opts;
//   const ceId = v4();
//   let ext = {};
//   if (extension) ext['ce-my-extension'] = extension;
//   return fetch('/event/node/getEvent', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'x-anlink-userid': 99,
//       'ce-type': type,
//       'ce-specversion': '0.2',
//       'ce-source': source || window.location.href,
//       'ce-id': ceId,
//       // 'ce-time': new Date(),
//       ...ext,
//       ...headers,
//     },
//     ...rest,
//   })
//     .then(res => {
//       // TODO 异常处理
//       return res.data
//     })
//     .catch(err => {
//       // TODO 异常处理
//     })
// }