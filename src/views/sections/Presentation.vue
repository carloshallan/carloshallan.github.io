<template>
  <Section color="transparent">
    <div class="presentation">
      <Profile class="profile" />
      <div class="titleGroup">
        <h1>
          I'm Carlos
          <span class="green">Hallan</span>
        </h1>
        <div class="subtitle">
          <span class="light-pink">Software Engineer</span>
          <span class="separator"> · </span>
          <span class="light-purple">Indie Founder</span>
          <span class="separator"> · </span>
          <span class="green">Writer</span>
        </div>
      </div>
      <div class="buttonGroup">
        <router-link to="/work">
          <Button> see my works </Button>
        </router-link>
        <Button :outlined="true" href="https://medium.com/@carloshallan"
          >about me</Button
        >
      </div>
      <mouse-icon />
    </div>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'
import Section from '@/layouts/SectionLayout.vue'
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

  .subtitle
    text-align center

  .separator
    color light-purple
    opacity 0.4

  @media screen and ({ScreenCondition}: ScreenConditionValue)
    text-align center

    .profile
      width 171px
      height auto

    .subtitle
      padding 10px 40px

  @media screen and ({ScreenCondition}: ScreenConditionMobilePortrait)
    .buttonGroup
      flex-direction column

.buttonGroup
   display flex
   gap 20px
</style>
