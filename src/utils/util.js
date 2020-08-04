/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-return-assign */
/* eslint-disable no-prototype-builtins */
/**
 * 拼接对象为请求字符串
 * @param {Object} obj - 待拼接的对象
 * @returns {string} - 拼接成的请求字符串
 */

export function encodeSearchParams(obj) {
  const params = []

  Object.keys(obj).forEach((key) => {
    let value = obj[key]
    // 如果值为undefined我们将其置空
    if (typeof value === 'undefined') {
      value = ''
    }
    // 对于需要编码的文本（比如说中文）我们要进行编码
    params.push([key, encodeURIComponent(value)].join('='))
  })

  return params.join('&')
}

/**
 * 日期格式化
 * @param {data} data - 待格式化的时间
 * @param {string} fmt - 格式化形式
 * @returns {string} - 格式化后的时间
 */
export function dateFormat(data, fmt) {
  const o = {
    'y+': data.getFullYear(),
    'M+': data.getMonth() + 1, // 月份
    'd+': data.getDate(), // 日
    'h+': data.getHours(), // 小时
    'm+': data.getMinutes(), // 分
    's+': data.getSeconds(), // 秒
    'q+': Math.floor((data.getMonth() + 3) / 3), // 季度
    'S+': data.getMilliseconds(), // 毫秒
  }
  Object.entries(o).forEach((e) => {
    const [k, v] = e
    if (new RegExp(`(${k})`).test(fmt)) {
      if (k === 'y+') {
        fmt = fmt.replace(RegExp.$1, `${v}`.substr(4 - RegExp.$1.length))
      } else if (k === 'S+') {
        let lens = RegExp.$1.length
        lens = lens === 1 ? 3 : lens
        fmt = fmt.replace(RegExp.$1, `00${v}`.substr(`${v}`.length - 1, lens))
      } else {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? v : `00${v}`.substr(`${v}`.length)
        )
      }
    }
  })
  return fmt
}

/**
 * 千分位 格式化
 * @param {number, string} num - 待格式化金额
 * @returns {string} - 格式化后的金额
 */
export function toThousands(num) {
  num = (num || 0).toString()
  let result = ''
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`
    num = num.slice(0, num.length - 3)
  }
  if (num) {
    result = num + result
  }
  return result
}

export function genRandomNums() {
  return Math.floor(Math.random() * 10000000)
}

export function deepClone(obj) {
  const objClone = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    Object.keys(obj).forEach((key) => {
      if (obj.hasOwnProperty(key)) {
        // eslint-disable-line
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key])
        } else {
          objClone[key] = obj[key]
        }
      }
    })
  }
  return objClone
}

export function isFunction(val) {
  return val && typeof val === 'function'
}

export function thousandToFormat(num, maximumFractionDigits = 2) {
  if (num === undefined || num === null || num === 'null') {
    return 0
  }
  num = Number(num)
  return num.toLocaleString('zh', {
    maximumFractionDigits,
  })
}

// 四舍五入百分比
export function toPercent(value, digits) {
  console.log('valuessss', value, typeof value)
  if (value) {
    if (value === 'null') {
      return '0%'
    }
    return Number(value).toLocaleString('zh', {
      maximumFractionDigits: digits || 2,
      style: 'percent',
    })
  }
  return '0%'
}
// 遍历json树结构
export function findJson(arr, value) {
  const returnedItem = []
  arr.forEach((item) => {
    if (item.label == value) {
      for (const i in item.children) {
        returnedItem.push(item.children[i].label)
      }
    }
  })
  return returnedItem
}

// 获取随机字符串
export function randomString() {
  const length = 10
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
export function formatRMB(num) {
  if (typeof num !== 'number') return
  num = Math.round(num)
  const len = num.toString().length
  function fn(str) {
    return (num = Number(str).toString())
  }
  if (len > 0 && len <= 4) {
    return `${num}元`
  }
  if (len <= 8) {
    return `${fn((num / 10000).toFixed(2))}万`
  }
  if (len > 8) {
    return `${fn((num / 100000000).toFixed(2))}亿`
  }
}

export const scrollToAnchor = (anchorName) => {
  if (anchorName) {
    const anchorElement = document.getElementById(anchorName)
    if (anchorElement) {
      anchorElement.scrollIntoView()
    }
  }
}
// 计算某一个元素距离页面最左边的距离
export function getOffsetLeft(obj) {
  let tmp = obj.offsetLeft
  let node = obj.offsetParent
  while (node != null) {
    tmp += node.offsetLeft
    node = node.offsetParent
  }
  return tmp
}
// 计算某一个元素距离页面最上边的距离
export function getOffsetTop(obj) {
  let tmp = obj.offsetTop
  let node = obj.offsetParent
  while (node != null) {
    tmp += node.offsetTop
    node = node.offsetParent
  }
  return tmp
}

// 判断有几位小数
export function getDecimalNum(str) {
  const decimalIndex = String(str).indexOf('.') + 1
  const count = String(str).length - decimalIndex
  if (decimalIndex > 0) {
    return count
  }
  return 0
}

export function objToArr(obj) {
  const arr = []
  for (const i in obj) {
    arr.push({
      value: parseInt(i),
      label: obj[i],
    })
  }
  return arr
}
/**
 * @description 数组简单比较，不适用 复杂[]
 * @param {*} arr1
 * @param {*} arr2
 */
export function simpleArrCompare(arr1, arr2) {
  const sortArr1 = arr1.sort()
  const sortArr2 = arr2.sort()
  return (
    sortArr1.length === sortArr2.length &&
    sortArr1.every((item, i) => {
      return item === sortArr2[i]
    })
  )
}
