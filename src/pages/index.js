import React, { Component } from 'react';
import router from 'umi/router';

import styles from './index.less';


// console.log(process.UMI_ENV)
class RegistrationForm extends React.Component {
  componentDidMount() {
    console.log('aaa')
    router.replace('/product');

   
  }

  render() {
    return (
      <div className={styles.normal} />
    );
  }
}

function mapStateToProps(state) {
  const {name} = state.global;
  return {
    name,
  };
}
export default RegistrationForm;
