import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default {
  preprocess: svelte(),

  kit: {
    // Adapter is not needed if you’re only building a component library.
  },

  vite: defineConfig({
    plugins: [svelte()],

    build: {
      lib: {
        entry: resolve(__dirname, 'index.js'), // Entry file to export components
        name: 'KieComponentLibrary',
        formats: ['es', 'umd'],
        fileName: (format) => `kie-component-library.${format}.js`,
      },
      rollupOptions: {
        // Externalize dependencies to keep bundle size small
        external: ['svelte', 'svelte/internal'],
        output: {
          globals: {
            svelte: 'Svelte',
          },
        },
      },
    },
  }),
};