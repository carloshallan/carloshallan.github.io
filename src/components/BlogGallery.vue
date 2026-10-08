<template>
  <v-row class="blog-gallery">
    <v-col cols="12" sm="6" md="4" lg="3">
      <slot />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BlogGallery'
})
</script>

<style scoped>
/* Você pode adicionar estilos adicionais conforme necessário */
</style>
