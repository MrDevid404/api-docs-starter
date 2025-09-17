<template>
  <div v-if="shouldRender" class="scalar-api-container">
    <ApiReference
      :key="themeKey"
      :configuration="scalarConfig"
      @error="handleError"
    >
      <template #footer>
        </template>
    </ApiReference>
  </div>
  <div v-else class="loading">
    <div class="loading-spinner"></div>
    <p>Carregando documentação da API...</p>
  </div>
</template>

<script setup>
import { inBrowser, useData } from 'vitepress'
import { computed, onMounted, ref, watchEffect, defineAsyncComponent } from 'vue'

// Dynamic import for Scalar API Reference to reduce initial bundle size
const ApiReference = defineAsyncComponent({
  loader: () => import('@scalar/api-reference').then(module => module.ApiReference),
  loadingComponent: {
    template: `
      <div class="loading">
        <div class="loading-spinner"></div>
        <p>Carregando documentação da API...</p>
      </div>
    `
  },
  errorComponent: {
    template: `
      <div class="error">
        <p>Erro ao carregar a documentação da API. Tente recarregar a página.</p>
      </div>
    `
  },
  delay: 200,
  timeout: 10000
})

const props = defineProps({
  specUrl: {
    type: String,
    default: '/openapi-pt-br.json',
    validator: (value) => value && typeof value === 'string'
  },
})

const { isDark } = useData()
const isMounted = ref(false)

// Reactive key that forces component recreation on theme change. Essential!
const themeKey = computed(() => (isDark.value ? 'dark' : 'light'))

// Optimized configuration for complete integration with VitePress theme
const scalarConfig = computed(() => ({
  spec: {
    url: props.specUrl,
  },
  // 1. Usamos 'none' para desativar os temas do Scalar e construir o nosso via CSS
  theme: 'none',
  // 2. We don't load Scalar's default fonts since we already have our own
  withDefaultFonts: false,
  // 3. The theme selector is VitePress's, so we hide Scalar's
  hideDarkModeButton: true,
  layout: 'modern',
  showSidebar: true,
  searchHotKey: 'k',
  metaData: {
    title: 'API Documentation Starter',
    description: 'Interactive API reference with modern documentation features',
  },
  // Removemos o customCss daqui para centralizar tudo no bloco <style>
}))

const shouldRender = computed(() => inBrowser && isMounted.value)

const handleError = (err) => {
  console.error('Erro no componente ScalarApi:', err)
}

onMounted(() => {
  if (!inBrowser) return
  // Performance optimization to mount the heavy component
  if (window.requestIdleCallback) {
    window.requestIdleCallback(() => { isMounted.value = true })
  } else {
    setTimeout(() => { isMounted.value = true }, 0)
  }
})

watchEffect(() => {
  if (isMounted.value) {
    console.log(`[Scalar] Tema sincronizado com VitePress: ${themeKey.value}`)
  }
})
</script>

<style scoped>
/* Scoped styles for container and loading, as you already had */
.scalar-api-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  gap: 1rem;
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--vp-c-bg-mute);
  border-top: 3px solid var(--vp-c-brand-1);
  border-radius: 50%;
  animation: spin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
  box-shadow: var(--vp-shadow-1);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<style>
/* Global styles to reset page layout and integrate Scalar */
.VPDoc {
  padding: 0 !important;
}
.VPDoc .container {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}
.VPDocFooter {
  display: none;
}

