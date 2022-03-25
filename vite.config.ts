import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = "vite_try";
// https://vitejs.dev/config/
export default defineConfig({
  base:`/${repoName}/`,
  build: {
    outDir: './docs',
  },
  plugins: [react()]
})
