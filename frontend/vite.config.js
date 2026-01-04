import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  root: './frontend',
  plugins: [react(),tailwindcss(),],
  build: {
    outDir: 'dist', // output folder inside frontend
    rollupOptions: {
      input: 'src/main.jsx' // entry point
    }
  },
  resolve: {
    alias: {
      // optional: make sure imports inside frontend work correctly
      '@': '/src'
    }}
})
