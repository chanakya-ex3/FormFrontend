import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import pwa from 'vite-plugin-pwa' // Import the PWA plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    pwa({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Your App Name',
        short_name: 'App Short Name',
        description: 'A description of your app',
        theme_color: '#ffffff', // Background color
        icons: [
          {
            src: '/vite.svg',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
