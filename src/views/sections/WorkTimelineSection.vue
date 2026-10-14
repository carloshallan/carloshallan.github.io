<template>
  <Section
    id="experience"
    ref="section"
    color="dark-purple"
    class="workTimelineSection"
  >
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
    <Transition name="fade">
      <a
        v-show="showResumeButton"
        class="resumeButton"
        :href="resumeFile"
        rel="noopener"
        download
      >
        <v-icon>mdi-file-pdf-box</v-icon>
        {{ $t('timeline.downloadResume') }}
      </a>
    </Transition>
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
  data: () => ({
    showResumeButton: false,
    observer: null as IntersectionObserver | null
  }),
  computed: {
    resumeFile(): string {
      return this.$i18n.locale === 'pt-BR'
        ? '/carloshallan-resume-pt-br.pdf'
        : '/carloshallan-resume-en.pdf'
    },
    jobs() {
      return getJobs(this.$i18n.locale)
    }
  },
  // O botão de baixar o currículo só aparece enquanto a seção está na tela
  mounted() {
    const section = (this.$refs.section as { $el: HTMLElement }).$el
    // A margem ignora as bordas da tela, onde a seção ainda aparece por
    // trás do cabeçalho fixo mesmo depois que a próxima já ocupa a tela
    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.showResumeButton = entry.isIntersecting
      },
      { rootMargin: '-20% 0px -20% 0px' }
    )
    this.observer.observe(section)
  },
  beforeUnmount() {
    this.observer?.disconnect()
  }
})
</script>
<style lang="stylus" scoped>
@import '../../styles/default'

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

.resumeButton
  position fixed
  right 30px
  bottom 30px
  z-index 20
  display flex
  align-items center
  gap 8px
  background dark-purple
  border 2px solid green
  border-radius 15px
  color white
  text-decoration none
  text-transform uppercase
  padding 10px 24px
  font-size 16px
  FiraCode()
  box-shadow 0 6px 20px rgba(0, 0, 0, 0.4)
  transition background 0.3s, color 0.3s

  &:hover
    background green
    color dark

  @media screen and ({ScreenCondition}: ScreenConditionMobilePortrait)
    right 16px
    bottom 16px
    padding 8px 16px
    font-size 14px

.fade-enter-active, .fade-leave-active
  transition opacity 0.3s, transform 0.3s

.fade-enter-from, .fade-leave-to
  opacity 0
  transform translateY(10px)
</style>
