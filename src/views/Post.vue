<template>
  <main>
    <Section color="dark">
      <post post-name="about-me" />
    </Section>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/components/Section.vue'
import Post from '@/components/Post.vue'

export default defineComponent({
  name: 'PostView',
  components: {
    Section,
    Post
  }
})
</script>
