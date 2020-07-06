// ref: https://umijs.org/config/

// 开发环境转发地址
const PoxryUrl = 'http://poxrydemourl.com'

const path = require('path')

export default {
  theme: {
    "primary-color": "#00bc70"
  },
  mountElementId:'app',
  // treeShaking: true,
  antd: {},
  dva: {
    hmr: true,
    immer: true,
  },
  dynamicImport: {
    // loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // plugins: [
  //   // ref: https://umijs.org/plugin/umi-plugin-react.html
  //   ['umi-plugin-react', {
  //     antd: true,
  //     dva: true,
  //     // dynamicImport: { webpackChunkName: true },
  //     title: '项目脚手架',
  //     // dll: true,
  //     // dynamicImport: {
  //     //   webpackChunkName: true,
  //     //   // loadingComponent: './components/Loading.js',
  //     // },
  //     // // dynamicImport: true,
  //     // dll: {
  //     //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
  //     //   exclude: ['@babel/runtime'],
  //     // },
  //     fastClick: true, // 移动端开启
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/demo', component: './demo/index' },
        { path: '/demo2Page', component: './demo/demo2Page' },
      ],
    },
  ],
  //   }],
  // ],
  define: {
    "process.env.apiUrl":'https://www.currenturl.com/'
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@less': path.resolve(__dirname, 'src/less'),
    '@/network': path.resolve(__dirname, 'src/network'),
    '@/api': path.resolve(__dirname, 'src/services'),
    utils: path.resolve(__dirname, 'utils'),
  },
  proxy: {
    '/v1':{
      target: PoxryUrl,
      changeOrigin: true,
      secure: false,

    },
     
    '/file':{
      target: PoxryUrl,
      changeOrigin: true,
      secure: false,

    },
   
  }
}