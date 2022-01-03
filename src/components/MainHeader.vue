<template>
  <header ref="header">
    <div class="logo">
      <router-link class="fullName" to="/" exact> Carlos Hallan </router-link>
      <span class="templateString">
        `${<span class="f">User</span>.<span class="s">name</span>}`
      </span>
    </div>
    <div>
      <v-icon> mdi-domain </v-icon>
      <a href="mailto:carloshallandev@gmail.com">Contact Me</a>
    </div>
    <!--    <navigator /> -->
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
// import Navigator from '@/components/Navigator.vue'

export default Vue.extend({
  name: 'MainHeader',
  //  components: { Navigator },
  methods: {
    toFixed() {
      const header = this.$refs.header as HTMLElement

      if (window.pageYOffset > header.offsetTop) {
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
    color green

  a:hover
    text-decoration underline
    color light-pink

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
      bottom 0

@media screen and ({ScreenCondition}: ScreenConditionValue)
  header.fixed
    position relative !important
</style>
