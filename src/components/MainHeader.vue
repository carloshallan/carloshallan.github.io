<template>
  <header>
    <div class="logo">
      <main-logo />
      <span>
        ${<span class="c">C</span>.<span class="Hallan">Hallan</span>}
      </span>
    </div>
    <navigator />
    <nav class="languages">
      <span v-for="(index, locale) in languages" :key="index">{{
        locale
      }}</span>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import MainLogo from '@/components/icons/MainLogo.vue'
import Navigator from '@/components/Navigator.vue'

export default defineComponent({
  name: 'MainHeader',
  components: { MainLogo, Navigator },
  setup() {
    let currentLanguage = 'EN'
    const languages: Array<string> = ['EN', 'PT-BR']

    return {
      currentLanguage,
    }
  },
})
</script>
