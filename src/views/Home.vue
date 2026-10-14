<template>
  <div>
    <presentation />
    <template v-if="writerMode">
      <writer-books-sold />
      <writer-about />
      <writer-events />
      <writer-books />
      <back-to-dev-button />
    </template>
    <template v-else>
      <my-works />
      <work-timeline />
      <films-section />
      <education-section />
      <about-me />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Presentation from './sections/Presentation.vue'
import AboutMe from './sections/AboutMe.vue'
import MyWorks from './sections/MyWorks.vue'
import WorkTimeline from './sections/WorkTimelineSection.vue'
import EducationSection from './sections/EducationSection.vue'
import FilmsSection from './sections/FilmsSection.vue'
import WriterAbout from './sections/writer/WriterAbout.vue'
import WriterBooksSold from './sections/writer/WriterBooksSold.vue'
import WriterBooks from './sections/writer/WriterBooks.vue'
import WriterEvents from './sections/writer/WriterEvents.vue'
import BackToDevButton from '@/components/BackToDevButton.vue'
import { writerMode } from '@/composables/writerMode'

export default defineComponent({
  name: 'Home',
  components: {
    Presentation,
    AboutMe,
    MyWorks,
    WorkTimeline,
    EducationSection,
    FilmsSection,
    WriterAbout,
    WriterBooks,
    WriterBooksSold,
    WriterEvents,
    BackToDevButton
  },
  setup() {
    return { writerMode }
  },
  // O lado escritor só existe na home; ao sair dela, o site volta ao normal
  beforeRouteLeave() {
    writerMode.value = false
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
