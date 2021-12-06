<template>
  <div id="slideWrapper">
    <div class="radioGroup">
      <div v-for="(slide, index) in slides" :key="index">
        <input
          type="radio"
          name="radio"
          :id="`radio${index}`"
          :checked="index === 0"
          @change="nextSlide(slide)"
        />
        <label :for="`radio${index}`" />
      </div>
    </div>
    <div class="row">
      <div class="column slides" :style="{ top: `${20 * slides.length}px` }">
        <figure
          v-for="(slide, index) in slides"
          :key="index"
          :class="{
            [colors[index]]: true,
            currentSlide: currentSlide === slide.order
          }"
          :ref="`slide-${slide.order}`"
          :style="{
            right: `${getPosition(index)}`,
            top: getPosition(index),
            'z-index': `${slide.order}`
          }"
        >
          <img v-if="slide.path" :src="slide.path" :alt="slide.title" />
        </figure>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { CustomSlide } from '@/types'

export default Vue.extend({
  name: 'Slider',
  props: {
    slides: {
      type: Array as PropType<Array<CustomSlide>>
    }
  },
  data() {
    return {
      colors: ['light-pink', 'light-purple', 'green'],
      currentSlide: 3
    }
  },
  methods: {
    getPosition(index: number) {
      return `${20 * index}px`
    },
    nextSlide(slide: CustomSlide) {
      const refName = `slide-${slide.order}`
      console.log(slide.order, this.$refs[refName])
      this.currentSlide = slide.order
    }
  }
})
</script>
<style lang="stylus" scoped>
@import '../styles/default.styl'

#slideWrapper
  min-height 80vh
  position relative
  display: flex
  justify-content: center
  align-items center
  flex-direction column

  .radioGroup
    display: none
    justify-content: center
    align-items: center
    width 100%

  [type='radio']
    opacity 0

  [type='radio'] + label
    width 22px
    height 22px
    display inline-block
    border 5px solid dark
    border-radius 20px
    background-color light-pink
    cursor pointer

  [type='radio']:checked + label
    background-color green

  .row
    justify-content space-between
    padding 0

.slides
  position absolute
  width 90%
  height 450px
  left -50px

figure
  display block
  width inherit
  height inherit
  border-radius 20px
  position absolute
  transition 1s
  cardShadow()

  &.light-purple
    background-color light-purple

  &.pink
    background-color pink

  &.light-pink
    background-color light-pink

  &.green
    background-color green

  img
    width 100%
    height auto
    position relative
    top -30px
    left 20px
</style>
