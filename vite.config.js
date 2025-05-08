import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cuny-ai/', // Add base URL for GitHub Pages
  server: {
    open: true
  }
})
