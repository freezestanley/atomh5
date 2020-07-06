import React from 'react';
import { history } from 'umi';
import XIcon from '@/components/XIcon';
import style from './index.less';

const gourl = url => {
  history.push(url);
};
const XBackIcon = props => (

  props.url
    ? (
      <div className={style.back} onClick={() => gourl(props.url)}>
        <span className={style.backTxt}>
          <XIcon type="iconfanhuianniu" />
          <span>返回</span>
        </span>
      </div>
    )
    : (
      <div className={style.back} onClick={() => { router.goBack(); }}>
        <span className={style.backTxt}>
          <XIcon type="iconfanhuianniu" />
          <span>返回</span>
        </span>
      </div>
    )


);
export default XBackIcon;
