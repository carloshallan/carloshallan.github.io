<template>
  <nav>
    <router-link
      v-for="(option, index) in options"
      tag="li"
      :key="index"
      :to="option.path"
      active-class="active"
      exact
    >
      {{ option.name }}
    </router-link>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navigator',
  computed: {
    options() {
      return this.$router.options.routes
    },
  },
})
</script>
<style lang="stylus" scoped>
@import '../styles/default'

nav
  a
    color white
    text-decoration none
    transition 0.5s
    position relative

  :not(:last-child)::after
    content '|'
    padding 0 10px

  a.active
    color green
    padding-left 20px

  a::before
    content ">"
    color green
    padding-right 10px
    position absolute
    left -5px
    opacity 0
    transition 0.5s

  a.active::before
    left 0
    opacity 1

  a:hover
    color light-pink
</style>
