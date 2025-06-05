import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,      // <- This is required so Render can reach the server
    port: 10000      // <- Render scans this port by default
  }
})
