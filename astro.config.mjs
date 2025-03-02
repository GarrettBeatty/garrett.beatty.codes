import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://garrett.beatty.codes',
  integrations: [],
  output: 'static',
  build: {
    assets: '_assets'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
}); 