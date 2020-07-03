import requestMethod from '../config';
export const PUBULIC_MANAGE_LIST = (params) => requestMethod('POST', '/m/putApply/selectPublicManageList', params);
export default {
  PUBULIC_MANAGE_LIST
}