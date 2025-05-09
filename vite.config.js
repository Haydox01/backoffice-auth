import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',  // You can also set it to '0.0.0.0' to access from other devices
    port: 5175         // Change this to any available port
  }
});