import { isObject } from 'lodash'
export const cookie = {
  set(name: string, value: string) {
    // 设置cookie方法
    const Days = 30
    const exp = new Date()
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${escape(
      value
    )};expires=${exp.toUTCString()};path=/;`
  },
  // @ts-ignore
  get(key: string) {
    // 获取cookie方法
    const arrStr = document.cookie.split('; ')
    for (let i = 0; i < arrStr.length; i++) {
      const temp = arrStr[i].split('=')
      if (temp[0] === key) {
        return unescape(temp[1])
      }
      return ''
    }
  },
  delete(name: string) {
    // 删除cookie方法
    const exp = new Date()
    exp.setTime(exp.getTime() - 1)
    const cval = (window as any).cookie.set(name)
    if (cval != null) {
      document.cookie = `${name}=${cval};expires=${exp.toUTCString()};path=/;`
    }
  },
}
export interface ArrCompareReturnsType {
  status: 0 | 1 // 1 比原来长, 返回多出来的, 0 表示一样
  arr?: (string | number)[]
}
/**
 * @description 数组比较，不适用复杂类型[]
 * 先合并两个数组，去重
 * sort排序对比
 * @param {*} arr1
 * @param {*} arr2
[c]
[a,b]=>[a,b,c]
 */
export function arrCompare(
  arr1: (string | number)[],
  arr2: (string | number)[]
): ArrCompareReturnsType {
  const sortArr1 = Array.from(new Set(arr1.sort()))
  const sortArr2 = Array.from(new Set([...arr1, ...arr2])).sort()
  if (sortArr1.length === sortArr2.length)
    return {
      status: 0,
    }
  /**
    [c]
[a,b]=>[a,b,c]
     */
  const surplusArr = sortArr2.filter((v, i) => {
    if (sortArr1.includes(v)) {
      return false
    }
    return true
  })
  // const surplusArr = sortArr2.slice(sortArr1.length)
  return {
    status: 1,
    arr: surplusArr,
  }
}
// export function getFilterKeys<T extends Object, U extends keyof T>(obj:T, keys: U[]) {
//   const o: Object = {}
//   keys.forEach(k => {
//     o[k] = obj[k]
//   })
// }
export { isObject }
export function hasObject(obj: Object | undefined) {
  if (isObject(obj)) {
    return Object.keys(obj).length > 0
  }
  return false
}
