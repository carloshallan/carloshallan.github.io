<template>
  <div class="gallery">
    <router-link v-slot="{ navigate }" to="/work" custom>
      <div class="row" @click="navigate">
        <figure>Image</figure>
        <header>
          <h2>Title 1</h2>
          <p>test 1</p>
        </header>
      </div>
    </router-link>
    <router-link v-slot="{ navigate }" to="/work" custom>
      <div class="row" @click="navigate">
        <figure>Image</figure>
        <header>
          <h2>Title 2</h2>
          <p>test 2</p>
        </header>
      </div>
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { GalleryItems } from '@/types'

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
