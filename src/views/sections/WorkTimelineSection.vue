<template>
  <Section color="dark-purple" class="workTimelineSection">
    <div class="row">
      <div class="column">
        <h1>
          <span class="light-pink">>=</span>
          <span class="green">{{ $t('timeline.title') }}</span>
          {{ $t('timeline.titleRest') }}
        </h1>
      </div>
      <div class="column">
        <work-timeline :jobs="jobs" />
      </div>
    </div>
  </Section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/layouts/SectionLayout.vue'
import WorkTimeline from '@/components/Timeline.vue'
import { getJobs } from './jobs'

export default defineComponent({
  name: 'WorkTimelineSection',
  components: {
    Section,
    WorkTimeline
  },
  computed: {
    jobs() {
      return getJobs(this.$i18n.locale)
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
