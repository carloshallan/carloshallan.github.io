<template>
  <Section color="dark-pink">
    <div class="row">
      <div class="column">
        <img
          src="../../assets/work-image-bg.png"
          class="figure"
          alt="My work"
        />
        <!-- <slider :slides="slides" /> -->
      </div>
      <div class="column">
        <h1>
          <span class="light-pink">!=</span>
          What <span class="green">I</span> can do?
        </h1>
        <p>Lorem ipsum</p>
        <br />
        <br />
        <Button href="https://carloshallancf68.myportfolio.com/works"
          >See some works</Button
        >
      </div>
    </div>
  </Section>
</template>
<script lang="ts">
import Vue from 'vue'
import Section from '@/components/Section.vue'
// import Slider from '@/components/Slider.vue'
import Button from '@/components/Button.vue'

export default Vue.extend({
  name: 'MyWorks',
  components: { Section, Button },
  data() {
    return {
      slides: [
        {
          order: 3,
          title: 'Product manager',
          description: 'test',
          image: 'test',
          path: require('@/assets/venue-select-scene.png')
        },
        {
          order: 2,
          title: 'Task manager',
          description: 'description 2'
        },
        {
          order: 1,
          title: 'Version Control',
          description: 'description 2'
        }
      ]
    }
  }
})
</script>

<style lang="stylus" scoped>
@import "../../styles/default"

.slides
  display block

h1
  position relative
  text-align right
  padding-bottom 35px
  margin-bottom 25px

h1::before
  titleBorderBottom()
  width: 100px
  background-color pink
  top -25px
  right 0

h1::after
  titleBorderBottom()
  width: 40%
  background-color pink
  right 0
  bottom 0
  z-index 6

.row
  justify-content space-between
  align-content center
  padding 120px

  @media screen and ({ScreenCondition}: ScreenConditionValue)
    padding 50px 10%

    h1::after
      width 100%

  .column:first-child
    width 60%

  .column
    width 100%

    .figure
      width 100%
</style>
