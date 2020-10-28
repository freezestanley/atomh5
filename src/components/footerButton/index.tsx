import React, { useState, useEffect } from 'react'
import { Button, Cell, NavBar, Icon } from 'zarm'
import styles from './index.less'

interface PropType {
  className?: string
  text?: string
  onClick: () => void
  isBottom?: boolean
  children?: React.ReactChild
}

const FooterButton = (
  {
    className = '',
    text = '',
    onClick,
    isBottom = true,
    children,
  }: PropType = {
    onClick: null,
    isBottom: true,
  }
) => {
  return (
    <div
      className={
        styles['footer'] +
        ' ' +
        className +
        ' ' +
        styles[`${isBottom ? 'bottom' : ''}`]
      }
    >
      {children}
      <Button block className={styles['footer-btn']} onClick={onClick}>
        {text || '提交'}
      </Button>
    </div>
  )
}

export default FooterButton
