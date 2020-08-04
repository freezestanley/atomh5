/**
 * @description 通用表单生成器
 * 根据配置项的 code 组装成字典 code，发送给后端
 * 获取 global.dictList 中的值生成对应的表单项
 * 表单 change 时，吐出配置项对应的值,是一个全量的对象
 */
import React, {
  memo,
  useState,
  useEffect,
  Fragment,
  FunctionComponent,
  ReactText,
  forwardRef,
} from 'react'
import { useMount, useDebounceFn } from 'ahooks'
import { Form, Input, Select, DatePicker, Checkbox } from 'antd'
import { RealFormConfigType, RealConfigType, DictFormType } from './interface'
import { Store } from 'rc-field-form/lib/interface'
import useGlobalDict from '@/hooks/useGlobalDict'
import useAntdDate from '@/hooks/useAntdDate'
import { FormInstance } from 'antd/lib/form'
import style from './index.less'
import { cloneDeep, isObject } from 'lodash'
const { Option } = Select
const { Item } = Form
const { TextArea } = Input
const { Group } = Checkbox
interface PropTypes {
  initVal?: any
  config: RealFormConfigType
  onChange?: (changedValues: Store, values: any) => void
}
interface DependItemTypes {
  [propsName: string]: {
    key: string //原依赖项
    value: any
    list: DictFormType['list']
  }
}
const DictForm = forwardRef<FormInstance, PropTypes>(
  (props: PropTypes, ref) => {
    const [form] = Form.useForm()
    const { dictList, getDictList } = useGlobalDict()
    const { format, Moment } = useAntdDate()
    const [dependKey, setDependKey] = useState<DependItemTypes>({}) // 联动表单依赖的值
    const { run: onValueChange } = useDebounceFn(valueChange, {
      wait: 200,
    })
    const formItemMap = {
      // 组件映射关系
      select: {
        parent: Select,
        child: Option,
      },
      input: {
        parent: Input,
        child: null,
      },
      date: {
        parent: DatePicker,
        child: null,
      },
      textarea: {
        parent: TextArea,
        child: null,
      },
      checkboxGroup: {
        parent: Group,
        child: null,
      },
    }
    const configKey = props.config ? Object.keys(props.config) : []
    const initValues = getInitVal()
    useMount(() => {
      initDenpendKey()
    })
    useEffect(() => {
      init()
    }, [props.config])
    useEffect(() => {
      initDenpendKey()
    }, [dictList])
    /**
     * @description 初始化当前表单
     */
    function init() {
      initDictData()
    }
    /**
     * @description  初始化表单的值
     * *如果props传了，以props为准
     */
    function getInitVal() {
      const initVals: any = {}
      configKey.map(keys => {
        const { type } = props.config[keys]
        let value = props.config[keys].value
        if (value !== undefined) {
          initVals[keys] = type === 'date' ? Moment(value) : value
        }
      })
      return props.initVal || initVals
    }
    /**
     * 初始化时如果已经有对应值了, 初始化依赖中的list
     * 用于初始化时, 默认值在依赖中存在, 要找到对应的子list
     */
    function initDependList(depItem: DependItemTypes) {
      const obj = {} // 找到改变了的值
      configKey.forEach(key => {
        const { value, depend } = props.config[key]
        // 将有依赖且被依赖的值存储
        if (value !== undefined && depend) {
          // !这两行代码顺序万不可换, 依赖项需要最先映射list
          obj[depend] = props.config[depend].value
          obj[key] = value
        }
      })
      updateDenpendData(obj, depItem)
    }
    function initDictData() {
      const dictKeys = getDictKeys()
      if (dictKeys.length === 0) return
      getDictList(dictKeys)
    }
    /**
     * @description 获取配置项的keys
     */
    function getDictKeys() {
      if (!props.config) return []
      return configKey
        .filter(item => {
          return Boolean(props.config[item].code)
        })
        .map(item => {
          return props.config[item].code
        })
    }
    /**
     * @description 初始化配置依赖的list
     * 每次字典表更新, 都会重新生成
     * * 此处只考虑单依赖的情况, 未发现有多依赖的表单需求
     */
    function initDenpendKey() {
      const dependMap: DependItemTypes = {}
      configKey.forEach(key => {
        const { depend } = props.config[key]
        if (!depend) return
        dependMap[depend] = {
          key,
          value: null,
          list: [],
        }
      })
      initDependList(dependMap)
      setDependKey(dependMap)
    }
    /**
     * @description 创建表单Item骨架
     * 如配置项中有list
     */
    function createSkeleton() {
      const keys = configKey
      if (!props.config && keys.length === 0) return
      return keys.map((key, i) => {
        const item = props.config[key]
        const { rules, type } = item
        const formItem: any = formItemMap[type]
        const componentProps = createComponentProps(item, key, formItem.child)
        return (
          <Item
            key={i}
            label={item.label}
            name={key}
            rules={rules}
            // wrapperCol={{ span: 12 }}
            labelAlign="left"
            // style={{ width: '500px' }}
            // labelCol={{ span: 8 }}
          >
            {React.createElement(formItem.parent, componentProps)}
          </Item>
        )
      })
    }
    function createComponentProps(
      item: RealConfigType,
      key: string,
      child?: any
    ) {
      const { placeholder, label, type, depend, props = {} } = item
      const formItem: any = formItemMap[type]
      const defaultPlaceholderPrefix = type === 'input' ? `请输入` : '请选择'
      let disabled = item.disabled
      if (item.disabled === undefined) {
        disabled = Boolean(depend && dependKey[depend]?.value === null)
      }
      return {
        ...props,
        format,
        placeholder: placeholder
          ? placeholder
          : `${defaultPlaceholderPrefix}${label}`,
        disabled,
        children:
          formItem.child &&
          renderFormItemChild(
            {
              ...item,
              key,
            },
            child
          ),
      }
    }
    /**
     * @description 渲染下拉框等复合型表单的子组件
     * 如果有 code 表示去拿 global 中缓存的字典信息
     * 无 code，获取 list 渲染
     * 无 code 无 list 不渲染
     * 不关心子组件是什么, 根据 child 参数渲染
     * @param item
     * @param child
     */
    function renderFormItemChild(
      item: RealConfigType,
      child: FunctionComponent<{ value: ReactText; children: ReactText }>
    ) {
      const { code, list, depend } = item

      let data = list
      if (depend && dependKey[depend]) {
        const { value: depValue } = dependKey[depend]
        const depList = dependKey[depend].list || []
        const dependChildList =
          depList?.find(val => val.code === depValue)?.list || []
        data = depValue ? dependChildList : []
      }
      if (code && dictList[code]) {
        // @ts-ignore
        data = dictList[code]
      }
      return (
        Array.isArray(data) &&
        data.map((v: any, idx: number) => {
          return React.createElement(child, {
            key: idx,
            value: v.code,
            children: v.name,
          })
        })
      )
    }
    /**
     * @description 外吐表单数据
     * 设置依赖项的值
     * @param changedValues
     * @param values
     */
    function valueChange(changedValues: Store, values: any) {
      updateDenpendData(changedValues)
      resetDenpend(changedValues)
      props.onChange && props.onChange(changedValues, values)
    }
    /**
     * @description 更新依赖项的值。
     * 所有依赖自己的节点都更新当前list
     * 根据changedVal改变的值，更新depData的映射(一级依赖的list在字典表, 二级的找映射中对应的list)
     *
     * @param values
     */
    function updateDenpendData(
      changedValues: Store,
      depItem?: DependItemTypes
    ) {
      const depData = depItem || cloneDeep(dependKey)
      Object.keys(changedValues).forEach(cKey => {
        const value = changedValues[cKey]
        const depItem = depData[cKey]
        if (!depItem) return
        const { code, depend } = props.config[cKey]
        depItem.value = value
        if (code) {
          // 当前配置项有code, 从字典表中获取对应的list
          // @ts-ignore
          depItem.list = dictList[code]
        }
        if (depend) {
          // 当前配置项有depend, 从depKeys中获取对应的list
          depItem.list = findChildListByParentCode(
            depData[depend].value,
            depData[depend].list
          )
        }
        if (depItem.key in depItem) {
          // 如依赖项也是他人依赖, 继续依据此时冒泡的值绑定下级所需list
          const dependChildList = findChildListByParentCode(value, depItem.list)
          // @ts-ignore
          depData[depItem.key].list = dependChildList
        }
        depData[cKey] = depItem
      })
      setDependKey(depData)
    }
    /**
     * @description 根据表单changedValues冒泡的key，发生改变, 重置当前表单值
     * 对冒泡值有依赖的项全部重置
     * 递归清除依赖的值
     */
    function resetDenpend(changedValues: Store) {
      if (isObject(dependKey) && Object.keys(dependKey).length > 0) {
        Object.keys(changedValues).forEach(cKey => {
          const needResetKeys = findDependKeysByConfig(cKey)
          let resetFormItems = {}
          needResetKeys.forEach(resetKey => {
            resetFormItems[resetKey] = null
          })
          form.setFieldsValue(resetFormItems)
        })
      }
    }
    /**
     * @description 通过改变的key，找到与其相关的所有依赖节点
     * 会进行递归, a -> b -> c, 那么a改变会重置bc
     * @param changeKey
     * @param deep 默认深度查询
     */
    function findDependKeysByConfig(
      changeKey: string,
      deep: boolean = true
    ): string[] {
      const deepDependKeys: string[] = configKey.filter(key => {
        const configItem = props.config[key]
        return configItem?.depend === changeKey
      })
      deep &&
        deepDependKeys.forEach((dKeys: string) => {
          deepDependKeys.push(...findDependKeysByConfig(dKeys))
        })
      return Array.from(new Set([...deepDependKeys]))
    }
    function findChildListByParentCode(
      pCode: string,
      pList: DictFormType['list']
    ) {
      if (Array.isArray(pList)) {
        return pList.find(val => val.code === pCode)?.list || []
      }
      return []
    }
    return (
      <Fragment>
        <Form
          initialValues={initValues}
          ref={ref}
          // labelCol={{ span: 4 }}
          // wrapperCol={{ span: 12 }}
          // size="large"
          className={style['dict-form']}
          form={form}
          layout="inline"
          onValuesChange={onValueChange}
        >
          {createSkeleton()}
        </Form>
      </Fragment>
    )
  }
)
export default memo(DictForm)
