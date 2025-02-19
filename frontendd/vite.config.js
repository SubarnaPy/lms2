import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['lodash', 'axios'],
          chartjs: ['chart.js'],
          mui: ['@mui/material', '@mui/icons-material'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust the limit if needed
  },
});