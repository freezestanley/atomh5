import { Effect, ImmerReducer, SubscriptionAPI } from 'umi'
export interface ModelType<T> {
  namespace: string
  state?: T
  effects?: {
    [propsName: string]: Effect
  }
  reducers?: {
    [propsName: string]: ImmerReducer<T>
  }
  subscriptions?: {
    [propsName: string]: (params: SubscriptionAPI) => void
  }
}
export interface DictItem {
  id?: number
  code: string | number // 提交给后端的标识
  name: string | number
  parentId?: number
  list?: DictItem[]
}
export interface DictList {
  [propsName: string]: DictItem[]
}
