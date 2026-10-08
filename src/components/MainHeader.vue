<template>
  <header ref="header">
    <div class="left-side">
      <div alt="Creative Olympus" class="logo">
        <router-link to="/">
          <creative-logo class="creative-olympus-logo" />
        </router-link>
      </div>
      <div class="menu">
        <router-link active-class="active" to="/">
          {{ $t('nav.home') }}
        </router-link>
        <router-link
          to="/work"
          :class="{ active: $route.path.startsWith('/work') }"
        >
          {{ $t('nav.work') }}
        </router-link>
      </div>
    </div>
    <div class="right-span">
      <div class="languages" role="group" :aria-label="$t('language.label')">
        <button
          type="button"
          :class="{ active: $i18n.locale === 'en' }"
          :aria-pressed="$i18n.locale === 'en'"
          lang="en"
          @click="changeLocale('en')"
        >
          {{ $t('language.en') }}
        </button>
        <button
          type="button"
          :class="{ active: $i18n.locale === 'pt-BR' }"
          :aria-pressed="$i18n.locale === 'pt-BR'"
          lang="pt-BR"
          @click="changeLocale('pt-BR')"
        >
          {{ $t('language.pt') }}
        </button>
      </div>
      <div>
        <a href="https://github.com/carloshallan" target="_blank">
          <v-icon theme="dark"> mdi-github </v-icon>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/carlos-hallan/" target="_blank">
          <v-icon theme="dark"> mdi-linkedin </v-icon>
        </a>
      </div>
      <div>
        <a href="mailto:carloshallandev@gmail.com" target="_blank">
          <v-icon theme="dark"> mdi-email </v-icon>
        </a>
      </div>
      <div class="download">
        <v-menu theme="dark" :location-strategy="menuLocation" attach>
          <template v-slot:activator="{ props }">
            <v-icon v-bind="props" tag="button" theme="dark">
              mdi-download
            </v-icon>
          </template>

          <v-list theme="dark" lines="two">
            <v-list-item
              v-for="(item, i) in resumeItems"
              :key="i"
              :href="item.filepath"
              rel="noopener"
              download
            >
              <v-list-item-title>
                <v-icon>mdi-file-pdf-box</v-icon>
                {{ item.name }}</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    <!--    <navigator /> -->
  </header>
</template>

<script lang="ts">
import { defineComponent, type Ref } from 'vue'
import CreativeLogo from '@/components/icons/creative-logo.vue'
import { setLocale, type Locale } from '@/i18n'
// import Navigator from '@/components/Navigator.vue'

interface MenuLocationData {
  target: Ref<HTMLElement | [number, number] | undefined>
  contentEl: Ref<HTMLElement | undefined>
}

// Posiciona o menu como o v-menu do Vuetify 2 fazia: logo abaixo do ícone,
// alinhado à esquerda dele e sem passar da borda direita da janela.
function menuLocation(
  data: MenuLocationData,
  _props: unknown,
  contentStyles: Ref<Record<string, string>>
) {
  const margin = 12

  function updateLocation() {
    const target = data.target.value
    const content = data.contentEl.value
    if (!(target instanceof HTMLElement) || !content) return

    const container = (content.offsetParent ?? document.body) as HTMLElement
    const containerRect = container.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const pageWidth = document.documentElement.clientWidth || window.innerWidth
    const maxLeft = pageWidth - margin - content.offsetWidth
    const left = Math.max(margin, Math.min(targetRect.left, maxLeft))

    contentStyles.value = {
      top: `${Math.round(targetRect.bottom - containerRect.top)}px`,
      left: `${Math.round(left - containerRect.left)}px`
    }
  }

  requestAnimationFrame(updateLocation)

  return { updateLocation }
}

export default defineComponent({
  name: 'MainHeader',
  components: { CreativeLogo },
  //  components: { Navigator },
  data: () => {
    return {
      menuLocation,
      resumeItems: [
        {
          name: 'PT-BR',
          filepath: '/carloshallan-resume-pt-br.pdf'
        },
        {
          name: 'EN',
          filepath: '/carloshallan-resume-en.pdf'
        }
      ]
    }
  },
  methods: {
    changeLocale(locale: Locale) {
      setLocale(locale)
    },
    toFixed() {
      const header = this.$refs.header as HTMLElement

      if (window.scrollY > header.offsetTop) {
        header.classList.add('fixed')
      } else {
        header.classList.remove('fixed')
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.toFixed)
    })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.toFixed)
  }
})
</script>

<style lang="stylus" scoped>
@import "../styles/default"

header
  width 100%
  height auto
  position relative
  display flex
  align-items center
  justify-content space-between
  padding: 20px 30px
  background-color dark
  animation-duration 0.5s
  font-header()

header.fixed
  position fixed
  z-index 9
  cardShadow()

header

  a
    color white

  .v-list
    background-color dark
    color white
    display flex
    flex-direction column
    align-items flex-start
    justify-content center

    .v-list-item
      width 200px
      padding 10px 20px

      &:hover
        background-color grey-darker
        cursor pointer

  // Padrões do v-menu/v-list do Vuetify 2, para manter o mesmo visual
  :deep(.v-menu > .v-overlay__content)
    box-shadow 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)
    overflow hidden

  .v-menu > .v-overlay__content > .v-list
    background-color dark
    border-radius 0
    box-shadow none
    padding 0

    .v-list-item
      min-height 84px
      color white !important

    .v-list-item-title
      font-weight 500
      letter-spacing normal
      line-height 1.2

  .menu
    display flex
    align-items center
    justify-content center
    gap 20px

    a.active
      color green
      border-bottom: 2px solid green

    a
      border-bottom: 2px solid transparent
      transition color 0.5s, border 0.5s

    a:hover
      color light-pink
      cursor pointer
      border-bottom: 2px solid light-pink

  .right-span *
    transition: color 0.3s border-bottom 0.3s

  .right-span
    display flex
    gap 10px

  .v-icon
    color green

  .right-span div
    display: flex
    align-items center
    justify-content flex-start
    gap: 5px

  .right-span div:hover
    cursor pointer

  // Espaço que o wrapper do v-menu ocupava no Vuetify 2
  .right-span .download
    padding-right 5px

  .right-span div:hover a, .right-span div:hover .v-icon
    color light-pink

  .left-side
    display flex
    align-items center
    justify-content flex-start
    text-transform uppercase
    gap 40px

  .logo
    display flex
    align-items center
    justify-content left

    .creative-olympus-logo
      width 30px
      height 30px
      align-self center
      position relative
      top 5px

    .fullName
      display none

    .f
      color blue

    .s
      color light-pink

  .logo:hover
    .templateString
      display none

    .fullName
      display block

  .right-span .languages
    color white
    font-size 18px
    margin-right 10px
    gap 0

    button
      font inherit
      color white
      transition color 0.5s

    button:not(:last-child)::after
      content "/"
      color white
      padding 0 8px

    button:hover
      color light-pink
      cursor pointer

    button.active
      color green

@media screen and ({ScreenCondition}: ScreenConditionMobilePortrait)
  header
    flex-direction column
    align-items center
    justify-content center
    position relative !important
    gap: 20px

    .left-side
      flex-direction column
      align-items center
      justify-content center
      gap: 20px
</style>
