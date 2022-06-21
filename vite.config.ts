import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from '@crxjs/vite-plugin'
import zip from 'rollup-plugin-zip'

import manifest from './src/manifest.json'
import pkg from './package.json'

const isProd = process.env.NODE_ENV === 'production'

const iconPath = `src/icons/icon.png`

const crxOptions = {
  manifest: Object.assign(manifest, {
    version: pkg.version,
    description: pkg.description,
    icons: {
      16: iconPath,
      48: iconPath,
      128: iconPath,
    },
  }),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), crx(crxOptions), isProd && zip({ dir: 'releases' })],
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  build: {
    outDir: isProd ? 'dist/build' : 'dist/dev'
  },
})
