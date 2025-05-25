import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: '/my_resume/', // Замените на имя вашего репозитория
  optimizeDeps: {
    include: ['echarts']
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },  
  build: {
    rollupOptions: {
      external: ['echarts/core'] // Помогает Tree-Shaking
    }
  }
})
