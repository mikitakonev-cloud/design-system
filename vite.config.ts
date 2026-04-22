import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

const isStorybook = process.env.STORYBOOK === 'true';

export default defineConfig({
  plugins: [
    react(),
    !isStorybook && dts({ include: ['src'] }),
  ].filter(Boolean) as ReturnType<typeof react>[],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MikeDesignSystem',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'es' : 'cjs'}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsx',
        },
      },
    },
    cssCodeSplit: false,
  },
});
