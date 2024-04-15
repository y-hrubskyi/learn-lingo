import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@/": "/src",
      "@/assets": "/src/assets",
      "@/components": "/src/components",
      "@/constants": "/src/constants",
      "@/pages": "/src/pages",
      "@/services": "/src/services",
      "@/styles": "/src/styles",
    },
  },
});
