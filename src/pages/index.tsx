import React, { Component } from 'react'
import { history } from 'umi'

import styles from './index.less'
class RegistrationForm extends React.Component {
  componentDidMount() {
    history.replace('/product')
  }

  render() {
    return <div className={styles.normal} />
  }
}
export default RegistrationForm
