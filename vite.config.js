import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "services/nginx/dist"
  },
  plugins: [
    react({
      include: ["**/*.res.mjs"],
    }),
  ],
});
