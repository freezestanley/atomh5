import * as globalService from '../services/global';
import { func } from 'prop-types';

export default {
  namespace: 'global',
  state: {
    name: 'wike',
    menus:[],
    userInfo:{
      nickName:'hancongcong'
    },
    env:'dev',
    menusHandle:''
  },
  reducers: {
    setUserInfo(state, {payload: {name}}) {
      return {...state, name}
    },
    setMenus(state,{payload: {menus}}){
      return {...state,menus}
    },
    setMenusHandle(state,{payload:{handle}}){
      return {...state,menusHandle:handle}
    }
  },
  effects: {
    * user ({payload: {}}, {call, put}) {
      const {data, headers} = yield call(globalService.user, {name: '123213'})
      console.log(JSON.stringify(data))
      yield put({
        type: 'setUserInfo',
        payload: {
          name: data.name
        },
      })
    },
    *menusHandle({payload:{
      handle
    }},{call,put}){
      yield put({
        type: 'setMenusHandle',
        payload: {
          handle
        },
      })
    }
  }
}
// 菜单设置 全局信息
// 使用方式 挂载全局