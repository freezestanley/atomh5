// https://umijs.org/config/
import { defineConfig } from 'umi'
export default defineConfig({
  // hash: true,
  terserOptions: {
    compress: {
      drop_debugger: true,
    },
  },
})
