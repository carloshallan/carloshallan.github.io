<template>
  <div>
    <Presentation />
    <AboutMe />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Presentation from './sections/Presentation.vue'
import AboutMe from './sections/AboutMe.vue'

export default defineComponent({
  name: 'Home',
  components: { Presentation, AboutMe },
})
</script>
