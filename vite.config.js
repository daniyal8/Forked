import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Forked',
        short_name: 'Forked',
        description: 'Not Sure Whats for Dinner? Forked has you covered. Just list your ingredients and discover tasty recipes instantly!',
        theme_color: '#28A745',
        background_color: '#DFF4E2',
        icons: [
          {
            src: 'icons/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
