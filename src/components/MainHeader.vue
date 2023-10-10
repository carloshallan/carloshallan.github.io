<template>
  <header ref="header">
    <div class="left-side">
      <div class="logo">
        <router-link to="/" exact>
          <creative-logo class="creative-olympus-logo" />
        </router-link>
      </div>
      <div class="menu">
        <router-link active-class="active" to="/" exact> home </router-link>
        <router-link active-class="active" to="/work"> work </router-link>
      </div>
    </div>
    <div class="right-span">
      <div>
        <a href="https://github.com/carloshallan" target="_blank">
          <v-icon dark> mdi-github </v-icon>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/carlos-hallan/" target="_blank">
          <v-icon dark> mdi-linkedin </v-icon>
        </a>
      </div>
      <div>
        <a href="mailto:carloshallandev@gmail.com" target="_blank">
          <v-icon dark> mdi-email </v-icon>
        </a>
      </div>
    </div>
    <!--    <navigator /> -->
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import CreativeLogo from '@/components/icons/creative-logo.vue'
// import Navigator from '@/components/Navigator.vue'

export default Vue.extend({
  name: 'MainHeader',
  components: { CreativeLogo },
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
