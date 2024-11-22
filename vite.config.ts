import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr({ 
    svgrOptions: {
      // svgr options
    },
    include: '**/*.svg',
  }),
  react(), 
  ],
  define: {
    'process.env': {
      REACT_APP_SERVICE_URL: JSON.stringify(process.env.VITE_REACT_APP_SERVICE_URL),
      REACT_APP_DEMO_SESSION: JSON.stringify(process.env.VITE_REACT_APP_DEMO_SESSION),
    },
  },
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
});