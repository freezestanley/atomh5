import React, { useState, useEffect } from 'react'
import { Button, Cell, NavBar, Icon } from 'zarm'
import styles from './index.less'

interface PropType {
  className?: string
  title?: string
}

const handleBack = () => window.history.back()

const HeaderNav = ({ className = '', title = '' }: PropType) => {
  return (
    <div className={styles['navbar'] + ' ' + className}>
      <NavBar
        left={
          <Icon
            className={styles['navbar-icon']}
            type="arrow-left"
            theme="primary"
            onClick={handleBack}
          />
        }
        title={title}
      />
    </div>
  )
}

export default HeaderNav
