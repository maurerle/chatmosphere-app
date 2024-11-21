import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr({ 
    svgrOptions: {
      // svgr options
    },
    include: '**/*.svg',
    exportAsDefault: true
  }),
  react(), 
  ],
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
});