// @ts-nocheck
import React from 'react'
import { history } from 'umi'
const menuIcons = {}
const menuIconsContext = require.context('@/assets/menu', true, /\.(png)$/)

menuIconsContext.keys().map((key: string) => {
  menuIcons[key.replace(/\.\/(\w+)\.png/, '$1')] = menuIconsContext(key)
})

const analyse = require('@/assets/menu/analyse.png')
const link = require('@/assets/menu/link.png')

// name和图片名称一样
export const menuConfig: MenuItemType[] = [
  {
    iconname: 'amoeba',
    title: '菜单demo',
    url: '/demo',
    show: true,
    router: () => {
      history.push('/demo')
    },
  },
  {
    iconname: 'tool',
    title: '菜单demo2Page',
    url: '/demo2Page',
    // show: true,
    router: () => {
      history.push('/demo2Page')
    },
  },
]

export const menu = menuConfig.map(m => {
  m.icon = menuIcons[`${m.iconname}`]
  m.activeIcon = menuIcons[`${m.iconname}_active`]
  return m
})

export const MenuContext = React.createContext({
  update: () => {},
})
export interface MenuItemType {
  title: string
  url: string
  childrens: MenuItemType[]
}
export interface HeaderType {
  title: string
  childrens: MenuItemType[]
}

export interface DropMenuItemType {
  title: string
  url: String
}

export const dropMenu1: DropMenuItemType[] = [
  {
    title: '退出',
    url: '/aa',
  },
]

export const headerMenus: HeaderType[] = [
  {
    // 路由全小写
    title: '保险工厂',
    childrens: [
      {
        title: '产品定义',
        url: '/define',
        childrens: [
          {
            title: '保险产品列表',
            url: '/definelist',
          },
          {
            title: '创建保险产品',
            url: '/definecreate',
          },
          {
            title: '主附险配置',
            url: '/defineconfig',
          },
          {
            title: '公共责任',
            url: '/defineduty',
          },
        ],
      },
      {
        title: '产品组合',
        url: '/concat',
        childrens: [
          {
            title: '产品组合列表',
            url: '/concatlist',
          },
          {
            title: '创建产品组合',
            url: '/concatcreate',
          },
        ],
      },
      {
        title: '商品定义',
        url: '/goods',
        childrens: [
          {
            title: '商品列表 ',
            url: '/goodslist',
          },
          {
            title: '创建商品',
            url: '/creategoods',
          },
          {
            title: '商品配置',
            url: '/goodsconfig',
          },
          {
            title: '列表配置',
            url: '/goodslistconfig',
          },
        ],
      },
    ],
  },
  // {
  //   title: '商品中心',
  //   childrens: [
  //     {
  //       title: '商品定义',
  //       url: '/goods',
  //       childrens: [
  //         {
  //           title: '商品列表 ',
  //           url: '/goodslist',
  //         },
  //         {
  //           title: '创建商品',
  //           url: '/creategoods',
  //         },
  //         {
  //           title: '商品配置',
  //           url: '/goodsconfig',
  //         },
  //         {
  //           title: '列表配置',
  //           url: '/goodslistconfig',
  //         },
  //       ],
  //     },
  //   ],
  // },
]
