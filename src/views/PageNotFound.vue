<template>
  <main>
    <Section class="pageNotFoundContent" color="dark">
      <v-icon class="alertIcon"> mdi-alert </v-icon>
      <h1 class="green mainTitle">404</h1>
      <h2>
        {{ $t('notFound.page') }}
        <span class="light-pink">{{ $t('notFound.notFound') }}</span>
      </h2>
      <p>
        {{ $t('notFound.sorry') }}
        <span class="green">{{ $t('notFound.contact') }}</span>
        {{ $t('notFound.moreInfo') }}
      </p>
    </Section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/layouts/SectionLayout.vue'

export default defineComponent({
  name: 'PageNotFound',
  components: { Section }
})
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
