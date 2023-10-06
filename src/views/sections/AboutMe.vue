<template>
  <Section class="AboutMe" color="dark-purple">
    <div class="row">
      <div class="column">
        <img src="../../assets/PixelProfileImg.png" />
      </div>
      <div class="column">
        <h1>
          <span class="blue">==</span> About <span class="green">Me</span>
        </h1>
        <p>
          Father of 3 amazing kids and husband to an inspirational soul. In
          another part of my life, I am a Software Engineer with a passion for
          crafting solutions rooted in Design. I'm fascinated by the
          intersection of psychology and design, and nothing fulfills me more
          than witnessing an idea positively impacting people’s lives..
        </p>
        <p>
          In my free time, you can either find me concocting a new adventure
          with my kids or penning the chapters of my next novel. Writing fuels
          my spirit, and I’ve been channeling this energy into a personal
          software project I’ve dubbed “Momo.” It’s a creative writing project
          management tool (crafted with Typescript, React, and Rust) aiming to
          streamline my novel publishing process.
        </p>
        <p>
          My journey into the world of Software Engineering began in pursuit of
          solid, foundational knowledge. Since diving into this field in 2014,
          my multidisciplinary learning has broadened my problem-solving
          horizons. I’m perpetually exploring new languages, tools, and anything
          promising to elevate my current projects.
        </p>
        <p>
          I’m a lifelong learner, a storyteller, an engineer, but above all, a
          dedicated father and husband. Every role I embody is a piece of the
          intricate puzzle that builds the multifaceted person I am today.
        </p>
        <br />
        <br />
        <Button href="https://medium.com/@carloshallan">
          Read More in Medium
        </Button>
      </div>
    </div>
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'
import Section from '@/layouts/SectionLayout.vue'
import Button from '@/components/Button.vue'

export default Vue.extend({
  name: 'AboutMe',
  components: { Section, Button }
})
</script>

<style lang="stylus" scoped>
@import '../../styles/default'

h1
  position relative
  text-align right
  padding-bottom 35px
  margin-bottom 25px

h1::before
  titleBorderBottom()
  width 100px
  background-color #5858BB
  top 50%
  left 0
  transform translate(0, -50%)

h1::after
  titleBorderBottom()
  width 105%
  background-color #5858BB
  left 0
  bottom 0
  z-index 6

img
  width 500px
  height auto

.column:first-child
  align-self: center

@media screen and ({ScreenCondition}: ScreenConditionValue)
  img
    width 200px

@media screen and ({ScreenCondition}: ScreenConditionMobilePortrait)
  h1
    text-align center

  h1::before
    display none
</style>
