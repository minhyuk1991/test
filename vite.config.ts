import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "/test/",
  build: {
    outDir: "docs", // GitHub Pages의 배포 디렉토리인 'docs'로 변경
  },
});
