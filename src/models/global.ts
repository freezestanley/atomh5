import * as globalService from '../services/global';
import {ModelType} from './types.d';
// import { func } from 'prop-types';
interface StateType {
  name: string;
  menus:any[];
  userInfo:{
    nickName:string
  },
  env: 'dev',
  menusHandle: string
}
const Model : ModelType<StateType> = {
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
};
export default Model;
// 菜单设置 全局信息
// 使用方式 挂载全局