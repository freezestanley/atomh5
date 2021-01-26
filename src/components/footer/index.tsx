/**
 * @description 描述
 */
import React, { FC } from 'react'
import styles from './styles/index.less'
interface PropTypes {}
const Footer: FC<PropTypes> = function (props) {
  return (
    <>
      <div className={styles['footer-pre']}>
        <div className={styles['logo']}>
          <img src={require('./images/atom8_logo_s.png')} />
        </div>
        <div className={styles['page-list']}>
          <span>HOME</span>
          <span>STO PROJECTS</span>
          <span>How It Works</span>
          <span>Who We Are</span>
        </div>
      </div>
      <div className={styles['footer-next']}>
        <div className={styles['copyright']}>© Copyright Atom 8 2020</div>
      </div>
      <footer>
        <ul>
          <li>Data Privacy Policy</li>
          <li>User Agreement</li>
          <li>Cookies Policy</li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
