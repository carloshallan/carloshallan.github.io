<template>
  <div>
    <background-timeline-icon class="timelineIcon" />
    <presentation />
    <about-me />
    <my-works />
    <work-timeline />
    <footer>
      <p>© 2021 Carlos Hallan All rights reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Presentation from './sections/Presentation.vue'
import AboutMe from './sections/AboutMe.vue'
import MyWorks from './sections/MyWorks.vue'
import BackgroundTimelineIcon from '@/components/icons/BackgroundTimelineIcon.vue'
import WorkTimeline from './sections/WorkTimelineSection.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Presentation,
    AboutMe,
    BackgroundTimelineIcon,
    MyWorks,
    WorkTimeline
  }
})
</script>

<style lang="stylus" scoped>

.timelineIcon
  width auto
  height 3044px
  position absolute
  right 0
  top 300px
  z-index 7

footer
  background-color dark
  text-align center
  padding 20px
  p
    font-size 16px
</style>
