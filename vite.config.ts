import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
// import tailwindcss from '@tailwindcss/vite' // Remove Tailwind CSS plugin import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // tailwindcss(), // Remove Tailwind CSS plugin
  ],
});
