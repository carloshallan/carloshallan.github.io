<template>
  <main>
    <h1 class="title">Some Works</h1>
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
<style lang="stylus" scoped>
.title
  text-align center
  padding 150px 0
</style>
