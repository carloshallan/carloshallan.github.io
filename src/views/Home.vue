<template>
  <div>
    <presentation />
    <about-me />
    <my-works />
    <work-timeline />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Presentation from './sections/Presentation.vue'
import AboutMe from './sections/AboutMe.vue'
import MyWorks from './sections/MyWorks.vue'
import WorkTimeline from './sections/WorkTimelineSection.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    Presentation,
    AboutMe,
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

  @media screen and ({ScreenCondition}: ScreenConditionValue)
    display none
</style>
