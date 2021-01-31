/**
 * @description 描述
 */
import React, { FC } from 'react'
import styles from './styles/index.less'
import { useIntl } from 'umi'
interface PropTypes {}
const Footer: FC<PropTypes> = function (props) {
  const i18n = useIntl();
  return (
    <>
      <div className={styles['footer-pre']}>
        <div className={styles['logo']}>
          <img src={require('./images/atom8_logo_s.png')} />
        </div>
        <div className={styles['page-list']}>
          <span>{i18n.formatMessage({ id: 'footer_home' })}</span>
          <span>{i18n.formatMessage({ id: 'footer_stoprojects' })}</span>
          <span>{i18n.formatMessage({ id: 'footer_howitworks' })}</span>
          <span>{i18n.formatMessage({ id: 'footer_whoweare' })}</span>
        </div>
      </div>
      <div className={styles['footer-next']}>
        <div className={styles['copyright']}>© Copyright Atom 8 2020</div>
      </div>
      <footer>
        <ul>
          <li>{i18n.formatMessage({ id: 'footer_stoprojects_description' })}</li>
          <li>User Agreement</li>
          <li>{i18n.formatMessage({ id: 'footer_howitworks_description' })}</li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
