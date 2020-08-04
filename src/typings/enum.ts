/**
 * @description 产品状态
 */
export enum ProductStatusEnum {
  SALE = '1',
  NO_SALE = '2',
  EDIT = '3',
  READY = '4', // 待上架
}
/**
 * @description 一般确定好类型，在前端写死。如果不清楚要传什么，问后端
 */
export enum FactorOwnerTypeEnum {
  TYPE = 1, // 险种
  DUTY = 2, // 险种责任
  PLAN = 3, // 方案险种责任
}
/**
 * @description 因子属性类型
 */
export enum FactorDataTypeEnum {
  FIXED = '1', // 固定
  ENUM = '2', // 枚举
  AREA = '3', // 区间
}
/**
 * @description 是否支持方案
 */
export enum comboFlagEnum {
  TRUE = '1',
  FALSE = '2',
}
/**
 * @description 组合状态标识
 */
export enum packageStatusEnum {
  WAIT_CONFIG = '1', // 待配置
  WAIT_ON = '2', //待上架
  ON = '3', // 已上架
  OFF = '4', // 已下架
}
/**
 * @description 操作类型
 */
export enum optTypeEnum {
  ON = '1', // 上架
  OFF = '2', //下架
  EDIT = '3', // 创建/编辑产品组合提交
}

/**
 * @description 产品定义tab栏枚举
 */
export enum DefineTabIndexType {
  BASE = '1',
  FACTOR = '2',
  DUTY = '3',
  RATE = '4',
  RULE = '5',
}

/**
 * @description 组合人群标识
 */
export enum ConcatCrowdEnum {
  EMPLOYEE = '1',
  FAMILY = '2',
  INDIVIDUAL = '3',
}
