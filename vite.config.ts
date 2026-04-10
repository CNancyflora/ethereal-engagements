import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// For GitHub Pages on a project repo, build with: VITE_BASE_PATH=/repo-name/ npm run build
const rawBase = process.env.VITE_BASE_PATH?.trim();
const base =
  rawBase && rawBase !== "/"
    ? (rawBase.startsWith("/") ? rawBase : `/${rawBase}`).replace(/\/?$/, "/")
    : "/";

export default defineConfig(({ mode }) => ({
  base,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
