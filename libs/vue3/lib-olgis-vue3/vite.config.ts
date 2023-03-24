import { fileURLToPath, URL } from 'node:url'

import {defineConfig} from 'vite'
import type {UserConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {resolve} from "path";

const libUserConfigExport: UserConfig = {
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'olgis-vue3',
      // the proper extensions will be added
      fileName: 'olgis-vue3',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
}

const appUserConfigExport: UserConfig = {
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 31001,
    open: true,
    cors: true
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (mode === "lib") {
    return libUserConfigExport;
  } else {
    return appUserConfigExport;
  }
})
