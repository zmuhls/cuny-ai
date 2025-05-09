import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cuny-ai/', // Add base URL for GitHub Pages
  publicDir: 'public', // Ensure public assets are included in the build
  server: {
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        recipe: path.resolve(__dirname, 'pages/recipe.html'),
        magician: path.resolve(__dirname, 'pages/magician.html'),
        tempComparison: path.resolve(__dirname, 'pages/temperature-comparison.html'),
        reading70: path.resolve(__dirname, 'pages/Reading is… (..70).html'),
        reading30: path.resolve(__dirname, 'pages/Reading is… (.30).html'),
        reading50: path.resolve(__dirname, 'pages/Reading is… (.50).html'),
        reading90: path.resolve(__dirname, 'pages/Reading is… (.90).html'),
        reading110: path.resolve(__dirname, 'pages/Reading is… (1.10).html')
      }
    }
  }
})
