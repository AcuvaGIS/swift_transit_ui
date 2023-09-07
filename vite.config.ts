import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

const isDevelopment = process.env.MODE === 'development';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: isDevelopment,
      },
      // Cache all the imports
      workbox: {
        globPatterns: ["**/*"],
      },
      // Cache all the static assets in the public folder
      includeAssets: [
        "**/*",
      ],
      manifest: {
        "theme_color": "#f69435",
        "background_color": "#f69435",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "short_name": "swift transit",
        "description": "web pwa:: swift transit",
        "name": "swift transit ui",
      },
    }),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@api", replacement: "/src/api" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@constants", replacement: "/src/constants" },
      { find: "@core", replacement: "/src/core" },
      { find: "@layouts", replacement: "/src/layouts" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@types", replacement: "/src/types" },
    ],
  },
});


/** TODO: Configure Service Worker
 * 
 * GUIDING DOCS: https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html
 */