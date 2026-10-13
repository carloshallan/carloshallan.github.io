<template>
  <Section id="events" class="writerEvents" color="dark">
    <div class="content">
      <h1>
        {{ $t('writer.events.title') }}
        <span class="green">{{ $t('writer.events.titleHighlight') }}</span>
      </h1>
      <ul class="highlights">
        <li v-for="item in highlights" :key="item.key" class="highlight">
          <img
            :src="`/writer/events/${item.image}.webp`"
            :alt="$t(`writer.events.items.${item.key}.alt`)"
            loading="lazy"
          />
          <div>
            <span class="date">
              {{ $t(`writer.events.items.${item.key}.date`) }}
            </span>
            <h2>{{ $t(`writer.events.items.${item.key}.title`) }}</h2>
            <p>{{ $t(`writer.events.items.${item.key}.text`) }}</p>
          </div>
        </li>
      </ul>
      <figure class="gallery">
        <div class="photos">
          <img
            v-for="photo in photos"
            :key="photo"
            :src="`/writer/events/${photo}.webp`"
            :alt="$t('writer.events.photoAlt')"
            loading="lazy"
          />
        </div>
        <figcaption>{{ $t('writer.events.galleryCaption') }}</figcaption>
      </figure>
    </div>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/layouts/SectionLayout.vue'

export default defineComponent({
  name: 'WriterEvents',
  components: { Section },
  data: () => ({
    highlights: [
      { key: 'award', image: 'mencao-honrosa' },
      { key: 'talk', image: 'entre-palavras-e-paginas' }
    ],
    // Fotos dos eventos do mídia kit, em mosaico
    photos: Array.from(
      { length: 25 },
      (_, i) => `evento-${String(i + 1).padStart(2, '0')}`
    )
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

.highlights
  list-style none
  display grid
  grid-template-columns repeat(2, 1fr)
  gap 50px
  padding 0

.highlight
  display flex
  gap 24px
  align-items flex-start

  img
    width 220px
    height auto
    flex-shrink 0
    box-shadow 0 10px 30px rgba(0, 0, 0, 0.6)

  .date
    display block
    font-size 16px
    text-transform uppercase
    letter-spacing 0.08em
    opacity 0.7

  h2
    font-size 30px
    line-height 1.1
    padding 6px 0

  p
    font-size 18px

.gallery
  display flex
  flex-direction column
  gap 12px

  // Mosaico: colunas que respeitam a proporção original de cada foto
  .photos
    columns 5
    column-gap 12px

  img
    display block
    width 100%
    height auto
    margin-bottom 12px
    break-inside avoid

  figcaption
    font-size 16px
    opacity 0.7
    text-align center

@media screen and ({ScreenCondition}: ScreenConditionValue)
  .highlights
    grid-template-columns 1fr

  .gallery .photos
    columns 3

@media screen and ({ScreenCondition}: ScreenConditionMobilePortrait)
  .content
    padding 80px 5%

  .highlight
    flex-direction column
    align-items center
    text-align center

  .gallery .photos
    columns 2
</style>
