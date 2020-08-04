import { DictItem, DictList } from './types'
import { hasObject } from '@/utils/tool'
/**
 * @description 通过code查找name（字典表查找）
 */
export function findDict(list: DictItem[], dictCode: string) {
  if (!list || !Array.isArray(list)) {
    return false
  }
  const item = list.find(value => {
    return value.code == dictCode
  })
  return item?.name
}

/**
 * @description 找字典表有子层级的code， 并按传入顺序的值返回
 * @param code 字典表code
 * @param values 依据其长度找对应深度的子数据
 * TODO 未完成
 */
export function finedDepDict(
  dictList: DictList,
  code: string,
  values: string[]
) {
  if (!hasObject(dictList)) return
  if (!Object.keys(dictList).includes(code)) {
    console.warn(`未在字典表中找到 ${code} 字典数据`)
    return
  }
  const item = dictList[code]
  console.log('item ===>', item)
  const names: any[] = []
  values.forEach((str, idx) => {
    if (item[idx].code === str) {
      names.push(item[idx])
    }
  })
  console.log('names ===>', names)
}
function fineChildList(item: DictItem) {}
