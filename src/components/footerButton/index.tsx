import React, { useState, useEffect } from 'react'
import { Button, Cell, NavBar, Icon } from 'zarm'
import styles from './index.less'

interface PropType {
  // 自定义的className
  className?: string
  // 按钮要显示的文本
  text?: string
  // 点击按钮后的回调函数
  onClick: () => void
  // 是否置底、吸底，默认吸底
  isBottom?: boolean
  // 自定义要显示的按钮
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
      <Button
        block
        theme="default"
        className={styles['footer-btn']}
        onClick={onClick}
      >
        {text || '提交'}
      </Button>
    </div>
  )
}

export default FooterButton
