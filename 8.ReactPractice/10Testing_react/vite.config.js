import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // So you don't have to import 'describe' and 'expect' in every file
    environment: "jsdom", // This mimics a browser in the terminal
    setupFiles: "./setupTests.js",
  },
});
