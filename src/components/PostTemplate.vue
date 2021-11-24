<template>
  <article>
    <testing />
  </article>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// @tsignore
import Testing from '../views/posts/testing.mdx'

export default defineComponent({
  name: 'postTemplate',
  components: { Testing }
})
</script>
