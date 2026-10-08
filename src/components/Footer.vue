<template>
  <footer>
    <p>© 2014–{{ year }} Carlos Hallan. {{ $t('footer.rights') }}</p>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
  data() {
    return { year: new Date().getFullYear() }
  }
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
