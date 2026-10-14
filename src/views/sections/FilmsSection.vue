<template>
  <Section id="films" color="dark" class="filmsSection">
    <div class="row">
      <div class="column titleColumn">
        <h1>
          <span class="light-pink">>></span>
          {{ $t('films.title') }}
          <span class="green">{{ $t('films.titleHighlight') }}</span>
        </h1>
        <p class="intro">{{ $t('films.intro') }}</p>
        <ul class="awardStats">
          <li>
            <strong>{{ totalAwards }}</strong>
            <span>{{ $t('films.stats.awards') }}</span>
          </li>
          <li>
            <strong>{{ awardedFilms }}</strong>
            <span>{{ $t('films.stats.films') }}</span>
          </li>
          <li>
            <strong>Cannes · Clio · D&AD · LIA</strong>
            <span>{{ $t('films.stats.festivals') }}</span>
          </li>
        </ul>
      </div>
      <div class="column filmsColumn">
        <ul class="films">
          <li
            v-for="(film, index) in visibleFilms"
            :key="film.cover ?? film.slug"
            class="film"
            :class="{
              extra: index >= initialCount,
              awarded: wins(film) > 0
            }"
          >
            <a
              :href="pageUrl(film)"
              target="_blank"
              rel="noopener"
              class="filmLink"
              @click="play($event, film)"
            >
              <div
                class="cover"
                :class="{ poster: film.poster }"
                :style="
                  film.poster
                    ? {
                        '--poster': `url(/work/films/${film.cover ?? film.slug}.webp)`
                      }
                    : undefined
                "
              >
                <img
                  :src="`/work/films/${film.cover ?? film.slug}.webp`"
                  :alt="film.title"
                  loading="lazy"
                />
                <span v-if="wins(film) > 0" class="ribbon">
                  <v-icon>mdi-trophy</v-icon>
                  {{ headline(film) }}
                </span>
                <span v-if="film.vimeo" class="play" aria-hidden="true">
                  <v-icon>mdi-play</v-icon>
                </span>
              </div>
              <div class="info">
                <h2 class="title">{{ film.title }}</h2>
                <div class="client">{{ film.client }} · {{ film.year }}</div>
                <div class="role">{{ film.role }}</div>
                <ul v-if="film.awards" class="awards">
                  <li
                    v-for="award in film.awards.slice(0, 3)"
                    :key="award.festival"
                  >
                    <strong>{{ award.festival }}</strong>
                    {{ award.result }}
                  </li>
                  <li v-if="film.awards.length > 3" class="moreAwards">
                    {{
                      $t('films.moreAwards', { count: film.awards.length - 3 })
                    }}
                  </li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
        <div v-if="!expanded" class="seeMore">
          <Button :outlined="true" :click="() => (expanded = true)">
            {{ $t('films.seeMore') }}
          </Button>
        </div>
        <a
          href="https://roofstudio.tv/work"
          target="_blank"
          rel="noopener"
          class="more"
        >
          {{ $t('films.more') }}
        </a>
      </div>
    </div>

    <dialog
      ref="player"
      class="player"
      :class="{ closing }"
      @cancel.prevent="close"
      @close="onClosed"
      @click="close"
    >
      <div v-if="current" class="playerBox" @click.stop>
        <button
          type="button"
          class="closeButton"
          :aria-label="$t('films.close')"
          @click="close"
        >
          <v-icon>mdi-close</v-icon>
        </button>
        <div class="video">
          <iframe
            ref="frame"
            :src="`https://player.vimeo.com/video/${current.vimeo}?autoplay=1`"
            :title="current.title"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div class="playerFooter">
          <span>{{ current.title }} · {{ current.client }}</span>
          <a :href="pageUrl(current)" target="_blank" rel="noopener">
            {{ $t('films.details') }}
          </a>
        </div>
      </div>
    </dialog>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/layouts/SectionLayout.vue'
import Button from '@/components/Button.vue'
import type { Film } from '@/types'
import films from './films'
import type VimeoPlayer from '@vimeo/player'

// Fora do data() para o Vue não envolver o player num proxy reativo
let vimeo: VimeoPlayer | null = null

