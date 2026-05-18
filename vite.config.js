import { defineConfig } from 'vite';

export default defineConfig({
  root: 'aneeba-collection',
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
});
