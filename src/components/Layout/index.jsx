import React from 'react';
import style from './index.less';

const Layout = (props) => (
  <div className={style.layout}>
    <h2 style={{ marginBottom: 37 }}>{props.title}</h2>
    {props.children}
  </div>
);
export default Layout;
