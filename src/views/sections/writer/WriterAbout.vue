<template>
  <Section id="writer" class="writerAbout" color="dark">
    <div class="row">
      <div class="column photo">
        <Book3D
          cover="/writer/book3d/retaliacao-capa.webp"
          spine="/writer/book3d/retaliacao-lombada.webp"
          back-cover="/writer/book3d/retaliacao-contra-capa.webp"
          :alt="
            $t('writer.books.coverAlt', {
              title: 'O Andarilho Clemente: Retaliação'
            })
          "
        />
      </div>
      <div class="column">
        <h1>
          {{ $t('writer.about.title') }}
          <span class="green">C.H. Blacksmith?</span>
        </h1>
        <p>{{ $t('writer.about.paragraph1') }}</p>
        <p>{{ $t('writer.about.paragraph2') }}</p>
        <p>
          {{ $t('writer.about.momoBefore') }}
          <router-link to="/work/momo" class="link">Momo</router-link>
          {{ $t('writer.about.momoAfter') }}
        </p>
        <ul class="stats">
          <li v-for="stat in stats" :key="stat">
            <strong>{{ $t(`writer.stats.${stat}.value`) }}</strong>
            <span>{{ $t(`writer.stats.${stat}.label`) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/layouts/SectionLayout.vue'
import Book3D from '@/components/Book3D.vue'

export default defineComponent({
  name: 'WriterAbout',
  components: { Section, Book3D },
  data: () => ({ stats: ['donated', 'years', 'books'] })
})
</script>

<style lang="stylus" scoped>
@import '../../../styles/default'

h1
  padding-bottom 25px

.row
  padding-left 120px

.photo
  display flex
  justify-content center

.column:first-child
  align-self center

.link
  text-decoration underline
  text-underline-offset 4px

.stats
  list-style none
  display grid
  grid-template-columns repeat(3, 1fr)
  gap 24px
  padding 30px 0 0

  li
    display flex
    flex-direction column
    gap 4px
    border-top 2px solid currentColor
    padding-top 12px

  strong
    font-size 40px
    line-height 1

  span
    font-size 16px
    opacity 0.8

@media screen and ({ScreenCondition}: ScreenConditionValue)
  .row
    padding-left 10%

  .photo .book3d
    --book-height 280px

  .stats
    grid-template-columns repeat(2, 1fr)

@media screen and ({ScreenCondition}: ScreenConditionMobilePortrait)
  h1
    text-align center
</style>
