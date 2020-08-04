/**
 * @description 配置表单项
 * 通过model数据交互下拉框数据
 * propsName 要提交出去的 key
 * propsName.type 表单类型
 * propsName.list select 等有子级表单的值。如果配置的时候手动指定，则不会获取接口中给的值
 * propsName.code 所需要的字典表数据, 输入框之类的不需要
 * propsName.label 表单 label 名称
 * propsName.parentCode 所需要的父级字典表code下的 list, 会通过父级的 code 去拿二级list
 * propsName.value 表单 change 后挂载的值,如 {propsName: val}, 初始定义了为下拉框默认值
 * propsName.depend 依赖哪个节点的的值。
 * propsName.props 组件的额外参数, 不同组件特殊的配置, 比如DatePicker的showtime等
 * 会根据依赖项进行联动:
 * 1. 依赖项值改变，重置自身的child,清空自身选中的值
 * 2. 默认取上级的list节点
 */
import { DictItem } from '@/models/types'
import { Rule } from 'rc-field-form/es/Field.d'
export interface DictFormConfig {
  [propsName: string]: DictFormType
}
export interface RealFormConfigType {
  [propsName: string]: RealConfigType
}
export interface DictFormType {
  type: 'select' | 'input' | 'date' | 'textarea' | 'checkboxGroup'
  code?: string
  label: string
  list?: DictItem[]
  value?: any
  // parentCode?: string
  depend?: string
  rules?: Rule[]
  placeholder?: string
  disabled?: boolean
  props?: any
}
export interface RealConfigType extends DictFormType {
  key: string
  // parentKey?: string
}
