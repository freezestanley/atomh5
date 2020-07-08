import React from 'react';
import {Layout, Menu} from 'antd';
import { HeaderType } from '@/MenuContext';
import {ClickParam} from 'antd/es/menu';
import {GlobalStateType} from '@/models/global';
const { Header } = Layout;
interface PropTypes {
  onHeaderClick: (e: string) => void;
  headerMenus: GlobalStateType['headerMenus'];
  currentHeaderIdx: GlobalStateType['currentHeaderIdx'];
}
export default ( props: PropTypes ) => {
  // @ts-ignore
  const {headerMenus, currentHeaderIdx} = props;
  function renderHeader() {
    return headerMenus && headerMenus.map((item: HeaderType, idx: number) => {
      return <Menu.Item key={idx} onClick={menuItemClick}>{item.title}</Menu.Item>
    })
  }
  function menuItemClick(e: ClickParam) {
    props.onHeaderClick(e.key);
  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        {currentHeaderIdx && <Menu theme="dark" mode="horizontal" selectedKeys={[currentHeaderIdx]}>
          {renderHeader()}
        </Menu>}
      </Header>
    </Layout>
  )
}