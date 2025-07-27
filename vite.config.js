export default {
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'StepPopupWidget',
      fileName: 'step-popup-widget',
      formats: ['iife'],
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], 
  }
};