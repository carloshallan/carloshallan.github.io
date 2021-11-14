<template>
  <div class="gallery">
    <h1>Gallery title</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PostGallery'
})
</script>

<style lang="stylus" scoped>
.gallery
  background-color light-pink
  width 100%
  height 300px
  display block
</style>
