// https://umijs.org/config/
import { defineConfig } from 'umi'
export default defineConfig({
	terserOptions: {
    compress: {
      drop_debugger: true,
      drop_console: true,
    },
  },
})
