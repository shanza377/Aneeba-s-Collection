import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'aneeba-collection',
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 'aneeba-collection/index.html'),
        category: resolve(__dirname, 'aneeba-collection/category.html'),
        product:  resolve(__dirname, 'aneeba-collection/product.html'),
        admin:    resolve(__dirname, 'aneeba-collection/ac-manage.html'),
        track:    resolve(__dirname, 'aneeba-collection/track.html'),
      },
    },
  },
});
