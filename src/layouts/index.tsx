import React, {memo} from 'react';
import { withRouter, history, useSelector, useDispatch } from 'umi';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import Header from './head';
import Left from './left/index';
import { MenuItemType } from '../MenuContext';
import styles from './index.less';
import {GlobalStateType} from '@/models/global';
interface PropTypes {
  dispatch: any;
  location: any;
  menus: MenuItemType[];
  children: ChildNode;
}
interface StateTypes {
  global: GlobalStateType;
}
const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />;
function Layout(props: PropTypes) {
  const {openMenus, currPathname, menus } = useSelector((state: StateTypes) => state.global);
  const dispatch = useDispatch()
  if (props.location.pathname === '/login') {
    return (
      <div className={styles.userContent}>
        <div className={styles.content}>
          <div className={styles.main}>
            {props.children}
          </div>
        </div>
      </div>
    );
  }
  function onRouterChange(path: string) {
    history.push(path);
  }
  function onOpenChange(openMenus: string[]) {
    console.log('keys', openMenus);
    dispatch({
      type: 'global/setOpenMenus',
      payload: {
        openMenus
      }
    })
  }
  return (
    <React.Fragment>
      <div className={styles.header}>
        <Header />
        <div className={styles.content}>
          <div className={styles.left}>
            {menus.length ? (
              <Left 
                menus={menus}
                currPathname={currPathname}
                openMenus={openMenus}
                onChange={onRouterChange}
                onOpenChange={onOpenChange}
              />
            ) : (
                ''
              )}
          </div>

          <div className={styles.right}>
            {props.children}
          </div>
        </div>
      </div>
      <div className="loadMask ant-modal-wrap" style={{ display: 'none' }} id="loadMask">
        <Spin indicator={antIcon} />
      </div>
    </React.Fragment>
  )
}
// @ts-ignore
export default memo(withRouter(Layout));
