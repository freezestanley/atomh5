import { PartOperation } from "./enums";

/**
 * 城市基础数据对象
 */
export interface CityModel {
  /** 名称 */
  name?: string;
  /** id */
  cityId?: number
  /** 首字母 */
  first?: string;
  /** 拼音 */
  pinyin?: string;
}
/**
 * 历史访问城市数据对象
 */
export interface HistoryCities extends CityModel {
}

/**
 * 热门城市数据对象
 */
export interface HotCity extends CityModel {
}

/**
 * 事件回调
 */
export interface CallBackModel<T> {
  /** 返回数据对象 */
  data: T
  /** 操作类型 */
  type: PartOperation
}

/**
 * SDK配置信息
 */
export interface MapConfigModel {
  /** 授权key */
  mapKey?: string
  /** api请求域名前缀,不填取当前域名 */
  apiBasics: string
}


