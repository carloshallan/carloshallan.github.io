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
    transition color 0.5s
    position relative
    font-header()

  :not(:first-child)::before
    content '|'
    padding 0 10px

  a.active
    color green

  a.active::before
    content '->'
    padding 0 10px

  a:hover
    color light-pink
</style>
