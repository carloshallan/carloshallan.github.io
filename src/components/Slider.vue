<template>
  <div id="slideWrapper">
    <div class="radioGroup">
      <input type="radio" name="radio" id="radio1" checked />
      <label for="radio1" />
      <input type="radio" name="radio" id="radio2" />
      <label for="radio2" />
      <input type="radio" name="radio" id="radio3" />
      <label for="radio3" />
    </div>
    <div class="row">
      <div class="column">
        <h2>Lorem ipsum</h2>
        <p>description</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CustomSlide } from '@/types'

export default defineComponent({
  name: 'Slider',
  props: {
    slides: {
      type: Array as PropType<Array<CustomSlide>>,
    },
  },
})
</script>
<style lang="stylus" scoped>
@import '../styles/default'

#slideWrapper
  position relative

  [type='radio']
    opacity 0

  [type='radio'] + label
    width 22px
    height 22px
    display inline-block
    border 5px solid dark
    border-radius 20px
    background-color light-pink
    cursor pointer

  [type='radio']:checked + label
    background-color green
</style>
