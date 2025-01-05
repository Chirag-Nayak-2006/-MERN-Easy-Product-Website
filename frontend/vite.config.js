import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

const backendPort = process.env.VITE_BACKEND_PORT;

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3002,
    proxy: { "/api": { target: `http://localhost:${backendPort}` } },
  },
});
