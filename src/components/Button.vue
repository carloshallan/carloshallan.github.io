<template>
  <button :class="{ outlined, button: true }" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    click: Function,
    outlined: Boolean,
    href: String,
    target: String
  },
  methods: {
    handleClick(event: MouseEvent) {
      if (this.href) window.open(this.href, this.target || '_blank')
      if (this.click) this.click(event)
    }
  }
})
</script>

<style lang="stylus" scoped>
@import '../styles/default'

button
  display inline-flex
  align-items center
  justify-content center
  gap 10px
  line-height 1.2
  background dark-purple
  border-radius 15px
  border 2px solid green
  text-transform uppercase
  color white
  padding 12px 36px
  font-size 20px
  FiraCode()
  transition 0.3s

  // No MDX, um texto em linha própria dentro do <Button> vira um <p>. As
  // regras globais de parágrafo (`.post p:last-child` dá 40px de margem, e
  // todo `p` ganha padding e outra fonte) deixavam o botão alto, com o texto
  // colado no topo. O `!important` é para vencer essas regras globais, que
  // empatam em especificidade e vêm depois.
  :deep(p)
    margin 0 !important
    padding 0 !important
    font inherit !important
    color inherit !important

  &.outlined
   color green
   background-color transparent

  &:hover
   background-color light-pink
   border-color pink
   cursor pointer

  &.outlined:hover
   color light-pink
   background-color transparent

  @media screen and ({ScreenCondition}: ScreenConditionValue)
    font-size 22px

  @media screen and ({ScreenCondition}: ScreenConditionMobilePortrait)
    font-size 20px
</style>
