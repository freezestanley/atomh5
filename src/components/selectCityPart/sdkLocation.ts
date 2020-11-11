
import request from '@/api/config'
import { getLocalStorage, setCookie, setLocalStorage, setSessonStorage } from './util'
import { IS_DEV } from '@/utils/env'
declare const window: Window & { jsonCallBack: any }
const commonApiUrl = {
  getDefaultAddr: '/trade/addressContract/getDefaultAddress',
}
export const commonApi = {
  prefixStr: IS_DEV ? '' : `/gw/app`,
  /**
   * 获取用户定位信息
   * @param {*} mapKey 腾讯地图key
   */
  getUserLoactionNow: (mapKey: any = 'OE2BZ-6FWRQ-LFQ56-GOGXT-CKES2-OEBS2') =>
    new Promise(function (resolve, reject) {
      window.jsonCallBack = result => {
        resolve(result)
      }
      var JSONP = document.createElement('script')
      JSONP.type = 'text/javascript'
      JSONP.src = `//apis.map.qq.com/ws/location/v1/ip?key=${mapKey}&output=jsonp&callback=jsonCallBack`
      JSONP.onerror = reject
      document.getElementsByTagName('head')[0].appendChild(JSONP)
      setTimeout(() => {
        document.getElementsByTagName('head')[0].removeChild(JSONP)
      }, 500)
    }),
  /**
   * 初始化用户位置数据
   * @param {*} isInitAddress  true:根据定位信息初始化;false:根据urlCity初始化
   */
  initUserLoaction: (isInitAddress = true, urlCity = '') =>
    new Promise(function (resolve, reject) {
      let msg: any = {
        code: -1,
        ApiError: '',
        msg: '',
        data: {
          provinceId: 9,
          provinceName: '上海市',
          cityName: '上海',
          cityId: 145,
          regionId: 1222,
          regionName: '黄浦区',
          streetId: 16777,
          streetName: '南京东路街道',
        },
      }
      if (
        !isInitAddress &&
        (urlCity === null || urlCity === '' || urlCity === undefined)
      ) {
        msg.code = -1
        msg.msg = '参数:isInitAddress为false时,urlCity不能为空!'
        reject(msg)
        return
      }
      const systemLoaction = getLocalStorage('systemLoaction')
      if (systemLoaction) {
        getAddressSystemCode(
          JSON.parse(systemLoaction).location,
          urlCity,
          isInitAddress,
          reject,
          resolve
        )
        return
      }
      commonApi.getUserLoactionNow().then((data: any) => {
        if (data.status === 0) {
          setLocalStorage('systemLoaction', JSON.stringify(data.result))
          getAddressSystemCode(
            data.result.location,
            urlCity,
            isInitAddress,
            reject,
            resolve
          )
        } else {
          setCookie('address', msg.data)
          msg.code = data.status
          msg.ApiError = data.message
          msg.msg = '获取定位失败!'
          reject(msg)
        }
      })
    }),

  getDefaultAddress: param => {
    return request
      .post(commonApi.prefixStr + commonApiUrl.getDefaultAddr, { data: param })
      .then((res: any) => {
        console.log(res)
        if (res.Data && res.Status == '0') {
          return res.Data
        } else {
          return res
        }
      })
  },
}
/**
 * 获取我们系统中对应地址信息
 */
function getAddressSystemCode(
  location,
  urlCity,
  isInitAddress,
  reject,
  resolve
) {
  let msg: any = {
    code: -1,
    ApiError: '',
    msg: '',
    data: null,
  }
  const defaultAddress = {
    provinceId: 9,
    provinceName: '上海市',
    cityName: '上海',
    cityId: 145,
    regionId: 1222,
    regionName: '黄浦区',
    streetId: 16777,
    streetName: '南京东路街道',
  }
  const lcal: any = location
  const postUrl = isInitAddress
    ? '/trade/cityContract/getCityLocation'
    : '/trade/addressContract/getDefaultAddress'
  const params = isInitAddress
    ? {
      longitude: lcal.lng,
      latitude: lcal.lat,
    }
    : { id: urlCity }
  request.post(commonApi.prefixStr + postUrl, { data: params }).then((res: any) => {
    try {
      if (!res.Data && !res.body) {
        msg.code = res?.code
        msg.ApiError = res?.msg
        msg.data = defaultAddress
        msg.msg = '地址解析失败!'
        reject(msg)
        return
      }
      const addressInfo: any = getAddressReturn(res, isInitAddress)
      // 兼容老逻辑
      setCookie('city', addressInfo.cityId)
      setCookie('address', addressInfo)
      const city = `${addressInfo.id},${addressInfo.name}`
      setSessonStorage('city', city)
      msg.code = 200
      msg.msg = '初始化成功'
      msg.data = addressInfo
      resolve(msg)
    } catch (e) {
      setCookie('address', defaultAddress)
      console.log(e)
      msg.code = -1
      msg.data = defaultAddress
      msg.ApiError = e.msg
      msg.msg = '解析地址发生异常!'
      reject(msg)
    }
  })
}
/**
 *
 * @param {*} body 转换内容
 * @param {*} isLocation 是否是经纬度定位,true:经纬度定位,false: cityid定位
 */
export function getAddressReturn(res, isLocation) {
  const body = res.Data ?? res.body
  let data = {}
  if (isLocation) {
    data = body ? body : {}
  } else {
    data = {
      provinceId: body.district && body.district.id,
      provinceName: body.district && body.district.name,
      cityName: body.city && body.city.name,
      cityId: body.city && body.city.id,
      regionId: body.region && body.region.id,
      regionName: body.region && body.region.name,
      streetId: body.streets && body.streets.length && body.streets[0].id,
      streetName: body.streets && body.streets.length && body.streets[0].name,
    }
  }
  return data
}
