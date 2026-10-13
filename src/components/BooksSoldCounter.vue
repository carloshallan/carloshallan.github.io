<template>
  <div class="booksSold" role="img" :aria-label="`${formatted} ${label}`">
    <strong aria-hidden="true">{{ display }}</strong>
    <span aria-hidden="true">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// Atualize aqui conforme as vendas de livros físicos do C.H. Blacksmith
export const BOOKS_SOLD = 1201

const DURATION = 1800

// Conta de 0 até o total de livros vendidos quando o modo escritor abre
export default defineComponent({
  name: 'BooksSoldCounter',
  data: () => ({ current: 0, frame: 0 }),
  computed: {
    formatted(): string {
      return BOOKS_SOLD.toLocaleString(this.$i18n.locale)
    },
    display(): string {
      return Math.round(this.current).toLocaleString(this.$i18n.locale)
    },
    label(): string {
      return this.$t('writer.hero.booksSold')
    }
  },
  mounted() {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (reduced) {
      this.current = BOOKS_SOLD
      return
    }

    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      this.current = BOOKS_SOLD * eased
      if (progress < 1) this.frame = requestAnimationFrame(step)
    }
    this.frame = requestAnimationFrame(step)
  },
  beforeUnmount() {
    cancelAnimationFrame(this.frame)
  }
})
</script>

<style lang="stylus" scoped>
.booksSold
  display flex
  flex-direction column
  align-items center
  gap 4px

  strong
    font-size 96px
    line-height 1
    font-variant-numeric tabular-nums

  span
    font-size 18px
    letter-spacing 0.08em
    text-transform uppercase
    opacity 0.8

  @media (max-width: 600px)
    strong
      font-size 64px

    span
      font-size 15px
</style>
