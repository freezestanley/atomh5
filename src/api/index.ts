import request from './config';
// import moduleA from './modules/moduleA/moduleA';
const root = '/api';
export const QueryDictItems = async (params: DICTCodeReq) => request.get(`${root}/business/queryDictItemsByDictCode`, {params});
// export const QueryDictItems = (params: DICTCodeReq) => request(`${root}/business/queryDictItemsByDictCode`, {
//   params
//   });
// export {moduleA}; // 子模块导出
export default {
  QueryDictItems,
}