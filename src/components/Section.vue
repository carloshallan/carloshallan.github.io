<template>
  <section :class="`background-${color}`">
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Section',
  props: {
    color: String
  }
})
</script>

<style lang="stylus" scoped>
@import '../styles/default'

section
  position relative
  height auto
  min-height 100vh

  &.background-transparent
    background-color transparent

  &.background-dark
    background-color dark

  &.background-dark-purple
    background-color dark-purple

  &.background-dark-pink
    background-color dark-pink

  &.background-purple
    background-color purple

@media (max-height 768px)
  section
    height auto
    min-height unset
</style>
