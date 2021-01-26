/**
 * @description 描述
 */
import React, { FC } from 'react'
import styles from './styles/index.less'
interface PropTypes {}
const Header: FC<PropTypes> = function (props) {
  return (
    <div className={styles['header']}>
      <div className={styles['hamburger']}></div>
      <div className={styles['logo']}></div>
      <div className={styles['i18n']}></div>
    </div>
  )
}

export default Header
