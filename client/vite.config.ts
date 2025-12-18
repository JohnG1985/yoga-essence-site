import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: ".", // 🔥 dit clairement à Vite : "le root c'est client/"
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
