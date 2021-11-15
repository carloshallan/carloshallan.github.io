<template>
  <div class="gallery">
    <div class="column">
      <header>
        <h2>Title 1</h2>
        <p>test 1</p>
      </header>
      <figure>Image</figure>
    </div>
    <div class="column">
      <header>
        <h2>Title 2</h2>
        <p>test 2</p>
      </header>
      <figure>Image</figure>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { GalleryItems } from '@/types'

export default defineComponent({
  name: 'Gallery',
  props: {
    galleryItems: Array as PropType<Array<GalleryItems>>
  }
})
</script>

<style lang="stylus" scoped>
@import '../styles/default.styl'

.gallery
  background-color light-pink
  width 40%
  margin auto
  display flex
  flex-wrap wrap
  justify-content space-around
  align-items center

.column
  background-color pink
  display flex
  justify-content center
  align-items center

  figure
    width 70%
    background-color blue
    text-align center
</style>
