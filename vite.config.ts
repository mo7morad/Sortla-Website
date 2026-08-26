import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// GitHub Pages serves the site from https://mo7morad.github.io/Sortla-Website/,
// so production builds need that prefix. Dev stays at the root.
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Sortla-Website/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
}));
