import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath } from "url";
import manifest from "./manifest.json";

export default defineConfig({
  plugins: [
    react(),
    crx({
      manifest: {
        ...manifest,
        background: { ...manifest.background, type: "module" },
      },
    }),
  ],
  build: {
    emptyOutDir: true,
    outDir: "dist",
    rollupOptions: {
      input: {
        background: resolve(
          fileURLToPath(new URL(".", import.meta.url)),
          "src/background/index.ts"
        ),
        content: resolve(
          fileURLToPath(new URL(".", import.meta.url)),
          "src/content/index.ts"
        ),
      },
    },
  },
  publicDir: "public",
});
