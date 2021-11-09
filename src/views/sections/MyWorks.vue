<template>
  <Section color="dark-pink">
    <div class="row">
      <div class="column">
        <slide />
      </div>
      <div class="column">
        <h1>
          <span class="light-pink">!=</span>
          What <span class="green">I</span> can do?
        </h1>
        <p>Lorem ipsum</p>
      </div>
    </div>
  </Section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/components/Section.vue'
import Slide from '@/components/Slide.vue'

export default defineComponent({
  name: 'MyWorks',
  components: { Section, Slide },
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
  width: 100%
  background-color pink
  right 0
  bottom 0
  z-index 6

.row
  justify-content space-between
</style>
