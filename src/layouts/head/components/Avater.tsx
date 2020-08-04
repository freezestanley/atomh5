import React from 'react'
import { Layout, Menu } from 'antd'
import { HeaderType } from '@/MenuContext'
import { GlobalStateType } from '@/models/global'
import avater from '@/assets/avater.jpg'
import style from '../head.less'

export default () => {
  return (
    <b
      className={style.avater}
      style={{ backgroundImage: `url(${avater})` }}
    ></b>
  )
}
