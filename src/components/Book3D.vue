<template>
  <button
    type="button"
    class="book3d"
    :aria-label="alt"
    :aria-pressed="flipped"
    @click="flipped = !flipped"
  >
    <span class="book" :class="{ flipped }">
      <span class="face cover" :style="{ backgroundImage: `url(${cover})` }" />
      <span class="face spine" :style="{ backgroundImage: `url(${spine})` }" />
      <span
        class="face back"
        :style="{ backgroundImage: `url(${backCover})` }"
      />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// Livro em 3D (capa, lombada e contracapa) que gira ao clicar,
// trazido do Book3D do chblacksmith.com.br
export default defineComponent({
  name: 'Book3D',
  props: {
    cover: { type: String, required: true },
    spine: { type: String, required: true },
    backCover: { type: String, required: true },
    alt: { type: String, default: '' }
  },
  data: () => ({ flipped: false })
})
</script>

<style lang="stylus" scoped>
.book3d
  --book-height 400px
  --book-width calc(var(--book-height) * 0.71)
  --book-depth calc(var(--book-height) * 0.115)
  display inline-flex
  padding 0
  border 0
  background none
  perspective 1200px
  cursor pointer

  &:focus-visible
    outline 2px solid currentColor
    outline-offset 8px

.book
  position relative
  display block
  width var(--book-width)
  height var(--book-height)
  transform-style preserve-3d
  transform rotateY(30deg)
  transition transform 1s ease

  &.flipped
    transform rotateY(150deg)

.face
  position absolute
  top 0
  left 0
  height 100%
  background-size cover
  backface-visibility hidden

.cover
  width 100%
  transform translateZ(calc(var(--book-depth) / 2))
  box-shadow 8px 8px 20px rgba(0, 0, 0, 0.4)

.spine
  width var(--book-depth)
  left calc(var(--book-depth) / -2)
  background-size 100% 100%
  transform rotateY(-90deg)

.back
  width 100%
  transform translateZ(calc(var(--book-depth) / -2)) rotateY(180deg)
  box-shadow -8px 8px 20px rgba(0, 0, 0, 0.4)

@media (prefers-reduced-motion: reduce)
  .book
    transition none
</style>
