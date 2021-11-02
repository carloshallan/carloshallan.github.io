<template>
  <header>
    <div class="logo">
      <main-logo />
      <span>
        ${<span class="c">C</span>.<span class="Hallan">Hallan</span>}
      </span>
    </div>
    <navigator />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainLogo from '@/components/icons/MainLogo.vue'
import Navigator from '@/components/Navigator.vue'

export default defineComponent({
  name: 'MainHeader',
  components: { MainLogo, Navigator },
  data() {
    return {
      currentLaguage: 'EN',
      languages: ['EN', 'PT-BR'],
    }
  },
})
</script>
