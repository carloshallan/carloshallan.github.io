<template>
  <main>
    <Section color="dark">
      <post-template />
    </Section>
  </main>
</template>
<script lang="ts">
import Vue from 'vue'
import Section from '@/components/Section.vue'
import PostTemplate from '@/components/PostTemplate.vue'

export default Vue.extend({
  name: 'PostView',
  components: {
    Section,
    PostTemplate
  }
})
</script>
