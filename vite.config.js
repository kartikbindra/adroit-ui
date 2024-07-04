import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src'),
    }
  },
  build: {
    lib : {
      entry : path.resolve(__dirname, './src/components/index.js'),
      name : 'adroitUI',
      fileName : "adroit-ui"
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          "react-dom": "ReactDOM",
        }
      }
    }
  },
  plugins: [react()],
})
