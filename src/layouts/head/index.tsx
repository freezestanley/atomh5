import React, { memo } from 'react';
// import PropTypes, { func } from 'prop-types';
import { history, useSelector, useDispatch } from 'umi';
import { Link } from 'umi';
import { connect } from 'umi';
import { withRouter } from 'umi';
import { message } from 'antd';
import style from './head.less';
import HeaderMenu from './components/headerMenu';
import PersonContent from './components/personContent';
import {GlobalStateType} from '@/models/global';
interface PropsType {
 
}
interface StateTypes {
  global: GlobalStateType
}
function Header(props: PropsType) {
  const {headerMenus, currentHeaderIdx} = useSelector((state: StateTypes) => state.global);
  const dispatch = useDispatch()
  function onHeaderClick(key: string) {
    dispatch({
      type: 'global/onHeaderClick',
      payload: {
        currentHeaderIdx: key,
      }
    });
  }
  return (
    <div className={style.head}>
      {/* 一级菜单 */}
      <HeaderMenu
      headerMenus={headerMenus}
      currentHeaderIdx={currentHeaderIdx}
      onHeaderClick={onHeaderClick}
       />
      <div className={style.right}>

        <div className={style.common}>

          <div
            className="personWrap"
            style={{ position: 'relative' }}
          >
            <i
              style={{ color: '', fontSize: 16 }}
              className="iconfont icontouxiang"
            />
            <div
              className={`${style.personContent} personContent`}
            >
              <PersonContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default memo(Header)