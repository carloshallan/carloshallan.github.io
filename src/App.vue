<template>
  <div>
    <main-header id="mainHeader" />
    <router-view />
    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import MainHeader from '@/components/MainHeader.vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  components: { MainHeader, Footer }
})
</script>
<style lang="stylus">
@import './styles/*'
</style>
