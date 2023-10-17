import { crx, defineManifest } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'

const manifest = defineManifest({
  manifest_version: 3,
  name: 'Month name to Number',
  version: '1.0.0',
  action: {
    default_popup: 'index.html',
  },
  content_scripts: [
    {
      matches: ['https://*/*', 'http://localhost/*'],
      js: ['src/content/script.ts'],
    },
  ],
  permissions: ['tabs'],
})

export default defineConfig({
  plugins: [react(), crx({ manifest }), viteTsConfigPaths()],
  server: {
    watch: {
      usePolling: true,
    },
    // error回避のため
    hmr: { port: 5555 },
  },
})
