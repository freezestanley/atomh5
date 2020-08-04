/**
 * 面包屑
 */
import React, { memo } from 'react'
interface PropTypes {
  param: any
  split: string
}
function Breadcrumb(props: PropTypes) {
  debugger
  const { meta, path } = props.param
  return <div></div>
}
export default memo(Breadcrumb)
