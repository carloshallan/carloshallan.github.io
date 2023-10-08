<template>
  <header ref="header">
    <div class="logo">
      <router-link class="fullName green" to="/" exact>
        Carlos Hallan
      </router-link>
      <span class="templateString">
        `${<span class="f">User</span>.<span class="s">name</span>}`
      </span>
    </div>
    <div class="right-span">
      <v-icon dark> mdi-email </v-icon>
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
    color white

  .right-span *
    transition: color 0.3s border-bottom 0.3s

  .right-span
    display flex
    gap 10px

  .v-icon
    color green

  .right-span:hover
    border-bottom 1px solid light-pink
    cursor pointer

  .right-span:hover a, .right-span:hover .v-icon
    color light-pink

  .logo
    display flex
    align-items center
    justify-content left
    color white
    width: 200px

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

@media screen and ({ScreenCondition}: ScreenConditionMobilePortrait)
  header
    flex-direction column
    position relative !important
    align-items center
    justify-content center
    gap: 10px

    .logo
      justify-content center

  .templateString
    display none !important

  .fullName
    display block !important

    //.logo
    //  display none
</style>
