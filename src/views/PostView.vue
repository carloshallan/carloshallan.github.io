<template>
  <main>
    <Section color="dark">
      <post-template />
    </Section>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/components/Section.vue'
import PostTemplate from '@/components/PostTemplate.vue'

export default defineComponent({
  name: 'PostView',
  components: {
    Section,
    PostTemplate
  }
})
</script>
