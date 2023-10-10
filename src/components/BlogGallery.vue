<template>
  <v-layout row wrap class="blog-gallery">
    <v-flex
      xs12
      sm6
      md4
      lg3
      v-for="(item, index) in $slots.default"
      :key="index"
    >
      <slot :name="item"></slot>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'BlogGallery'
}
</script>

<style scoped>
/* Você pode adicionar estilos adicionais conforme necessário */
</style>
