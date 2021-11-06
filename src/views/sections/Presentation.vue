<template>
  <Section color="transparent">
    <figure>
      <Profile />
      <h1>I'm Carlos <span>Hallan</span></h1>
      <figcaption>A Pipeline Engineer and UI/UX Designer</figcaption>
    </figure>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/components/Section.vue'
import Profile from '@/components/icons/Profile.vue'

export default defineComponent({
  name: 'Presentation',
  components: { Section, Profile },
})
</script>
<style lang="stylus">
@import "../../styles/default"

figure
   background dark
   display flex
   align-items center
   justify-content center
   flex-direction column
</style>
