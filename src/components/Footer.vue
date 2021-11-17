<template>
  <footer>
    <p>© 2021 Carlos Hallan All rights reserved.</p>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer'
})
</script>
<style lang="stylus" scoped>
footer
  background-color dark
  text-align center
  padding 20px

  p
    font-size 16px
</style>
