import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import {defineConfig} from 'vite'
import type {UserConfig} from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'

const libUserConfigExport: UserConfig = {
  plugins: [
    vue2(),
    vue2Jsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    minify: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'olgis-vue2',
      // the proper extensions will be added
      fileName: 'olgis-vue2',
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
  plugins: [
    vue2(),
    vue2Jsx(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 21001,
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