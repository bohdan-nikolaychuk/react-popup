export default {
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'StepPopupWidget',
      fileName: 'step-popup-widget',
      formats: ['iife'],
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], 
  }
};