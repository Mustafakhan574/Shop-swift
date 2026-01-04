import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: '.',       // <-- just the frontend folder
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist', 
    rollupOptions: {
      input: 'index.html'   // <-- make sure Vite uses index.html
    }
  },
  resolve: {
    alias: { '@': '/src' }
  }
})
