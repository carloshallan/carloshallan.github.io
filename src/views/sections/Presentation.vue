<template>
  <Section color="transparent">
    <div class="presentation">
      <Profile class="profile" />
      <div class="titleGroup">
        <h1>I'm Carlos <span class="green">Hallan</span></h1>
        <div class="subtitle">
          A Pipeline
          <span class="light-pink">UI/UX Designer</span>
          and
          <span class="light-purple">Full Stack Engineer</span>
        </div>
      </div>
      <div class="buttonGroup">
        <Button>see my works</Button> <Button outlined>about me</Button>
      </div>
      <mouse-icon />
    </div>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'
import Section from '@/components/Section.vue'
import Profile from '@/components/icons/Profile.vue'
import Button from '@/components/Button.vue'
import MouseIcon from '@/components/icons/Mouse.vue'

export default Vue.extend({
  name: 'Presentation',
  components: { Section, Profile, Button, MouseIcon }
})
</script>
<style lang="stylus">
@import "../../styles/default"

.presentation
   padding: 100px 0
   background dark
   display flex
   align-items center
   justify-content center
   flex-direction column
   gap 60px

   @media screen and ({ScreenCondition}: ScreenConditionValue)
     text-align center

     .profile
       width 171px
       height auto

      .subtitle
        padding 10px 40px

.buttonGroup
   display flex
   gap 20px
</style>
