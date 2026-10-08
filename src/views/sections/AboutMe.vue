<template>
  <Section class="AboutMe" color="dark">
    <div class="row">
      <div class="column">
        <img src="../../assets/PixelProfileImg.png" />
      </div>
      <div class="column">
        <h1>
          <span class="blue">==</span> {{ $t('about.title') }}
          <span class="green">{{ $t('about.titleHighlight') }}</span>
        </h1>
        <p>{{ $t('about.paragraph1') }}</p>
        <p>{{ $t('about.paragraph2') }}</p>
        <br />
        <br />
        <Button href="https://medium.com/@carloshallan">
          {{ $t('about.cta') }}
        </Button>
      </div>
    </div>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/layouts/SectionLayout.vue'
import Button from '@/components/Button.vue'

export default defineComponent({
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
