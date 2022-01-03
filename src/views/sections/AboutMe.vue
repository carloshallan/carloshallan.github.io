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
          Father of two children, husband of an incredible person and, a lover
          of creativity. During working hours, I'm a Full Stack Engineer or UX
          Designer versatile as the titles presented but focused on finding
          comfortable solutions for everyone. When I'm not programming or
          changing diapers, I'm certainly writing or reading another crazy novel
          or playing pokemon with my oldest daughter.
        </p>
        <p>
          In the name of curiosity to have solid knowledge about my work, I
          started to study Software Engineering. The entire set of
          multidisciplinary knowledge brought me broader thinking to solve
          problems, but it was in 2018 that I started to work developing
          pipeline solutions for creative studios and since then I have improved
          in this area as a software engineer who passes Design to ensure a good
          result.
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
import Section from '@/components/Section.vue'
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

@media screen and ({ScreenCondition}: ScreenConditionValue)
  img
    width 200px

@media screen and ({ScreenCondition}: ScreenConditionMobilePortrait)
  h1
    text-align center

  h1::before
    display none
</style>
