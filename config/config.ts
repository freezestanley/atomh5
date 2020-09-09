// https://umijs.org/config/
import { defineConfig } from 'umi'
import proxy from './proxy'
import theme from './theme'
import routes from './routes'
const pxToVwLoader =  require('pxtovw-loader');
const path = require('path')
const { UMI_ENV } = process.env
export default defineConfig({
  title: 'h5-template',
  theme,
  mountElementId: 'app',
  // treeShaking: true,
  locale: {
    default: 'zh-CN',
    antd: true,
    title: false,
  },
  // antd: {},
  dva: {
    hmr: true,
    immer: true,
  },
  forkTSChecker: {},
  dynamicImport: {
    // loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  ignoreMomentLocale: true,
  //     fastClick: true, // 移动端开启
  routes,
  define: {
    'process.env.apiUrl': 'https://www.currenturl.com/',
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@less': path.resolve(__dirname, 'src/less'),
    API: path.resolve(__dirname, 'src/api'),
    utils: path.resolve(__dirname, 'src/utils'),
  },
  cssModulesTypescriptLoader: {
    mode: 'emit'
  },
  extraBabelPlugins: [
    ['import', {
      libraryName: 'zarm',
      style: true, // or 'css'
    }],
  ],
  // cssModulesTypescriptLoader: {},
  // devServer: {
  // setup: function(app, server) {
  //   app.get('/some/path', function(req, res) {
  //     res.json({ custom: 'response' });
  //   });
  // }
  // },
  proxy: proxy[UMI_ENV || 'dev'],
  sass: {},
  extraPostCSSPlugins: [require('postcss-px-to-viewport')({
    viewportWidth: 375,
    viewportHeight: 667,
    unitPrecision: 5,
    viewportUnit: 'vw',
    selectorBlackList: ['NoVw'],
    minPixelValue: 1,
    mediaQuery: false
  })],
  chainWebpack(config) {
    // config.optimization.splitChunks({
    //   cacheGroups: {
    //     styles: {
    //       name: 'styles',
    //       test: /\.(css|less)$/,
    //       chunks: 'async',
    //       minChunks: 1,
    //       minSize: 0,
    //     }
    //   },
    // });
    config.merge({
      module: {
        rules: [{
          test: /\.tsx$/,
          use: [{
            loader: path.resolve('./loaders/inline-style-px-to-vw.js'),
            options: {
              unitToConvert: 'px', // 自定义转换单位
              viewportWidth: 375, // 视口宽度
              unitPrecision: 5, // 保留小数位
              minPixelValue: 2 // 最小转换数值
            }
          }]
        }]
      }
    })
    // config.module
    // .rule('pxtovw')
    // .test(/.css$/)
    // .use('pxtovw-loader')
    // .loader(path.resolve('./loaders/inline-style-px-to-vw.js'))
    // .options({
    //   unitToConvert: 'px', // 自定义转换单位
    //   viewportWidth: 375, // 视口宽度
    //   unitPrecision: 5, // 保留小数位
    //   minPixelValue: 2 // 最小转换数值
    // })
    // .end().exclude.add([path.resolve('../src/pages/.umi'), path.resolve('node_modules')])
  },
})
