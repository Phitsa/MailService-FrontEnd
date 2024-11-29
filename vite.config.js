import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081', // Endereço do backend
        changeOrigin: true, // Garante que o servidor backend reconheça a origem
        rewrite: (path) => path.replace(/^\/api/, ''), // Reescreve o caminho, removendo o prefixo /api
      },
    },
  },
});