/* =======================================================================
  CUSTOM SCALAR THEME - DEEP INTEGRATION WITH VITEPRESS
=======================================================================
*/
.scalar-api-reference {
  /* === GLOBAL VARIABLES MAPPING === */
  /* Typography: Uses VitePress theme fonts */
  --scalar-font: var(--vp-font-family-body, 'Poppins', sans-serif);
  --scalar-font-code: var(--vp-font-family-mono, monospace);
  --scalar-heading-font: var(--vp-font-family-heading, 'Hepta Slab', serif);

  /* Base colors (light and dark handled by VitePress .dark selector) */
  --scalar-color-1: var(--vp-c-text-1);
  --scalar-color-2: var(--vp-c-text-2);
  --scalar-color-3: var(--vp-c-text-3);
  --scalar-color-accent: var(--vp-c-brand-1);

  /* Backgrounds */
  --scalar-background-1: var(--vp-c-bg);
  --scalar-background-2: var(--vp-c-bg-alt);
  --scalar-background-3: var(--vp-c-bg-soft);
  --scalar-background-accent: var(--vp-c-brand-soft);

  /* Borders and Radius (Apple-like) */
  --scalar-border-color: var(--vp-c-border);
  --scalar-border-radius: var(--vp-radius-md);
  --scalar-border-radius-lg: var(--vp-radius-lg);

  /* Shadows (Apple-like) */
  --scalar-shadow-1: var(--vp-shadow-1);
  --scalar-shadow-2: var(--vp-shadow-2);
  --scalar-shadow-3: var(--vp-shadow-3);

  /* HTTP method colors */
  --scalar-color-green: #34c759;
  --scalar-color-red: #ff3b30;
  --scalar-color-orange: #ff9500;
  --scalar-color-blue: #007aff;
  --scalar-color-purple: #af52de;
  --scalar-color-yellow: #ffcc00;

  /* === SIDEBAR STYLING (to match VitePress sidebar) === */
  --scalar-sidebar-background-1: var(--vp-c-bg-alt);
  --scalar-sidebar-border-color: var(--vp-c-divider);
  --scalar-sidebar-color-1: var(--vp-c-text-1);
  --scalar-sidebar-color-2: var(--vp-c-text-2);
  --scalar-sidebar-color-active: var(--vp-c-brand-1);
  --scalar-sidebar-item-hover-background: var(--vp-c-brand-soft);
  --scalar-sidebar-item-active-background: var(--vp-c-brand-soft);
  --scalar-sidebar-search-background: var(--vp-c-bg-soft);
  --scalar-sidebar-search-border-color: var(--vp-c-border);
  --scalar-sidebar-search-color: var(--vp-c-text-2);
}

/* Apply title font to Scalar headings */
.scalar-api-reference .scalar-heading {
  font-family: var(--scalar-heading-font);
}

/* === INTERNAL COMPONENTS POLISHING (Apple-like) === */

/* Inputs and Search Button */
.scalar-api-reference .scalar-search-input,
.scalar-api-reference .scalar-input-base {
  border-radius: var(--vp-radius-md) !important;
  border: 1px solid var(--scalar-border-color) !important;
  box-shadow: var(--vp-shadow-1) !important;
  transition: all 150ms var(--vp-ease-out) !important;
}
.scalar-api-reference .scalar-search-input:focus,
.scalar-api-reference .scalar-input-base:focus-within {
  border-color: var(--scalar-color-accent) !important;
  box-shadow: 0 0 0 3px var(--scalar-background-accent), var(--vp-shadow-2) !important;
}

/* Buttons */
.scalar-api-reference .scalar-button {
  border-radius: var(--vp-radius-md) !important;
  font-weight: 500 !important;
  box-shadow: var(--vp-shadow-1) !important;
  transition: all 150ms var(--vp-ease-out) !important;
  will-change: transform, box-shadow;
}
.scalar-api-reference .scalar-button:hover {
  transform: translateY(-1px);
  box-shadow: var(--vp-shadow-2) !important;
}
.scalar-api-reference .scalar-button:active {
  transform: translateY(0);
}

/* Cards (Endpoints, Models) */
.scalar-api-reference .scalar-card,
.scalar-api-reference .endpoint-card {
  border-radius: var(--vp-radius-lg) !important;
  box-shadow: var(--vp-shadow-1) !important;
  transition: all 250ms var(--vp-ease-out) !important;
  will-change: transform, box-shadow;
}
.scalar-api-reference .scalar-card:hover,
.scalar-api-reference .endpoint-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--vp-shadow-2) !important;
}

/* Code Blocks */
.scalar-api-reference .scalar-code-block,
.scalar-api-reference .scalar-code-block pre {
  border-radius: var(--vp-radius-md) !important;
}

/* Custom scrollbar to match your theme */
.scalar-api-reference ::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.scalar-api-reference ::-webkit-scrollbar-track {
  background: var(--vp-c-bg-soft);
}
.scalar-api-reference ::-webkit-scrollbar-thumb {
  background: var(--vp-c-text-3);
  border-radius: var(--vp-radius-sm);
}
.scalar-api-reference ::-webkit-scrollbar-thumb:hover {
  background: var(--vp-c-text-2);
}
</style>
