<template>
  <div class="gallery">
    <router-link to="work" tag="div" class="row">
      <figure>Image</figure>
      <header>
        <h2>Title 1</h2>
        <p>test 1</p>
      </header>
    </router-link>
    <router-link to="work" tag="div" class="row">
      <figure>Image</figure>
      <header>
        <h2>Title 2</h2>
        <p>test 2</p>
      </header>
    </router-link>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { GalleryItems } from '@/types'

export default Vue.extend({
  name: 'Gallery',
  props: {
    galleryItems: Array as PropType<Array<GalleryItems>>
  }
})
</script>

<style lang="stylus" scoped>
@import '../styles/default.styl'

.gallery
  width 60%
  margin auto
  display flex
  flex-direction column
  flex-wrap wrap
  justify-content center
  align-items center

  .row
    width 100%
    background-color black
    justify-content center
    align-items center
    padding 0
    margin-bottom 50px
    border-radius 20px
    overflow hidden
    gap 0

  figure
    width 100%
    min-height 400px
    background-color blue
    text-align center

  header
    width 100%
    display flex
    flex-direction column
    justify-content center
    align-items center

    h2
      color green
</style>
