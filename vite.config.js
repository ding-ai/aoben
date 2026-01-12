import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    // vueDevTools(),
  ],
  server: {
    port: 8080, //
    open: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 构建优化配置
  build: {
    // 代码分割策略
    rollupOptions: {
      output: {
        // 按照模块分割 chunk
        manualChunks: {
          // Vue 核心库
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
        },
        // 文件命名策略
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    },
    // 关键 CSS 提取阈值，大于 4KB 才提取为单独文件
    cssCodeSplit: true,
    // 开启 CSS 压缩
    cssMinify: true,
    // chunk 大小警告阈值 (500KB)
    chunkSizeWarningLimit: 500,
    // 生产环境移除 console
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
