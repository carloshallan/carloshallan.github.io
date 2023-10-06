<template>
  <header>
    <div class="post-preview">
      //preview
      <br />
      title: {{ title }}
      <br />
      snippet: {{ snippet }}
      <br />
      image: {{ imageName }}
      <br />
      endPreview//
    </div>

    <VImg :src="`/blog/${imageName}`" :alt="alt" width="100%" height="auto" />
  </header>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String,
    alt: String,
    imageName: String,
    snippet: String
  },
  name: 'PostHeader'
})
</script>

<style scoped></style>
