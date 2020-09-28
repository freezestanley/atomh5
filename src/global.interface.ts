/**
 * antd-table column interface
 * 使用方式:
 * const columnItem:TableColumnType = {}
 * or
 * const columns:TableColumnType[] = []
 */
declare interface TableColumnType {
  title: string
  dataIndex: string
  fixed?: boolean | string
  width?: number
  align?: 'center' | 'left' | 'right'
  key?: string
  defaultSortOrder?: any
  sorter?: any
  sortOrder?: any
  render?: (text: any, record: any, index: number) => React.ReactNode
}
/**
 * 公共响应方式
 */
declare interface ResType<T = null> {
  success: boolean
  code: string
  value: T
  message: string
  pageNum?: number | null
  pageSize?: number | null
  additionalInfo?: {
    count: number
    // 接口额外返回的参数, 依据具体接口而定
    [propName: string]: any
  }
}
/**
 * @description 分页类型
 */
interface PageType<T> {
  success: boolean
  total: number // 总数
  data: T[]
}
