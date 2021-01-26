/**
 * @description 描述
 */
import React, { FC, useState, useEffect } from 'react'
import { history } from 'umi'
import CommonMask, { ItemTypes } from '../commonMask'
import styles from './styles/index.less'
const logo = require('./images/atom8_logo_s.png')
interface PropTypes {}
const menu: ItemTypes[] = [
  { label: 'HOME', value: '/home' },
  { label: 'PROJECTS', value: '/sto' },
  { label: 'HOW IT WORKS', value: '/howitwork' },
  { label: 'WHO WE ARE', value: '/whoweare' },
  { label: 'GET IT TOUCH', value: '/get' },
]
const langList: ItemTypes[] = [
  { label: 'ENGLISH', value: 'EN', type: 'lang' },
  { label: '简体中文', value: 'ZH', type: 'lang' },
  { label: '繁體中文', value: 'zh_TW', type: 'lang' },
]
const Header: FC<PropTypes> = function (props) {
  const [list, setList] = useState<ItemTypes[]>([]),
    [visible, setVisible] = useState(false),
    [lang, setLang] = useState('EN')
  function onBurgerClick() {
    setList(menu)
    setVisible(true)
  }
  function onLangClick() {
    setList(langList)
    setVisible(true)
  }
  function onMaskClick(item: ItemTypes) {
    if (item.type === 'lang') {
      setLang(item.value)
    } else {
      history.push(item.value)
    }
    setVisible(false)
  }
  return (
    <div className={styles['header']}>
      <div className={styles['hamburger']} onClick={onBurgerClick}>
        <i />
        <i />
        <i />
      </div>
      <div className={styles['logo']}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles['i18n']}>
        <div className={styles['icon']}></div>
        <div className={styles['lang']} onClick={onLangClick}>
          {lang}
        </div>
        <div className={styles['arrow-down']}></div>
      </div>
      <CommonMask visible={visible} list={list} onClick={onMaskClick} />
    </div>
  )
}

export default Header
