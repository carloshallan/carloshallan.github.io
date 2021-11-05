<template>
  <header>
    <div class="logo">
      <router-link class="fullName" to="/" exact> Carlos Hallan </router-link>
      <span class="templateString">
        `${<span class="f">User</span>.<span class="s">name</span>}`
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
import Navigator from '@/components/Navigator.vue'

export default defineComponent({
  name: 'MainHeader',
  components: { Navigator },
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
  padding: 20px 30px
  background-color dark
  font-header()

header
  .logo
    display flex
    align-items center
    justify-content left
    color white
    width: 200px

    .fullName
      display none
      color light-pink
    .f
      color blue

    .s
      color light-pink

  .logo:hover
    .templateString
      display none

    .fullName
      display block

  .languages
    color white

    span
      transition color 0.5s

    span:not(:last-child)::after
     content "/"
     padding 0 10px

    span:hover
      color light-pink
      cursor pointer

    span.active
     color green
</style>
