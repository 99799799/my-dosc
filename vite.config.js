import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  optimizeDeps: {
    include: ['element-plus'], // Include Element Plus in optimized dependencies
  },
  plugins: [
    UnoCSS(),
    vueJsx({
      // 配置选项
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        {
          name: 'element-plus-styles',
          enforce: 'pre',
          resolve: (name) => {
            if (name.startsWith('element-plus/theme-chalk')) {
              return `/path/to/local/element-plus-theme-chalk${name.slice('element-plus'.length)}`;
            }
          },
        },
      ]
    })
  ],
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
})
