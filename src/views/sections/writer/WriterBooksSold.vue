<template>
  <Section id="booksSold" class="writerBooksSold" color="dark">
    <BooksSoldCounter />
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/layouts/SectionLayout.vue'
import BooksSoldCounter from '@/components/BooksSoldCounter.vue'

export default defineComponent({
  name: 'WriterBooksSold',
  components: { Section, BooksSoldCounter }
})
</script>

<style lang="stylus" scoped>
.writerBooksSold
  display flex
  align-items center
  justify-content center
  padding 100px 0
</style>
