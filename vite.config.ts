import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // On GitHub Actions, deploy to '/Raj-Clinic/'. On Vercel, Netlify, or local, deploy to root '/'
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
  const base = process.env.VITE_BASE || (isGitHubActions ? '/Raj-Clinic/' : '/');

  return {
    plugins: [react()],
    base,
    server: {
      port: 5173,
      host: true,
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            motion: ['framer-motion'],
            three: ['three', '@react-three/fiber', '@react-three/drei'],
          },
        },
      },
    },
  };
});
