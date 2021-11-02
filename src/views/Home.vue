<template>
  <div>
    <main-header />
    <div>
      <main-header id="main-logo" />
      Comming soon...
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainHeader from '@/components/MainHeader.vue'

export default defineComponent({
  name: 'Home',
  components: {
    MainHeader,
  },
})
</script>

<style lang="stylus" scoped>
div
  background-color #220C3A
  position absolute
  width 100vw
  height 100vh
  display flex
  align-items center
  justify-content center
  flex-direction column
  color white

#main-logo
  margin-bottom 20px
</style>
