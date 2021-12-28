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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          pellentesque commodo arcu, tincidunt amet, massa, molestie volutpat.
          Erat at eu quam commodo, euismod. Mattis at dictum tempor faucibus
          quam aliquam. Ac quis ultrices facilisi magna eu sed. Feugiat elit
          nunc, nulla lectus interdum suspendisse penatibus nec massa. Mauris
          vestibulum magna diam ultricies mi a. Ac varius gravida lacus nam
          adipiscing dolor lorem sed. Turpis varius vel orci vel consectetur ut
          habitant ac in. A, vivamus arcu senectus tristique eget. Adipiscing
          vel amet, est ac. Nunc diam cursus interdum nulla purus. Nisl
          elementum vulputate feugiat eget gravida. Sagittis lobortis sed
          mauris, volutpat aliquet lacus sit tristique et. Risus et, etiam non a
          ipsum, quis mi erat quis.
        </p>
        <p>
          Tristique quisque enim ut nec, sollicitudin integer. Feugiat nibh
          facilisis leo, volutpat aliquam. Ullamcorper tortor, lorem neque, a
          habitant tincidunt. Mi vestibulum diam iaculis et tellus commodo.
          Consectetur iaculis a vulputate gravida eu non velit at. Arcu
          facilisis elementum accumsan nam sollicitudin magnis risus placerat.
        </p>
        <br />
        <br />
        <Button> Read More </Button>
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
</style>