export default defineComponent({
  name: 'FilmsSection',
  components: { Section, Button },
  data: () => ({
    films,
    initialCount: 6,
    expanded: false,
    current: null as Film | null,
    closing: false
  }),
  computed: {
    // Mostra os primeiros filmes e o resto só depois do "ver mais"
    visibleFilms(): Array<Film> {
      return this.expanded ? this.films : this.films.slice(0, this.initialCount)
    },
    totalAwards(): number {
      // Cada projeto conta uma vez, mesmo com vários filmes (como o Clash)
      const projects = new Map(this.films.map(film => [film.slug, film]))
      return [...projects.values()].reduce((sum, f) => sum + this.wins(f), 0)
    },
    awardedFilms(): number {
      return new Set(
        this.films.filter(film => this.wins(film) > 0).map(film => film.slug)
      ).size
    }
  },
  methods: {
    // Soma os prêmios de um filme: "2 Gold, 1 Bronze" vale 3 e "Silver" vale
    // 1. Shortlists, finalistas e indicações ficam de fora
    wins(film: Film): number {
      return (film.awards ?? []).reduce(
        (sum, { result }) =>
          sum +
          result
            .split(',')
            .map(part => part.trim())
            .filter(part => !/shortlist|finalist|nominated/i.test(part))
            .reduce((n, part) => n + (parseInt(part) || 1), 0),
        0
      )
    },
    // O prêmio principal (o primeiro da lista) vai no selo sobre a capa
    headline(film: Film): string {
      const [first] = film.awards ?? []
      return first ? `${first.festival} · ${first.result.split(',')[0]}` : ''
    },
    pageUrl(film: Film) {
      return film.url ?? `https://roofstudio.tv/work/${film.slug}`
    },
    // Filmes com vídeo tocam aqui mesmo; os outros seguem o link para a Roof
    async play(event: MouseEvent, film: Film) {
      if (!film.vimeo) return
      event.preventDefault()
      this.current = film
      this.closing = false
      ;(this.$refs.player as HTMLDialogElement).showModal()
      window.addEventListener('blur', this.keepFocus)
      document.addEventListener('keydown', this.onKey)

      await this.$nextTick()
      const { default: Player } = await import('@vimeo/player')
      const frame = this.$refs.frame as HTMLIFrameElement | undefined
      if (!frame || this.current !== film) return
      vimeo = new Player(frame)
      vimeo.on('ended', this.close)
    },
    // Clicar no vídeo leva o foco para dentro do iframe, e aí o Esc não chega
    // até a página. O foco volta para a página logo depois do clique
    keepFocus() {
      setTimeout(() => {
        const frame = this.$refs.frame as HTMLIFrameElement | undefined
        if (frame && document.activeElement === frame) {
          frame.blur()
          window.focus()
        }
      })
    },
    // O Esc é tratado aqui para a animação de saída tocar (o navegador às
    // vezes fecha o modal direto). Com o foco fora do iframe, o espaço pausa e
    // retoma o vídeo
    async onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        this.close()
        return
      }
      if (event.key !== ' ' || !vimeo) return
      event.preventDefault()
      if (await vimeo.getPaused()) vimeo.play()
      else vimeo.pause()
    },
    // Toca a animação de saída e só depois fecha o modal
    close() {
      const dialog = this.$refs.player as HTMLDialogElement
      if (!dialog.open || this.closing) return
      this.closing = true
      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
      setTimeout(() => dialog.close(), reduced ? 0 : 300)
    },
    onClosed() {
      window.removeEventListener('blur', this.keepFocus)
      document.removeEventListener('keydown', this.onKey)
      vimeo?.destroy().catch(() => {})
      vimeo = null
      this.current = null
      this.closing = false
    }
  },
  beforeUnmount() {
    this.onClosed()
  }
})
</script>

<style lang="stylus" scoped>
@import '../../styles/default'

.filmsSection
  min-height auto

// Mesma estrutura da seção de experiências: título em cima, à direita
.row
  flex-direction column

.titleColumn
  display flex
  flex-direction column
  align-items flex-end

  h1
    text-align right

.intro
  max-width 760px
  text-align right
  font-size 20px
  opacity 0.85

.awardStats
  list-style none
  display flex
  flex-wrap wrap
  justify-content flex-end
  gap 16px 48px
  padding 30px 0 0

  li
    display flex
    flex-direction column
    align-items flex-end
    border-top 4px solid yellow
    padding-top 10px

  strong
    FiraCode()
    font-size 40px
    font-weight 700
    line-height 1.1
    color yellow

  li:last-child strong
    font-size 22px
    line-height 1.9

  span
    FiraCode()
    font-size 14px
    text-transform uppercase
    letter-spacing 0.06em
    opacity 0.85

.filmsColumn
  padding-left 120px

.films
  list-style none
  display grid
  grid-template-columns repeat(3, 1fr)
  gap 40px
  padding 9px

// Anéis sólidos nas mesmas cores da foto de dev
.film
  &.extra
    animation filmIn 0.5s ease-out both

  background black
  box-shadow 0 0 0 3px light-pink, 0 0 0 6px light-purple, 0 0 0 9px green
  transition transform 0.3s

  // Filmes premiados trocam o anel de fora pelo amarelo dos prêmios
  &.awarded
    box-shadow 0 0 0 3px light-pink, 0 0 0 6px light-purple, 0 0 0 9px yellow

  &:hover
    transform translateY(-4px)

    img
      transform scale(1.05)

    .play
      background green

      .v-icon
        color black

