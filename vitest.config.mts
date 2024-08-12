import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
    exclude: ['./node_modules/**', './test/playwright-e2e/**'],
  },
})
