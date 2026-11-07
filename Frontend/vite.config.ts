import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api':{
        target: 'http://localhost:3000', // Your local backend server
        changeOrigin: true,
        secure: false,   
        // Remove the '/api' prefix before sending the request to your backend
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})