.filmLink
  display flex
  flex-direction column
  height 100%

.cover
  position relative
  aspect-ratio 1
  overflow hidden

  img
    width 100%
    height 100%
    object-fit cover
    display block
    transition transform 0.5s

// O cartaz aparece inteiro, sobre uma cópia desfocada dele mesmo
.cover.poster
  background-image var(--poster)
  background-size cover
  background-position center

  &::before
    content ''
    position absolute
    inset 0
    backdrop-filter blur(18px) brightness(0.6)

  img
    position relative
    object-fit contain

.play
  position absolute
  right 16px
  bottom 16px
  width 52px
  height 52px
  display flex
  align-items center
  justify-content center
  border-radius 50%
  background dark-purple
  transition background 0.3s

  .v-icon
    color white
    font-size 30px

.info
  display flex
  flex-direction column
  align-items flex-start
  gap 6px
  padding 22px 24px 26px

.ribbon
  position absolute
  top 16px
  left 16px
  right 16px
  width fit-content
  display flex
  align-items center
  gap 6px
  padding 6px 12px
  background yellow
  color black
  FiraCode()
  font-size 13px
  font-weight 700
  text-transform uppercase
  letter-spacing 0.04em

  .v-icon
    color black
    font-size 18px

.awards
  list-style none
  display flex
  flex-direction column
  gap 6px
  width 100%
  margin-top 10px
  padding 12px 0 0
  border-top 1px dashed rgba(255, 190, 108, 0.4)

  li
    FiraCode()
    font-size 13px
    line-height 1.4
    opacity 0.9

    &::before
      content '★ '
      color yellow

  strong
    color yellow
    font-weight 600

  .moreAwards
    opacity 0.6

    &::before
      content ''

.title
  FiraSans()
  font-size 24px
  font-weight 600
  line-height 1.2

.client
  FiraCode()
  font-size 15px
  color light-pink

.role
  FiraCode()
  font-size 14px
  color green

.seeMore
  display flex
  justify-content center
  margin-top 60px

.more
  display inline-block
  margin-top 50px
  FiraCode()
  font-size 18px
  color green
  border-bottom 2px solid green
  padding-bottom 2px

  &:hover
    color light-pink
    border-color light-pink

.player
  margin auto
  padding 0
  border none
  background transparent
  // Cabe na janela pela largura e pela altura (vídeo 16:9 + rodapé + botão)
  width unquote('min(1100px, 92vw, calc((100vh - 200px) * 16 / 9))')
  max-width none
  max-height none
  overflow visible

  &[open]
    animation playerIn 0.3s ease-out

  &::backdrop
    background rgba(21, 8, 35, 0.92)
    animation fadeIn 0.3s ease-out

  &.closing
    animation playerOut 0.3s ease-in forwards

    &::backdrop
      animation fadeOut 0.3s ease-in forwards

@keyframes filmIn
  from
    opacity 0
    transform translateY(30px)

@keyframes playerIn
  from
    opacity 0
    transform scale(0.92) translateY(20px)

@keyframes playerOut
  to
    opacity 0
    transform scale(0.92) translateY(20px)

@keyframes fadeIn
  from
    opacity 0

@keyframes fadeOut
  to
    opacity 0

.playerBox
  position relative
  background black
  box-shadow 0 0 0 3px light-pink, 0 0 0 6px light-purple, 0 0 0 9px green

.closeButton
  position absolute
  top -56px
  right -9px
  width 40px
  height 40px
  border none
  border-radius 50%
  background green
  cursor pointer

  .v-icon
    color black

.video
  aspect-ratio 16 / 9

  iframe
    width 100%
    height 100%
    border 0
    display block

.playerFooter
  display flex
  flex-wrap wrap
  justify-content space-between
  gap 10px
  padding 14px 18px
  FiraCode()
  font-size 15px

  a
    color green

@media (prefers-reduced-motion: reduce)
  .film, .cover img
    transition none

  .film.extra
    animation none

  .player, .player::backdrop
    animation none !important

@media screen and ({ScreenCondition}: ScreenConditionValue)
  .row
    align-items stretch

  .filmsColumn
    padding-left 0

  .films
    grid-template-columns repeat(2, 1fr)

@media screen and ({ScreenCondition}: ScreenConditionMobilePortrait)
  .films
    grid-template-columns 1fr
    gap 32px

  .intro
    font-size 18px

  .awardStats
    gap 16px 28px

    strong
      font-size 30px
</style>
