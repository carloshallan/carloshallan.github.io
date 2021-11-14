<template>
  <main>
    <Gallery></Gallery>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Gallery from '@/components/Gallery.vue'

export default defineComponent({
  name: 'WorkPage',
  components: { Gallery }
})
</script>
