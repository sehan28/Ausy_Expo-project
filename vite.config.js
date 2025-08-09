import react from '@vitejs/plugin-react';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Spring Boot
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
