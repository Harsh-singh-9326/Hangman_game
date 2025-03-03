import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  host: true, // Allow access from other devices
  port: 5173,
  plugins: [react()],
})
