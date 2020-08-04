/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * 开发环境字典表和业务接口是两套
 */
export default {
  dev: {
    '/api/': {
      target: 'http://10.8.101.102:3333',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
    '/file/': {
      target: 'http://10.8.101.102:3333',
      changeOrigin: true,
      pathRewrite: { '^/file': '' },
    },
  },
  dev2: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  test: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
}
