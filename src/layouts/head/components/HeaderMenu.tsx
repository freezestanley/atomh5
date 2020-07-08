import React from 'react';
import {Layout, Menu} from 'antd';
import { useDispatch, useSelector } from 'umi';
import { HeaderType } from '@/MenuContext';
import {ClickParam} from 'antd/es/menu';
const { Header } = Layout;
interface PropTypes {
}
export default ( props: PropTypes ) => {
  // @ts-ignore
  const {headerMenus, currentHeaderIdx} = useSelector((state: PropTypes) => state.global);
  const dispatch = useDispatch()
  function renderHeader() {
    return headerMenus.map((item: HeaderType, idx: number) => {
      return <Menu.Item key={idx} onClick={menuItemClick}>{item.title}</Menu.Item>
    })
  }
  function menuItemClick(e: ClickParam) {
    dispatch({
      type: 'global/setCurrHeader',
      payload: {
        currentHeaderIdx: e.key
      }
    });
    dispatch({
      type: 'global/setMenus',
    });
  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" selectedKeys={[currentHeaderIdx]}>
          {renderHeader()}
        </Menu>
      </Header>
    </Layout>
  )
}