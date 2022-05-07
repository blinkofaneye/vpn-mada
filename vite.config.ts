import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: '/opt/app/src/frontend',
  publicDir: '/opt/app/public',
  resolve: {
    alias: {
      '@': '/opt/app/src/frontend',
    },
  },
});
