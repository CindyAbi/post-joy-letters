import { defineConfig } from '@tanstack/react-start/config';
import path from "path";

export default defineConfig({
  start: {
    ssr: false, // Forces client-only static generation
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
});
