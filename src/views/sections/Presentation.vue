<template>
  <Section color="transparent">
    <div class="presentation">
      <ProfileSwitch class="profile" />
      <div v-if="writerMode" class="titleGroup">
        <h1>
          {{ $t('writer.hero.greeting') }}
          <span class="green">C.H. Blacksmith</span>
        </h1>
        <div class="subtitle">
          <span class="green">{{ $t('writer.hero.role') }}</span>
          <span class="separator"> · </span>
          <span>{{ $t('writer.hero.craft') }}</span>
          <span class="separator"> · </span>
          <span>{{ $t('writer.hero.genres') }}</span>
        </div>
      </div>
      <div v-else class="titleGroup">
        <h1>
          {{ $t('hero.greeting') }}
          <span class="green">Hallan</span>
        </h1>
        <div class="subtitle">
          <span class="green">{{ $t('hero.role') }}</span>
          <span class="separator"> · </span>
          <span class="light-pink">{{ $t('hero.ux') }}</span>
          <span class="separator"> · </span>
          <span class="light-purple">{{ $t('hero.momo') }}</span>
        </div>
      </div>
      <div v-if="writerMode" class="buttonGroup">
        <Button :click="() => scrollTo('books')">
          {{ $t('writer.hero.seeBooks') }}
        </Button>
        <Button :outlined="true" href="https://chblacksmith.com.br">
          chblacksmith.com.br
        </Button>
      </div>
      <div v-else class="buttonGroup">
        <router-link to="/work">
          <Button> {{ $t('hero.seeWorks') }} </Button>
        </router-link>
        <Button :outlined="true" href="https://medium.com/@carloshallan">
          {{ $t('hero.aboutMe') }}
        </Button>
      </div>
      <button
        type="button"
        class="scrollHint"
        :aria-label="
          writerMode ? $t('writer.hero.seeAbout') : $t('hero.seeExperience')
        "
        @click="scrollTo(writerMode ? 'booksSold' : 'experience')"
      >
        <mouse-icon />
      </button>
    </div>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/layouts/SectionLayout.vue'
import ProfileSwitch from '@/components/ProfileSwitch.vue'
import Button from '@/components/Button.vue'
import MouseIcon from '@/components/icons/Mouse.vue'
import { writerMode } from '@/composables/writerMode'

export default defineComponent({
  name: 'Presentation',
  components: { Section, ProfileSwitch, Button, MouseIcon },
  setup() {
    return { writerMode }
  },
  methods: {
    scrollTo(id: string) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }
})
</script>
<style lang="stylus">
@import "../../styles/default"

.presentation
  padding: 100px 0
  background dark
  display flex
  align-items center
  justify-content center
  flex-direction column
  gap 60px

  .titleGroup
    text-align center

  .subtitle
    text-align center

  .separator
    color light-purple
    opacity 0.4

  @media screen and ({ScreenCondition}: ScreenConditionValue)
    text-align center

    .subtitle
      padding 10px 40px

  @media screen and ({ScreenCondition}: ScreenConditionMobilePortrait)
    .buttonGroup
      flex-direction column

.scrollHint
  background none
  border none
  padding 0
  cursor pointer
  transition opacity 0.3s

  &:hover
    opacity 0.7

  &:focus-visible
    outline 2px solid green
    outline-offset 8px
    border-radius 12px

.buttonGroup
   display flex
   gap 20px
</style>
