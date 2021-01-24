/**
 * @description 描述
 */
import React, { FC } from 'react'
import styles from './styles/index.less'
interface PropTypes {}
const Home: FC<PropTypes> = function (props) {
  return <div className={styles['demo']}>Home</div>
}

export default Home
