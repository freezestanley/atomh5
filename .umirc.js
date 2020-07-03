// ref: https://umijs.org/config/

// 开发环境转发地址
const PoxryUrl = 'http://poxrydemourl.com'

const path = require('path')

export default {
  theme: {
    "primary-color": "#00bc70"
  },
  mountElementId:'app',
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      // dynamicImport: { webpackChunkName: true },
      title: '项目脚手架',
      // dll: true,
      // dynamicImport: {
      //   webpackChunkName: true,
      //   // loadingComponent: './components/Loading.js',
      // },
      // // dynamicImport: true,
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime'],
      // },
      fastClick: true,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      }
    }],
  ],
  hash: true,
  define: {
    "process.env.apiUrl":'https://www.currenturl.com/'
  },
  targets: {
    ie: 10,
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@less': path.resolve(__dirname, 'src/less'),
    '@/network': path.resolve(__dirname, 'src/network'),
    '@/api': path.resolve(__dirname, 'src/services'),
    utils: path.resolve(__dirname, 'utils'),
  },
  treeShaking: true,
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