/**
 * @description 描述
 */
import React, { FC } from 'react'
import { useIntl, history } from 'umi'
import styles from './styles/index.less'
interface PropTypes {}
const Footer: FC<PropTypes> = function (props) {
  const i18n = useIntl()

  return (
    <>
      <div className={styles['footer-pre']}>
        <div className={styles['logo']}>
          <img src={require('./images/atom8_logo_s.png')} />
        </div>
        <div className={styles['page-list']}>
          <span onClick={ (e) => history.push('/home') }>{i18n.formatMessage({ id: 'footer_home' })}</span>
          <span onClick={ (e) => history.push('/sto') }>{i18n.formatMessage({ id: 'footer_stoprojects' })}</span>
          <span onClick={ (e) => history.push('/howitwork') }>{i18n.formatMessage({ id: 'footer_howitworks' })}</span>
          <span onClick={ (e) => history.push('/whoweare') }>{i18n.formatMessage({ id: 'footer_whoweare' })}</span>
        </div>
      </div>
      <div className={styles['footer-next']}>
        <div className={styles['copyright']}>© Copyright Atom 8 2020</div>
      </div>
      <footer>
        <ul>
          <li><a href="/static/pdf/Atom8_Data_Privacy_Policy.pdf" target="_blank" >{i18n.formatMessage({ id: 'footer_stoprojects_description' })}</a></li>
          <li><a href="/static/pdf/Atom8_User_Agreement.pdf" target="_blank" >{i18n.formatMessage({ id: 'footer_home_description' })}</a></li>
          <li><a href="/static/pdf/Atom8_Cookies_Policy.pdf" target="_blank" >{i18n.formatMessage({ id: 'footer_howitworks_description' })}</a></li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
