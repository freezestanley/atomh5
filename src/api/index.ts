import request from './config'
import { IS_DEV } from '@/utils/env'
const prefix = '/biz/api'

export const QueryDictItems = async (data: DICTCodeReq) =>
  request.post(`${prefix}/business/queryDictItemsByDictCode`, { data })
export const QueryDictList = async (data: DICTCodesReq) =>
  request.post(`${prefix}/business/getSysDictItemChildListByDictCodeList`, {
    data,
  })

const filePrefix = IS_DEV ? `api${prefix}` : prefix
export const uploadFileUrl = `${filePrefix}/business/uploadFileOss`
// export { Define } // 子模块导出
// export { Md2 } // 子模块导出
export default {
  QueryDictItems,
  QueryDictList,
  uploadFileUrl,
}
