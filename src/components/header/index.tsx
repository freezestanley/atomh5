/**
 * @description 描述
 */
import React, { FC, useState, useEffect } from 'react'
import { history, setLocale, getLocale, useIntl } from 'umi'
import CommonMask, { ItemTypes } from '../commonMask'
import ContactOurModal from '@/components/contactOurModal'
import styles from './styles/index.less'
const logo = require('./images/atom8_logo_s.png')
const menuIcon = require('./images/menu.png')
const icons = [require('./images/language.png'), require('./images/arrow.png')]
interface PropTypes {}

const langList: ItemTypes[] = [
  { label: 'ENGLISH', subLabel: 'EN', value: 'en-US', type: 'lang' },
  // { label: '简体中文', subLabel: '简', value: 'zh-CN', type: 'lang' },
  { label: '繁體中文', subLabel: '繁', value: 'zh-TW', type: 'lang' },
]
const Header: FC<PropTypes> = function (props) {
  const i18n = useIntl()
  const menu: ItemTypes[] = [
    { label: i18n.formatMessage({ id: 'footer_home' }), value: '/home' },
    { label: i18n.formatMessage({ id: 'footer_stoprojects' }), value: '/sto' },
    {
      label: i18n.formatMessage({ id: 'footer_howitworks' }),
      value: '/howitwork',
    },
    {
      label: i18n.formatMessage({ id: 'footer_whoweare' }),
      value: '/whoweare',
    },
    {
      label: i18n.formatMessage({ id: 'header_get_in_touch' }),
      value: '/getittouch',
    },
  ]

  const [list, setList] = useState<ItemTypes[]>([]),
    [visible, setVisible] = useState(false),
    [contactVisible, setContactVisible] = useState(false),
    currLang = getLocale(),
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
      setLang(item.subLabel)
      setLocale(item.value, false)
    } else {
      if (item.value === '/getittouch') {
        setVisible(false)
        setContactVisible(true)
        return
      }
      history.push(item.value)
    }
    setVisible(false)
  }
  useEffect(() => {
    const curr = langList.find((item) => item.value === currLang)
    console.log('curr', { curr, currLang })

    setLang(curr?.subLabel)
  }, [])

  return (
    <div className={styles['header']}>
      <div className={styles['hamburger']} onClick={onBurgerClick}>
        <img src={menuIcon} alt="" />
      </div>
      <div className={styles['logo']}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles['i18n']}>
        {/* <div className={styles['icon']}> */}
        <img src={icons[0]} alt="" />
        {/* </div> */}
        <div className={styles['lang']} onClick={onLangClick}>
          {lang}
        </div>
        {/* <div className={styles['arrow-down']}> */}
        <img src={icons[1]} alt="" />
        {/* </div> */}
      </div>
      <CommonMask visible={visible} list={list} onClick={onMaskClick} />
      <ContactOurModal
        visible={contactVisible}
        onClose={() => setContactVisible(false)}
      />
    </div>
  )
}

export default Header
