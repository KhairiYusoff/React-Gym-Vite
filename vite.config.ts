import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  base: isGithubPages ? '/React-Gym-Vite/' : '/', 
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    host: true,
    port: 3001,
  },
});
