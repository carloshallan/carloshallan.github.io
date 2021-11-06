<template>
  <Section color="transparent">
    <div class="presentation">
      <Profile />
      <h1>I'm Carlos <span class="green">Hallan</span></h1>
      <div class="subtitle">
        A Pipeline
        <span class="light-pink">UI/UX Designer</span>
        and
        <span class="light-purple">Full Stack Engineer</span>
      </div>
      <div class="buttonGroup">
        <Button>see my works</Button>
        <Button outlined>about me</Button>
      </div>
    </div>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/components/Section.vue'
import Profile from '@/components/icons/Profile.vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  name: 'Presentation',
  components: { Section, Profile, Button },
})
</script>
<style lang="stylus">
@import "../../styles/default"

.presentation
   background dark
   display flex
   align-items center
   justify-content center
   flex-direction column
</style>
