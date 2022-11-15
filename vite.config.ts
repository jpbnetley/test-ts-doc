import { defineConfig } from 'vite';
import path from 'path'

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [],
  resolve: {
  },
  build: {
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'test-ts-doc',
    }
  },
});