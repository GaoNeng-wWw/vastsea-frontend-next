import Vue from 'unplugin-auto-import/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [Vue({
    imports: ['vue'],
  })],
  test: {
    globals: true,
  },
});
