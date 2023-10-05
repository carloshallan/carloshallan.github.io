<template>
  <main>
    <Section class="pageNotFoundContent" color="dark">
      <v-icon class="alertIcon"> mdi-alert </v-icon>
      <h1 class="green mainTitle">404</h1>
      <h2>
        Page
        <span class="light-pink">not found!</span>
      </h2>
      <p>
        I'm sorry! <span class="green">Contact me</span> if you need more
        information.
      </p>
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
.alertIcon, .mainTitle
  color: yellow

.alertIcon
  font-size 100px

.mainTitle
  font-size: 85px
  margin-bottom 50px

.pageNotFoundContent
  display flex
  flex-direction column
  align-items center
  justify-content center
  gap 10px
  padding 100px 0
</style>
