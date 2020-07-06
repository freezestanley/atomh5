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
export interface MenuItemType {
  iconname: string;
  title: string;
  url: string;
  show?: boolean;
  router: () => void;
  icon?: string;
  activeIcon?: string;
}
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
