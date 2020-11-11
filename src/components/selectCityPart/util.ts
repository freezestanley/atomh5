import Cookies from "js-cookie"

const host = window.location.hostname

/**
 * 查询Cookie
 * @param key 关键字
 */
export function getCookie(key) {
  return Cookies.get(key)
}

/**
 * 写入Cookie
 * @param key 关键字
 * @param val 值
 * @param domain 域名,不填取默认当前host
 */
export function setCookie(key, val, domain = host) {
  const config = { path: '', domain }
  return Cookies.set(key, val, config)
}

/**
 * 移除Cookie
 * @param key 关键字
 * @param domain 域名,不填取默认当前host
 */
export function removeCookie(key, domain = host) {
  const config = { path: '', domain }
  return Cookies.remove(key, config)
}

export function clearAllCookie() {
  const keys = document.cookie.match(/[^ =;]+(?==)/g)
  if (keys) {
    for (let i = keys.length; i--; ) {
      document.cookie = `${keys[i]}=0;path=/;expires=${new Date(
        0
      ).toUTCString()}` // 清除当前域名下的,例如：m.ratingdog.cn
      document.cookie = `${keys[i]}=0;path=/;domain=${
        document.domain
      };expires=${new Date(0).toUTCString()}` // 清除当前域名下的，例如 .m.ratingdog.cn
      document.cookie = `${
        keys[i]
      }=0;path=/;domain=ratingdog.cn;expires=${new Date(0).toUTCString()}` // 清除一级域名下的或指定的，例如 .ratingdog.cn
    }
  }
}

/**
 * 获取
 * @param key 关键字
 */
export function getLocalStorage(key) {
  return localStorage.getItem(`${key}`)
}

/**
 * 写入LocalStorage
 * @param key 关键字
 */
export function setLocalStorage(key, val) {
  let data = val
  if (typeof val === 'object') {
    data = JSON.stringify(val)
  }
  return localStorage.setItem(`${key}`, data)
}

/**
 * 移除
 * @param key 关键字
 */
export function removeLocalStorage(key) {
  return localStorage.removeItem(`${key}`)
}

/**
 * 清空所有
 * @param key 关键字
 */
export function clearAllLocalStorage() {
  return localStorage.clear()
}

/**
 * 获取GetSessonStorage
 * @param key 关键字
 */
export function getSessonStorage(key) {
  return sessionStorage.getItem(`${key}`)
}

/**
 * 写入SetSessonStorage
 * @param key 关键字
 * @param val 值
 */
export function setSessonStorage(key, val) {
  return sessionStorage.setItem(`${key}`, val)
}

/**
 * 写入SetSessonStorage
 * @param key 关键字
 * @param val 值
 */
export function removeSessonStorage(key) {
  return sessionStorage.removeItem(`${key}`)
}

/**
 * 清空
 * @param key 关键字
 * @param val 值
 */
export function clearAllSessonStorage() {
  return sessionStorage.clear()
}
