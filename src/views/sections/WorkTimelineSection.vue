<template>
  <Section class="workTimelineSection">
    <div class="row">
      <div class="column">
        <h1><span class="green">Where</span> have I been?</h1>
      </div>
      <div class="column">
        <work-timeline />
      </div>
    </div>
  </Section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/components/Section.vue'
import WorkTimeline from '@/components/Timeline.vue'

export default defineComponent({
  name: 'WorkTimelineSection',
  components: {
    Section,
    WorkTimeline
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
</style>
