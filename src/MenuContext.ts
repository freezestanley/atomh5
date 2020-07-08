// @ts-nocheck
import React from 'react';
import { history } from 'umi';
const menuIcons = {};
const menuIconsContext = require.context('@/assets/menu', true, /\.(png)$/);
menuIconsContext.keys().map((key: string) => {
  menuIcons[key.replace(/\.\/(\w+)\.png/, '$1')] = menuIconsContext(key);
});
const analyse = require('@/assets/menu/analyse.png');
const link = require('@/assets/menu/link.png');
// name和图片名称一样
export const menuConfig: MenuItemType[] = [
  {
    iconname: 'amoeba',
    title: '菜单demo',
    url: '/demo',
    show: true,
    router: () => {
      history.push('/demo');
    },
  },
  {
    iconname: 'tool',
    title: '菜单demo2Page',
    url: '/demo2Page',
    // show: true,
    router: () => {
      history.push('/demo2Page');
    },
  },
];

export const menu = menuConfig.map(m => {
  m.icon = menuIcons[`${m.iconname}`];
  m.activeIcon = menuIcons[`${m.iconname}_active`];
  return m;
});

export const MenuContext = React.createContext({
  update: () => {},
});
export interface MenuItemType {
  title: string;
  url: string;
  show?: boolean;
  router: () => void;
}
export interface HeaderType {
  title: string;
  menus: MenuItemType[];
}
export const headerMenus: HeaderType[] = [{
      title: '保险工厂',
      menus: [{
        title: '菜单demo',
        url: '/demo',
        show: true,
        router: () => {
          history.push('/demo');
        },
      },
      {
        title: '菜单demo2Page',
        url: '/demo2Page',
        router: () => {
          history.push('/demo2Page');
        },
      }]
    },{
      title: '商品定义',
      menus: [{
        title: ' A ',
        url: '/demo',
        show: true,
        router: () => {
          history.push('/demo');
        },
      },
      {
        title: ' B ',
        url: '/demo2Page',
        router: () => {
          history.push('/demo2Page');
        },
      }]
    }]