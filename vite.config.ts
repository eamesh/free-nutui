import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import { createStyleImportPlugin, NutuiResolve } from 'vite-plugin-style-import';

const plugins = [
  vue(),
  vueJsx(),
  createStyleImportPlugin({
    resolves: [
      NutuiResolve()
    ]
  })
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 配置 nutui 全局 scss 变量
        additionalData: '@import "@nutui/nutui/dist/styles/variables.scss";'
      }
    }
  }
});
