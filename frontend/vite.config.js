import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: './frontend',
  base: './',              // relative paths for Render
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',         // inside frontend
    rollupOptions: {
      input: 'src/main.jsx'
    }
  },
  resolve: {
    alias: { '@': '/src' }
  }
})
