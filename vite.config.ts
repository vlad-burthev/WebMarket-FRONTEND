import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      app: "./App/*",
      assets: "./assets/*",
      components: "./components/*",
      constants: "./constants/*",
      pages: "./pages/*",
      routes: "./routes/*",
      store: "./store/*",
      helpers: "./helpers/*",
      services: "./services/*",
    },
  },
});
