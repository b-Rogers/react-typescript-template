/// <reference types="vitest" />
import { defineConfig, configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    setupFiles: ['./vitest-setup.ts'],
    globals: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude],
    coverage: {
      exclude: [
        '.prettierrc.js',
        'eslint.config.js',
        'routeTree.gen.ts',
        'src/routes/*',
        'src/index.tsx',
        'vite*',
        'dist/*',
      ],
      reporter: ['text', 'json', 'json-summary'],
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80,
      },
    },
  },
});
