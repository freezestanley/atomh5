// import * as globalService from '../services/global';
import { ModelType, DictList, DictItem } from './types.d'
import { history } from 'umi'
import { message } from 'antd'
import { merge } from 'lodash'
import { simpleArrCompare } from '@/utils/util.js'
import { arrCompare } from '@/utils/tool'
import {
  headerMenus,
  HeaderType,
  dropMenu1,
  DropMenuItemType,
} from '@/MenuContext'
import { QueryDictList } from '@/api'
import store from '@/utils/store'
export interface GlobalStateType {
  // * 路由菜单相关 start
  dropMenu1: DropMenuItemType[]
  headerMenus: HeaderType[] // 一级菜单list
  menus: HeaderType['childrens'] // 当前的二级菜单
  currentHeaderIdx: string // 当前选中一级菜单
  currPathname: string // 初始路由地址
  openMenus: string[] // 要打开的菜单
  // * 路由菜单相关 end
  dictList: DictList // 全局大字典表
}
const Model: ModelType<GlobalStateType> = {
  namespace: 'global',
  state: {
    dropMenu1,
    headerMenus,
    menus: headerMenus[0].childrens,
    currentHeaderIdx: '0',
    currPathname: headerMenus[0].childrens[0].url,
    openMenus: [headerMenus[0].childrens[0].url],
    dictList: {},
  },
  reducers: {
    /**
     * @description 设置当前一级菜单
     * @param state
     * @param currentHeaderIdx
     */
    setCurrHeader(state, { payload: { currentHeaderIdx } }) {
      state.currentHeaderIdx = currentHeaderIdx
    },
    /**
     * @description 设置对应一级菜单的二级菜单列表
     * @param state
     */
    setMenus(state) {
      const { currentHeaderIdx, headerMenus } = state
      const currMenus = headerMenus[currentHeaderIdx].childrens
      state.menus = currMenus
    },
    /**
     * @description 设置
     * @param state
     * @param param1
     */
    setCurrPathname(state, { payload: { currPathname } }) {
      state.currPathname = currPathname
    },
    /**
     * @description 设置打开/关闭的菜单
     * @param state
     * @param param1
     */
    setOpenMenus(state, { payload: { openMenus } }) {
      state.openMenus = openMenus
    },
    /**
     * @description 一级菜单点击
     * 修改对应的二级菜单
     * 当前的一级菜单角标
     * 打开菜单的 index[]
     */
    onHeaderClick(state, { payload: { currentHeaderIdx } }) {
      const { headerMenus } = state
      state.currentHeaderIdx = currentHeaderIdx
      state.menus = headerMenus[currentHeaderIdx].childrens
      if (
        Array.isArray(state.menus[0].childrens) &&
        state.menus[0].childrens.length > 0
      ) {
        // 如果带有 3 级菜单，要打开2级，选中第一个3级
        state.openMenus = [state.menus[0].url]
        history.push(state.menus[0].childrens[0].url)
      } else {
        history.push(state.menus[0].url)
      }
    },
    /**
     * @description 设置全局字典表
     * 修改对应的二级菜单
     * 当前的一级菜单角标
     * 打开菜单的 index[]
     */
    setDictList(state, { payload: { dictList } }) {
      if (dictList && Object.keys(dictList).length) {
        // dictList 与原来的字典表浅合并
        const newDict = merge(state.dictList, dictList)
        state.dictList = newDict
      }
    },
  },
  effects: {
    *getDictList({ payload: { list }, callback }, { call, put, select }) {
      // 调用之前判断一下，原来的大字典表是否已将当前所传字段缓存
      const { dictList } = yield select(
        (store: { global: any }) => store.global
      )
      const dictKeys = Object.keys(dictList)
      if (list.length === 0) return
      const compare = arrCompare(dictKeys, list)
      if (!compare.status) {
        if (callback && typeof callback === 'function') callback(dictList)

        return
      } // 与原来一致，不调接口
      const { success, message: msg, value } = yield call(QueryDictList, {
        idList: compare.arr, // 只传多的字段
      })
      if (success) {
        const newDictList: { [propsName: string]: DictItem[] } = {}
        value.forEach((item: DictItem[], idx: number) => {
          if (Array.isArray(compare.arr)) {
            newDictList[compare.arr[idx]] = item
          }
        })
        yield put({
          type: 'setDictList',
          payload: {
            dictList: newDictList,
          },
        })
        if (callback && typeof callback === 'function') {
          callback(newDictList)
        }
      } else {
        yield message.error(msg)
      }
    },
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
            payload: { currPathname: pathname },
          })
        }
      })
    },
  },
}
export default Model
// 菜单设置 全局信息
// 使用方式 挂载全局
