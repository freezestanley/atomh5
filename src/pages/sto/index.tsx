/**
 * @description 描述
 */
import React, { FC } from 'react'
import styles from './styles/index.less'
interface PropTypes {}
const STO: FC<PropTypes> = function (props) {
  return <div className={styles['sto']}>
    <div className={ styles['sto_banner']}>
      <h1>STO projects</h1>
      <h2>Powering end-to-end Security Token Offering solutions. </h2>
      <div></div>
      <p>We're committed to your privacy. Atom 8 uses your provided contact information to contact you about digital asset related projects, products, and services. </p>
      <p>By clicking submit, you consent to our privacy policy and allow Atom 8 to store and provide you with digital asset related content.</p>
      <p>You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</p>
    </div>
  </div>
}

export default STO
