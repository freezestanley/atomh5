import React, { FC, useRef } from 'react'
import styles from './styles/index.less'

interface PropTypes { }

const Valuechart: FC<PropTypes> = function (props) {
  return <div className={ styles['ValueChat']}>
    <h1>A blockchain-powered platform that provides end-to-end STO solutions</h1>

    <div className={styles['treeicon']}>
        <dl className={ styles['tree_list']}>
          <dt>Issuers​</dt>
          <dd>Equity​</dd>
          <dd>Debt​</dd>
          <dd>Real estate​</dd>
          <dd>Fine arts​</dd>
          <dd>etc.​</dd>
        </dl>
      <div className={styles['treeicon_box']}>
        Where we add value​
        <div className={ styles['ps']}>
          <h1>Product<br/>structuring​</h1>
          <h3>Token Economics Advisory</h3>
        </div>
        <div className={ styles['coin']}>
          <h1>Token<br/>creation ​​</h1>
        </div>
        <div className={ styles['dt']}>
          <h1>Distribution​ ​​</h1>
          <h3>Post-issuance Token Management</h3>
        </div>
      </div>
      <div className={styles['tree_Investors']}>Investors</div>
    </div>

  </div>
}
export default Valuechart
