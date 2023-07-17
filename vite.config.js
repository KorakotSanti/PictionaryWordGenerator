import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  base:'/PictionaryWordGenerator/',
  plugins: [
    react(),
    svgrPlugin(),
  ],
  server: {
    port: 3000,
    proxy: {
      '/api-server/': '...',
      '/authorization/': '...',
    },
  },
  build: {
    outDir: 'dist',
  }
});