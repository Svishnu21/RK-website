import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// Load local env vars for dev-time config (do not commit .env.local)
dotenv.config({ path: '.env.local' })

const serverPort = process.env.PORT || '3000'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy `/api` requests to the local Express server during development
    proxy: {
      '/api': {
        target: `http://localhost:${serverPort}`,
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
