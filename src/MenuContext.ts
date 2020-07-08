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
  childrens: MenuItemType[];
}
export interface HeaderType {
  title: string;
  childrens: MenuItemType[];
}
export const headerMenus: HeaderType[] = [{
      title: '保险工厂',
      childrens: [{
        title: '产品定义',
        url: '/define',
        childrens: [{
          title: '保险产品列表',
          url: '/define/list',
        },{
          title: '创建保险产品',
          url: '/define/create',
        },{
          title: '主附险配置',
          url: '/define/config',
        },{
          title: '公共责任',
          url: '/define/duty',
        }]
      },
      {
        title: '产品组合',
        url: '/connect',
        childrens: [{
          title: '产品组合列表',
          url: '/connect/list',
        },{
          title: '创建产品组合',
          url: '/connect/create',
        }]
      },{
        title: '二级菜单',
        url: '/test',
      }]
    },{
      title: '商品定义',
      childrens: [{
        title: ' A ',
        url: '/demo',
      },
      {
        title: ' B ',
        url: '/demo2Page',
      }]
    }]