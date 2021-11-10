<template>
  <Section color="dark-pink">
    <div class="row">
      <div class="column">
        <h1>
          <span class="light-pink">!=</span>
          What <span class="green">I</span> can do?
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <slider />
      </div>
    </div>
  </Section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/components/Section.vue'
import Slider from '@/components/Slider.vue'

export default defineComponent({
  name: 'MyWorks',
  components: { Section, Slider },
})
</script>

<style lang="stylus" scoped>
@import "../../styles/default"

h1
  position relative
  text-align right
  padding-bottom 35px
  margin-bottom 25px

h1:before
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
  flex-direction column
  justify-content space-around
  gap 0
  padding-bottom 0

.row:last-child
  padding 20px 120px 0 0
</style>
