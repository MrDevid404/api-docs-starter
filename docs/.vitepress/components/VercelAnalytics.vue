<template>
  <!-- Componente vazio - apenas para inicializar o analytics -->
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { inject } from '@vercel/analytics'

onMounted(() => {
  // Inicializa o analytics da Vercel apenas no cliente
  if (typeof window !== 'undefined') {
    inject()
  }
})
</script>
