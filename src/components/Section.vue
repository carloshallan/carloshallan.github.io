<template>
  <section :class="`background-${color}`">
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Section',
  props: {
    color: String,
  },
})
</script>

<style lang="stylus" scoped>
@import '../styles/default'

section
  position relative
  height auto

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

@media (max-height 500px)
  section
    height auto
</style>
