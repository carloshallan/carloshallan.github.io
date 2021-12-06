<template>
  <button :class="{ outlined }" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Button',
  props: {
    click: Function,
    outlined: Boolean
  },
  methods: {
    handleClick(event: HTMLElement) {
      this.click(event)
    }
  }
})
</script>

<style lang="stylus" scoped>
@import '../styles/default'

button
  background dark-purple
  border-radius 15px
  border 2px solid green
  text-transform uppercase
  color white
  padding 8px 36px
  font-size 20px
  FiraCode()
  transition 0.3s

  &.outlined
   color green
   background-color transparent

  &:hover
   background-color light-pink
   border-color pink
   cursor pointer

  &.outlined:hover
   color light-pink
   background-color transparent
</style>
