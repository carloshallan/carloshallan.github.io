<template>
  <article class="post">
    <slot />
  </article>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'postTemplate'
})
</script>
