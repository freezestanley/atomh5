import { Effect, ImmerReducer } from 'umi'
export interface StateType {
  status?: 'ok' | 'error'
  type?: string
  name: string
}
import { ModelType } from '@/models/types'
const Model: ModelType<StateType> = {
  namespace: 'login',
  state: {
    name: 'wike',
  },
  reducers: {
    setUserInfo(state, { payload: { name } }) {
      return { ...state, name }
    },
  },
  effects: {
    *login({ payload: {} }, { call, put }) {},
  },
}

export default Model
