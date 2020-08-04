/**
 * @description 获取全局字典表的信息
 */
import { useSelector, useDispatch, history } from 'umi'
import { GlobalStateType } from '@/models/global'
import { Select } from 'antd'
import { DictItem } from '@/models/types'
import { findDict } from '@/models/utils'
import { useState, createElement } from 'react'
const { Option } = Select
interface StateTypes {
  global: GlobalStateType
}
interface DefineOptionsType {
  code: string | number
  name: string | number
}
export default function useGlobalDict() {
  const { dictList } = useSelector((state: StateTypes) => state.global)
  const dispatch = useDispatch()
  /**
   * @description 获取字典表数据
   * @param list
   */
  function getDictList(list: (string | undefined)[], callBack?: Function) {
    if (list.length > 0) {
      dispatch({
        type: 'global/getDictList',
        payload: {
          list,
        },
        callback: callBack,
      })
    }
  }
  /**
   * @description 创建字典表下拉框
   * @param dict
   */
  function createDictSelect(
    dictCode: string | null,
    props: any = {},
    lists: DefineOptionsType[] = []
  ) {
    let optionData: DefineOptionsType[] = []
    if (Array.isArray(lists) && lists.length > 0) {
      optionData = lists
    } else {
      optionData = (dictCode && dictList[dictCode]) || []
    }
    if (optionData.length === 0) return createElement(Select)
    const options = optionData.map((item: DictItem, key: number) => {
      return createElement(Option, {
        key,
        children: item.name,
        value: item.code,
      })
    })
    return createElement(Select, {
      children: options,
      ...props,
    })
  }
  return { dictList, getDictList, createDictSelect, findDict }
}
