import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { QuasarResolver } from 'unplugin-vue-components/resolvers';
import { quasar } from "@quasar/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  envDir:'env',
  plugins: [
    vue(),
    autoImport({
      imports:['vue','vue-router','pinia'],
      resolvers:[QuasarResolver()]
    }),
    Components({
      resolvers:[QuasarResolver()]
    }),
    quasar({sassVariables:'@/assets/style/quasar-variables.scss'})
  ],
  resolve:{
    alias:{
      '@':'/src'
    }
  },
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 4096,
    open: true
  }
})
