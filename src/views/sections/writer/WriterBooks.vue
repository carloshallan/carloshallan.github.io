<template>
  <Section id="books" class="writerBooks" color="dark">
    <div class="content">
      <h1>
        {{ $t('writer.books.title') }}
        <span class="green">{{ $t('writer.books.titleHighlight') }}</span>
      </h1>
      <ul class="books">
        <li v-for="book in books" :key="book.id" class="book">
          <img
            :src="`/writer/${book.id}.webp`"
            :alt="$t('writer.books.coverAlt', { title: book.title })"
            loading="lazy"
          />
          <div>
            <h2>{{ book.title }}</h2>
            <span class="genre">
              {{ $t(`writer.books.items.${book.key}.genre`) }}
              <template v-if="book.coauthor">
                · {{ $t('writer.books.with', { name: book.coauthor }) }}
              </template>
            </span>
            <span v-if="book.upcoming" class="badge">
              {{ $t('writer.books.upcoming') }}
            </span>
            <span v-if="book.inProgress" class="badge">
              {{ $t('writer.books.inProgress') }}
            </span>
            <p>{{ $t(`writer.books.items.${book.key}.hook`) }}</p>
          </div>
        </li>
      </ul>
      <div class="buttonGroup">
        <Button href="https://chblacksmith.com.br">
          {{ $t('writer.books.cta') }}
        </Button>
      </div>
    </div>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/layouts/SectionLayout.vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  name: 'WriterBooks',
  components: { Section, Button },
  data: () => ({
    books: [
      {
        id: 'andarilho-clemente',
        key: 'andarilho',
        title: 'O Andarilho Clemente'
      },
      {
        id: 'andarilho-retaliacao',
        key: 'retaliacao',
        title: 'O Andarilho Clemente: Retaliação'
      },
      {
        id: 'por-quem-vale-a-pena-esperar',
        key: 'esperar',
        title: 'Por Quem Vale a Pena Esperar',
        coauthor: 'Luana OLF'
      },
      {
        id: 'ao-som-da-trombeta',
        key: 'trombeta',
        title: 'Ao Som da Trombeta'
      },
      {
        id: 'prometheus-e-nao-cumpreus',
        key: 'prometheus',
        title: 'Prometheus e não Cumpreus',
        upcoming: true
      },
      {
        id: 'fabrica-de-verdades',
        key: 'fabrica',
        title: 'A Fábrica de Verdades',
        inProgress: true
      }
    ]
  })
})
</script>

<style lang="stylus" scoped>
@import '../../../styles/default'

.content
  padding 120px 10%
  display flex
  flex-direction column
  gap 50px

.books
  list-style none
  display grid
  grid-template-columns repeat(auto-fill, minmax(420px, 1fr))
  gap 50px
  padding 0

.book
  display flex
  gap 24px
  align-items flex-start

  img
    width 140px
    height auto
    flex-shrink 0
    box-shadow 0 10px 30px rgba(0, 0, 0, 0.6)

  h2
    font-size 28px
    line-height 1.1

  .genre
    display block
    font-size 16px
    opacity 0.7
    padding 6px 0

  .badge
    display inline-block
    font-size 13px
    text-transform uppercase
    letter-spacing 0.08em
    border 1px solid currentColor
    padding 2px 8px
    margin-bottom 4px

  p
    font-size 18px

.buttonGroup
  justify-content center

@media screen and ({ScreenCondition}: ScreenConditionMobilePortrait)
  .content
    padding 80px 5%

  .books
    grid-template-columns 1fr

  .book
    flex-direction column
    align-items center
    text-align center
</style>
