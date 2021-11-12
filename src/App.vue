<template>
  <div>
    <main-header id="mainHeader" />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MainHeader from '@/components/MainHeader.vue'

export default defineComponent({
  components: { MainHeader }
})
</script>
<style lang="stylus">
@import './styles/*'
</style>
