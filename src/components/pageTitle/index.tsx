import React, { memo } from 'react'
import style from './index.less'
interface PropTypes {
  title: string
  children?: React.ReactChild
}
function PageTitle(props: PropTypes) {
  return (
    <div className={style['page-title']}>
      <div className={style['title']}>{props.title}</div>
      <div>{props.children}</div>
    </div>
  )
}
export default memo(PageTitle)
