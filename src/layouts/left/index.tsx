import React, { memo, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import {SelectParam} from 'antd/es/menu';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu, Item } = Menu;
const { Sider } = Layout;
import { MenuItemType } from '@/MenuContext';
interface PropTypes {
  menus: MenuItemType[];
  currPathname: string;
  openMenus: string[];
  onChange: (pathname: string) => void;
  onOpenChange: (keys: string[]) => void;
}
 function Left(props: PropTypes) {
  function renderMenus(menus: MenuItemType[]) {
    return Array.isArray(menus) && menus.map((menu, idx) => {
      const { title, url, childrens } = menu;
      const hasChild = Array.isArray(childrens) && childrens.length > 0;
      return hasChild ? <SubMenu key={url} title={title}>
            {renderMenus(menus[idx].childrens)}
          </SubMenu>
          : <Item key={url}>{title}</Item>
    });
  }
  /**
   * @description 更新当前路由
   * @param params 
   */
  function onSelect(params: SelectParam) {
    props.onChange(params.key);
  }
  return (
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[props.currPathname]}
          openKeys={props.openMenus}
          style={{ height: '100%', borderRight: 0 }}
          onSelect={onSelect}
          onOpenChange={props.onOpenChange}
        >
          {renderMenus(props.menus)}
        </Menu>
      </Sider>
    </Layout>
  )
}
export default memo(Left);