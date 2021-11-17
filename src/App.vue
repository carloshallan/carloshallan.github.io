<template>
  <div>
    <main-header id="mainHeader" />
    <router-view />
    <Footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MainHeader from '@/components/MainHeader.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  components: { MainHeader, Footer }
})
</script>
<style lang="stylus">
@import './styles/*'
</style>
