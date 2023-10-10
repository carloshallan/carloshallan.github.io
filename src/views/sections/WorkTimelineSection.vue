<template>
  <Section color="dark-purple" class="workTimelineSection">
    <div class="row">
      <div class="column">
        <h1>
          <span class="light-pink">>=</span>
          <span class="green">Where</span> have I been?
        </h1>
      </div>
      <div class="column">
        <work-timeline :jobs="jobs" />
      </div>
    </div>
  </Section>
</template>
<script lang="ts">
import Vue from 'vue'
import Section from '@/layouts/SectionLayout.vue'
import WorkTimeline from '@/components/Timeline.vue'
import ListOfJobs from './jobs'
import { Job } from '@/types'

const jobs: Array<Job> = ListOfJobs

export default Vue.extend({
  name: 'WorkTimelineSection',
  components: {
    Section,
    WorkTimeline
  },
  data() {
    return {
      jobs
    }
  }
})
</script>
<style lang="stylus" scoped>
h1
  text-align right

.row
  flex-direction column

  .column:last-child
    display flex
    align-items center
    justify-content center

  @media screen and ({ScreenCondition}: ScreenConditionValue)
    padding 40px
</style>
