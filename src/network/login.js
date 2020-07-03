import request from '../../utils/request';

// 前端额外添加，便于转发
const prefix = '/v1/console';
// 报表分页接口
export const login = (params) => request(`${prefix}/login`, {
  method: 'POST',
  data: params,
});
export const loginout = (params) => request(`${prefix}/logout`, {
  method: 'GET',
  data: params,
});
