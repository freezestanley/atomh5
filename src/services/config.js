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
message.config({
    maxCount: 1,
});
const request = extend({
    // prefix: API_DOMAIN,
    
    // charset: 'utf8',
    // 请求响应类型，根据业务给
    // requestType: 'json',
    responseType: 'json',
    timeout: 2 * 60 * 1000, // 过期时间 2 分钟，根据需求改动
    useCache: false, // 是否使用缓存
    // ttl 缓存过期时间，默认 60 * 1000
    // errorHandler: serverErrorHandler, // 由于不是通过服务器状态码处理结果，不使用
    headers : {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      token: localStorage.getItem('token'),
    },
    withCredentials: true,
    // credentials: 'include', // 请求丢到cookie，不能开，开就是爆炸。
})
// 请求拦截器
request.interceptors.request.use((url, options) => {
    // do somthing
    return (
        request
    );
});
// 响应拦截器
request.interceptors.response.use(async (response) => {
    // do somthing
    return response;
});
/**
 * 
 * @param method - 请求方法
 * @param url - 地址
 * @param params - 参数
 * @param mock - mock
 * @param config - 额外的配置
 */
export default function requestMethod(method, url, params, config = {}) {

    const submitType = ['post', 'put'] // 提交类型的请求
    const lowMethod = method ? method.toLowerCase() : 'get'
    // get => params
    // post => data
    const modeKey = submitType.includes(lowMethod) ? 'data' : 'params'
    const query = {
        method: method ? method.toLowerCase() : 'get',
        [modeKey]: params,
        ...config
    };
    return new Promise((resolve, reject) => {
        request(`${url}`, query).then((res) => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}