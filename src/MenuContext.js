/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 14:28:28
 * @LastEditTime: 2020-07-03 14:34:16
 * @LastEditors: LaoZhang
 */
import React from 'react';
import router from 'umi/router';

const menuIcons = {};
const menuIconsContext = require.context('@/assets/menu', true, /\.(png)$/);
menuIconsContext.keys().map(key => {
  menuIcons[key.replace(/\.\/(\w+)\.png/, '$1')] = menuIconsContext(key);
});
const analyse = require('@/assets/menu/analyse.png');
const link = require('@/assets/menu/link.png');
// name和图片名称一样
export const menuConfig = [
  {
    iconname: 'amoeba',
    title: '菜单demo',
    url: '/demo',
    show: true,
    router: () => {
      router.push('/demo');
    },
  },
  {
    iconname: 'tool',
    title: '菜单demo2Page',
    url: '/demo/demo2Page',
    // show: true,
    router: () => {
      router.push('/demo/demo2Page');
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
