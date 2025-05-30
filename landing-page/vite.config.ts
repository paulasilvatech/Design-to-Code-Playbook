import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Design-to-Code-Dev/',
  build: {
    outDir: 'dist'
  },
  publicDir: 'public'
}) 