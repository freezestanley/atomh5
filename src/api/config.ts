/*
 * @Author: LaoZhang
 * @Date: 2020-07-03 14:58:52
 * @LastEditors: LaoZhang
 * @LastEditTime: 2020-07-03 15:21:48
 * @Description: 文件说明
 * @FilePath: /umipc/src/services/config.js
 */
// import API_DOMAIN from '@/config/domain';
import { message } from 'antd';
import { extend } from 'umi-request';
import errorHandle from './middleware/errorHandle';
import Qs from 'qs'
message.config({
    maxCount: 1,
});

const request = extend({
    // prefix: API_DOMAIN,

    // charset: 'utf8',
    // 请求响应类型，根据业务给
    // requestType: 'json',
    errorHandler: errorHandle,
    responseType: 'json',
    timeout: 2 * 60 * 1000, // 过期时间 2 分钟，根据需求改动
    useCache: false, // 是否使用缓存
    // ttl 缓存过期时间，默认 60 * 1000
    // errorHandler: serverErrorHandler, // 由于不是通过服务器状态码处理结果，不使用
    paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: 'brackets' })
    },
    // @ts-ignore
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        // TODO 登录留口子
        // get token() {  
        //     return window.localStorage.getItem('toekn');
        // }
    },
    // credentials: 'include', // 请求丢到cookie，不能开，开就是爆炸。
})
// 请求拦截器
// @ts-ignore
// request.interceptors.request.use((url, options) => {
//     // do somthing
//     console.log(url, options);
//     return (
//         request
//     );
// });
// 响应拦截器
request.interceptors.response.use(async (response) => {
    // do somthing
    const json = await response.json();
    // console.log('request.interceptors.response =>', json);
    if (json.success) {
        return json;
    } else {
        message.error(json.message);
        return json;
    }
});
export default request;