// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ai-engineer-portfolio/', // <--- ADD THIS LINE!
                                  // Ensure 'ai-engineer-portfolio'
                                  // is your exact GitHub repository name.
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
