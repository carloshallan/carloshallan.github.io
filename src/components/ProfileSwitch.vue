<template>
  <button
    type="button"
    class="profileSwitch"
    :class="{ writer: writerMode }"
    :aria-label="writerMode ? $t('writer.backToDev') : $t('writer.reveal')"
    :aria-pressed="writerMode"
    @click="toggleWriterMode"
  >
    <Profile class="face dev" />
    <img
      class="face author"
      src="/writer/chblacksmith.webp"
      alt=""
      width="265"
      height="265"
    />
    <span class="hint" aria-hidden="true">
      {{ writerMode ? $t('writer.backToDevHint') : $t('writer.revealHint') }}
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Profile from '@/components/icons/Profile.vue'
import { toggleWriterMode, writerMode } from '@/composables/writerMode'

// A foto mostra o lado atual e, ao passar o mouse, revela o outro lado
export default defineComponent({
  name: 'ProfileSwitch',
  components: { Profile },
  setup() {
    return { writerMode, toggleWriterMode }
  }
})
</script>

<style lang="stylus" scoped>
@import '../styles/default'

.profileSwitch
  position relative
  width 265px
  height 265px
  padding 0
  background none
  border none
  border-radius 50%
  cursor pointer

  .face
    position absolute
    inset 0
    width 100%
    height 100%
    transition opacity 0.5s, transform 0.5s, filter 0.5s

  .author
    opacity 0
    transform scale(0.92) rotate(-6deg)
    filter blur(4px)

  .hint
    position absolute
    left 50%
    bottom -34px
    transform translate(-50%, 6px)
    white-space nowrap
    font-size 14px
    letter-spacing 0.08em
    text-transform lowercase
    opacity 0
    transition opacity 0.4s, transform 0.4s

  // Modo escritor: a foto preto e branco fica na frente e a de dev se esconde
  &.writer
    .author
      opacity 1
      transform none
      filter none

    .dev
      opacity 0
      transform scale(0.92) rotate(6deg)
      filter blur(4px)

  @media (hover: hover)
    &:hover, &:focus-visible
      .author
        opacity 1
        transform none
        filter none

      .dev
        opacity 0
        transform scale(0.92) rotate(6deg)
        filter blur(4px)

      .hint
        opacity 0.7
        transform translate(-50%, 0)

    &.writer:hover, &.writer:focus-visible
      .author
        opacity 0
        transform scale(0.92) rotate(-6deg)
        filter blur(4px)

      .dev
        opacity 1
        transform none
        filter none

  &:focus-visible
    outline 2px solid green
    outline-offset 8px

  @media screen and ({ScreenCondition}: ScreenConditionValue)
    width 171px
    height 171px

@media (prefers-reduced-motion: reduce)
  .profileSwitch .face, .profileSwitch .hint
    transition opacity 0.2s
</style>
