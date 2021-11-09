<template>
  <div id="slideWrapper">
    <div class="radioGroup">
      <input type="radio" name="radio" />
      <label for="radio" />
      <input type="radio" name="radio" />
      <label for="radio" />
      <input type="radio" name="radio" />
      <label for="radio" />
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
  [type='radio']
    opacity 1
    position relative

  [type='radio'] + label
    width 10px
    height 10px
    position absolute
    top 0
    left 0
    border 5px solid dark
    border-radius 20px
    background-color blue
</style>
