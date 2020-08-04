/**
 * @description 描述页面信息组件
 */
import React, { memo } from 'react'
import { Descriptions } from 'antd'
import { DescriptionsProps } from 'antd/es/descriptions'
import { hasObject } from '@/utils/tool'
interface PropTypes {
  descProps?: DescriptionsProps
  data: any
  labels: string[]
}
function AntdDescriptions(props: PropTypes) {
  function renderItem() {
    if (!hasObject(props.data)) return null
    return Object.keys(props.data).map((key, idx) => {
      const label = props.labels[idx]
      return (
        <Descriptions.Item label={label}>{props.data[key]}</Descriptions.Item>
      )
    })
  }
  return <Descriptions {...props.descProps}>{renderItem()}</Descriptions>
}
export default memo(AntdDescriptions)
