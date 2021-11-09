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
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Slide',
})
</script>
<style lang="stylus" scoped>
@import '../styles/default'

#slideWrapper
  position relative

  [type='radio']
    opacity 0

  [type='radio'] + label
    width 25px
    height 25px
    display inline-block
    border 5px solid dark
    border-radius 20px
    background-color blue
    cursor pointer

  [type='radio']:checked + label
    background-color green
</style>
