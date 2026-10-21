import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Allow the hosted preview domain while keeping the dev server usable locally.
    allowedHosts: ['.e2b.app', 'localhost'],
  },
  preview: {
    allowedHosts: ['.e2b.app', 'localhost'],
  },
})
