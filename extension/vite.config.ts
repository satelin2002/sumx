import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json" assert { type: "json" };

export default defineConfig({
  plugins: [
    crx({
      manifest: {
        ...manifest,
        background: {
          service_worker: manifest.background.service_worker,
          type: "module",
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        background: "src/background/index.ts",
        content: "src/content/index.ts",
      },
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
    cssCodeSplit: false,
  },
  publicDir: "public",
});
