import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@my-alias': path.resolve(__dirname, 'src/my-folder'),
    },
  },
});
