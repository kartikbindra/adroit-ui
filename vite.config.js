import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import copy from 'rollup-plugin-copy';
import {viteStaticCopy} from 'vite-plugin-static-copy';

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
    plugins: [
      viteStaticCopy({
        src: './src/components/postinstall.js',
        dest: '.'
      })
    ],
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          "react-dom": "ReactDOM"
        }
      },
      plugins: [
        copy({
          targets: [
            { src: 'src/components/postinstall.js', dest: 'dist' }
          ]
        })
      ]
    }
  },
  plugins: [react()],
})
