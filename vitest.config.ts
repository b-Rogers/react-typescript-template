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
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80,
      },
    },
  },
});
