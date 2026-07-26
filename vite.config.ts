import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Portfolio/",

  plugins: [react(), tailwindcss()],

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules")) {
            if (/three|@react-three/.test(id)) {
              return "three";
            }

            if (/framer-motion|gsap/.test(id)) {
              return "motion";
            }
          }
        },
      },
    },
  },
});