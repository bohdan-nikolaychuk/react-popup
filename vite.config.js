import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'StepPopupWidget',
      fileName: 'step-popup-widget',
      formats: ['iife'],
    }
  }
});
