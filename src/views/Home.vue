<template>
  <div>
    <Presentation />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Presentation from './sections/Presentation.vue'

export default defineComponent({
  name: 'Home',
  components: { Presentation },
})
</script>
