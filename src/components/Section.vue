<template>
  <section>
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Section',
})
</script>

<style lang="stylus" scoped>
section
  position relative
  height 100vh

@media (max-height 500px)
  section
    height auto
</style>
