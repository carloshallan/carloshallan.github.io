<template>
  <div>
    <Presentation />
    <AboutMe />
    <background-timeline-icon class="timelineIcon" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Presentation from './sections/Presentation.vue'
import AboutMe from './sections/AboutMe.vue'
import BackgroundTimelineIcon from '@/components/icons/BackgroundTimelineIcon.vue'

export default defineComponent({
  name: 'Home',
  components: { Presentation, AboutMe, BackgroundTimelineIcon },
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
</style>
