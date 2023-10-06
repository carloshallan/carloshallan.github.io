<template>
  <article class="post">
    <slot />
  </article>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'postTemplate'
})
</script>
