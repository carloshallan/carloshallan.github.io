<template>
  <header>
    <div class="logo">
      <main-logo class="svg" />
      <span>
        ${<span class="c">C</span>.<span class="Hallan">Hallan</span>}
      </span>
    </div>
    <navigator />
    <nav class="languages">
      <span
        v-for="(locale, index) in languages"
        :key="index"
        :class="{ active: currentLanguage === locale }"
        @click="changeLanguage(locale)"
      >
        {{ locale }}
      </span>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MainLogo from '@/components/icons/MainLogo.vue'
import Navigator from '@/components/Navigator.vue'

export default defineComponent({
  name: 'MainHeader',
  components: { MainLogo, Navigator },
  setup() {
    let currentLanguage = ref('EN')
    const languages: string[] = ['EN', 'PT-BR']

    return {
      languages,
      currentLanguage,
    }
  },
  methods: {
    changeLanguage(locale: string) {
      this.currentLanguage = locale
      console.log(locale, this.currentLanguage)
    },
  },
})
</script>

<style lang="stylus" scoped>
@import "../styles/default"

header
  width 100vw
  height auto
  position fixed
  top 0
  left: 0
  display flex
  align-items center
  justify-content space-between
  padding: 15px
  background-color dark

header
  .logo
    display flex
    align-items center
    justify-content left
    color white

  .logo .c
    color blue

  .logo .Hallan
    color light-pink

  .svg
    margin-right 10px
    width 40px
    height auto

  .languages
    color white

    span:not(:last-child)::after
     content "|"
     padding 0 10px

    span.active
     color light-pink
</style>
