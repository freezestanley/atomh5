import requestMethod from './config';
import moduleA from './modules/moduleA.js';
export const GET_TAG_LIST = () => requestMethod('POST', '/urlParam/tagList');
export const GET_BIZ_LIST = (params) => requestMethod('POST', '/m/channel/biz/list', params);
export {moduleA}; // 子模块导出
export default {
  GET_TAG_LIST,
  GET_BIZ_LIST,
}