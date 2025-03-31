import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/productivity/',
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 2%')),
      cssModules: {
        pattern: '[name]-[hash]-[local]'
      }
    }
  },
  build: {
    cssMinify: 'lightningcss'
  }
})
