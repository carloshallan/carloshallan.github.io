<template>
  <main>
    <h1 class="title">Some Works</h1>
    <Gallery></Gallery>
  </main>
</template>
<script lang="ts">
import Vue from 'vue'
import Gallery from '@/components/Gallery.vue'

export default Vue.extend({
  name: 'WorkPage',
  components: { Gallery }
})
</script>
<style lang="stylus" scoped>
@import '../styles/default.styl'

main
  background-color dark-purple

.title
  text-align center
  padding 100px 0
</style>
