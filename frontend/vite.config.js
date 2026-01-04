import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  root: './frontend',          // your frontend folder
  base: './',                  // <-- this is crucial for Render
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',            // output folder inside frontend
    rollupOptions: {
      input: 'src/main.jsx'    // your app entry point
    }
  },
  resolve: {
    alias: {
      '@': '/src'              // optional: for nice imports
    }
  }
})
