/**
 * @description 描述
 */
import React, { FC } from 'react'
import styles from './styles/index.less'
export interface ItemTypes {
  label: string
  value: string
  [propsName: string]: any
}
interface PropTypes {
  visible: boolean
  list: ItemTypes[]
  onClick?: (item: ItemTypes) => void
}
const CommonMask: FC<PropTypes> = function ({ visible, list = [], onClick }) {
  function renderList() {
    return list.map((item, idx) => {
      return (
        <li key={idx} onClick={() => onLiClick(item)}>
          {item.label}
        </li>
      )
    })
  }
  function onLiClick(item: ItemTypes) {
    onClick && onClick(item)
  }
  return (
    <>
      {visible && (
        <div className={styles['mask']}>
          <ul>{renderList()}</ul>
        </div>
      )}
    </>
  )
}

export default CommonMask
