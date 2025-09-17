import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [tailwindcss()],
  css: {
    postcss: {
      plugins: []
    }
  },
  optimizeDeps: {
    include: [
      '@vueuse/core',
      '@vueuse/motion',
      'motion-v',
      'clsx',
      'tailwind-merge',
      'class-variance-authority'
    ],
    exclude: [
      '@scalar/api-reference'
    ]
  },
  ssr: {
    noExternal: ['@vueuse/core', '@vueuse/motion', 'motion-v']
  },
  build: {
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      }
    }
  }
})
