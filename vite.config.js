import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    outDir: "dist",
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    minify: "esbuild",
    sourcemap: false,
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        services: resolve(__dirname, "services.html"),
        company: resolve(__dirname, "company.html"),
        cases: resolve(__dirname, "case-studies.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});
