import { DictFormConfig, RealFormConfigType, RealConfigType } from './interface'
import { cloneDeep } from 'lodash'
import { hasObject } from '@/utils/tool'
export interface SetFieldValuesParamsType {
  key: string // 要设置的节点
  field: string // 设置的field是啥
  value: any // 值
}
/**
 * @description 生成标准配置项
 * 配置项.list 生成规则以 depend > code > list为准
 * @param config
 */
export function createConfig(config: DictFormConfig): RealFormConfigType {
  vailConfig(config)
  const realConfig: DictFormConfig = {}
  Object.keys(config).forEach(key => {
    const item = config[key]
    const obj: RealConfigType = {
      key,
      ...item,
    }
    if (!item.type) {
      item.type = 'input'
    }
    if (item.depend) {
      Reflect.deleteProperty(obj, 'list')
      Reflect.deleteProperty(obj, 'code')
    }
    if (item.code) {
      Reflect.deleteProperty(obj, 'list')
    }
    realConfig[key] = obj
  })
  // @ts-ignore
  return realConfig
}
/**
 * @description 根据自身parentCode查询携带有自己依赖的item
 * @param config
 * @param parentCode
 */
export function findItemByParentCode(
  config: DictFormConfig,
  parentCode: string
) {
  return (
    Object.keys(config)
      .map(key => {
        return {
          ...config[key],
          key,
        }
      })
      // @ts-ignore
      .find(item => {
        if (item.code === parentCode) {
          return item
        }
      })
  )
}
/**
 * @description 设置表单配置的值
 * @param config
 * @param values
 */
export function setFormConfigValue<T>(config: RealFormConfigType, values: T) {
  if (!hasObject(values)) return config
  const newConfig: RealFormConfigType = cloneDeep(config)
  Object.keys(values).forEach(key => {
    if (key in newConfig) {
      newConfig[key].value = values[key]
    }
  })
  return newConfig
}

export function setFieldValues(
  config: RealFormConfigType,
  params: SetFieldValuesParamsType
) {
  const newConfig: RealFormConfigType = cloneDeep(config)
  const { key, field, value } = params
  newConfig[key][field] = value
  return newConfig
}
/**
 * @description 配置校验
 * @param config
 */
export function vailConfig(config: DictFormConfig) {
  Object.keys(config).forEach(key => {
    const item = config[key]
    const itemKeys = Object.keys(item)
    if (itemKeys.includes('code') && itemKeys.includes('depend')) {
      console.error('配置项错误, 不可同时配置code和depend')
    }
  })
}
