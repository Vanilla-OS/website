import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: /^vue$/, replacement: 'vue/dist/vue.esm-bundler' },
    ]
  },
  server: {
    allowedHosts: ['vanillaos.org'],
  },
})
