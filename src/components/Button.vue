<template>
  <button :class="variant" @click="click">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    click: Function,
    variant: String,
  },
})
</script>

<style lang="stylus" scoped>
@import '../styles/default'

button
  background dark-purple
  border 2px solid green
  text-transform uppercase
  color white
  font-size 20px
  FiraCode()

  &.outlined
   color green
   background-color transparent

  &:hover
   background-color light-pink
   border-color light-pink

  &.outlined:hover
   color light-pink
</style>
