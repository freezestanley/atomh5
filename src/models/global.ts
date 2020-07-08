// import * as globalService from '../services/global';
import { ModelType } from './types.d';
// import { Dispatch } from 'umi';
import {headerMenus, HeaderType} from '@/MenuContext';
export interface GlobalStateType {
  headerMenus: HeaderType[]; // 一级菜单list
  menus: HeaderType['childrens']; // 当前的二级菜单
  currentHeaderIdx: string; // 当前选中一级菜单
  currPathname: string; // 初始路由地址
  openMenus: string[]; // 要打开的菜单

}
const Model: ModelType<GlobalStateType> = {
  namespace: 'global',
  state: {
    headerMenus,
    menus: headerMenus[0].childrens,
    currentHeaderIdx: '0',
    currPathname: headerMenus[0].childrens[0].url, // 初始路由地址
    openMenus:[headerMenus[0].childrens[0].url]
  },
  reducers: {
    /**
     * @description 设置当前一级菜单
     * @param state 
     * @param currentHeaderIdx 
     */
    setCurrHeader(state, { payload: { currentHeaderIdx } }) {
      return { ...state, currentHeaderIdx }
    },
    /**
     * @description 设置对应一级菜单的二级菜单列表
     * @param state 
     */
    setMenus(state) {
      const {currentHeaderIdx, headerMenus} = state;
      const currMenus = headerMenus[currentHeaderIdx].childrens;
      return { ...state, menus: currMenus }
    },
    /**
     * @description 设置
     * @param state 
     * @param param1 
     */
    setCurrPathname(state, { payload: { currPathname } }) {
      return { ...state, currPathname }
    },
    /**
     * @description 设置打开/关闭的菜单
     * @param state 
     * @param param1 
     */
    setOpenMenus(state, {payload: {openMenus}}) {
      return { ...state, openMenus }
    }
  },
  effects: {
    // * user({ payload: { } }, { call, put }) {
    //   const { data, headers } = yield call(globalService.user, { name: '123213' })
    //   console.log(JSON.stringify(data))
    //   yield put({
    //     type: 'setUserInfo',
    //     payload: {
    //       name: data.name
    //     },
    //   })
    // },
  },
  subscriptions: {
    // 监听路由变更, 修改model 中当前路由的值,激活菜单
    listenRouter({ dispatch, history }) {
      // @ts-ignore
      history.listen(({ pathname }) => {
        if (pathname && pathname != '/login') {
          dispatch({
            type: 'setCurrPathname',
            payload: {currPathname: pathname}
          });
        }
      });
    },
  },
};
export default Model;
// 菜单设置 全局信息
// 使用方式 挂载全局