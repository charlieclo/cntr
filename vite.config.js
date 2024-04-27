import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import inject from '@rollup/plugin-inject';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: './',
    server: {
      proxy: {
        '^/content': {
          target: process.env.VITE_REST_API_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/content/, '/graphql')
        },
        '/contacts': {
          target: process.env.VITE_REST_API_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/contacts/, '/wp-json/cntr-api/v1/contacts')
        },
      },
    },
    plugins: [
      vue(),
      inject({
        $: 'jquery',
        jQuery: 'jquery',
      }),
      VueI18nPlugin(),
    ],
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
        '@': path.resolve(__dirname, './src'),
      },
    },
  });
};
