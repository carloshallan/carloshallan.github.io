<template>
  <Section id="education" color="black" class="educationSection">
    <div class="row">
      <div class="column titleColumn">
        <h1>
          <span class="light-purple">+=</span>
          {{ $t('education.title') }}
          <span class="green">{{ $t('education.titleHighlight') }}</span>
        </h1>
      </div>
      <div class="column cardsColumn">
        <ol class="cards">
          <li
            v-for="(item, index) in education"
            :key="index"
            class="card"
            :class="item.state"
          >
            <div class="cardHeader">
              <span class="badge">{{ item.status }}</span>
              <span class="date">{{ item.date }}</span>
            </div>
            <h2 class="title">{{ item.title }}</h2>
            <div class="institution">{{ item.institution }}</div>
            <p v-if="item.description" class="description">
              {{ item.description }}
            </p>
            <div v-if="progress(item) !== null" class="progress">
              <div class="track">
                <div class="bar" :style="{ width: `${progress(item)}%` }" />
              </div>
              <span>{{
                $t('education.progress', { percent: progress(item) })
              }}</span>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/layouts/SectionLayout.vue'
import type { Education } from '@/types'
import { getEducation } from './education'

export default defineComponent({
  name: 'EducationSection',
  components: { Section },
  computed: {
    education(): Array<Education> {
      return getEducation(this.$i18n.locale)
    }
  },
  methods: {
    // Quanto do curso em andamento já passou, pelas datas de início e fim
    progress(item: Education): number | null {
      if (item.state !== 'inProgress' || !item.start || !item.end) return null
      const start = new Date(item.start).getTime()
      const end = new Date(item.end).getTime()
      const ratio = (Date.now() - start) / (end - start)
      return Math.round(Math.min(Math.max(ratio, 0), 1) * 100)
    }
  }
})
</script>

<style lang="stylus" scoped>
@import '../../styles/default'

.educationSection
  min-height auto

// Mesma estrutura da seção de experiências: título em cima, à direita
.row
  flex-direction column

.titleColumn h1
  text-align right

.cardsColumn
  padding-left 120px

.cards
  list-style none
  display grid
  grid-template-columns repeat(2, 1fr)
  gap 40px
  padding 9px

// Anéis sólidos nas mesmas cores da foto de dev: rosa, lilás e verde
.card
  display flex
  flex-direction column
  gap 10px
  padding 32px
  background dark
  box-shadow 0 0 0 3px light-pink, 0 0 0 6px light-purple, 0 0 0 9px green
  transition transform 0.3s

  &:hover
    transform translateY(-4px)

  // O curso em andamento ocupa a linha inteira e ganha um fundo mais forte
  &.inProgress
    grid-column 1 / -1
    padding 44px
    background dark-purple

    .title
      font-size 34px

.cardHeader
  display flex
  flex-wrap wrap
  align-items center
  justify-content space-between
  gap 12px
  margin-bottom 8px

.badge
  FiraCode()
  font-size 13px
  font-weight 600
  text-transform uppercase
  letter-spacing 0.08em
  padding 4px 12px
  color black

  .inProgress &
    background green

    &::before
      content ''
      display inline-block
      width 8px
      height 8px
      margin-right 8px
      border-radius 50%
      background black
      vertical-align middle
      animation pulse 1.6s ease-in-out infinite

  .completed &
    background light-pink

  .incomplete &
    background light-purple

.date
  FiraCode()
  font-size 16px
  opacity 0.8

.title
  FiraSans()
  font-size 26px
  font-weight 600
  line-height 1.2
  color white

.institution
  FiraCode()
  font-size 16px
  color light-pink

.description
  font-size 18px
  opacity 0.85
  padding 6px 0 0

.progress
  display flex
  align-items center
  gap 16px
  margin-top 16px

  span
    FiraCode()
    font-size 14px
    color green
    white-space nowrap

.track
  flex 1
  height 8px
  background black

.bar
  height 100%
  background green

@keyframes pulse
  0%, 100%
    opacity 1
  50%
    opacity 0.3

@media (prefers-reduced-motion: reduce)
  .badge::before
    animation none

  .card
    transition none

@media screen and ({ScreenCondition}: ScreenConditionValue)
  .row
    align-items stretch

  .cardsColumn
    padding-left 0

@media screen and ({ScreenCondition}: ScreenConditionTabletPortrait)
  .cards
    grid-template-columns 1fr

  .card, .card.inProgress
    padding 28px

    .title
      font-size 24px

@media screen and ({ScreenCondition}: ScreenConditionMobilePortrait)
  .cards
    gap 32px
</style>
