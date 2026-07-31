import { defineConfig } from '@tanstack/react-start/config'

export default defineConfig({
  start: {
    ssr: false, // Forces Client-Only mode so it functions flawlessly on GitHub Pages
  },
})
