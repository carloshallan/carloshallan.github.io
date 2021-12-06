<template>
  <article>
    <testing />
  </article>
</template>
<script lang="ts">
import Vue from 'vue'
import Testing from '../views/posts/testing.mdx'

export default Vue.extend({
  name: 'postTemplate',
  components: { Testing }
})
</script>
