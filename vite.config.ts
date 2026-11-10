import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages project sites, set BASE_PATH=/your-public-site-repo/
// For a custom domain or local development, leave it as '/'.
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
});
