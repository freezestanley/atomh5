import React from 'react';
import style from './index';
interface PropsType {
  name : string;
}
const DemoComponents  = (props: PropsType) => {
  return (
    <div className={style['demo-components']}>Demo Components : props name = {props.name}</div>
  )
};
export default DemoComponents;