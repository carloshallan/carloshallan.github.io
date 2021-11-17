<template>
  <article>
    <v-slot />
  </article>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  nme: 'postTemplate',
  props: {
    postName: String
  },
  created() {
    console.log(this.postName)
  }
})
</script>
