import React from 'react';
import style from './index';
const DemoComponents  = props => {
  return (
    <div className={style['demo-components']}>Demo Components : props name = {props.name}</div>
  )
};
export default DemoComponents;