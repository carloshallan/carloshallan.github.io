<template>
  <main>
    <Section class="pageNotFoundContent" color="dark">
      <v-icon class="alertIcon"> mdi-alert </v-icon>
      <h2>Page <span class="green">not found!</span></h2>
      <p>I'm sorry! Contact me if you need more information.</p>
    </Section>
  </main>
</template>

<script>
import Section from '@/components/Section'
export default {
  name: 'PageNotFound',
  components: { Section }
}
</script>

<style lang="stylus" scoped>
.alertIcon
  color: yellow
  font-size 100px
  margin-bottom 100px

.pageNotFoundContent
  display flex
  flex-direction column
  align-items center
  justify-content center
  gap 10px
  padding 100px 0
</style>
