<template>
  <Section color="dark-pink"> test </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/components/Section.vue'

export default defineComponent({
  name: 'AboutMe',
  components: { Section },
})
</script>

<style lang="stylus">
@import '../../styles/default'
</style>
