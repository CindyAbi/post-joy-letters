import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev
export default defineConfig({
  plugins: [
    tanstackStart(), 
    react(),
  ],
  build: {
    cssMinify: false, // CRITICAL: This completely stops Vite from using the broken LightningCSS engine
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
